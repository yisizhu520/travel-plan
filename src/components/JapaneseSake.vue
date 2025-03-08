<template>
  <div class="sake-container">
    <svg class="sake-set" width="60" height="40" viewBox="0 0 60 40">
      <!-- 酒瓶 -->
      <path d="M15 5 L20 5 L23 15 L23 35 L12 35 L12 15 Z" fill="#F5F2E9" stroke="#1A535C" stroke-width="1" />
      <!-- 酒瓶装饰 -->
      <path d="M12 20 L23 20" stroke="#1A535C" stroke-width="1" />
      <path d="M15 25 L20 25" stroke="#1A535C" stroke-width="1" />
      <!-- 酒杯 -->
      <ellipse cx="40" cy="30" rx="8" ry="4" fill="#F5F2E9" stroke="#1A535C" stroke-width="1" />
      <path d="M32 30 L48 30" stroke="#1A535C" stroke-width="1" />
      <path d="M36 30 C36 25, 44 25, 44 30" stroke="#1A535C" stroke-width="1" fill="none" />
      <!-- 酒液 -->
      <ellipse cx="40" cy="28" rx="5" ry="2" fill="#FFB7C5" opacity="0.7" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'JapaneseSake'
}
</script>

<style scoped>
.sake-container {
  display: inline-block;
  margin: 0 10px;
}

.sake-set {
  filter: drop-shadow(0 0 2px rgba(26, 83, 92, 0.3));
}

@media (max-width: 768px) {
  .sake-set {
    width: 45px;
    height: 30px;
  }
}
</style>