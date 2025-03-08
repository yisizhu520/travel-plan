<template>
  <div class="lantern-container">
    <svg class="lantern" :class="{ 'lantern-swing': swing }" width="40" height="60" viewBox="0 0 40 60">
      <!-- 灯笼顶部 -->
      <path d="M18 0 L22 0 L22 5 L18 5 Z" fill="#8B4513" />
      <!-- 灯笼绳子 -->
      <path d="M20 5 L20 10" stroke="#8B4513" stroke-width="1" />
      <!-- 灯笼主体 -->
      <ellipse cx="20" cy="20" rx="15" ry="10" fill="#FF4500" />
      <ellipse cx="20" cy="40" rx="15" ry="10" fill="#FF4500" />
      <!-- 灯笼中间部分 -->
      <rect x="5" y="20" width="30" height="20" fill="#FF4500" />
      <!-- 灯笼装饰线条 -->
      <path d="M5 20 L35 20" stroke="#FFD700" stroke-width="1" />
      <path d="M5 30 L35 30" stroke="#FFD700" stroke-width="1" />
      <path d="M5 40 L35 40" stroke="#FFD700" stroke-width="1" />
      <!-- 灯笼底部装饰 -->
      <path d="M20 50 L15 55 L25 55 Z" fill="#FFD700" />
      <!-- 灯笼文字 -->
      <text x="20" y="30" font-size="8" text-anchor="middle" fill="#FFD700">福</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'JapaneseLantern',
  props: {
    swing: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.lantern-container {
  display: inline-block;
}

.lantern {
  filter: drop-shadow(0 0 5px rgba(255, 69, 0, 0.5));
}

.lantern-swing {
  transform-origin: top center;
  animation: swing 3s ease-in-out infinite;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
}

@media (max-width: 768px) {
  .lantern {
    width: 30px;
    height: 45px;
  }
}
</style>