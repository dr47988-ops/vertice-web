
<script setup>
import { useRouter } from 'vue-router'
import { services } from '@/data/services'

const router = useRouter()

const whatsappNumber = '50664031202'
const email = 'contacto.verticeweb@gmail.com'
const instagramUrl = 'https://www.instagram.com/verticeweb.cr/'

const navigation = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Portafolio', id: 'portafolio' },
  { label: 'Contacto', id: 'contacto' },
]

// Navegación por las secciones
function goToSection(id) {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  const behavior = reduceMotion ? 'auto' : 'smooth'

  if (id === 'inicio') {
    window.scrollTo({
      top: 0,
      behavior,
    })
    return
  }

  document.getElementById(id)?.scrollIntoView({
    behavior,
    block: 'start',
  })
}

// Consultar un servicio específico
function consultarServicio(id) {
  router.push({
    path: '/',
    hash: '#contacto',
    query: { servicio: id },
  })
}
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">

        <!-- Marca -->
        <div class="footer__brand">
          <h2>
            VÉRTICE <span>WEB</span>
          </h2>

          <p class="footer__slogan">
            Tu idea, nuestra experiencia.
          </p>

          <p>
            Diseñamos y desarrollamos soluciones
            digitales modernas para transformar
            tus ideas en realidad.
          </p>
        </div>

        <!-- Navegación -->
        <div class="footer__column">
          <h3>Explorar</h3>

          <button
            v-for="item in navigation"
            :key="item.id"
            type="button"
            @click="goToSection(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Servicios -->
        <div class="footer__column">
          <h3>Servicios</h3>

          <button
            v-for="service in services.slice(0, 4)"
            :key="service.id"
            type="button"
            @click="consultarServicio(service.id)"
          >
            {{ service.title }}
          </button>
        </div>

        <!-- Contacto -->
        <div class="footer__column">
          <h3>Contacto</h3>

          <!-- WhatsApp: logotipo oficial -->
          <a
            :href="`https://wa.me/${whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__contact-link"
            aria-label="Contactar a Vértice Web por WhatsApp (se abre en una pestaña nueva)"
          >
            <svg
              class="footer__icon footer__icon--whatsapp"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                fill="#25D366"
                d="M16 2.7A13.3 13.3 0 0 0 4.5 22.6L2.7 29.3l6.9-1.8A13.3 13.3 0 1 0 16 2.7Z"
              />
              <path
                fill="#FFFFFF"
                d="M16 5.1A10.9 10.9 0 0 0 6.6 21.5l.3.5-1 3.8 3.9-1 .5.3A10.9 10.9 0 1 0 16 5.1Zm0 19.8a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-2.3.6.6-2.2-.2-.4A8.9 8.9 0 1 1 16 24.9Z"
              />
              <path
                fill="#FFFFFF"
                d="M11.5 10.5c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.6 4.2 6.4 5.7 3.1 1.2 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.9-.6l-2.7-1.3c-.4-.2-.7-.3-1 .2l-1.2 1.4c-.2.2-.4.3-.9.1-.5-.3-2-1-3.8-2.7-1.4-1.3-2.3-2.8-2.6-3.3-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.5-.8.1-.3.1-.6 0-.8l-1.4-3.1Z"
                transform="translate(2 1) scale(.87)"
              />
            </svg>

            <span>+506 6403 1202</span>
          </a>

          <!-- Instagram -->
          <a
            :href="instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__contact-link"
            aria-label="Visitar Instagram de Vértice Web (se abre en una pestaña nueva)"
          >
            <svg
              class="footer__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
              />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>

            <span>@verticeweb.cr</span>
          </a>

          <!-- Correo -->
          <a
            :href="`mailto:${email}`"
            class="footer__contact-link"
            aria-label="Enviar correo electrónico a Vértice Web"
          >
            <svg
              class="footer__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="3"
              />
              <path d="m3 6 9 7 9-7" />
            </svg>

            <span>{{ email }}</span>
          </a>

          <!-- Ubicación -->
          <div class="footer__location">
            <svg
              class="footer__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            <span>Costa Rica · Atención en línea</span>
          </div>
        </div>

      </div>

      <!-- Parte inferior -->
      <div class="footer__bottom">
        <p>
          © {{ new Date().getFullYear() }} VÉRTICE WEB.
          Todos los derechos reservados.
        </p>

        <p>Ideas que conectan.</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* Footer principal */
.footer {
  padding: 80px 30px 25px;
  border-top: 1px solid rgba(0, 191, 255, 0.15);
  background: #080d18;
  color: #ffffff;
}

.footer__container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1450px;
  min-width: 0;
  margin: 0 auto;
}

/* Distribución */
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1fr 1.2fr;
  gap: 55px;
}

/* Marca */
.footer__brand h2 {
  margin: 0 0 18px;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.footer__brand h2 span {
  color: #00bfff;
}

.footer__brand p {
  max-width: 340px;
  margin: 0 0 14px;
  color: #aabbd0;
  font-size: 0.98rem;
  line-height: 1.8;
}

.footer__brand .footer__slogan {
  color: #00bfff;
  font-weight: 600;
}

/* Columnas */
.footer__column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
}

.footer__column h3 {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 1.15rem;
}

/* Botones y enlaces */
.footer__column button,
.footer__column a {
  padding: 0;
  border: 0;
  background: none;
  color: #aabbd0;
  font: inherit;
  font-size: 0.95rem;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer__column button:hover,
.footer__column a:hover {
  color: #00bfff;
}

.footer__column button:focus-visible,
.footer__column a:focus-visible {
  outline: 2px solid #00bfff;
  outline-offset: 5px;
}

/* Contactos */
.footer__column .footer__contact-link,
.footer__location {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  line-height: 1.6;
}

.footer__icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: #00bfff;
}

/* WhatsApp original verde */
.footer__icon--whatsapp {
  width: 24px;
  height: 24px;
}

.footer__contact-link span {
  min-width: 0;
  overflow-wrap: anywhere;
}

.footer__column .footer__contact-link:hover {
  color: #8cdbff;
}

/* Ubicación */
.footer__location {
  color: #aabbd0;
  font-size: 0.95rem;
}

.footer__location span {
  line-height: 1.6;
}

/* Parte inferior */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
  padding-top: 25px;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
}

.footer__bottom p {
  margin: 0;
  color: #7d91ac;
  font-size: 0.9rem;
}

/* Tablet */
@media (max-width: 1100px) {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 45px;
  }
}

/* Celulares */
@media (max-width: 650px) {
  .footer {
    padding: 65px 20px 25px;
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .footer__column button,
  .footer__column a {
    transition: none;
  }
}
</style>
