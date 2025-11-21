<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="home-area">
    <h1 class="title-home">Bimental</h1>
    <h3 class="subtitle-home">Evalúa tu salud mental en minutos</h3>
    <div class="home-area">
      <img class="home-image" src="@/assets/homeimg.png" />
      <h3 class="home-description">
        Bimental es una app que te ayuda a identificar niveles de ansiedad,
        depresión y estrés mediante un chatbot inteligente
      </h3>
    </div>
    <div class="download-area">
      <h3 class="subtitle-home">Descarga la app</h3>
      <div class="badges-container">
        <!-- Enlace directo al apk -->
        <a
          href="/downloads/app-release.apk"
          download="Bimental-App.apk"
          class="download-link"
        >
          <img
            src="@/assets/android-direct-badge.png"
            alt="Descargar APK Directo"
            width="200"
            class="store-badge"
          />
        </a>
        <a href="https://play.google.com/store/apps?hl=es_419" target="_blank">
          <img
            src="@/assets/google-play-badge.png"
            alt="Google Play Store"
            width="200"
            class="store-badge"
          />
        </a>
        <!-- <a href="https://apps.apple.com/us/app" target="_blank">
          <img
            src="@/assets/apple-play-badge.png"
            alt="App Store"
            width="200"
            class="store-badge"
          />
        </a> -->
      </div>
      <p class="download-instructions">
        ⬇️ <strong>Descarga Directa:</strong> Instala la app directamente desde
        nuestro sitio web
      </p>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.home-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.download-area {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.badges-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.store-badge {
  max-width: 180px;
  height: auto;
  transition: transform 0.3s ease;
}

.store-badge:hover {
  transform: scale(1.05);
}

.download-link {
  text-decoration: none;
}

.download-instructions {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 10px;
  max-width: 400px;
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
  max-width: 800px;
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
  .store-badge {
    max-width: 150px;
  }
  .download-instructions {
    font-size: 12px;
    padding: 0 20px;
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
  }
  .home-area {
    margin-bottom: 10px;
    padding-bottom: 16px;
  }
  .download-area {
    margin-bottom: 15px;
  }
  .store-badge {
    max-width: 120px;
  }
  .download-instructions {
    font-size: 11px;
    padding: 0 15px;
  }
}
</style>
