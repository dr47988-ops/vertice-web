
<script setup>
import ServiceCard from './ServiceCard.vue'
import { services } from '@/data/services'
</script>

<template>
  <section
    id="servicios"
    class="services"
    aria-labelledby="services-title"
  >
    <div class="services__container">

      <!-- Encabezado de servicios -->
      <div class="services__heading">
        <span class="services__eyebrow">
          LO QUE HACEMOS
        </span>

        <h2 id="services-title">
          Nuestros <span>Servicios</span>
        </h2>

        <p>
          Soluciones digitales diseñadas para convertir
          tus ideas en proyectos modernos y funcionales.
        </p>
      </div>

      <!-- Tarjetas de servicios -->
      <div class="services__grid">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Sección principal */
.services {
  width: 100%;
  scroll-margin-top: 85px;
padding: 65px 30px 90px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(0, 120, 255, 0.08),
      transparent 55%
    ),
    #101b2d;
}

/* Contenedor más amplio */
.services__container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  min-width: 0;
}
/* Encabezado */
.services__heading {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.services__eyebrow {
  color: #00bfff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
}

h2 {
  margin: 18px 0;
  color: #ffffff;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  font-weight: 800;
  line-height: 1.2;
}

h2 span {
  color: #00bfff;
}

.services__heading p {
  max-width: 700px;
  margin: 0 auto;
  color: #aabbd0;
  font-size: 1.2rem;
  line-height: 1.8;
}

/* Distribución de tarjetas */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

/* Tablets */
@media (max-width: 1000px) {
  .services {
  scroll-margin-top: 72px;
  padding: 90px 24px;
}

  .services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .services__heading {
    margin-bottom: 45px;
  }
}

/* Teléfonos */
@media (max-width: 650px) {
  .services {
    padding: 75px 20px;
  }

  .services__heading {
    margin-bottom: 35px;
  }

  .services__eyebrow {
    font-size: 0.8rem;
  }

  h2 {
    font-size: clamp(2rem, 7vw, 2.7rem);
  }

  .services__heading p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .services__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
