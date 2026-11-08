
<script setup>
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '@/data/services'

const route = useRoute()

// Datos de contacto de Vértice Web
const whatsappNumber = '50664031202'
const contactEmail = 'contacto.verticeweb@gmail.com'

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: '',
})

// Selecciona automáticamente el servicio
// cuando el cliente viene desde una tarjeta.
const selectedService = computed({
  get() {
    return form.service || (
      typeof route.query.servicio === 'string' &&
      services.some(s => s.id === route.query.servicio)
        ? route.query.servicio
        : ''
    )
  },
  set(value) {
    form.service = value
  },
})

// Preparar mensaje de cotización para WhatsApp
function sendWhatsApp() {
  const service = services.find(
    item => item.id === selectedService.value
  )

  const text = [
    'Hola, Vértice Web. Quiero solicitar una cotización.',
    '',
    `Nombre: ${form.name.trim()}`,
    `Correo: ${form.email.trim()}`,
    `Servicio: ${service?.title || 'Otro proyecto'}`,
    '',
    'Mi proyecto:',
    form.message.trim(),
  ].join('\n')

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section
    id="contacto"
    class="contact"
    aria-labelledby="contact-title"
  >
    <div class="contact__container">

      <!-- Encabezado -->
      <div class="contact__heading">
        <span class="contact__eyebrow">
          HABLEMOS DE TU PROYECTO
        </span>

        <h2 id="contact-title">
          ¿Tienes una <span>idea en mente?</span>
        </h2>

        <p>
          Cuéntanos qué necesitas y trabajemos juntos
          para convertir tu idea en una solución digital.
        </p>
      </div>

      <div class="contact__grid">

        <!-- Información de contacto -->
        <div class="contact__info">
          <h3>Construyamos algo increíble.</h3>

          <p>
            Ya sea una página web, una aplicación móvil
            o una solución digital, queremos conocer
            tu proyecto.
          </p>

          <div class="contact__details">

            <!-- Correo -->
            <div class="contact__detail">
              <span aria-hidden="true">✉</span>

              <div>
                <strong>Correo electrónico</strong>

                <a
                  :href="`mailto:${contactEmail}`"
                  class="contact__link"
                >
                  {{ contactEmail }}
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="contact__detail">
              <span
                class="contact__whatsapp-icon"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  height="28"
                  fill="currentColor"
                >
                  <path
                    d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.6a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.4Zm6.8-9.3c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"
                  />
                </svg>
              </span>

              <div>
                <strong>WhatsApp</strong>

                <a
                  :href="`https://wa.me/${whatsappNumber}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact__link"
                >
                  +506 6403 1202
                </a>
              </div>
            </div>

            <!-- Ubicación -->
            <div class="contact__detail">
              <span aria-hidden="true">⌖</span>

              <div>
                <strong>Ubicación</strong>
                <small>
                  Costa Rica · Atención en línea
                </small>
              </div>
            </div>

          </div>
        </div>

        <!-- Formulario -->
        <form
          class="contact__form"
          @submit.prevent="sendWhatsApp"
        >
          <h3>Solicitar cotización</h3>

          <!-- Nombre -->
          <div class="form-field">
            <label for="contact-name">
              Nombre completo
            </label>

            <input
              id="contact-name"
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Tu nombre completo"
              maxlength="100"
              required
            />
          </div>

          <!-- Correo -->
          <div class="form-field">
            <label for="contact-email">
              Correo electrónico
            </label>

            <input
              id="contact-email"
              v-model.trim="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="correo@ejemplo.com"
              maxlength="254"
              required
            />
          </div>

          <!-- Servicio -->
          <div class="form-field">
            <label for="contact-service">
              Servicio
            </label>

            <select
              id="contact-service"
              v-model="selectedService"
              name="service"
              required
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>

              <option
                v-for="service in services"
                :key="service.id"
                :value="service.id"
              >
                {{ service.title }}
              </option>

              <option value="otro">
                Otro proyecto
              </option>
            </select>
          </div>

          <!-- Mensaje -->
          <div class="form-field">
            <label for="contact-message">
              Cuéntanos sobre tu proyecto
            </label>

            <textarea
              id="contact-message"
              v-model.trim="form.message"
              name="message"
              rows="5"
              maxlength="2000"
              placeholder="Describe brevemente qué necesitas..."
              required
            ></textarea>
          </div>

          <!-- Botón -->
          <button
            type="submit"
            class="contact__submit"
          >
            Enviar por WhatsApp
            <span aria-hidden="true">↗</span>
          </button>

          <p class="contact__note">
            Se abrirá WhatsApp con tu mensaje preparado.
            Podrás revisarlo antes de enviarlo.
          </p>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sección principal */
.contact {
  padding: 110px 30px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(0, 120, 255, 0.08),
      transparent 55%
    ),
    #101b2d;
  color: #ffffff;
}

.contact__container {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}

/* Encabezado */
.contact__heading {
  max-width: 800px;
  margin: 0 auto 65px;
  text-align: center;
}

.contact__eyebrow {
  color: #00bfff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.contact__heading h2 {
  margin: 18px 0;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  line-height: 1.2;
}

.contact__heading h2 span {
  color: #00bfff;
}

.contact__heading p,
.contact__info p {
  color: #b6c3d5;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Distribución */
.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 65px;
  align-items: start;
}

/* Información */
.contact__info {
  padding-top: 20px;
}

.contact__info h3 {
  margin: 0 0 20px;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
}

.contact__details {
  display: grid;
  gap: 30px;
  margin-top: 40px;
}

.contact__detail {
  display: flex;
  align-items: center;
  gap: 18px;
}

.contact__detail > span {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 55px;
  height: 55px;
  border: 1px solid rgba(0, 191, 255, 0.3);
  border-radius: 14px;
  background: rgba(0, 191, 255, 0.08);
  color: #00bfff;
  font-size: 1.5rem;
}

/* Ícono verde de WhatsApp */
.contact__detail > .contact__whatsapp-icon {
  color: #25d366;
}

.contact__detail div {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.contact__detail strong {
  font-size: 1.05rem;
}

.contact__detail small {
  color: #aabbd0;
  font-size: 0.95rem;
}

/* Enlaces de correo y WhatsApp */
.contact__link {
  color: #aabbd0;
  font-size: 0.95rem;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.2s ease;
}

.contact__link:hover {
  color: #00bfff;
  text-decoration: underline;
}

.contact__link:focus-visible {
  outline: 2px solid #00bfff;
  outline-offset: 4px;
}

/* Formulario */
.contact__form {
  display: grid;
  gap: 22px;
  min-width: 0;
  padding: 38px;
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 22px;
  background: #172438;
}

.contact__form h3 {
  margin: 0 0 5px;
  font-size: 1.6rem;
}

.form-field {
  display: grid;
  gap: 10px;
  min-width: 0;
}

.form-field label {
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 600;
}

.form-field input,
.form-field select,
.form-field textarea {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 15px 16px;
  border: 1px solid #334155;
  border-radius: 10px;
  background: #101b2d;
  color: #ffffff;
  font: inherit;
  font-size: 1rem;
}

.form-field textarea {
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #94a3b8;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: 2px solid #00bfff;
  outline-offset: 2px;
  border-color: #00bfff;
}

/* Botón */
.contact__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 54px;
  padding: 14px 24px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(120deg, #007bff, #00bfff);
  color: #ffffff;
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.contact__submit:hover {
  transform: translateY(-2px);
}

.contact__submit:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 4px;
}

.contact__note {
  margin: -8px 0 0;
  color: #aabbd0;
  font-size: 0.85rem;
  line-height: 1.6;
}

/* Tablets */
@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact__info {
    padding-top: 0;
  }
}

/* Teléfonos */
@media (max-width: 600px) {
  .contact {
    padding: 75px 20px;
  }

  .contact__heading {
    margin-bottom: 40px;
  }

  .contact__heading p,
  .contact__info p {
    font-size: 1rem;
  }

  .contact__form {
    padding: 24px;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .contact__submit,
  .contact__link {
    transition: none;
  }

  .contact__submit:hover {
    transform: none;
  }
}
</style>
