<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <!-- El contenedor principal hace que el footer se mantenga al fondo -->
  <div class="main-content">
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
  </div>
</template>

<style>
/* Asegura que la app ocupe toda la altura y el footer quede pegado abajo */
body,
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.main-content {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* El footer se mantiene abajo si hay poco contenido */
footer {
  margin-top: auto;
}

/* Estilos originales mejorados */
.home-area {
  margin-top: 2px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-home {
  font-size: 58px;
  margin-bottom: 5px;
  text-align: center;
}

.subtitle-home {
  font-size: 20px;
  margin-bottom: 2px;
  text-align: center;
}

.home-description {
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
  padding: 0 24px;
}

.home-image {
  max-width: 180px;
  width: 60vw;
  min-width: 80px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
}

/* Tablet */
@media (max-width: 1024px) {
  .title-home {
    font-size: 36px;
  }
  .subtitle-home {
    font-size: 16px;
  }
  .home-image {
    max-width: 140px;
    width: 40vw;
  }
  .home-description {
    font-size: 14px;
    margin-top: 20px;
    padding: 0 16px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .title-home {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .subtitle-home {
    font-size: 13px;
    margin-bottom: 8px;
  }
  .home-image {
    max-width: 90vw;
    min-width: 60px;
    width: 60vw;
    margin-top: 10px;
    margin-bottom: 12px;
  }
  .home-description {
    font-size: 12px;
    margin-top: 10px;
    padding: 0 8px;
  }
  .home-area {
    margin-bottom: 10px;
    padding-bottom: 16px;
  }
}
</style>
