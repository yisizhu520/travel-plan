<template>
  <footer class="footer">
    <!-- <div class="footer-decoration">
      <japanese-lantern class="footer-lantern left-lantern" :swing="false" />
      <japanese-sake class="footer-sake" />
      <japanese-lantern class="footer-lantern right-lantern" :swing="false" />
    </div> -->
    <div class="bamboo-pattern"></div>
    <div class="footer-content">
      <p>© 2024 樱花之旅规划 | 行程规划于 {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
import JapaneseLantern from './JapaneseLantern.vue';
import JapaneseSake from './JapaneseSake.vue';

export default {
  name: 'FooterComponent',
  components: {
    JapaneseLantern,
    JapaneseSake
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #4a3b52, #5d4b6a);
  color: white;
  padding: 25px 15px 15px;
  text-align: center;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1);
}

.footer-decoration {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.footer-lantern {
  transform: scale(0.7);
  opacity: 0.8;
}

.footer-sake {
  transform: scale(0.8);
  opacity: 0.8;
}

.bamboo-pattern {
  height: 10px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='10' viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L2 0 L2 10 L0 10 Z M6 0 L8 0 L8 10 L6 10 Z M12 0 L14 0 L14 10 L12 10 Z M18 0 L20 0 L20 10 L18 10 Z' fill='%23F5F2E9' fill-opacity='0.2'/%3E%3C/svg%3E");
  margin-bottom: 10px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>