<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title-home">Bimental</h1>
  <h3 class="subtitle-home">Evalúa tu salud mental en minutos</h3>
  <div class="home-area">
    <img class="home-image" src="@/assets/homeimg.png" />
    <h3 class="home-description">
      Bimental es una app que te ayuda a identificar niveles de ansiedad,
      depresión y estrés mediante un chatbot inteligente
    </h3>
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

.title-home {
  font-size: 84px;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle-home {
  font-size: 24px;
  margin-bottom: 2px;
  text-align: center;
}

.home-description {
  font-size: 24px;
  margin-top: 100px;
}

.home-image {
  height: 400px;
  border-radius: 10px;
  align-items: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .home-image {
    height: 300px;
  }
}

@media (min-width: 300px) and (max-width: 768px) {
  .home-image {
    height: 200px;
  }
}
</style>
