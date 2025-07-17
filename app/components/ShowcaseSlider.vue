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
 * Showcase item type.
 * @typedef {Object} Showcase
 * @property {string} title - The showcase title.
 * @property {string} content - The showcase content.
 * @property {string} image - The image source for the showcase.
 */
interface Showcase {
  title: string
  content?: string
  image?: string
}

/**
 * Returns the Showcases to display in the slider.
 * @returns {Showcase[]} Array of showcase objects.
 */
const showcases: Showcase[] = [
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
  },
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
  },
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
  },
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
  },
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
  },
  {
    title: 'أسم المتجر',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/future-ex.png',
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
  <Splide
    :options="splideOptions"
    class="showcase-slider"
    aria-label="Showcase Slider"
    data-cursor-text="Drag"
    data-reveal-self="translate"
    data-reveal-delay="4"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <SplideSlide v-for="(showcase, idx) in showcases" :key="idx">
      <div>
        <!-- Image -->
        <img :src="showcase.image" alt="Store" />

        <!-- Content -->
        <div class="content">
          <!-- Title -->
          <h4>{{ showcase.title }}</h4>
          <!-- Content -->
          <div class="text">
            {{ showcase.content }}
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style>
.showcase-slider .splide__track,
.showcase-slider .splide__list {
  overflow: visible;
}
.showcase-slider .splide__list .splide__slide {
  flex: 0 0 27rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  background-color: var(--brand-white);
  overflow: hidden;
}
.showcase-slider .splide__list:hover .splide__slide {
  filter: blur(2px);
}
.showcase-slider .splide__list .splide__slide:hover {
  transform: translateY(-0.25rem) scale(1.05);
  filter: blur(0);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
}
.showcase-slider .splide__list .splide__slide img {
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
}
.showcase-slider .splide__list .splide__slide .content {
  padding: 1.5rem 2rem;
}
.showcase-slider .splide__list .splide__slide h4 {
  font-weight: 700;
  font-size: 1.25rem;
}
.showcase-slider .splide__list .splide__slide .text {
  font-size: 1rem;
}
</style>
