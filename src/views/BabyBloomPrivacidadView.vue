
<template>
  <main class="privacy-page">
    <div class="privacy-container">
      <header class="privacy-header">
        <div class="flower">🌸</div>
        <p class="eyebrow">BABYBLOOM</p>
        <h1>Política de Privacidad</h1>
        <p class="subtitle">
          Cuidamos la información de tu familia con
          respeto, transparencia y responsabilidad.
        </p>
        <p class="updated">Última actualización: 9 de noviembre de 2026</p>
      </header>

      <div class="privacy-content">
        <section>
          <h2>1. Sobre BabyBloom</h2>
          <p>
            BabyBloom es una aplicación de apoyo para madres,
            padres y cuidadores de bebés de 0 a 24 meses.
            Ofrece herramientas para organizar información
            relacionada con alimentación, sueño, estimulación
            y desarrollo infantil.
          </p>
        </section>

        <section>
          <h2>2. Información que utiliza la aplicación</h2>
          <p>
            BabyBloom permite registrar nombres, fechas de
            nacimiento, fotografías y anotaciones relacionadas
            con los bebés, según la información que cada
            persona decida ingresar.
          </p>
        </section>

        <section>
          <h2>3. Almacenamiento de información</h2>
          <p>
            Los perfiles y registros se almacenan localmente
            en el dispositivo mediante AsyncStorage.
            No se requiere crear una cuenta en línea para
            utilizar estas funciones.
          </p>
          <p>
            La información local puede perderse al desinstalar
            la aplicación o borrar sus datos.
          </p>
        </section>

        <section>
          <h2>4. Fotografías y permisos</h2>
          <p>
            La aplicación permite seleccionar fotografías
            de la galería para personalizar los perfiles.
            El acceso se solicita cuando se utiliza
            esta función.
          </p>
          <p>
            BabyBloom guarda una referencia local a la
            fotografía seleccionada. Su disponibilidad
            puede depender de que el archivo continúe
            accesible en el dispositivo.
          </p>
        </section>

        <section>
          <h2>5. Uso de la información</h2>
          <p>
            Los datos registrados se utilizan para mostrar
            los perfiles y organizar las funciones de
            seguimiento dentro de BabyBloom.
          </p>
        </section>

        <section>
          <h2>6. Control de la información</h2>
          <p>
            Las personas usuarias pueden modificar o eliminar
            perfiles desde las funciones disponibles en la
            aplicación. También pueden borrar los datos
            locales mediante las opciones del dispositivo.
          </p>
        </section>

        <section>
          <h2>7. Privacidad y seguridad</h2>
          <p>
            Recomendamos proteger el dispositivo con
            contraseña, PIN o bloqueo biométrico, ya que
            los registros se almacenan localmente.
          </p>
        </section>

        <section>
          <h2>8. Información de salud</h2>
          <p>
            BabyBloom ofrece información orientativa sobre
            el cuidado infantil. No sustituye la valoración,
            el diagnóstico ni las recomendaciones de
            profesionales de salud.
          </p>
        </section>

        <section>
          <h2>9. Cambios en esta política</h2>
          <p>
            Esta política podrá actualizarse cuando cambien
            las funciones o las prácticas de tratamiento de
            información de BabyBloom.
          </p>
        </section>

        <section>
          <h2>10. Contacto</h2>
          <p>
            Para consultas relacionadas con la privacidad
            de BabyBloom, puedes comunicarte con el equipo
            de Vértice Web a través de su página de contacto.
          </p>
        </section>
      </div>

      <footer class="privacy-footer">
        <p>🌸 BabyBloom · Creciendo juntos, día a día</p>
        <a href="/">Volver a Vértice Web</a>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  padding: 55px 20px;
  background: linear-gradient(145deg, #fff5fa, #f3efff, #f0fffa);
  color: #493d55;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.privacy-container {
  max-width: 850px;
  margin: 0 auto;
}

.privacy-header {
  text-align: center;
  padding: 45px 20px;
}

.flower {
  font-size: 52px;
  margin-bottom: 12px;
}

.eyebrow {
  color: #a47cb7;
  font-weight: 800;
  letter-spacing: 4px;
  font-size: 13px;
}

h1 {
  font-size: clamp(30px, 5vw, 46px);
  color: #875ca1;
  margin: 12px 0 18px;
}

.subtitle {
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 16px;
}

.updated {
  margin-top: 22px;
  font-size: 13px;
  color: #84758b;
}

.privacy-content {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 12px 45px rgba(117, 76, 139, 0.09);
}

section {
  margin-bottom: 30px;
  padding-bottom: 22px;
  border-bottom: 1px solid #f1e8f5;
}

section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

h2 {
  color: #9569ad;
  font-size: 20px;
  margin-bottom: 12px;
}

section p {
  line-height: 1.9;
  font-size: 15px;
  margin-bottom: 12px;
}

.privacy-footer {
  text-align: center;
  padding: 35px 15px;
  color: #826b8f;
}

.privacy-footer a {
  display: inline-block;
  margin-top: 12px;
  color: #875ca1;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 600px) {
  .privacy-page {
    padding: 20px 12px;
  }

  .privacy-header {
    padding: 30px 10px;
  }

  .privacy-content {
    padding: 25px 20px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
