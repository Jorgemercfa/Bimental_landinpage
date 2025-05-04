<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title">Información sobre el DASS-21</h1>
  <div class="dass-space">
    <div class="pa-1">El cuestionario DASS-21</div>
    <div class="pa-2"></div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.dass-space {
  height: 36vh;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .dass-space {
    height: 160vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .dass-space {
    height: 100vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  color: 0xFF1A119B;
  text-align: justify;
  max-width: 80%;
}
</style>
