<script lang="ts"></script>

<template>
  <div
    class="showcase-block"
    data-section="showcase"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row">
      <!-- Header -->
      <div class="header col-12 col-lg-8">
        <!-- Title -->
        <h2
          data-cursor-magnify-inner
          data-reveal-self="rotate"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <span>متاجر حققت النجاح مع Growth</span>
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

      <!-- Stores list -->
      <div class="col-12">
        <!-- Showcase Slider -->
        <ShowcaseSlider />
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.showcase-block > *:not(.background) {
  z-index: 1;
}
.showcase-block .header {
  margin-bottom: 5rem;
}
.showcase-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.showcase-block .header .subtitle {
  font-size: 1.25rem;
}

/* Responsiveness */
/****************** */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .showcase-block .header h2 {
    font-size: 2.5rem;
  }
  .showcase-block .header .subtitle {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .showcase-block {
    margin-bottom: 12.5rem;
  }
  .showcase-block .header {
    margin-bottom: 7.5rem;
  }
  .showcase-block .header h2 {
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
