
<template>
  <div class="tech-background" aria-hidden="true">
    <div class="tech-background__glow"></div>
    <div class="tech-background__grid"></div>

    <div class="wave wave--one"></div>
    <div class="wave wave--two"></div>
    <div class="wave wave--three"></div>
    <div class="wave wave--four"></div>

    <div class="tech-background__particles"></div>
  </div>
</template>

<style scoped>
.tech-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 75% 45%,
      rgba(0, 100, 255, 0.24),
      transparent 55%
    ),
    linear-gradient(
      120deg,
      #080d18 5%,
      #0b1b38 55%,
      #060b17 100%
    );
}

.tech-background__glow {
  position: absolute;
  width: 75%;
  height: 65%;
  top: 20%;
  right: -15%;
  border-radius: 50%;
  background: rgba(0, 145, 255, 0.25);
  filter: blur(100px);
}

.tech-background__grid {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(
      rgba(0, 191, 255, 0.12) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(0, 191, 255, 0.12) 1px,
      transparent 1px
    );
  background-size: 65px 65px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 45%,
    transparent
  );
}

/* Ondas luminosas */
.wave {
  position: absolute;
  width: 145%;
  height: 350px;
  left: -20%;
  top: 43%;
  border-radius: 50%;
  border-top: 2px solid rgba(0, 191, 255, 0.8);
  transform: rotate(-12deg);
  box-shadow: 0 -12px 35px rgba(0, 150, 255, 0.08);
  filter: drop-shadow(0 0 12px #00bfff);
  animation: waveFloat 9s ease-in-out infinite alternate;
}

.wave--two {
  top: 48%;
  border-color: rgba(0, 100, 255, 0.75);
  filter: drop-shadow(0 0 18px #007bff);
  animation-delay: -2s;
}

.wave--three {
  top: 53%;
  border-color: rgba(0, 255, 255, 0.5);
  filter: drop-shadow(0 0 14px #00ffff);
  animation-delay: -4s;
}

.wave--four {
  top: 58%;
  border-color: rgba(60, 100, 255, 0.45);
  filter: drop-shadow(0 0 18px #3465ff);
  animation-delay: -6s;
}

/* Partículas decorativas */
.tech-background__particles {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image:
    radial-gradient(
      circle,
      rgba(0, 191, 255, 0.8) 1px,
      transparent 2px
    );
  background-size: 95px 95px;
  mask-image: linear-gradient(
    90deg,
    transparent 20%,
    black 75%
  );
}

/* Movimiento suave */
@keyframes waveFloat {
  from {
    translate: 0 -15px;
    opacity: 0.5;
  }

  to {
    translate: 0 20px;
    opacity: 1;
  }
}

/* Tablets */
@media (max-width: 900px) {
  .wave {
    width: 180%;
    left: -40%;
    top: 52%;
  }

  .tech-background__glow {
    width: 100%;
    right: -40%;
  }
}

/* Teléfonos */
@media (max-width: 600px) {
  .wave {
    width: 220%;
    left: -65%;
    opacity: 0.5;
  }

  .tech-background__grid {
    background-size: 45px 45px;
  }

  .tech-background__particles {
    opacity: 0.2;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }
}
</style>
