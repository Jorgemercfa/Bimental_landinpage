<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title">Beneficios para el usuario</h1>
  <div class="benefits-space">
    <div class="pa-1">
      Los beneficioens que la aplicación movil Bimental , que integre un
      Chatbot, el cual gestionará las evaluaciones a los que se sometan los
      usuarios, a fin de detectar posibles rasgos de ansiedad, depresión y
      estrés, dando por resultado un triaje que considerará síntomas de nivel
      bajo, medio, o grave en cada uno de estos trastornos mentales que el
      modelo de Machine Learning haya detectado (orientadas en según el
      cuestionario DASS-21), serán procesadas por el modelo de Machine Learning,
      para luego comunicar los resultados obtenidos del triaje realizado. En
      donde los resultados se almacenarán en una base de datos para que el
      administrador de la aplicación móvil pueda generar reportes de monitoreo
      periódicos, a fin de conocer y tomar acción sobre los casos de detección
      de síntomas severos.
    </div>
    <div class="pa-2"></div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style>
/* Estilos generales */
.title-autor {
  text-align: center;
  margin: 20px;
}

.benefits-space {
  height: 36vh;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pa-1 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #1a119b;
  text-align: justify;
  max-width: 80%;
}

.pa-2 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: 0xFF1A119B;
  text-align: justify;
  max-width: 80%;
}

@media (max-width: 768px) {
  .benefits-space {
    height: 160vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .benefits-space {
    height: 100vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
