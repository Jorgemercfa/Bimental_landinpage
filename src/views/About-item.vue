<script setup>
import 'primeicons/primeicons.css';
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <main class="main-content">
    <h1 class="title">Acerca de la aplicación</h1>
    <div class="about-space">
      <div class="pa-1">
        Bimental es una aplicación móvil orientada al apoyo en la salud mental,
        que integra un chatbot inteligente capaz de guiar a los usuarios a
        través de una evaluación emocional basada en el cuestionario DASS-21.
        Durante la conversación, el chatbot presenta una serie de preguntas
        estructuradas que permiten detectar posibles signos de depresión,
        ansiedad y estrés. Las respuestas son procesadas por un modelo de
        machine learning entrenado para realizar un triaje emocional,
        clasificando los síntomas en cuatro niveles: leve, moderado, severo o
        extremadamente severo. Esta evaluación constituye un prediagnóstico y
        tiene como objetivo brindar una orientación inicial sobre el estado
        emocional del usuario. Los resultados obtenidos se almacenan en una base
        de datos segura, permitiendo que el administrador de la aplicación
        genere reportes periódicos, identifique tendencias y dé seguimiento a
        los casos que presentan niveles críticos, promoviendo una acción
        oportuna. Bimental busca ser una herramienta preventiva, accesible y
        confiable para contribuir al bienestar emocional de las personas.
        Resultados de la evaluación: Nivel de depresión, ansiedad y estrés según
        el procesamiento del modelo de Machine Learning. Los resultados son
        aproximados y no constituyen un diagnóstico médico profesional
      </div>
      <table class="modern-table">
        <tr>
          <td><i class="pi pi-comments icon"></i></td>
          <td class="title-cell">Chatbot amigable</td>
          <td>Conversa contigo para entender tu estado emocional.</td>
        </tr>
        <tr>
          <td><i class="pi pi-check icon"></i></td>
          <td class="title-cell">Evaluación prediagnóstica</td>
          <td>
            Basada en el cuestionario DASS-21 para identificar posibles signos
            de depresión, ansiedad y estrés.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-chart-bar icon"></i></td>
          <td class="title-cell">Triaje con machine learning</td>
          <td>
            Clasificación automática de los síntomas en niveles: leve, moderado,
            severo o extremadamente severo.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-lock icon"></i></td>
          <td class="title-cell">Datos seguros y confidenciales</td>
          <td>
            Almacenamiento cifrado de resultados para análisis y reportes
            administrativos.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-exclamation-triangle icon"></i></td>
          <td class="title-cell">Advertencia profesional</td>
          <td>
            Los resultados son aproximados y no reemplazan una evaluación médica
            profesional.
          </td>
        </tr>
      </table>
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

.about-space {
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .about-space {
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .about-space {
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
  margin: 20px 0;
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

.modern-table {
  width: 90%;
  max-width: 1000px;
  border-collapse: separate;
  border-spacing: 0 15px;
  margin: 20px auto;
  font-family: 'Segoe UI', sans-serif;
}

.modern-table td {
  background-color: #f9f9ff;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(26, 17, 155, 0.1);
  vertical-align: middle;
}

.modern-table .icon {
  font-size: 2rem;
  color: #1a119b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

.title-cell {
  font-weight: 600;
  color: #1a119b;
}

@media (max-width: 768px) {
  .modern-table td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .modern-table tr {
    display: block;
    margin-bottom: 20px;
  }

  .modern-table .icon {
    margin-bottom: 10px;
  }
}

.pi {
  font-size: 2rem;
  color: #1a119b;
}

footer {
  position: relative;
  width: 100%;
  bottom: 0;
}
</style>
