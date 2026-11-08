
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  service: {
    type: Object,
    required: true,
  },
})

function consultarServicio(id) {
  router.push({
    path: '/',
    hash: '#contacto',
    query: { servicio: id },
  })
}
</script>

<template>
  <article
    class="service-card"
    :style="{ '--service-color': service.color }"
  >
    <!-- Ícono del servicio -->
    <div class="service-card__icon" aria-hidden="true">
      {{ service.icon }}
    </div>

    <!-- Título -->
    <h3>{{ service.title }}</h3>

    <!-- Descripción -->
    <p class="service-card__description">
      {{ service.description }}
    </p>

    <!-- Características -->
    <ul class="service-card__features">
      <li
        v-for="feature in service.features"
        :key="feature"
      >
        <span aria-hidden="true">✓</span>
        {{ feature }}
      </li>
    </ul>

    <!-- Botón para consultar servicio -->
    <button
      type="button"
      class="service-card__link"
      @click="consultarServicio(service.id)"
    >
      Consultar servicio
      <span aria-hidden="true">→</span>
    </button>
  </article>
</template>

<style scoped>
/* Tarjeta principal */
.service-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  padding: 36px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 20px;
  background: #172438;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

/* Animación al pasar el mouse */
.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--service-color);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

/* Ícono */
.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 26px;
  border-radius: 15px;
  background: var(--service-color);
  font-size: 1.9rem;
}

/* Título */
h3 {
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

/* Descripción */
.service-card__description {
  margin: 0;
  color: #b6c3d5;
  font-size: 1.08rem;
  line-height: 1.75;
}

/* Lista de características */
.service-card__features {
  display: grid;
  gap: 15px;
  margin: 28px 0 30px;
  padding: 0;
  list-style: none;
}

.service-card__features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
}

.service-card__features span {
  flex-shrink: 0;
  color: var(--service-color);
  font-size: 1.1rem;
  font-weight: 800;
}

/* Botón para consultar servicio */
.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  margin-top: auto;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--service-color);
  font: inherit;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: gap 0.2s ease;
}

.service-card__link:hover {
  gap: 16px;
  text-decoration: underline;
}

.service-card__link:focus-visible {
  outline: 2px solid var(--service-color);
  outline-offset: 5px;
}

/* Tablets */
@media (max-width: 1000px) {
  .service-card {
    padding: 30px;
  }

  h3 {
    font-size: 1.4rem;
  }

  .service-card__description {
    font-size: 1.05rem;
  }
}

/* Teléfonos */
@media (max-width: 650px) {
  .service-card {
    padding: 26px;
  }

  .service-card__icon {
    width: 58px;
    height: 58px;
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  .service-card__description {
    font-size: 1rem;
  }

  .service-card__features li {
    font-size: 0.95rem;
  }

  .service-card__link {
    font-size: 1rem;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card__link {
    transition: none;
  }

  .service-card:hover {
    transform: none;
  }
}
</style>
