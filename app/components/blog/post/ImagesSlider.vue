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
 * Props for ImagesSlider component.
 * @typedef {Object} ImagesSliderProps
 * @property {Array<{ url: string; alt: string }>} images - Array of post images to display in the slider.
 */
interface ImageItem {
  url: string
  alt: string
}

/**
 * Defines the props for the ImagesSlider component.
 */
defineProps<{ images: ImageItem[] }>()

/**
 * Splide slider options for futures.
 * @returns {Record<string, unknown>} Splide options object.
 */
const splideOptions: Record<string, unknown> = {
  perPage: 1,
  autoplay: true,
  type: 'loop',
  breakpoints: {
    767.98: {
      gap: 32,
      perPage: 1.2,
    },
  },
  perMove: 1,
  direction: currentLocaleDir,
  gap: 64,
  speed: 800,
  arrows: true,
  pagination: true,
  lazyLoad: 'nearby',
  focus: 'center',
  omitEnd: true,
  trimSpace: false,
  arrowPath:
    'M24.7264 30.667C24.6229 30.7725 24.4994 30.8562 24.3631 30.9134C24.2269 30.9706 24.0806 31 23.9329 31C23.7851 31 23.6388 30.9706 23.5026 30.9134C23.3664 30.8562 23.2429 30.7725 23.1394 30.667C22.9332 30.4575 22.8177 30.1754 22.8177 29.8815C22.8177 29.5876 22.9332 29.3055 23.1394 29.096L31.1864 21.049L4.63237 21.049C4.01337 21.049 3.50537 20.557 3.50537 19.938C3.50537 19.319 4.01337 18.811 4.63237 18.811L31.1864 18.811L23.1394 10.779C22.7104 10.335 22.7104 9.62004 23.1394 9.19204C23.2429 9.08661 23.3664 9.00286 23.5026 8.94569C23.6388 8.88852 23.7851 8.85908 23.9329 8.85908C24.0806 8.85908 24.2269 8.88852 24.3631 8.94569C24.4994 9.00286 24.6229 9.08661 24.7264 9.19204L34.6784 19.144C34.8845 19.3535 35 19.6356 35 19.9295C35 20.2234 34.8845 20.5055 34.6784 20.715L24.7264 30.667Z',
}
</script>

<template>
  <Splide
    :options="splideOptions"
    class="images-slider"
    aria-label="Images Slider"
    data-cursor-text="Drag"
    data-reveal-self="translate"
    data-reveal-delay="5"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <SplideSlide v-for="(image, idx) in images" :key="idx">
      <!-- Image -->
      <div class="ratio ratio-16x9">
        <img :src="image.url" :alt="image.alt" />
      </div>
    </SplideSlide>
  </Splide>
</template>

<style>
.images-slider.splide {
  padding-bottom: 4rem;
}
.images-slider .splide__track,
.images-slider .splide__list {
  overflow: visible;
}
.images-slider .splide__pagination {
  bottom: -4rem;
}
.images-slider .splide__pagination .splide__pagination__page {
  transition: all 0.6s ease-out;
  margin: 0.25rem;
  border-radius: 2rem;
  width: 0.5rem;
  height: 0.5rem;
}
.images-slider .splide__pagination .splide__pagination__page.is-active {
  transform: scale(1);
  background: var(--brand-500);
  width: 2rem;
}
.images-slider .splide__arrows {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  gap: 1rem;
  transform: translateX(-50%);
}
.images-slider .splide__arrow {
  position: relative;
  top: 0 !important;
  right: 0 !important;
  left: 0 !important;
  transform: translateX(0);
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
  box-shadow: rgb(0 0 0 / 5%) 10px 15px 21px 11px;
  border-radius: 0.75rem;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  width: 3.5rem;
  height: 3rem;
}
.images-slider .splide__arrow:hover {
  transform: scale(1.1);
  opacity: 1;
}
.images-slider .splide__arrow svg {
  width: 2.2em;
  height: 2.2em;
}
.images-slider .splide__arrow--prev svg {
  transform: rotate(0);
}
.images-slider .splide__arrow--next svg {
  transform: rotate(180deg);
}
.images-slider .splide__arrow--prev:disabled,
.images-slider .splide__arrows--rtl .splide__arrow--prev:disabled,
.images-slider .splide__arrow--next:disabled,
.images-slider .splide__arrows--rtl .splide__arrow--next:disabled {
  opacity: 0;
}
.ratio img {
  transition:
    transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  box-shadow:
    rgb(0 0 0 / 30%) 0px 30px 60px -10px,
    rgb(0 0 0 / 33%) 0px 18px 36px -18px;
  border-radius: 1rem;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .images-slider.splide {
    padding-bottom: 0;
  }
  .images-slider .splide__arrows {
    position: absolute;
    top: 50%;
    bottom: unset;
    left: unset;
    transform: translateX(0) translateY(-50%);
    z-index: 1;
    width: 100%;
  }
  .images-slider .splide__arrow {
    position: absolute;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
  .images-slider .splide__arrow--prev {
    right: 1rem !important;
    left: unset !important;
  }
  .images-slider .splide__arrows--rtl .splide__arrow--next {
    right: auto !important;
    left: -1.5rem !important;
  }
  .images-slider .splide__arrow--next {
    right: unset !important;
    left: 1rem !important;
  }
  .images-slider .splide__arrows--rtl .splide__arrow--prev {
    right: -1.5rem !important;
    left: auto !important;
  }
  .images-slider .splide__arrow:hover {
    height: 4rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
