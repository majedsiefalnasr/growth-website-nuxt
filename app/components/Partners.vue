<script lang="ts"></script>

<template>
  <div
    class="partners-block"
    data-section="partners"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row justify-content-center text-center">
      <!-- Header -->
      <div class="header col-12 col-lg-8">
        <!-- Title -->
        <h2
          data-cursor-magnify-inner
          data-reveal-self="rotate"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <span>شركاء Growth</span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          ﻟﻘﺪ ﻋﻤﻠﻨﺎ ﻣﻊ اﻟﻜﺜﻴﺮ ﻣﻦ اﻟﺸﺮﻛﺎت و اﻟﺄﻓﺮاد ﻟﺒﻨﺎء ﻣﺘﺎﺟﺮﻫﻢ، ﻣﺎ ﺳﺎﻋﺪﻫﻢ ﻓﻲ ﺗﺤﻘﻴﻖ ﻧﺠﺎﺣﺎت ﺑﺎﻫﺮة
        </div>
      </div>

      <!-- Partners list -->
      <div class="col-12">
        <div
          class="list"
          data-cursor-magnify-lg
          data-reveal-self="translate"
          data-reveal-delay="4"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <!-- Image -->
          <img src="/assets/images/partners/partners-1.png" alt="partners" />

          <img src="/assets/images/partners/partners-2.png" alt="partners" />
          <img src="/assets/images/partners/partners-3.png" alt="partners" />
          <img src="/assets/images/partners/partners-4.png" alt="partners" />
          <img src="/assets/images/partners/partners-5.png" alt="partners" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.partners-block > *:not(.background) {
  z-index: 1;
}
.partners-block .header {
  margin-bottom: 5rem;
}
.partners-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.partners-block .header .subtitle {
  font-size: 1.25rem;
}
.partners-block .list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.partners-block .list > * {
  max-height: 7.5rem;
}

/* Responsiveness */
/******************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .partners-block .header h2 {
    font-size: 2.5rem;
  }
  .partners-block .header .subtitle {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .partners-block {
    margin-bottom: 12.5rem;
  }
  .partners-block .header {
    margin-bottom: 7.5rem;
  }
  .partners-block .header h2 {
    font-size: 3rem;
  }
  .partners-block .list > * {
    max-height: 9.38rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
