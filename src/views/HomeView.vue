
<script setup>
import TechBackground from '@/components/TechBackground.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import WhyChooseUsSection from '@/components/WhyChooseUsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import AppFooter from '@/components/AppFooter.vue'

// Desplazamiento sin agregar # a la dirección
function scrollToSection(id) {
  const section = document.getElementById(id)

  if (!section) return

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  section.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <main class="home">
    <section class="hero">
      <!-- Fondo decorativo -->
      <TechBackground />

      <!-- Contenido principal -->
      <div class="hero__container">
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__dot"></span>
            DISEÑO Y DESARROLLO DIGITAL
          </div>

          <h1 class="hero__title">
            Transformamos tus ideas
            <span>en soluciones digitales.</span>
          </h1>

          <p class="hero__description">
            En Vértice Web diseñamos y desarrollamos
            páginas web, aplicaciones y soluciones
            digitales modernas para impulsar tu negocio.
          </p>

          <!-- Botones sin # en la URL -->
          <div class="hero__actions">
            <button
              type="button"
              class="btn btn--primary"
              @click="scrollToSection('contacto')"
            >
              Solicitar cotización
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              class="btn btn--secondary"
              @click="scrollToSection('portafolio')"
            >
              Ver portafolio
            </button>
          </div>

          <p class="hero__slogan">
            Tu idea, nuestra experiencia.
          </p>
        </div>
      </div>
    </section>

    <!-- Secciones de la página -->
    <ServicesSection />

    <WhyChooseUsSection />

    <ProcessSection />

    <!-- Sección portafolio -->
    <PortfolioSection />

    <!-- Sección contacto -->
    <ContactSection />

    <AppFooter />
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #080d18;
  color: #ffffff;
}

/* Sección principal */
.hero {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  min-height: calc(100svh - 85px);
  overflow: hidden;
}

.hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-inline: auto;
  padding: 35px clamp(24px, 7vw, 110px);
}

.hero__content {
  max-width: 760px;
}

/* Etiqueta superior */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid rgba(0, 191, 255, 0.25);
  border-radius: 100px;
  background: rgba(0, 191, 255, 0.08);
  color: #8cdbff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00bfff;
  box-shadow: 0 0 12px #00bfff;
}

/* Título principal */
.hero__title {
  margin: 24px 0;
  font-size: clamp(2.7rem, 5vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero__title span {
  display: block;
  background: linear-gradient(
    90deg,
    #00bfff,
    #247bff,
    #65d9ff
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* Descripción */
.hero__description {
  max-width: 610px;
  color: #b8c6d9;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.8;
}

/* Botones principales */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 14px 26px;
  border: 1px solid transparent;
  border-radius: 10px;
  font: inherit;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 4px;
}

.btn--primary {
  color: #ffffff;
  background: linear-gradient(
    120deg,
    #007bff,
    #00bfff
  );
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.25);
}

.btn--primary:hover {
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.4);
}

.btn--secondary {
  color: #ffffff;
  border: 1px solid rgba(0, 191, 255, 0.6);
  background: rgba(8, 13, 24, 0.6);
}

/* Eslogan */
.hero__slogan {
  margin-top: 30px;
  color: #7d91ac;
  font-size: 0.95rem;
  font-style: italic;
}

/* Tablets */
@media (max-width: 900px) {
  .hero {
    min-height: calc(100svh - 72px);
  }

  .hero__container {
    padding: 80px 32px;
  }

  .hero__content {
    max-width: 680px;
  }
}

/* Teléfonos */
@media (max-width: 600px) {
  .hero__container {
    padding: 45px 20px;
  }

  .hero__title {
    letter-spacing: -1px;
  }

  .hero__badge {
    font-size: 0.65rem;
    letter-spacing: 1px;
  }

  .hero__actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .hero__slogan {
    margin-top: 40px;
  }
}

/* Accesibilidad: movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }

  .btn:hover {
    transform: none;
  }
}
</style>
