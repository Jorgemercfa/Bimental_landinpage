<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="function-space">
    <h1 class="title">¿Como funciona?</h1>
    <div class="pa-1">
      La aplicación movil Bimental consiste en un Chatbot en el cual puedes
      interactuar con él para que te pueda dar consejos de salud mental y en
      donde puedes hacer el cuestionario DASS-21, en donde puedes activarlo
      escribiendo en el chat cuestionario y automaticamente se activa el
      cuestionario. Luego de que el usuario haya respondido el cuestionario, el
      usuario puede visualizar los resultados de su evaluación en la vista de
      resultados a la vez que puede ver el historia de resultados de anteriores
      evaluaciones, en donde se le mostrará un triaje que considerará síntomas
      de anciedad, estres y depresión.
    </div>
    <div class="pa-2"></div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
/* Espaciado y formato base */
.function-space {
  height: 36vh;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.pa-2 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: 0xFF1A119B;
  text-align: justify;
  max-width: 80%;
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
