<script setup>
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="footer-area">
    <div class="contact-area">
      <h4 class="titile-footer">Contacto</h4>
      <div class="footer-text">
        <div>serviciocliente@bimental.com</div>
      </div>
    </div>
    <div class="social-media">
      <h4 class="titile-footer">Redes Sociales</h4>
      <div class="social-media2">
        <div>
          <a href=""><i class="pi pi-facebook icon"></i></a>
        </div>
        <div>
          <a href=""><i class="pi pi-instagram icon"></i></a>
        </div>
        <div>
          <a href=""><i class="pi pi-youtube icon"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-area {
  background-color: #000000;
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
}

.contact-area {
  padding-left: 3%;
}

.titile-footer {
  color: white;
  padding-top: 10px;
}

.footer-text {
  padding-bottom: 50px;
  color: white;
}

.social-media {
  padding-right: 3%;
}

.social-media2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

/* Esta clase ahora SÓLO aplica en este componente gracias a scoped */
.pi {
  font-size: 2rem;
  color: #ffffffff;
}
</style>
