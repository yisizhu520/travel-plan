<template>
  <div class="sakura-container" @mousemove="handleMouseMove">
    <div 
      v-for="(petal, index) in petals" 
      :key="index" 
      class="sakura"
      :style="petalStyle(petal)"
      :class="{ 'sakura-smooth': true }"
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <path 
          d="M15 4c2 0 4 1 4 4s-1 4-4 4-4-1-4-4 2-4 4-4zm0 10c2 0 4 1 4 4s-1 4-4 4-4-1-4-4 2-4 4-4zm-8-5c0 2 1 4 4 4s4-1 4-4-1-4-4-4-4 2-4 4zm16 0c0 2-1 4-4 4s-4-1-4-4 1-4-4-4 4 2 4 4z"
          :fill="petal.color"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
  name: 'SakuraAnimation',
  setup() {
    const petals = ref([]);
    const animationInterval = ref(null);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const windStrength = ref(0);
    const windDirection = ref(1);
    
    const colors = [
      '#FFB7C5', // 樱花粉
      '#FFDEE9', // 浅樱花粉
      '#FFD1DC', // 中樱花粉
      '#FFC0CB', // 粉红
      '#FFE4E1'  // 浅玫瑰粉
    ];
    
    // 创建更自然的花瓣
    const createPetal = () => {
      if (petals.value.length >= 50) return;
      
      const size = Math.random() * 0.8 + 0.4;
      const speedX = Math.random() * 2 - 1;
      const initialRotation = Math.random() * 360;
      
      petals.value.push({
        id: Date.now() + Math.random(),
        x: Math.random() * 120 - 10, // 允许在屏幕外生成
        y: -10 - Math.random() * 10, // 在屏幕上方生成
        size,
        speedY: Math.random() * 1 + 0.3, // 降低基础下落速度
        speedX,
        rotation: initialRotation,
        rotationSpeed: (Math.random() * 2 - 1) * (size < 0.6 ? 2 : 1), // 小花瓣旋转更快
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.6,
        amplitude: Math.random() * 4 + 1,
        phase: Math.random() * Math.PI * 2,
        mouseInfluence: Math.random() * 0.4 + 0.1,
        swayFactor: Math.random() * 0.8 + 0.2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        delay: Math.random() * 5, // 添加延迟
        wobble: Math.random() * 0.3 + 0.1, // 摇摆幅度
        wobbleSpeed: Math.random() * 0.05 + 0.02 // 摇摆速度
      });
    };
    
    // 改进的鼠标交互
    const handleMouseMove = (event) => {
      const prevX = mouseX.value;
      mouseX.value = (event.clientX / window.innerWidth) * 100;
      mouseY.value = (event.clientY / window.innerHeight) * 100;
      
      // 计算鼠标移动速度，影响风力
      const mouseDelta = Math.abs(mouseX.value - prevX);
      if (mouseDelta > 2) {
        // 鼠标快速移动时产生风
        windStrength.value = Math.min(mouseDelta * 0.2, 2);
        windDirection.value = mouseX.value > prevX ? 1 : -1;
        
        // 风力逐渐减弱
        setTimeout(() => {
          windStrength.value *= 0.7;
        }, 300);
      }
    };
    
    // 更自然的花瓣更新逻辑
    const updatePetals = () => {
      // 移除超出屏幕的花瓣
      petals.value = petals.value.filter(petal => petal.y < 110 && petal.x > -20 && petal.x < 120);
      
      const time = Date.now() / 1000;
      const naturalWind = Math.sin(time * 0.2) * 0.3; // 自然风效果
      
      petals.value.forEach(petal => {
        // 应用延迟效果
        if (petal.delay > 0) {
          petal.delay -= 0.1;
          return;
        }
        
        // 基础运动 - 更自然的下落速度
        petal.y += petal.speedY * (0.8 + Math.sin(time * 0.5 + petal.phase) * 0.2);
        
        // 复杂的水平运动 - 贝塞尔曲线效果
        const windEffect = (naturalWind + windStrength.value * windDirection.value) * petal.swayFactor;
        const mouseEffect = (mouseX.value - petal.x) * petal.mouseInfluence * 0.02;
        const wobbleEffect = Math.sin(time * petal.wobbleSpeed + petal.phase) * petal.wobble;
        
        // 组合多种效果实现更自然的水平运动
        petal.x += Math.sin(petal.y / 40 + petal.phase) * petal.amplitude * 0.1 + 
                   windEffect + 
                   mouseEffect + 
                   wobbleEffect;
        
        // 渐变透明度 - 更柔和的变化
        const targetOpacity = 0.4 + Math.sin(time * 0.5 + petal.phase) * 0.2;
        petal.opacity = petal.opacity * 0.95 + targetOpacity * 0.05;
        
        // 动态旋转 - 更自然的旋转
        const rotationDelta = petal.rotationSpeed + 
                             Math.sin(time * 0.7 + petal.phase) * 0.5 + 
                             windEffect * 2;
        petal.rotation += rotationDelta;
      });
      
      // 动态调整花瓣生成率
      const spawnRate = 0.2 + Math.sin(time * 0.3) * 0.1 + windStrength.value * 0.1;
      if (Math.random() < spawnRate) {
        createPetal();
      }
    };
    
    // 改进的样式计算 - 优化transform顺序和过渡效果
    const petalStyle = (petal) => {
      return {
        left: `${petal.x}%`,
        top: `${petal.y}%`,
        transform: `
          translate(-50%, -50%)
          rotate(${petal.rotation}deg)
          scale(${petal.size})
        `,
        opacity: petal.opacity,
        transition: 'transform 0.1s linear, opacity 0.5s ease-out',
        animationDuration: `${5 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 3}s`
      };
    };
    
    onMounted(() => {
      // 初始创建更多花瓣
      for (let i = 0; i < 20; i++) {
        createPetal();
      }
      
      // 使用requestAnimationFrame代替setInterval提高性能
      let lastTime = 0;
      const animate = (timestamp) => {
        if (timestamp - lastTime > 16.67) { // 约60fps，提高流畅度
          updatePetals();
          lastTime = timestamp;
        }
        animationInterval.value = requestAnimationFrame(animate);
      };
      
      animationInterval.value = requestAnimationFrame(animate);
    });
    
    onBeforeUnmount(() => {
      if (animationInterval.value) {
        cancelAnimationFrame(animationInterval.value);
      }
    });
    
    return {
      petals,
      petalStyle,
      handleMouseMove
    };
  }
}
</script>

<style scoped>
.sakura-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
}

.sakura {
  position: absolute;
  will-change: transform, opacity;
  transform-origin: center center;
  backface-visibility: hidden;
  filter: drop-shadow(0 0 3px rgba(255, 183, 197, 0.4));
}

.sakura-smooth {
  animation-name: gentle-float;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.4, 0.0, 0.6, 1.0);
}

@keyframes gentle-float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) translateY(2px) translateX(2px) rotate(1deg);
  }
  50% {
    transform: translate(-50%, -50%) translateY(0) translateX(0) rotate(0deg);
  }
  75% {
    transform: translate(-50%, -50%) translateY(-2px) translateX(-2px) rotate(-1deg);
  }
}

@media (max-width: 768px) {
  .sakura-container {
    display: none;
  }
}
</style>