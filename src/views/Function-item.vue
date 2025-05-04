<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <main class="main-content">
    <h1 class="title">¿Como funciona?</h1>
    <div class="function-space">
      <div class="pa-1">
        Descubre cómo Bimental te acompaña en el reconocimiento de tu estado
        emocional a través de un proceso simple, guiado y completamente
        confidencial. Desde el primer contacto con nuestro chatbot, la
        aplicación te orienta mediante una breve evaluación basada en el
        cuestionario DASS-21. Las respuestas que brindes se analizarán con
        inteligencia artificial para identificar posibles niveles de ansiedad,
        depresión y estrés, ayudándote a comprender mejor tu salud mental. Todo
        en pocos pasos, sin juicios y respetando tu privacidad.
      </div>
      <table class="modern-table">
        <tr>
          <td><i class="pi pi-comment icon"></i></td>
          <td class="title-cell">Inicia una conversación</td>
          <td>
            El usuario accede al chatbot y comienza una charla amigable para
            iniciar su evaluación.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-list icon"></i></td>
          <td class="title-cell">Realiza la evaluación DASS-21</td>
          <td>
            Para activar la evaluación DASS-21 escribe en el chat la palabra
            cuestionario.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-file-edit icon"></i></td>
          <td class="title-cell">Análisis por IA</td>
          <td>
            Las respuestas son procesadas por un modelo de machine learning para
            identificar síntomas.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-chart-line icon"></i></td>
          <td class="title-cell">Triaje emocional personalizado</td>
          <td>
            El sistema clasifica los resultados en niveles: leve, moderado,
            severo o extremadamente severo.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-folder icon"></i></td>
          <td class="title-cell">Almacenamiento seguro</td>
          <td>
            Los resultados se guardan de forma segura para generar reportes y
            monitorear casos críticos.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-exclamation-triangle icon"></i></td>
          <td class="title-cell">Advertencia y orientación</td>
          <td>
            Se informa que los resultados no reemplazan un diagnóstico médico, y
            se sugiere acudir a un profesional si es necesario.
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

.function-space {
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

h1.title {
  text-align: center;
  margin-bottom: 30px;
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

.pi {
  font-size: 2rem;
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
/* Diseño responsive */
@media (min-width: 768px) and (max-width: 1024px) {
  .function-space {
    height: 100vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1.title {
    font-size: 36px;
  }
}

@media (max-width: 480px) {
  h1.title {
    font-size: 24px;
  }
}
</style>
