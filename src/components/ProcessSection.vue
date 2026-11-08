
<script setup>
const steps = [
  {
    number: '01',
    icon: '💡',
    title: 'Conocemos tu idea',
    description:
      'Conversamos contigo para entender qué necesitas, tus objetivos y cómo podemos ayudarte.',
  },
  {
    number: '02',
    icon: '🎨',
    title: 'Diseñamos la solución',
    description:
      'Organizamos las ideas y preparamos una propuesta visual y funcional para tu proyecto.',
  },
  {
    number: '03',
    icon: '💻',
    title: 'Desarrollamos',
    description:
      'Construimos tu página web o aplicación utilizando tecnologías modernas y buenas prácticas.',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Probamos y entregamos',
    description:
      'Revisamos que todo funcione correctamente y preparamos tu solución para su entrega.',
  },
]
</script>

<template>
  <section
    id="proceso"
    class="process"
    aria-labelledby="process-title"
  >
    <div class="process__container">

      <div class="process__heading">
        <span class="process__eyebrow">
          ASÍ TRABAJAMOS
        </span>

        <h2 id="process-title">
          Nuestro <span>proceso de trabajo</span>
        </h2>

        <p>
          Convertimos tus ideas en soluciones digitales
          mediante un proceso claro, organizado y colaborativo.
        </p>
      </div>

      <div class="process__grid">
        <article
          v-for="step in steps"
          :key="step.number"
          class="process-card"
        >
          <span class="process-card__number">
            {{ step.number }}
          </span>

          <div class="process-card__icon" aria-hidden="true">
            {{ step.icon }}
          </div>

          <h3>{{ step.title }}</h3>

          <p>{{ step.description }}</p>
        </article>
      </div>

      <div class="process__bottom">
        <p>
          ¿Listo para comenzar tu proyecto?
        </p>

        <a href="#contacto" class="process__button">
          Hablemos de tu idea
          <span aria-hidden="true">→</span>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.process {
 
  padding: 110px 30px;
  background:
    radial-gradient(
      ellipse at 50% 100%,
      rgba(0, 120, 255, 0.08),
      transparent 60%
    ),
    #080d18;
  color: #ffffff;
}

.process__container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1450px;
  min-width: 0;
  margin: 0 auto;
}

.process__heading {
  max-width: 850px;
  margin: 0 auto 65px;
  text-align: center;
}

.process__eyebrow {
  color: #00bfff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.process__heading h2 {
  margin: 18px 0;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  line-height: 1.2;
}

.process__heading h2 span {
  color: #00bfff;
}

.process__heading p {
  color: #aabbd0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.process__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.process-card {
  position: relative;
  min-width: 0;
  padding: 35px 28px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 20px;
  background: #172438;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.process-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 191, 255, 0.55);
}

.process-card__number {
  position: absolute;
  top: 22px;
  right: 25px;
  color: rgba(0, 191, 255, 0.2);
  font-size: 3rem;
  font-weight: 800;
}

.process-card__icon {
  display: grid;
  place-items: center;
  width: 65px;
  height: 65px;
  margin-bottom: 28px;
  border: 1px solid rgba(0, 191, 255, 0.25);
  border-radius: 16px;
  background: rgba(0, 191, 255, 0.1);
  font-size: 2rem;
}

.process-card h3 {
  position: relative;
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 1.3rem;
}

.process-card p {
  position: relative;
  margin: 0;
  color: #b6c3d5;
  font-size: 1rem;
  line-height: 1.8;
}

.process__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 65px;
  text-align: center;
}

.process__bottom p {
  margin: 0;
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 600;
}

.process__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 54px;
  padding: 14px 28px;
  border-radius: 10px;
  background: linear-gradient(120deg, #007bff, #00bfff);
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.process__button:hover {
  transform: translateY(-3px);
}

.process__button:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 4px;
}

@media (max-width: 1100px) {
  .process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .process {
    padding: 75px 20px;
  }

  .process__heading {
    margin-bottom: 40px;
  }

  .process__heading p {
    font-size: 1rem;
  }

  .process__grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .process-card {
    padding: 28px;
  }

  .process__bottom {
    margin-top: 45px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .process-card,
  .process__button {
    transition: none;
  }

  .process-card:hover,
  .process__button:hover {
    transform: none;
  }
}
</style>
