<script lang="ts"></script>

<template>
  <div
    class="blog-block"
    data-section="blog"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row justify-content-center">
      <!-- Header -->
      <div class="header col-12 col-lg-8 text-center">
        <!-- Title -->
        <h2
          data-cursor-magnify-inner
          data-reveal-self="rotate"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <span> كل ما تريد الوصول إليه.. وأكثر </span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          ندعمك في تطوير قدراتك.. اجعل نشاطك في مستوى أفضل دومًا
        </div>
      </div>

      <!-- Blog slider -->
      <div class="col-12">
        <!-- Blog Slider -->
        <BlogHeroSlider />
      </div>

      <!-- Footer -->
      <div
        class="footer col-12 col-lg-8 text-center mt-5"
        data-reveal-self="translate-up"
        data-reveal-delay="4"
        data-scrolled-into-view="false"
        data-scrolled-past-view="false"
      >
        <!-- Action -->
        <NuxtLink to="/blog" class="btn btn-secondary btn-stretch mt-4" data-cursor-stick>
          عرض المزيد
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.blog-block > *:not(.background) {
  z-index: 1;
}
.blog-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.blog-block .header .subtitle {
  font-size: 1.25rem;
}
.blog--hero-list .content > .item > .content .header {
  margin-bottom: 0 !important;
}

/* Responsiveness */
/******************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .blog-block .header h2 {
    font-size: 2.5rem;
  }
  .blog-block .header .subtitle {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .blog-block {
    margin-bottom: 12.5rem;
  }
  .blog-block .header {
    margin-bottom: 7.5rem;
  }
  .blog-block .header h2 {
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
