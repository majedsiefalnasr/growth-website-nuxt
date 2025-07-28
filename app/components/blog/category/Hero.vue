<script setup lang="ts">
import { blogsMock } from '@/components/blog/blogs.slider.mock'
</script>

<template>
  <div
    class="blog-hero-block"
    data-section="blog-hero"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row">
      <!-- Title -->
      <div class="col-12 col-lg-8 mb-5">
        <div class="d-flex flex-column align-items-start" text>
          <!-- Breadcrumb -->
          <div breadcrumb data-cursor-hidden>
            <!-- Breadcrumb -->
            <CommonBreadcrumb
              :items="[
                { label: 'الرئيسية', to: '/' },
                { label: 'المدونة', to: '/blog' },
                { label: 'مثال على تصنيف', to: null },
              ]"
              :back="{ label: 'عودة للمدونة ', to: '/blog' }"
            />
          </div>

          <!-- Title -->
          <h1
            data-cursor-magnify-inner
            class="mb-4"
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span> مثال على تصنيف </span>
          </h1>

          <!-- Subtitle -->
          <div
            class="text"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            ندعمك في تطوير قدراتك.. اجعل نشاطك في مستوى أفضل دومًا
          </div>
        </div>
      </div>

      <!-- Blog slider -->
      <div class="col-12">
        <BlogHeroSlider :blogs="blogsMock" />
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-1">
        <img src="/assets/images/ellipse-1.png" alt="background element" />
      </div>

      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-hero-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
  padding-top: 10rem;
}
.blog-hero-block > *:not(.background) {
  z-index: 1;
}
.blog-hero-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.blog-hero-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
.blog-hero-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.blog-hero-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.blog-hero-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.blog-hero-block [text] .text {
  font-size: 1.25rem;
}
.blog-hero-block [info] .info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}
.blog-hero-block [info] .info .avatar {
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 1.13rem;
  text-decoration: none;
}
.blog-hero-block [info] .info .avatar:hover > *:not(.date) {
  color: var(--brand-500);
}
.blog-hero-block [info] .info .avatar img {
  margin-left: 1rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
.blog-hero-block [info] .info .avatar .date {
  font-size: 0.88rem;
}
.blog-hero-block [text] .categories {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.blog-hero-block [text] .categories .item {
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
.blog-hero-block [text] .categories .item:hover {
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.blog-hero-block [text] .categories {
  z-index: 2;
  margin-bottom: 0 !important;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .blog-hero-block [text] h1 {
    font-size: 2.75rem;
  }
  .blog-hero-block [text] .text {
    font-size: 1.5rem;
  }
  .blog-hero-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .blog-hero-block [text] h1 {
    font-size: 3rem;
  }
  .blog-hero-block [text] .categories {
    flex-wrap: wrap;
    overflow-x: hidden;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .blog-hero-block {
    margin-bottom: 12.5rem;
  }
  .blog-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .blog-hero-block > .background > .bg-1 {
    width: 200%;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .blog-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .blog-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .blog-hero-block > .background > .bg-1 {
    width: 100%;
  }
}
</style>
