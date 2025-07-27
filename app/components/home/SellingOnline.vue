<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'

/**
 * Returns the current locale code.
 * @returns {string} The current locale code, defaults to 'en'.
 */
function getCurrentLocale(): string {
  const { locale } = useI18n()
  return locale.value || 'en'
}

/**
 * Returns the direction (ltr/rtl) for the current locale.
 * @returns {"ltr" | "rtl" | "auto"} The direction for the current locale, defaults to 'ltr'.
 */
type LocaleObject = { code: string; dir?: 'ltr' | 'rtl' | 'auto' }
function getCurrentLocaleDir(): 'ltr' | 'rtl' | 'auto' {
  const { locales } = useI18n()
  const currentLocale = getCurrentLocale()
  // Accepts dir as string | undefined, fallback to 'ltr' if not set
  const found = (locales.value as LocaleObject[]).find((locale) => locale.code === currentLocale)
  return found && (found.dir === 'rtl' || found.dir === 'ltr' || found.dir === 'auto')
    ? found.dir
    : 'ltr'
}

const currentLocaleDir = getCurrentLocaleDir()

/**
 * Future item type.
 * @typedef {Object} Future
 * @property {string} title - The future title.
 * @property {string} content - The future content.
 * @property {string} icon - The icon class for the future.
 */
interface Future {
  title: string
  content?: string
  icon?: string
}

/**
 * Returns the Futures to display in the slider.
 * @returns {Future[]} Array of future objects.
 */
const futures: Future[] = [
  {
    title: 'لا حاجه لخبره بالتصميم او البرمجة',
    content: 'وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة',
    icon: 'ph:gear',
  },
  {
    title: 'لا حاجه لخبره بالتصميم او البرمجة',
    content: 'وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة',
    icon: 'ph:gear',
  },
  {
    title: 'لا حاجه لخبره بالتصميم او البرمجة',
    content: 'وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة',
    icon: 'ph:gear',
  },
  {
    title: 'لا حاجه لخبره بالتصميم او البرمجة',
    content: 'وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة',
    icon: 'ph:gear',
  },
  {
    title: 'لا حاجه لخبره بالتصميم او البرمجة',
    content: 'وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة',
    icon: 'ph:gear',
  },
]

/**
 * Splide slider options for futures.
 * @returns {Record<string, unknown>} Splide options object.
 */
const splideOptions: Record<string, unknown> = {
  perPage: 2.5,
  breakpoints: {
    1199.98: {
      perPage: 2.5,
      gap: 48,
    },
    991.98: {
      perPage: 1.5,
      gap: 32,
    },
    413.98: {
      perPage: 1.1,
      gap: 16,
    },
  },
  perMove: 1,
  direction: currentLocaleDir,
  gap: 64,
  speed: 800,
  arrows: false,
  pagination: false,
  lazyLoad: 'nearby',
  focus: 0,
  omitEnd: true,
  trimSpace: false,
}
</script>

<template>
  <div
    class="selling-online-block"
    data-section="selling-online"
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
          <span> البيع عبر الإنترنت لم يكن </span>
          <span> أسهل من أي وقت مضى </span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          أنشئ متجرك في دقائق واجعل علامتك التجارية تنبض بالحياة
        </div>
      </div>

      <!-- Futures list -->
      <div class="col-12">
        <!-- Futures Slider -->
        <Splide
          :options="splideOptions"
          class="futures-slider"
          aria-label="Futures Slider"
          data-cursor-text="Drag"
          data-reveal-self="translate-up"
          data-reveal-delay="4"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <SplideSlide v-for="(future, idx) in futures" :key="idx">
            <div>
              <!-- Title -->
              <div
                class="title d-flex flex-column flex-md-row gap-4 align-items-start align-items-md-center"
              >
                <!-- Icon -->
                <div class="icon">
                  <Icon :name="future.icon ?? ''" />
                </div>
                <!-- Title -->
                <h3>{{ future.title }}</h3>
              </div>

              <!-- Content -->
              <div class="text">{{ future.content }}</div>
            </div>
          </SplideSlide>
        </Splide>
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
.selling-online-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.selling-online-block > *:not(.background) {
  z-index: 1;
}
.selling-online-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.selling-online-block > .background > .bg-dotted {
  right: -100px;
  bottom: -100px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.selling-online-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.selling-online-block .header {
  margin-bottom: 5rem;
}
.selling-online-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.selling-online-block .header .subtitle {
  font-size: 1.25rem;
}

/* Responsiveness */
/********************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .selling-online-block .header h2 {
    font-size: 2.5rem;
  }
  .selling-online-block .header .subtitle {
    font-size: 1.5rem;
  }
  .selling-online-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .selling-online-block {
    margin-bottom: 12.5rem;
  }
  .selling-online-block .header {
    margin-bottom: 7.5rem;
  }
  .selling-online-block .header h2 {
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

<style>
/* Futures slider styles */
.futures-slider .splide__track,
.futures-slider .splide__list {
  overflow: visible;
}
.futures-slider .splide__list .splide__slide {
  flex: 0 0 27rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
}
.futures-slider .splide__list:hover .splide__slide {
  filter: blur(4px);
}
.futures-slider .splide__list .splide__slide:hover {
  transform: translateY(-0.25rem) scale(1.05);
  filter: blur(0);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
}
.futures-slider .splide__list .splide__slide .title {
  margin-bottom: 1.5rem;
}
.futures-slider .splide__list .splide__slide h3 {
  font-weight: 700;
  font-size: 1.63rem;
}
.futures-slider .splide__list .splide__slide .icon {
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--brand-200);
  padding: 0.75rem;
  font-size: 2rem;
}
.futures-slider .splide__list .splide__slide .icon > * {
  background: var(--brand-black);
}
.futures-slider .splide__list .splide__slide .text {
  font-size: 1.5rem;
}
</style>
