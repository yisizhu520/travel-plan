<template>
  <div class="timeline-wrapper">
    <h2 class="timeline-title">行程时间线</h2>
    
    <div class="timeline">
      <div v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="timeline-day">
        <div class="day-header">
          <div class="day-date">{{ day.date }}</div>
          <div class="day-title">{{ day.title }}</div>
        </div>
        
        <div class="day-events">
          <div 
            v-for="(event, eventIndex) in day.events" 
            :key="`${dayIndex}-${eventIndex}`"
            class="timeline-event"
            :class="{ 'event-selected': isEventSelected(event) }"
            @click="handleEventClick(event)"
          >
            <div class="event-time">{{ event.time }}</div>
            <div class="event-dot"></div>
            <div class="event-content">
              <div class="event-title">{{ event.title }}</div>
              <div class="event-description">{{ event.description }}</div>
              
              <div v-if="event.locationId" class="event-actions">
                <el-button 
                  size="small" 
                  type="text" 
                  @click.stop="selectLocation(event.locationId)"
                >
                  <i class="el-icon-location"></i> 查看位置
                </el-button>
              </div>
              
              <div v-if="event.routeId" class="event-actions">
                <el-button 
                  size="small" 
                  type="text" 
                  @click.stop="highlightRoute(event.routeId)"
                >
                  <i class="el-icon-guide"></i> 查看路线
                </el-button>
              </div>
              
              <div v-if="event.tips" class="event-tips">
                <i class="el-icon-info"></i> {{ event.tips }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TimelineComponent',
  props: {
    itinerary: {
      type: Array,
      required: true,
      default: () => [{
        date: '2025年3月20日',
        title: '抵达日',
        events: [
          {
            time: '20:00',
            title: '抵达关西国际机场',
            description: '抵达关西国际机场，准备开始精彩的关西之旅'
          },
          {
            time: '20:30-21:20',
            title: '乘坐HARUKA特急列车',
            description: '乘坐HARUKA特急列车前往大阪市区',
            routeId: 'haruka-route'
          },
          {
            time: '21:30',
            title: '入住酒店',
            description: '入住大阪站/难波站附近酒店',
            locationId: 'osaka-hotel'
          },
          {
            time: '22:00-23:00',
            title: '道顿堀夜宵',
            description: '体验大阪夜生活，品尝道顿堀美食',
            locationId: 'dotonbori',
            tips: '推荐尝试章鱼烧和其他宵夜小吃'
          }
        ]
      },
      {
        date: '2025年3月21日',
        title: '京都赏樱之旅',
        events: [
          {
            time: '07:30-08:00',
            title: '酒店早餐',
            description: '享用酒店早餐'
          },
          {
            time: '08:15-08:45',
            title: '前往京都',
            description: '搭乘JR东海道线前往京都',
            routeId: 'osaka-kyoto-route'
          },
          {
            time: '09:00-10:30',
            title: '二条城参观',
            description: '参观德川幕府的象征建筑，欣赏城内樱花',
            locationId: 'nijo-castle'
          },
          {
            time: '10:50-11:50',
            title: '金阁寺参观',
            description: '参观世界遗产金阁寺，欣赏金色阁楼与庭园',
            locationId: 'kinkakuji'
          },
          {
            time: '12:10-13:10',
            title: '京都料理午餐',
            description: '在四条河原町享用京都特色料理',
            locationId: 'kawaramachi'
          },
          {
            time: '13:30-14:30',
            title: '哲学之道赏樱',
            description: '漫步哲学之道，欣赏樱花美景',
            locationId: 'philosophers-path'
          },
          {
            time: '15:00-17:00',
            title: '清水寺游览',
            description: '参观清水寺及周边二年坂/三年坂',
            locationId: 'kiyomizu-temple'
          },
          {
            time: '18:00-19:30',
            title: '祇园晚餐',
            description: '在祇园享用怀石料理晚餐',
            locationId: 'gion'
          },
          {
            time: '19:45-20:30',
            title: '丸山公园夜樱',
            description: '观赏丸山公园夜樱',
            locationId: 'maruyama-park',
            tips: '视点灯活动情况而定'
          },
          {
            time: '21:00',
            title: '返回大阪',
            description: '返回大阪酒店休息',
            routeId: 'kyoto-osaka-route'
          }
        ]
      },
      {
        date: '2025年3月22日',
        title: '奈良一日游与京都续览',
        events: [
          {
            time: '07:30-08:00',
            title: '酒店早餐',
            description: '享用酒店早餐'
          },
          {
            time: '08:15-09:00',
            title: '前往奈良',
            description: '搭乘近铁前往奈良',
            routeId: 'osaka-nara-route'
          },
          {
            time: '09:15-10:15',
            title: '奈良公园',
            description: '奈良公园喂鹿互动',
            locationId: 'nara-park',
            tips: '可购买鹿仙贝喂食小鹿'
          },
          {
            time: '10:30-12:00',
            title: '东大寺参观',
            description: '参观世界遗产东大寺',
            locationId: 'todaiji'
          },
          {
            time: '12:30-13:30',
            title: '奈良午餐',
            description: '在奈良老城享用柿叶寿司',
            locationId: 'nara-lunch'
          },
          {
            time: '14:00-14:45',
            title: '返回京都',
            description: '返回京都继续观光',
            routeId: 'nara-kyoto-route'
          },
          {
            time: '15:00-16:30',
            title: '岚山赏樱',
            description: '岚山渡月桥及桂川沿岸赏樱',
            locationId: 'arashiyama'
          },
          {
            time: '16:45-17:30',
            title: '天龙寺参观',
            description: '参观世界遗产天龙寺庭园',
            locationId: 'tenryuji'
          },
          {
            time: '18:00-19:30',
            title: '京都站晚餐',
            description: '在京都站享用晚餐',
            locationId: 'kyoto-station'
          },
          {
            time: '20:00',
            title: '返回大阪',
            description: '返回大阪',
            routeId: 'kyoto-osaka-route'
          },
          {
            time: '20:45',
            title: '抵达酒店',
            description: '抵达酒店休息',
            locationId: 'osaka-hotel'
          }
        ]
      },
      {
        date: '2025年3月23日',
        title: '大阪观光与美食',
        events: [
          {
            time: '08:00',
            title: '退房',
            description: '酒店退房/寄存行李'
          },
          {
            time: '08:30-10:30',
            title: '大阪城公园',
            description: '参观大阪城公园及天守阁',
            locationId: 'osaka-castle'
          },
          {
            time: '11:00-12:30',
            title: '道顿堀美食',
            description: '品尝大阪特色美食',
            locationId: 'dotonbori',
            tips: '推荐尝试炸串和章鱼烧'
          },
          {
            time: '13:00-15:00',
            title: '购物时光',
            description: '心斋桥/难波购物',
            locationId: 'shinsaibashi'
          },
          {
            time: '15:30-16:30',
            title: '前往机场',
            description: '前往关西国际机场',
            routeId: 'osaka-kix-route'
          },
          {
            time: '16:30-17:00',
            title: '办理登机',
            description: '机场办理登机手续',
            locationId: 'kix-airport'
          }
        ]
      }]
    }
  },
  emits: ['select-location', 'highlight-route'],
  setup(props, { emit }) {
    const selectedEvent = ref(null);
    
    const selectLocation = (locationId) => {
      emit('select-location', locationId);
    };
    
    const highlightRoute = (routeId) => {
      emit('highlight-route', routeId);
    };
    
    const handleEventClick = (event) => {
      selectedEvent.value = event;
      
      if (event.locationId) {
        selectLocation(event.locationId);
      }
      
      if (event.routeId) {
        highlightRoute(event.routeId);
      }
    };
    
    const isEventSelected = (event) => {
      return selectedEvent.value === event;
    };
    
    return {
      selectLocation,
      highlightRoute,
      handleEventClick,
      isEventSelected
    };
  }
}
</script>

<style scoped>
.timeline-wrapper {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.timeline-title {
  color: var(--indigo-blue);
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Noto Serif JP', serif;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  width: 2px;
  background-color: var(--sakura-pink);
}

.timeline-day {
  margin-bottom: 30px;
}

.day-header {
  margin-bottom: 15px;
  padding-left: 100px;
}

.timeline-event {
  position: relative;
  padding: 10px 10px 10px 110px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.event-time {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9em;
  color: var(--dark-gray);
  width: 60px;
  text-align: right;
}

.event-dot {
  position: absolute;
  left: 71px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid var(--sakura-pink);
  z-index: 1;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 60px;
  }
  
  .day-header {
    padding-left: 80px;
  }
  
  .timeline-event {
    padding-left: 90px;
  }
  
  .event-time {
    position: absolute;
    left: 0;
    width: 50px;
    text-align: right;
  }
  
  .event-dot {
    left: 51px;
  }
}
</style>