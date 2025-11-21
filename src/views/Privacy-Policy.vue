<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <main class="main-content">
    <h1 class="title">Política de Privacidad</h1>
    <div class="privacy-space">
      <div class="pa-1">
        Esta Política de Privacidad describe cómo BiMental recopila, usa, almacena, protege y comparte 
        la información de los usuarios en relación con la evaluación aproximada de los niveles de 
        depresión, ansiedad y estrés basada en el cuestionario DASS-21.
      </div>

      <!-- Sección 1: Introducción -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-info-circle icon"></i>
          1. Introducción
        </h2>
        <div class="section-content">
          <p>
            Esta Política de Privacidad describe cómo nuestra aplicación móvil recopila, usa, almacena, 
            protege y comparte la información de los usuarios en relación con la evaluación aproximada 
            de los niveles de depresión, ansiedad y estrés basada en el cuestionario DASS-21. El uso de 
            la Aplicación está sujeto a la aceptación de esta política.
          </p>
        </div>
      </div>

      <!-- Sección 2: Información Recopilada -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-database icon"></i>
          2. Información Recopilada
        </h2>
        <div class="section-content">
          <div class="info-item">
            <i class="pi pi-user"></i>
            <div>
              <strong>Datos personales para la cuenta:</strong> Para crear una cuenta y utilizar la evaluación, 
              se solicitará su nombre y correo electrónico. El proporcionar esta información es necesario 
              para el funcionamiento básico de la aplicación.
            </div>
          </div>
          <div class="info-item">
            <i class="pi pi-comment"></i>
            <div>
              <strong>Respuestas al cuestionario DASS-21:</strong> Datos ingresados por el usuario durante la evaluación.
            </div>
          </div>
          <div class="info-item">
            <i class="pi pi-chart-bar"></i>
            <div>
              <strong>Resultados de la evaluación:</strong> Nivel de depresión, ansiedad y estrés según el 
              procesamiento del modelo de Machine Learning. Estos resultados son estrictamente aproximados 
              y no constituyen bajo ningún concepto un diagnóstico médico profesional.
            </div>
          </div>
          <div class="info-item">
            <i class="pi pi-chart-line"></i>
            <div>
              <strong>Datos de actividad:</strong> Registros de uso de la Aplicación con fines de mantenimiento 
              y mejora técnica.
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 3: Decisiones Automatizadas -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-cog icon"></i>
          3. Decisiones Automatizadas
        </h2>
        <div class="section-content">
          <p>
            Nuestra aplicación utiliza un modelo de Machine Learning entrenado con un conjunto de datos 
            sintéticos diseñados para reconocer patrones relacionados con la escala DASS-21.
          </p>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="pi pi-heart"></i>
              <div>
                <strong>Depresión:</strong> presencia de sentimientos de tristeza, falta de interés, 
                agotamiento, sensación de inutilidad o desesperanza.
              </div>
            </div>
            <div class="feature-item">
              <i class="pi pi-bolt"></i>
              <div>
                <strong>Ansiedad:</strong> nerviosismo frecuente, dificultad para relajarse, tensión 
                muscular, preocupación excesiva o miedo anticipado.
              </div>
            </div>
            <div class="feature-item">
              <i class="pi pi-exclamation-triangle"></i>
              <div>
                <strong>Estrés:</strong> dificultad para concentrarse, irritabilidad, sensación de 
                sobrecarga, impaciencia o problemas para descansar adecuadamente.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 4: Propósitos del Uso -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-bullseye icon"></i>
          4. Propósitos del Uso de la Información
        </h2>
        <div class="section-content">
          <div class="purpose-item">
            <div class="purpose-header">🎯 Finalidad Esencial</div>
            <p>Procesar las respuestas al DASS-21 suministradas y generar resultados de triaje aproximados.</p>
          </div>
          <div class="purpose-item">
            <div class="purpose-header">📞 Finalidades No Esenciales</div>
            <p>Contacto proactivo y recomendaciones basadas en sus resultados (requieren consentimiento explícito).</p>
          </div>
          <div class="purpose-item">
            <div class="purpose-header">⚙️ Finalidades Operativas</div>
            <p>Mejorar la funcionalidad, seguridad y experiencia de usuario de la Aplicación.</p>
          </div>
        </div>
      </div>

      <!-- Sección 5: Compartición de Datos -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-share-alt icon"></i>
          5. Compartición y Transferencia de Datos
        </h2>
        <div class="section-content">
          <p><strong>La información recopilada no será compartida con terceros, salvo en los siguientes casos:</strong></p>
          <div class="sharing-list">
            <div class="sharing-item">
              <i class="pi pi-check"></i>
              <span>Con su consentimiento explícito para finalidades específicas</span>
            </div>
            <div class="sharing-item">
              <i class="pi pi-check"></i>
              <span>Transferencias a Proveedores de Servicio bajo estrictos contratos de confidencialidad</span>
            </div>
            <div class="sharing-item">
              <i class="pi pi-check"></i>
              <span>Cuando sea requerido por ley o autoridad competente</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 6: Almacenamiento y Seguridad -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-lock icon"></i>
          6. Almacenamiento y Seguridad
        </h2>
        <div class="section-content">
          <p>
            Tomamos medidas de seguridad técnicas y organizativas adecuadas para proteger la información 
            del usuario contra accesos no autorizados. La información se almacena en servidores seguros 
            con tecnologías de cifrado (en tránsito y en reposo) y acceso restringido y auditado.
          </p>
        </div>
      </div>

      <!-- Sección 7: Derechos del Usuario -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-shield icon"></i>
          7. Derechos del Usuario
        </h2>
        <div class="section-content">
          <div class="rights-grid">
            <div class="right-item">
              <i class="pi pi-eye"></i>
              <span>Acceso a sus datos</span>
            </div>
            <div class="right-item">
              <i class="pi pi-pencil"></i>
              <span>Rectificación</span>
            </div>
            <div class="right-item">
              <i class="pi pi-trash"></i>
              <span>Eliminación</span>
            </div>
            <div class="right-item">
              <i class="pi pi-ban"></i>
              <span>Oposición</span>
            </div>
            <div class="right-item">
              <i class="pi pi-download"></i>
              <span>Portabilidad</span>
            </div>
            <div class="right-item">
              <i class="pi pi-times"></i>
              <span>Revocación</span>
            </div>
          </div>
          <p class="contact-note">
            Para ejercer estos derechos, contacte a: 
            <strong>equiposoporte@bimental.com</strong>
          </p>
        </div>
      </div>

      <!-- Sección 8: Responsable -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-building icon"></i>
          8. Responsable del Tratamiento
        </h2>
        <div class="section-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="pi pi-briefcase"></i>
              <div>
                <strong>Razón Social:</strong> Bimental S.A.C.
              </div>
            </div>
            <div class="contact-item">
              <i class="pi pi-id-card"></i>
              <div>
                <strong>RUC:</strong> 36546858374
              </div>
            </div>
            <div class="contact-item">
              <i class="pi pi-envelope"></i>
              <div>
                <strong>Contacto:</strong> contacto@bimental.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 9: Conservación de los Datos -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-clock icon"></i>
          9. Conservación de los Datos
        </h2>
        <div class="section-content">
          <p>
            Los datos personales de los usuarios serán conservados mientras la aplicación se mantenga 
            en uso, salvo que exista un procedimiento administrativo o proceso judicial pendiente sobre 
            los derechos de usuario sobre sus datos o ante indicios de fraude.
          </p>
          <p>
            Se conservarán los datos para finalidades de recomendación y de contacto con profesionales 
            de la salud hasta por el plazo de 3 meses, siempre que haya mediado consentimiento previo 
            por parte del usuario titular de los datos.
          </p>
        </div>
      </div>

      <!-- Sección 10: Cambios en la Política -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-sync icon"></i>
          10. Cambios en la Política de Privacidad
        </h2>
        <div class="section-content">
          <p>
            Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier cambio 
            sustancial será notificado a los usuarios mediante la Aplicación o a través del correo 
            electrónico proporcionado, dándole la oportunidad de revisar y aceptar los nuevos términos 
            antes de que entren en efecto.
          </p>
        </div>
      </div>

      <!-- Sección 11: Información Adicional -->
      <div class="privacy-section">
        <h2 class="section-title">
          <i class="pi pi-question-circle icon"></i>
          11. Información Adicional
        </h2>
        <div class="section-content">
          <p>
            Si tienes preguntas sobre esta política, puedes contactarnos a través de 
            <strong>serviciocliente@bimental.com</strong>.
          </p>
        </div>
      </div>

      <!-- Sección de Eliminación de Datos -->
      <div class="privacy-section highlight-section">
        <h2 class="section-title">
          <i class="pi pi-trash icon"></i>
          Eliminación de Datos
        </h2>
        <div class="section-content">
          <p>
            Para solicitar la eliminación de su cuenta y todos sus datos asociados, visite nuestra página dedicada:
          </p>
          <div class="delete-link">
            <a href="/eliminar-cuenta" class="delete-btn">
              <i class="pi pi-trash"></i>
              Solicitar Eliminación de Cuenta
            </a>
          </div>
        </div>
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

.privacy-space {
  margin: 5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1.title {
  text-align: center;
  margin-bottom: 30px;
  color: #1a119b;
  font-size: 2.5rem;
}

.pa-1 {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a119b;
  text-align: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(26, 17, 155, 0.1);
}

/* Secciones de privacidad */
.privacy-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #14AE5C;
}

.highlight-section {
  border-left: 4px solid #1A119B;
  background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
}

.section-title {
  color: #1A119B;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
}

.section-content {
  line-height: 1.6;
  color: #333;
}

.section-content p {
  margin-bottom: 15px;
}

/* Items de información */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-item i {
  color: #1A119B;
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Grid de características */
.feature-grid {
  display: grid;
  gap: 15px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 8px;
  border-left: 3px solid #1A119B;
}

.feature-item i {
  color: #14AE5C;
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Items de propósito */
.purpose-item {
  margin-bottom: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.purpose-header {
  font-weight: bold;
  color: #1A119B;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

/* Lista de compartición */
.sharing-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.sharing-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f0f8f0;
  border-radius: 6px;
}

.sharing-item i {
  color: #14AE5C;
}

/* Grid de derechos */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.right-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
}

.right-item i {
  color: #1A119B;
  font-size: 1.2rem;
}

.contact-note {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background: #e3f2fd;
  border-radius: 8px;
}

/* Información de contacto */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}

.contact-item i {
  color: #1A119B;
  font-size: 1.2rem;
}

/* Botón de eliminación */
.delete-link {
  text-align: center;
  margin-top: 20px;
}

.delete-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #1A119B 0%, #14AE5C 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}

.delete-btn:hover {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .privacy-space {
    margin: 3%;
  }

  .privacy-section {
    padding: 20px;
  }

  h1.title {
    font-size: 2rem;
  }

  .rights-grid {
    grid-template-columns: 1fr 1fr;
  }

  .feature-item, .info-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  h1.title {
    font-size: 1.8rem;
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }

  .pa-1 {
    max-width: 95%;
    padding: 15px;
  }
}

.pi {
  font-size: 1.2rem;
}

.icon {
  font-size: 1.5rem !important;
}
</style>