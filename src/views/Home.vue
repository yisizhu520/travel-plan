<template>
  <div class="home-container">
    <div class="layout-container">
      <div class="timeline-container">
        <timeline-component 
          :itinerary="itinerary" 
          @select-location="selectLocation"
          @highlight-route="highlightRoute"
        />
      </div>
      <div class="map-container">
        <map-component 
          ref="mapComponent"
          :locations="locations" 
          :routes="routes"
          :selectedLocation="selectedLocation"
          :highlightedRoute="highlightedRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import TimelineComponent from '../components/TimelineComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import { itineraryData } from '../data/itinerary';
import { locationsData } from '../data/locations';
import { routesData } from '../data/routes';

export default {
  name: 'Home',
  components: {
    TimelineComponent,
    MapComponent
  },
  setup() {
    const itinerary = ref(itineraryData);
    const locations = ref(locationsData);
    const routes = ref(routesData);
    const selectedLocation = ref(null);
    const highlightedRoute = ref(null);
    const mapComponent = ref(null);

    const selectLocation = (locationId) => {
      selectedLocation.value = locationId;
      
      // 找到对应的位置并居中地图
      const location = locations.value.find(loc => loc.id === locationId);
      if (location && mapComponent.value) {
        mapComponent.value.centerOnLocation(location);
      }
    };

    const highlightRoute = (routeId) => {
      highlightedRoute.value = routeId;
    };

    return {
      itinerary,
      locations,
      routes,
      selectedLocation,
      highlightedRoute,
      mapComponent,
      selectLocation,
      highlightRoute
    };
  }
}
</script>

<style scoped>
.home-container {
  flex: 1;
  padding: 20px;
}

.layout-container {
  display: flex;
  height: calc(100vh - 180px);
  gap: 20px;
}

.timeline-container {
  flex: 1;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-container {
  flex: 2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
    height: auto;
  }
  
  .map-container {
    height: 60vh;
  }
}
</style>