<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <main class="main-content">
    <h1 class="title">Beneficios</h1>
    <div class="benefits-space">
      <div class="pa-1">
        Bimental no es solo una herramienta tecnológica, es un acompañamiento
        pensado para ayudarte a comprender y cuidar tu salud mental. Con una
        experiencia accesible, segura y basada en inteligencia artificial,
        nuestra app se convierte en un aliado confiable que te orienta de forma
        empática y personalizada. Estos son algunos de los beneficios que hacen
        de Bimental una opción efectiva para dar el primer paso hacia tu
        bienestar emocional.
      </div>
      <table class="modern-table">
        <tr>
          <td><i class="pi pi-clock icon"></i></td>
          <td class="title-cell">Evaluación rápida</td>
          <td>Solo necesitas unos minutos para conocer tu estado emocional.</td>
        </tr>
        <tr>
          <td><i class="pi pi-comments icon"></i></td>
          <td class="title-cell">Interacción amigable</td>
          <td>
            Chatbot diseñado para conversar de forma natural y sin juicios.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-cog icon"></i></td>
          <td class="title-cell">Tecnología con propósito</td>
          <td>
            Usa inteligencia artificial para ofrecer orientación basada en
            evidencia.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-chart-bar icon"></i></td>
          <td class="title-cell">Resultados personalizados</td>
          <td>
            Recibes un triaje emocional con niveles claros: leve, moderado,
            severo o extremadamente severo.
          </td>
        </tr>
        <tr>
          <td><i class="pi pi-lock icon"></i></td>
          <td class="title-cell">Confidencialidad garantizada</td>
          <td>Tus respuestas y resultados se almacenan de forma segura.</td>
        </tr>
        <tr>
          <td><i class="pi pi-chart-line icon"></i></td>
          <td class="title-cell">Seguimiento para intervención</td>
          <td>
            Los resultados permiten generar reportes para identificar casos
            críticos y actuar a tiempo.
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

.benefits-space {
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
  .benefits-space {
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
