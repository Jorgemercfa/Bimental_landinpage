<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <main class="main-content">
    <h1 class="title">Soporte científico: DASS-21</h1>
    <div class="dass-space">
      <div class="pa-1">
        La evaluación que realiza Bimental está respaldada por el DASS-21
        (Depression, Anxiety and Stress Scales - 21 ítems), una herramienta
        psicológica ampliamente reconocida y validada a nivel internacional.
        Esta escala fue diseñada para medir, de manera específica y
        diferenciada, los niveles de depresión, ansiedad y estrés en personas
        mayores de 16 años. Al integrar este instrumento en nuestra aplicación,
        podemos ofrecer un proceso de evaluación estructurado, breve y
        científicamente fundamentado, que permite generar resultados más
        precisos y coherentes con los estándares clínicos. Esto garantiza que el
        triaje emocional que entregamos tenga un respaldo teórico confiable y
        pueda ser una primera guía para quienes deseen conocer más sobre su
        estado emocional actual.
      </div>
      <div class="pa-2">
        <h3>Explicación sobre qué es el DASS-21</h3>
        <ul>
          <li>Descripción clara, con lenguaje accesible:</li>
          <li>Nombre completo: Depression Anxiety Stress Scales – 21 ítems.</li>
          <li>Desarrollado por: Psychology Foundation of Australia.</li>
          <li>Propósito: medir los niveles de depresión, ansiedad y estrés.</li>
          <li>
            Estructura: 21 preguntas divididas en 3 escalas (7 por cada
            dimensión).
          </li>
          <li>Clasificación de niveles:</li>
          <ol>
            <li>Leve</li>
            <li>Moderado</li>
            <li>Severo</li>
            <li>Extremadamente severo</li>
          </ol>
        </ul>
      </div>
      <div class="pa-3">
        <h3>Cómo se usa en Bimental</h3>
        Bimental presenta las preguntas del DASS-21 mediante un chatbot
        interactivo. Las respuestas del usuario son analizadas por un modelo de
        machine learning, que interpreta los resultados y los clasifica en
        niveles de riesgo emocional. Esto permite entregar un triaje rápido,
        orientativo y respaldado por una escala científica reconocida.
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.main-content {
  min-height: calc(
    100vh - 120px
  ); /* Ajusta según la altura de tu header y footer */
  padding-bottom: 60px; /* Espacio para el footer */
}
.dass-space {
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .dass-space {
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .dass-space {
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a119b;
  text-align: center;
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
  color: #1a119b;
  text-align: justify;
  max-width: 80%;
}

.pa-3 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #1a119b;
  text-align: justify;
  max-width: 80%;
}
</style>
