<template>
  <header class="header">
    <div class="header-decoration">
      <japanese-lantern class="lantern left-lantern" />
      <japanese-lantern class="lantern right-lantern" />
    </div>
    <div class="header-content">
      <div class="title-container">
        <japanese-sake class="sake-decoration" />
        <h1 class="title">大阪京都奈良三日樱花之旅</h1>
        <japanese-sake class="sake-decoration" />
      </div>
      <div class="subtitle">2025年3月20日至23日</div>
    </div>
    <div class="header-pattern"></div>
  </header>
</template>

<script>
import JapaneseLantern from './JapaneseLantern.vue';
import JapaneseSake from './JapaneseSake.vue';

export default {
  name: 'HeaderComponent',
  components: {
    JapaneseLantern,
    JapaneseSake
  }
}
</script>

<style scoped>
.header {
  background-color: var(--sakura-light);
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.lantern {
  position: absolute;
  top: 5px;
}

.left-lantern {
  left: 5%;
}

.right-lantern {
  right: 5%;
}

.header-content {
  position: relative;
  z-index: 2;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.sake-decoration {
  margin: 0 15px;
}

.title {
  color: var(--indigo-blue);
  font-size: 2.2rem;
  margin-bottom: 5px;
}

.subtitle {
  color: var(--matcha-green);
  font-size: 1.2rem;
}

.header-pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10c5.523 0 10-4.477 10-10S5.523 0 0 0v10zm10 0c0 5.523 4.477 10 10 10V10H10z' fill='%23FFB7C5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .sake-decoration {
    margin: 0 5px;
  }
  
  .left-lantern {
    left: 2%;
  }
  
  .right-lantern {
    right: 2%;
  }
}
</style>