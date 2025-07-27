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
 * Testimonial item type.
 * @typedef {Object} Testimonial
 * @property {string} title - The testimonial title.
 * @property {string} review - The testimonial review text.
 * @property {string} avatar - Path to the avatar image.
 * @property {string} name - Author's name.
 * @property {string} job - Author's job title.
 * @property {string} organization - Author's organization.
 */
interface Testimonial {
  title: string
  review: string
  avatar: string
  name: string
  job: string
  organization: string
}

/**
 * Returns the testimonials to display in the slider.
 * @returns {Testimonial[]} Array of testimonial objects.
 */
const testimonials: Testimonial[] = [
  {
    title: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
    review:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
    avatar: '/assets/images/avatar.png',
    name: 'Marc Peeters',
    job: 'General Manager of the Vending Division',
    organization: 'TripActions',
  },
  {
    title: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
    review:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
    avatar: '/assets/images/avatar.png',
    name: 'Marc Peeters',
    job: 'General Manager of the Vending Division',
    organization: 'TripActions',
  },
  {
    title: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
    review:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
    avatar: '/assets/images/avatar.png',
    name: 'Marc Peeters',
    job: 'General Manager of the Vending Division',
    organization: 'TripActions',
  },
]

/**
 * Splide slider options for testimonials.
 * @returns {Record<string, unknown>} Splide options object.
 */
const splideOptions: Record<string, unknown> = {
  perPage: 1.2,
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
  breakpoints: {
    991.98: {
      focus: 'center',
    },
    767.98: {
      focus: 'center',
      perPage: 1.2,
      gap: 32,
    },
    575.98: {
      focus: 'center',
      perPage: 1.4,
      gap: 16,
    },
    413.98: {
      focus: 'center',
      perPage: 1.2,
      gap: 8,
    },
  },
}
</script>

<template>
  <Splide
    :options="splideOptions"
    class="testimonials-slider"
    aria-label="Testimonials Slider"
    data-cursor-text="Drag"
    data-reveal-self="translate"
    data-reveal-delay="5"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <SplideSlide v-for="(testimonial, idx) in testimonials" :key="idx">
      <div>
        <h4>{{ testimonial.title }}</h4>
        <div class="review">{{ testimonial.review }}</div>
        <div class="author d-flex gap-4">
          <img
            class="avatar"
            :src="testimonial.avatar"
            :alt="testimonial.name + ' avatar'"
            width="50"
            height="50"
          />
          <div class="content">
            <div class="name">{{ testimonial.name }}</div>
            <div class="job">{{ testimonial.job }}</div>
            <div class="organization">{{ testimonial.organization }}</div>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style>
.testimonials-slider .splide__track,
.testimonials-slider .splide__list {
  overflow: visible;
}
.testimonials-slider .splide__list .splide__slide {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 2rem 2rem 1.5rem;
}
.testimonials-slider .splide__list .splide__slide.is-active:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
}
.testimonials-slider .splide__list .splide__slide:not(.is-active) {
  transform: scale(0.95);
  filter: blur(4.8px);
}
.testimonials-slider .splide__list .splide__slide h4 {
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
}
.testimonials-slider .splide__list .splide__slide .review {
  font-size: 1.13rem;
}
.testimonials-slider .splide__list .splide__slide .author {
  margin-top: 2.5rem;
  line-height: 120%;
}
.testimonials-slider .splide__list .splide__slide .author .avatar {
  border-radius: 3.13rem;
  width: 3.13rem;
  height: 3.13rem;
  object-fit: cover;
}
.testimonials-slider .splide__list .splide__slide .author .name {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.13rem;
}
.testimonials-slider .splide__list .splide__slide .author .job,
.testimonials-slider .splide__list .splide__slide .author .organization {
  font-size: 0.81rem;
}
</style>
