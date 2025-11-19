<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { ref } from 'vue';

const email = ref('');
const reason = ref('');
const confirmed = ref(false);

const submitForm = () => {
  if (!confirmed.value) {
    alert('Por favor confirma que deseas eliminar tu cuenta');
    return;
  }

  const subject = 'Solicitud de Eliminación de Cuenta - BiMental';
  const body = `Email: ${email.value}\nMotivo: ${
    reason.value || 'No especificado'
  }`;

  window.location.href = `mailto:jorgemercado@bimental.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};
</script>

<template>
  <header>
    <navbar />
  </header>

  <main class="main-content">
    <div class="delete-account-container">
      <!-- Header Section -->
      <div class="header-section">
        <div class="logo">🗑️</div>
        <h1 class="title">Eliminación de Cuenta - BiMental</h1>
        <p class="subtitle">
          Solicita la eliminación permanente de tu cuenta y datos
        </p>
      </div>

      <!-- Warning Banner -->
      <div class="warning-banner">
        <i class="pi pi-exclamation-triangle"></i>
        <span
          >⚠️ Esta acción es irreversible. Todos tus datos se eliminarán
          permanentemente.</span
        >
      </div>

      <!-- Process Steps -->
      <div class="info-section">
        <h2 class="section-title">
          <i class="pi pi-list"></i>
          Pasos del Proceso
        </h2>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <strong>Completa el formulario</strong> con tu información de
              cuenta
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <strong>Recibirás un email de confirmación</strong> en un plazo de
              24 horas
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <strong>Eliminación completa</strong> de todos tus datos en máximo
              30 días
            </div>
          </div>
        </div>
      </div>

      <!-- Data to be Deleted -->
      <div class="info-section">
        <h2 class="section-title">
          <i class="pi pi-database"></i>
          Datos que se Eliminarán
        </h2>
        <div class="data-list">
          <div class="data-item">
            <i class="pi pi-check-circle"></i>
            <span
              >Información personal (nombre, apellidos, email, teléfono)</span
            >
          </div>
          <div class="data-item">
            <i class="pi pi-check-circle"></i>
            <span>Resultados de todos tus cuestionarios DASS-21</span>
          </div>
          <div class="data-item">
            <i class="pi pi-check-circle"></i>
            <span>Historial de conversaciones con el chatbot</span>
          </div>
          <div class="data-item">
            <i class="pi pi-check-circle"></i>
            <span>Configuraciones y preferencias de la aplicación</span>
          </div>
          <div class="data-item">
            <i class="pi pi-check-circle"></i>
            <span>Datos de autenticación y acceso</span>
          </div>
        </div>
      </div>

      <!-- Request Form -->
      <div class="info-section">
        <h2 class="section-title">
          <i class="pi pi-pencil"></i>
          Formulario de Solicitud
        </h2>
        <form @submit.prevent="submitForm" class="delete-form">
          <div class="form-group">
            <label for="email">
              <i class="pi pi-envelope"></i>
              Correo Electrónico de tu Cuenta *
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="reason">
              <i class="pi pi-comment"></i>
              Motivo de la Eliminación (Opcional)
            </label>
            <textarea
              id="reason"
              v-model="reason"
              rows="3"
              placeholder="¿Por qué deseas eliminar tu cuenta?"
            ></textarea>
          </div>

          <div class="form-group checkbox-group">
            <input type="checkbox" id="confirm" v-model="confirmed" required />
            <label for="confirm">
              Confirmo que comprendo que esta acción es irreversible y deseo
              eliminar permanentemente mi cuenta y todos mis datos asociados en
              la aplicación BiMental.
            </label>
          </div>

          <button type="submit" class="submit-btn">
            <i class="pi pi-send"></i>
            Enviar Solicitud de Eliminación
          </button>
        </form>
      </div>

      <!-- Alternative Contact -->
      <div class="contact-section">
        <h3 class="contact-title">
          <i class="pi pi-phone"></i>
          Contacto Alternativo
        </h3>
        <p>Si tienes problemas con el formulario, envía un email directo a:</p>
        <p class="contact-email">jorgemercado@bimental.com</p>
        <p>
          Incluye en el asunto:
          <strong>"Solicitud de Eliminación de Cuenta - BiMental"</strong>
        </p>
      </div>
    </div>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 120px);
  padding-bottom: 60px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%);
}

.delete-account-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 30px;
}

.header-section .logo {
  font-size: 4rem;
  margin-bottom: 10px;
}

.header-section .title {
  color: #1a119b;
  margin-bottom: 10px;
  font-size: 2.5rem;
}

.header-section .subtitle {
  color: #666;
  font-size: 1.2rem;
}

/* Warning Banner */
.warning-banner {
  background: #ffebee;
  color: #c62828;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
  border-left: 4px solid #c62828;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* Info Sections */
.info-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #14ae5c;
}

.section-title {
  color: #1a119b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
}

/* Steps */
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
}

.step-number {
  background: #1a119b;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

/* Data List */
.data-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.data-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
}

.data-item i {
  color: #14ae5c;
  flex-shrink: 0;
}

/* Form Styles */
.delete-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a119b;
}

.checkbox-group {
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.checkbox-group input {
  width: 20px;
  margin-top: 3px;
  flex-shrink: 0;
}

.checkbox-group label {
  font-weight: normal;
  text-align: left;
}

.submit-btn {
  background: linear-gradient(135deg, #1a119b 0%, #14ae5c 100%);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

/* Contact Section */
.contact-section {
  background: #e3f2fd;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 30px;
}

.contact-title {
  color: #1a119b;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.contact-email {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1a119b;
  margin: 10px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .delete-account-container {
    padding: 20px 15px;
  }

  .header-section .title {
    font-size: 2rem;
  }

  .info-section {
    padding: 20px;
  }

  .step {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .checkbox-group {
    flex-direction: column;
    gap: 10px;
  }

  .checkbox-group label {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .header-section .title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }
}
</style>
