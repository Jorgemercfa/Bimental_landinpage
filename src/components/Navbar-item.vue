<template>
  <div class="nav">
    <div class="hamburger" @click="toggleMenu">&#9776;</div>
    <div class="link-style" :class="{ 'show-menu': menuOpen }">
      <router-link to="/" class="text-navbar">Inicio</router-link>
      <router-link to="/About-item" class="text-navbar">Acerca de</router-link>
      <router-link to="/Function-item" class="text-navbar"
        >Como funciona</router-link
      >
      <router-link to="/Benefits-item" class="text-navbar"
        >Beneficios</router-link
      >
      <router-link to="/DASS21-item" class="text-navbar">DASS-21</router-link>
      <router-link to="/Delete-account" class="text-navbar"
        >Eliminar Cuenta</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
.nav {
  background-color: #1a119b;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.link-style {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-navbar {
  color: white;
  text-decoration: none;
  padding-right: 20px;
}

.hamburger {
  display: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .link-style {
    display: none;
    flex-direction: column;
    background-color: #0ea722;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .link-style.show-menu {
    display: flex;
  }

  .text-navbar {
    padding: 10px 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
