<script lang="ts"></script>

<template>
  <div
    class="download-app-block"
    data-section="download-app"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row justify-content-center text-center">
      <!-- Header -->
      <div class="col-12 col-lg-8">
        <div class="header">
          <!-- Title -->
          <h2
            data-cursor-magnify-inner
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span>أحصل علي تطبيق Growth الآن</span>
          </h2>

          <!-- Subtitle -->
          <div
            class="subtitle"
            data-reveal-self="translate"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            تطبيق Growth للتاجر متوفر الآن علي
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div
        class="col-12"
        data-reveal-self="translate-up"
        data-reveal-delay="4"
        data-scrolled-into-view="false"
        data-scrolled-past-view="false"
      >
        <div class="providers d-flex gap-4 justify-content-center">
          <!-- Google Play -->
          <NuxtLink to="#" data-cursor-magnify>
            <img src="/assets/images/apps/google-play.svg" alt="Google Play" />
          </NuxtLink>
          <!-- App Store -->
          <NuxtLink to="#" data-cursor-magnify>
            <img src="/assets/images/apps/app-store.svg" alt="App Store" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-app-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.download-app-block > *:not(.background) {
  z-index: 1;
}
.download-app-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.download-app-block > .background > .bg-dotted {
  top: -100px;
  left: -80px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.download-app-block > .background > .bg-dotted > * {
  transform: scale(0.8);
  margin-right: auto;
}
.download-app-block .header {
  margin-bottom: 2.5rem;
}
.download-app-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.download-app-block .header .subtitle {
  font-size: 1.25rem;
}
.download-app-block .providers > * {
  transition: all 0.3s ease-in-out;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.25rem;
}
.download-app-block .providers > *:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .download-app-block .header h2 {
    font-size: 2.5rem;
  }
  .download-app-block .header .subtitle {
    font-size: 1.5rem;
  }
  .download-app-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .download-app-block {
    margin-bottom: 12.5rem;
  }
  .download-app-block .header h2 {
    font-size: 3rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
