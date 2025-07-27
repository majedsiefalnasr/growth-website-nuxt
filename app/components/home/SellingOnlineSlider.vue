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
</template>

<style>
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
  font-size: 1.25rem;
}
.futures-slider .splide__list .splide__slide .text {
  font-size: 1.5rem;
}
</style>
