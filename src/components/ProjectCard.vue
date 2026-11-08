
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const imageError = ref(false)

watch(
  () => props.project.image,
  () => {
    imageError.value = false
  }
)
</script>

<template>
  <article class="project-card">

    <!-- Imagen del proyecto -->
    <div class="project-card__image">
      <img
        v-if="!imageError"
        :src="project.image"
        :alt="project.imageAlt || `Vista previa del proyecto ${project.title}`"
        loading="lazy"
        @error="imageError = true"
      />

      <div v-else class="project-card__placeholder">
        <span aria-hidden="true">◇</span>
        <strong>{{ project.title }}</strong>
        <small>Vista previa no disponible</small>
      </div>
    </div>

    <!-- Información del proyecto -->
    <div class="project-card__content">

      <!-- Categoría y estado -->
      <div class="project-card__meta">
        <span>{{ project.category }}</span>

        <span
          class="project-card__status"
          :class="{
            'project-card__status--published':
              project.status === 'Publicado'
          }"
        >
          {{ project.status }}
        </span>
      </div>

      <!-- Nombre del proyecto -->
      <h3>{{ project.title }}</h3>

      <!-- Descripción -->
      <p>{{ project.description }}</p>

      <!-- Tecnologías utilizadas -->
      <div class="project-card__technologies">
        <span
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </span>
      </div>

      <!-- Enlace del proyecto -->
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card__link"
      >
        Visitar proyecto

        <span class="sr-only">
          {{ project.title }} (se abre en una pestaña nueva)
        </span>

        <span aria-hidden="true">↗</span>
      </a>

      <!-- Proyecto sin enlace -->
      <span v-else class="project-card__pending">
        Próximamente disponible
      </span>

    </div>
  </article>
</template>

<style scoped>
/* Tarjeta principal */
.project-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 20px;
  background: #172438;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

/* Efecto al pasar el mouse */
.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 191, 255, 0.5);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

/* Contenedor de imagen mejorado */
.project-card__image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 340px;
  padding: 14px;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    #0a1426,
    #142b49
  );
}

/* Imagen completa y centrada */
.project-card__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}

/* Animación suave */
.project-card:hover img {
  transform: scale(1.02);
}

/* Mensaje si no hay imagen */
.project-card__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: #aabbd0;
  text-align: center;
}

.project-card__placeholder span {
  color: #00bfff;
  font-size: 3rem;
}

.project-card__placeholder strong {
  color: #ffffff;
  font-size: 1.4rem;
}

/* Contenido */
.project-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 18px;
  padding: 30px;
}

/* Categoría y estado */
.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  color: #00bfff;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Estado normal */
.project-card__status {
  color: #b6c3d5;
}

/* Estado publicado */
.project-card__status--published {
  color: #6ee7b7;
}

/* Título */
h3 {
  margin: 0;
  color: #ffffff;
  font-size: 1.7rem;
  font-weight: 700;
}

/* Descripción */
p {
  margin: 0;
  color: #b6c3d5;
  font-size: 1.05rem;
  line-height: 1.7;
}

/* Tecnologías */
.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-card__technologies span {
  padding: 7px 12px;
  border-radius: 8px;
  background: rgba(0, 191, 255, 0.1);
  color: #8cdbff;
  font-size: 0.85rem;
}

/* Enlace */
.project-card__link {
  align-self: flex-start;
  margin-top: auto;
  color: #00bfff;
  font-weight: 700;
  text-decoration: none;
}

.project-card__link:hover {
  text-decoration: underline;
}

.project-card__link:focus-visible {
  outline: 2px solid #00bfff;
  outline-offset: 4px;
}

/* Proyecto pendiente */
.project-card__pending {
  margin-top: auto;
  color: #aabbd0;
  font-size: 0.9rem;
}

/* Texto solo para lectores de pantalla */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Tablets */
@media (max-width: 1000px) {
  .project-card__image {
    height: 300px;
    padding: 12px;
  }

  .project-card__content {
    padding: 26px;
  }

  h3 {
    font-size: 1.5rem;
  }
}

/* Teléfonos */
@media (max-width: 600px) {
  .project-card__image {
    height: 260px;
    padding: 10px;
  }

  .project-card__content {
    padding: 24px;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
  }
}

/* Accesibilidad: movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card__image img {
    transition: none;
  }

  .project-card:hover,
  .project-card:hover img {
    transform: none;
  }
}
</style>
