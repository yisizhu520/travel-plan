<template>
  <div class="app-container japanese-pattern">
    <header-component />
    <router-view />
    <footer-component />
    <sakura-animation />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SakuraAnimation from './components/SakuraAnimation.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SakuraAnimation
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>