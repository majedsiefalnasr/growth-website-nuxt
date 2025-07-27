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
 * Blog item type.
 * @typedef {Object} Blog
 * @property {string} title - The blog title.
 * @property {string} subtitle - The blog subtitle.
 * @property {string} content - The blog content.
 * @property {string} image - The image source for the blog.
 * @property {string} date - The publication date for the blog.
 * @property {string} reading_time - The time it takes to read the blog.
 * @property {string} [url] -The URL for the blog post.
 * @property {Array<{ name: string; url: string }>} [categories] - The categories associated with the blog.
 */
interface Blog {
  title: string
  subtitle?: string
  content?: string
  image?: string
  date?: string
  reading_time?: string
  url?: string
  categories?: { name: string; url: string }[]
}

/**
 * Returns the Blogs to display in the slider.
 * @returns {Blog[]} Array of blog objects.
 */
const blogs: Blog[] = [
  {
    title: 'مرحبا بك في منصة حلول!',
    subtitle:
      'بدون خبرة تقنية وبكل سهولة يمكنك البيع في أي مكان وزمان بمتجر إلكتروني خاص بك وبهويتك التجارية',
    content:
      'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.',
    image: '/assets/images/blog/blog-ex1.png',
    date: '2023-01-01',
    reading_time: '5 دقائق',
    url: './single-blog.html',
    categories: [
      {
        name: 'تصنيف',
        url: './category.html',
      },
      {
        name: 'تصنيف آخر',
        url: './category.html',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/blog/blog-ex2.png',
    date: '2023-01-02',
    reading_time: '4 دقائق',
    url: './single-blog.html',
    categories: [
      {
        name: 'تصنيف',
        url: './category.html',
      },
      {
        name: 'تصنيف آخر',
        url: './category.html',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/blog/blog-ex3.png',
    date: '2023-01-03',
    reading_time: '6 دقائق',
    url: './single-blog.html',
    categories: [
      {
        name: 'تصنيف',
        url: './category.html',
      },
      {
        name: 'تصنيف آخر',
        url: './category.html',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من',
    image: '/assets/images/blog/blog-ex4.png',
    date: '2023-01-04',
    reading_time: '3 دقائق',
    url: './single-blog.html',
    categories: [
      {
        name: 'تصنيف',
        url: './category.html',
      },
      {
        name: 'تصنيف آخر',
        url: './category.html',
      },
    ],
  },
]

/**
 * Splide slider options for futures.
 * @returns {Record<string, unknown>} Splide options object.
 */
const splideOptions: Record<string, unknown> = {
  perPage: 1,
  autoplay: false,
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
    class="blog-slider"
    aria-label="blog Slider"
    data-reveal-self="translate"
    data-reveal-delay="4"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <SplideSlide v-for="(blog, idx) in blogs" :key="idx">
      <!-- Image -->
      <NuxtLink :to="blog.url" class="thumbnail" data-cursor-text="عرض المقالة">
        <img :src="blog.image" alt="Blog" />
      </NuxtLink>

      <!-- Content -->
      <div class="content">
        <!-- Categories -->
        <div class="categories">
          <NuxtLink
            v-for="(category, catIdx) in blog.categories"
            :key="catIdx"
            class="item"
            :to="category.url"
          >
            {{ category.name }}
          </NuxtLink>
        </div>

        <!-- Header -->
        <div class="header">
          <!-- Title -->
          <h3>
            <NuxtLink :to="blog.url" class="title stretched-link" data-cursor-text="عرض المقالة">
              {{ blog.title }}
            </NuxtLink>
          </h3>

          <!-- Subtitle -->
          <div class="subtitle">
            {{ blog.subtitle }}
          </div>
        </div>

        <!-- Excerpt -->
        <div class="excerpt">
          {{ blog.content }}
        </div>

        <!-- Info -->
        <div class="info">{{ blog.date }} · {{ blog.reading_time }}</div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style>
.blog-slider.splide {
  padding-bottom: 4rem;
}
.blog-slider .splide__track,
.blog-slider .splide__list {
  overflow: visible;
}
.blog-slider .splide__pagination {
  bottom: -2.5rem;
}
.blog-slider .splide__pagination .splide__pagination__page {
  transition: all 0.6s ease-out;
  margin: 0.25rem;
  border-radius: 2rem;
  width: 0.5rem;
  height: 0.5rem;
}
.blog-slider .splide__pagination .splide__pagination__page.is-active {
  transform: scale(1);
  background: var(--brand-500);
  width: 2rem;
}
.blog-slider .splide__arrows {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  gap: 1rem;
  transform: translateX(-50%);
}
.blog-slider .splide__arrow {
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
.blog-slider .splide__arrow:hover {
  transform: scale(1.1);
  opacity: 1;
}
.blog-slider .splide__arrow svg {
  width: 2.2em;
  height: 2.2em;
}
.blog-slider .splide__arrow--prev svg {
  transform: rotate(0);
}
.blog-slider .splide__arrow--next svg {
  transform: rotate(180deg);
}
.blog-slider .splide__arrow--prev:disabled,
.blog-slider .splide__arrows--rtl .splide__arrow--prev:disabled,
.blog-slider .splide__arrow--next:disabled,
.blog-slider .splide__arrows--rtl .splide__arrow--next:disabled {
  opacity: 0;
}
.blog-slider .splide__list:hover .splide__slide {
  filter: blur(4.8px);
}
.blog-slider .splide__list:hover .splide__slide:hover {
  filter: none;
}
.blog-slider .splide__list .splide__slide {
  display: flex;
  flex-direction: column;
  flex-direction: row;
  gap: 4rem;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.blog-slider .splide__list .splide__slide img {
  height: 12.5rem;
  object-fit: cover;
}
.blog-slider .splide__list .splide__slide .content .header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.blog-slider .splide__list .splide__slide .content .header .title {
  font-weight: 600;
  font-size: 2rem;
}
.blog-slider .splide__list .splide__slide .content .header .subtitle {
  display: -webkit-box;
  font-weight: 500;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-slider .splide__list .splide__slide .content .excerpt {
  display: none;
}
.blog-slider .splide__slide .content .author {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
}
.blog-slider .splide__list .splide__slide .content .author img {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
.blog-slider .splide__slide .content .author .headline {
  font-size: 0.75rem;
}
.blog-slider .item {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.blog-slider.images .splide__list .splide__slide img {
  box-shadow:
    rgb(0 0 0 / 30%) 0px 30px 60px -10px,
    rgb(0 0 0 / 33%) 0px 18px 36px -18px;
  border-radius: 1rem;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
.blog-slider .splide__list .splide__slide .thumbnail {
  z-index: 3;
  margin-bottom: 1.5rem;
  box-shadow:
    rgb(0 0 0 / 30%) 0px 30px 60px -10px,
    rgb(0 0 0 / 33%) 0px 18px 36px -18px;
  border-radius: 1rem;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.blog-slider .splide__list .splide__slide .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blog-slider .splide__list .splide__slide .content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
}
.blog-slider .splide__list .splide__slide .content .categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 2;
  margin-bottom: 0 !important;
  overflow-x: auto;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}
.blog-slider .splide__list .splide__slide .content .categories .item {
  transition: all 0.3s ease-in-out;
  border-radius: 10rem;
  background: var(--brand-100);
  padding: 0.5rem 1.5rem;
  scroll-snap-align: start;
  color: var(--brand-500);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
}
.blog-slider .splide__list .splide__slide .content .categories .item:hover {
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.blog-slider .splide__list .splide__slide .content .header {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 0 !important;
}
.blog-slider .splide__list .splide__slide .content .header .title {
  transition: all 0.3s ease-in-out;
  color: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
}
.blog-slider .splide__list .splide__slide .content .header .title {
  font-size: 1.75rem;
}
.blog-slider .splide__list .splide__slide .content .header .subtitle {
  display: -webkit-box;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-slider .splide__list .splide__slide .content .info {
  opacity: 0.6;
  margin-top: 1rem;
  font-size: 0.88rem;
}
.blog-slider .splide__list .splide__slide .thumbnail:hover ~ .content .header .title,
.blog-slider .splide__list .splide__slide .content .header .title:hover {
  color: var(--brand-700);
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .blog-slider .splide__list .splide__slide .content .header .title {
    font-size: 2rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .blog-slider.splide {
    padding-bottom: 0;
  }
  .blog-slider .splide__arrows {
    position: absolute;
    top: 50%;
    bottom: unset;
    left: unset;
    transform: translateX(0) translateY(-50%);
    z-index: 1;
    width: 100%;
  }
  .blog-slider .splide__arrow {
    position: absolute;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
  .blog-slider .splide__arrow--prev {
    right: 1rem !important;
    left: unset !important;
  }
  .blog-slider .splide__arrows--rtl .splide__arrow--next {
    right: auto !important;
    left: -1.5rem !important;
  }
  .blog-slider .splide__arrow--next {
    right: unset !important;
    left: 1rem !important;
  }
  .blog-slider .splide__arrows--rtl .splide__arrow--prev {
    right: -1.5rem !important;
    left: auto !important;
  }
  .blog-slider .splide__arrow:hover {
    height: 4rem;
  }
  .blog-slider .splide__list .splide__slide {
    flex-direction: row;
    gap: 4rem;
  }
  .blog-slider .splide__list .splide__slide .content {
    padding-left: 6rem;
  }
  .blog-slider .splide__list .splide__slide .thumbnail {
    margin-bottom: 0;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .blog-slider .splide__list .splide__slide {
    flex-direction: row;
  }
  .blog-slider .splide__list .splide__slide img {
    width: 50%;
    height: 100%;
  }
  .blog-slider .splide__list .splide__slide .content {
    height: 100%;
    min-height: 30rem;
  }
  .blog-slider .splide__list .splide__slide .content .excerpt {
    display: block;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
