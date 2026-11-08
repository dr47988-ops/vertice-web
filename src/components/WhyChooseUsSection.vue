
<script setup>
const benefits = [
  {
    icon: '✦',
    title: 'Diseño personalizado',
    description:
      'Creamos soluciones digitales que reflejan la identidad y las necesidades de cada proyecto.',
  },
  {
    icon: '▣',
    title: 'Diseño adaptable',
    description:
      'Desarrollamos experiencias que se adaptan a computadoras, tablets y teléfonos.',
  },
  {
    icon: '♡',
    title: 'Comunicación cercana',
    description:
      'Escuchamos tus ideas y mantenemos una comunicación clara durante el desarrollo.',
  },
  {
    icon: '⌘',
    title: 'Soluciones funcionales',
    description:
      'Combinamos diseño y tecnología para crear herramientas útiles y fáciles de utilizar.',
  },
]
</script>

<template>
  <section
    id="por-que-elegirnos"
    class="benefits"
    aria-labelledby="benefits-title"
  >
    <div class="benefits__container">
      <div class="benefits__heading">
        <span class="benefits__eyebrow">
          NUESTRA DIFERENCIA
        </span>

        <h2 id="benefits-title">
          ¿Por qué <span>elegirnos?</span>
        </h2>

        <p>
          Cada idea es diferente. Por eso, trabajamos
          para ofrecer soluciones digitales pensadas
          especialmente para cada proyecto.
        </p>
      </div>

      <div class="benefits__grid">
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          class="benefit-card"
        >
          <div class="benefit-card__icon" aria-hidden="true">
            {{ benefit.icon }}
          </div>

          <h3>{{ benefit.title }}</h3>

          <p>{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  scroll-margin-top: 85px;
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

.benefits__container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1450px;
  min-width: 0;
  margin: 0 auto;
}

.benefits__heading {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.benefits__eyebrow {
  color: #00bfff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.benefits__heading h2 {
  margin: 18px 0;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  line-height: 1.2;
}

.benefits__heading h2 span {
  color: #00bfff;
}

.benefits__heading > p {
  color: #aabbd0;
  font-size: 1.15rem;
  line-height: 1.8;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.benefit-card {
  min-width: 0;
  padding: 32px 26px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 20px;
  background: #172438;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.benefit-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 191, 255, 0.55);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.benefit-card__icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 26px;
  border: 1px solid rgba(0, 191, 255, 0.25);
  border-radius: 15px;
  background: rgba(0, 191, 255, 0.1);
  color: #00bfff;
  font-size: 2rem;
}

.benefit-card h3 {
  margin: 0 0 15px;
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 1.4;
}

.benefit-card p {
  margin: 0;
  color: #b6c3d5;
  font-size: 1rem;
  line-height: 1.8;
}

@media (max-width: 1100px) {
  .benefits__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .benefits {
    padding: 75px 20px;
  }

  .benefits__heading {
    margin-bottom: 35px;
  }

  .benefits__heading > p {
    font-size: 1rem;
  }

  .benefits__grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .benefit-card {
    padding: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .benefit-card {
    transition: none;
  }

  .benefit-card:hover {
    transform: none;
  }
}
</style>
