<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="home-area">
    <h1>Bimental</h1>
    <img class="home-image" src="@/assets/homeimg.png" />
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.home-area {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-image {
  width: 600px;
  height: 600px;
  border-radius: 10px;
  align-items: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .home-image {
    height: 500px;
  }
}

@media (min-width: 300px) and (max-width: 768px) {
  .home-image {
    height: 400px;
  }
}
</style>
