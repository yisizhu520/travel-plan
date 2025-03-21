<template>
  <div class="map-wrapper">
    <div id="map" class="map-container"></div>
    <div class="map-controls">
      <div class="search-box">
        <el-input
          v-model="searchQuery"
          size="small"
          placeholder="搜索地点..."
          @input="handleSearch"
          clearable
        >
          <template #prefix>
            <i class="el-icon-search"></i>
          </template>
        </el-input>
        <div v-if="searchResults.length > 0" class="search-results">
          <div
            v-for="result in searchResults"
            :key="result.place_id"
            class="search-result-item"
            @click="handleSelectLocation(result)"
          >
            <i class="el-icon-location-information"></i>
            <span>{{ result.display_name }}</span>
          </div>
        </div>
      </div>
      <el-button size="small" type="primary" @click="showAllLocations">
        <i class="el-icon-full-screen"></i> 显示全部
      </el-button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, defineExpose } from 'vue';
import L from 'leaflet';
import 'leaflet-routing-machine';

export default {
  name: 'MapComponent',
  props: {
    locations: {
      type: Array,
      required: true
    },
    routes: {
      type: Array,
      required: true
    },
    selectedLocation: {
      type: String,
      default: null
    },
    highlightedRoute: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const map = ref(null);
    const markers = ref({});
    const routeLines = ref({});
    const routeControls = ref({});
    const searchQuery = ref('');
    const searchResults = ref([]);
    const searchMarker = ref(null);
    
    // 自定义图标
    const createCustomIcon = (type) => {
      // 根据类型设置不同的颜色
      const iconColors = {
        'hotel': '#4A7BB7',
        'attraction': '#FF5252',
        'restaurant': '#FFC107',
        'transport': '#4CAF50',
        'default': '#9C27B0'
      };
      
      return L.divIcon({
        className: `custom-div-icon ${type}-icon`,
        html: `<div style="background-color: ${iconColors[type] || iconColors.default};" class="marker-pin"></div>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
      });
    };
    
    // 初始化地图
    const initMap = () => {
      // 设置日本关西地区为中心
      map.value = L.map('map').setView([34.6937, 135.5022], 10);
      
      // 添加地图图层
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);
      
      // 添加所有位置标记
      addAllMarkers();
      
      // 添加所有路线
      addAllRoutes();
    };
    
    // 添加所有标记
    const addAllMarkers = () => {
      props.locations.forEach(location => {
        const marker = L.marker(
          [location.lat, location.lng],
          { icon: createCustomIcon(location.type) }
        ).addTo(map.value);
        
        // 添加弹出信息
        marker.bindPopup(`
          <div class="popup-content">
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            ${location.tips ? `<p class="tips"><strong>小贴士:</strong> ${location.tips}</p>` : ''}
          </div>
        `);
        
        markers.value[location.id] = marker;
      });
    };
    
    // 添加所有路线
    const addAllRoutes = () => {
      props.routes.forEach(route => {
        const startLocation = props.locations.find(loc => loc.id === route.from);
        const endLocation = props.locations.find(loc => loc.id === route.to);
        
        if (startLocation && endLocation) {
          // 创建路线控制
          const routingControl = L.Routing.control({
            waypoints: [
              L.latLng(startLocation.lat, startLocation.lng),
              L.latLng(endLocation.lat, endLocation.lng)
            ],
            lineOptions: {
              styles: [{ color: '#6FA1EC', weight: 4, opacity: 0.7 }],
              extendedTags: route.id
            },
            routeWhileDragging: false,
            showAlternatives: false,
            fitSelectedRoutes: false,
            show: false,
            createMarker: function() { return null; }
          }).addTo(map.value);
          
          // 为路线添加点击事件
          routingControl.on('routeselected', function(e) {
            const line = e.route.routeLine;
            line.on('click', function() {
              highlightRoute(route.id);
            });
            line.on('mouseover', function() {
              if (!props.highlightedRoute || props.highlightedRoute !== route.id) {
                this.setStyle({ color: '#FF5252', weight: 6, opacity: 0.9 });
              }
            });
            line.on('mouseout', function() {
              if (!props.highlightedRoute || props.highlightedRoute !== route.id) {
                this.setStyle({ color: '#6FA1EC', weight: 4, opacity: 0.7 });
              }
            });
          });
          
          routeControls.value[route.id] = routingControl;
        }
      });
    };
    // 高亮显示路线
    const highlightRoute = (routeId) => {
      // 重置所有路线样式
      Object.values(routeControls.value).forEach(control => {
        if (control._selectedRoute) {
          control._selectedRoute.routeLine.setStyle({
            color: '#6FA1EC',
            weight: 4,
            opacity: 0.7
          });
        }
      });
      
      // 高亮选中的路线
      const control = routeControls.value[routeId];
      if (control && control._selectedRoute) {
        control._selectedRoute.routeLine.setStyle({
          color: '#FF5252',
          weight: 6,
          opacity: 0.9
        });
        
        // 获取路线的边界并缩放地图
        const coordinates = control._selectedRoute.coordinates;
        if (coordinates && coordinates.length > 0) {
          const bounds = L.latLngBounds(coordinates);
          map.value.fitBounds(bounds, { padding: [50, 50] });
        }
      }
    };
    
    // 居中到指定位置
    const centerOnLocation = (location) => {
      if (!map.value || !location) return;
      
      map.value.setView([location.lat, location.lng], 15);
      
      // 打开标记的弹出窗口
      const marker = markers.value[location.id];
      if (marker) {
        marker.openPopup();
      }
    };
    
    // 显示所有位置
    const showAllLocations = () => {
      if (!map.value || props.locations.length === 0) return;
      
      const bounds = L.latLngBounds(props.locations.map(loc => [loc.lat, loc.lng]));
      map.value.fitBounds(bounds, { padding: [50, 50] });
    };
    
    // 监听选中的位置变化
    watch(() => props.selectedLocation, (newLocationId) => {
      if (newLocationId) {
        const location = props.locations.find(loc => loc.id === newLocationId);
        if (location) {
          centerOnLocation(location);
        }
      }
    });
    
    // 监听高亮的路线变化
    watch(() => props.highlightedRoute, (newRouteId) => {
      if (newRouteId) {
        highlightRoute(newRouteId);
      }
    });
    
    onMounted(() => {
      initMap();
    });
    
    // 暴露方法给父组件
    defineExpose({
      centerOnLocation,
      showAllLocations
    });
    
    // 处理搜索输入
    const handleSearch = async () => {
      if (!searchQuery.value || searchQuery.value.length < 2) {
        searchResults.value = [];
        return;
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery.value)}&viewbox=134.5,35.5,136.5,34&bounded=1`
        );
        const data = await response.json();
        searchResults.value = data.slice(0, 5);
      } catch (error) {
        console.error('搜索地点时出错:', error);
        searchResults.value = [];
      }
    };

    // 处理地点选择
    const handleSelectLocation = (location) => {
      const lat = parseFloat(location.lat);
      const lng = parseFloat(location.lon);

      // 清除之前的搜索标记
      if (searchMarker.value) {
        map.value.removeLayer(searchMarker.value);
      }

      // 添加新的搜索标记
      searchMarker.value = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'custom-div-icon search-icon',
          html: '<div style="background-color: #9C27B0;" class="marker-pin"></div>',
          iconSize: [30, 42],
          iconAnchor: [15, 42],
          popupAnchor: [0, -42]
        })
      }).addTo(map.value);

      // 添加弹出信息
      searchMarker.value.bindPopup(
        `<div class="popup-content">
          <h3>搜索位置</h3>
          <p>${location.display_name}</p>
        </div>`
      ).openPopup();

      // 将地图中心设置到选中的位置
      map.value.setView([lat, lng], 15);

      // 清空搜索结果
      searchResults.value = [];
      searchQuery.value = '';
    };

    return {
      searchQuery,
      searchResults,
      handleSearch,
      handleSelectLocation,
      showAllLocations
    };
  }
}
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.map-container {
  width: 100%;
  height: 100%;
}

.map-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

:deep(.custom-div-icon) {
  background: none;
  border: none;
}

:deep(.marker-pin) {
  width: 24px;
  height: 24px;
  border-radius: 50% 50% 50% 0;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.marker-pin::after) {
  content: '';
  width: 18px;
  height: 18px;
  margin: 3px 0 0 3px;
  background: #fff;
  position: absolute;
  border-radius: 50%;
}

:deep(.popup-content) {
  padding: 10px;
}

:deep(.popup-content h3) {
  margin: 0 0 8px 0;
  font-size: 16px;
}

:deep(.popup-content p) {
  margin: 5px 0;
  font-size: 14px;
}

:deep(.popup-content .tips) {
  color: #666;
  font-style: italic;
}
:deep(.hotel-icon .marker-pin) {
  background-color: #4A7BB7;
}

:deep(.restaurant-icon .marker-pin) {
  background-color: #FFC107;
}

:deep(.transport-icon .marker-pin) {
  background-color: #4CAF50;
}

:deep(.attraction-icon .marker-pin) {
  background-color: #FF5252;
}

.search-box {
  margin-bottom: 10px;
  position: relative;
  width: 250px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}

.search-result-item {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.search-result-item:hover {
  background-color: #f5f7fa;
}

.search-result-item i {
  color: #409EFF;
}

:deep(.search-icon .marker-pin) {
  background-color: #9C27B0;
}
</style>