
<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section
    id="portafolio"
    class="portfolio"
    aria-labelledby="portfolio-title"
  >
    <div class="portfolio__container">
      <div class="portfolio__heading">
        <span class="portfolio__eyebrow">
          NUESTRO TRABAJO
        </span>

        <h2 id="portfolio-title">
          Proyectos <span>destacados</span>
        </h2>

        <p>
          Conoce algunos de los proyectos digitales
          que estamos desarrollando.
        </p>
      </div>

      <div class="portfolio__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
 
  padding: 110px 30px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(0, 120, 255, 0.08),
      transparent 55%
    ),
    #080d18;
}

.portfolio__container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1450px;
  min-width: 0;
  margin: 0 auto;
}

.portfolio__heading {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.portfolio__eyebrow {
  color: #00bfff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
}

h2 {
  margin: 18px 0;
  color: #ffffff;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  line-height: 1.2;
}

h2 span {
  color: #00bfff;
}

.portfolio__heading p {
  color: #aabbd0;
  font-size: 1.2rem;
  line-height: 1.8;
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

@media (max-width: 700px) {
  .portfolio {
    padding: 75px 20px;
  }

  .portfolio__heading {
    margin-bottom: 35px;
  }

  .portfolio__heading p {
    font-size: 1rem;
  }

  .portfolio__grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>
