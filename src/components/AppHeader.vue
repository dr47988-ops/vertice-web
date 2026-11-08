
<script setup>
import { ref, watch, nextTick } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navigation = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Portafolio', id: 'portafolio' },
  { label: 'Contacto', id: 'contacto' },
]

function closeMenu() {
  menuOpen.value = false
}


async function goToSection(id) {
  closeMenu()

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  const behavior = reduceMotion ? 'instant' : 'smooth'

  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }

  if (id === 'inicio') {
    window.scrollTo({
      top: 20,
      behavior,
    })
    return
  }

  const section = document.getElementById(id)

  if (section) {
    const headerHeight =
      document.querySelector('.header')?.offsetHeight || 85

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY

    // Ajustamos la posición para mostrar más arriba el contenido
    const extraOffset = id === 'servicios' ? 15 : 70

    window.scrollTo({
      top: Math.max(
        0,
        sectionTop - headerHeight + extraOffset
      ),
      behavior,
    })
  }
}


watch(
  () => route.fullPath,
  closeMenu
)
</script>

<template>
  <header class="header">
    <nav class="navbar" aria-label="Navegación principal">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="brand"
        aria-label="Vértice Web - Inicio"
        @click="closeMenu"
      >
        VÉRTICE <span>WEB</span>
      </RouterLink>

      <!-- Menú móvil -->
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuOpen = !menuOpen"
      >
        <span aria-hidden="true">
          {{ menuOpen ? '✕' : '☰' }}
        </span>
      </button>

      <!-- Enlaces -->
      <div
        id="main-navigation"
        class="nav-links"
        :class="{ 'nav-links--open': menuOpen }"
      >
        <button
          v-for="item in navigation"
          :key="item.id"
          type="button"
          class="nav-link"
          @click="goToSection(item.id)"
        >
          {{ item.label }}
        </button>
      </div>

    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(8, 13, 24, 0.96);
  border-bottom: 1px solid rgba(0, 191, 255, 0.15);
  backdrop-filter: blur(12px);
}

.navbar {
  box-sizing: border-box;
  width: 100%;
  min-height: 85px;
  margin: 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  color: #ffffff;
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
}

.brand span {
  color: #00bfff;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(20px, 2.5vw, 40px);
}

.nav-link {
  padding: 8px 0;
  border: none;
  background: transparent;
  color: #cbd5e1;
  font: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #00bfff;
}

.nav-link:focus-visible,
.brand:focus-visible,
.menu-toggle:focus-visible {
  outline: 2px solid #00bfff;
  outline-offset: 5px;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(0, 191, 255, 0.3);
  border-radius: 8px;
  background: transparent;
  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;
}

@media (max-width: 900px) {
  .navbar {
    min-height: 72px;
    padding: 0 24px;
  }

  .brand {
    font-size: 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 16px 24px 24px;
    background: #0c1424;
    border-bottom: 1px solid #00bfff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .nav-links--open {
    display: flex;
  }

  .nav-link {
    padding: 14px 12px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 16px;
    gap: 12px;
  }

  .brand {
    font-size: 1.3rem;
    letter-spacing: 0.5px;
  }

  .nav-links {
    padding: 12px 16px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
</style>
