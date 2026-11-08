
<script setup>
import { useRouter } from 'vue-router'
import { services } from '@/data/services'

const router = useRouter()

const whatsappNumber = '50664031202'
const email = 'dr47988@gmail.com'

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

          <a
            :href="`https://wa.me/${whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Vértice Web por WhatsApp (se abre en una pestaña nueva)"
          >
            +506 6403 1202
          </a>

          <a :href="`mailto:${email}`">
            {{ email }}
          </a>

          <span>
            Costa Rica · Atención en línea
          </span>
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

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1fr 1.2fr;
  gap: 55px;
}

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

.footer__column span {
  color: #aabbd0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer__column a {
  overflow-wrap: anywhere;
}

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

@media (max-width: 1100px) {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 45px;
  }
}

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

@media (prefers-reduced-motion: reduce) {
  .footer__column button,
  .footer__column a {
    transition: none;
  }
}
</style>
