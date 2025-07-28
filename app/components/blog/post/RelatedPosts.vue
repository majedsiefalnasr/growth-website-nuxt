<script setup lang="ts"></script>

<template>
  <div class="related--posts col-12">
    <!-- Title -->
    <h3 class="title" data-cursor-magnify-sm>المزيد من المقالات من Growth</h3>

    <!-- List -->
    <div class="blog--list">
      <!-- Item -->
      <BlogListItem
        image="/assets/images/blog/blog-ex1.png"
        title="مرحبا بك في منصة حلول!"
        date="23 سبتمبر 2022"
        :excerpt="'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.'"
        :categories="[
          {
            name: 'تصنيف',
            link: '/blog/category',
          },
          {
            name: 'تصنيف',
            link: '/blog/category',
          },
        ]"
        post-link="/blog/post"
        read-time="9 دقائق"
        size="big"
      />
      <!-- Item -->
      <BlogListItem
        image="/assets/images/blog/blog-ex2.png"
        title="مرحبا بك في منصة حلول!"
        date="23 سبتمبر 2022"
        :excerpt="'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.'"
        :categories="[
          {
            name: 'تصنيف',
            link: '/blog/category',
          },
          {
            name: 'تصنيف',
            link: '/blog/category',
          },
        ]"
        post-link="/blog/post"
        read-time="9 دقائق"
      />
    </div>
  </div>
</template>

<style scoped>
.related--posts > .title {
  display: flex;
  align-items: center;
  gap: 2rem;
  opacity: 0.5;
  margin-bottom: 5rem;
  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;
}
.related--posts > .title:after {
  background: #c5c5c5;
  width: 100%;
  height: 0.06rem;
  content: '';
}
.blog--list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
  .blog--list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    gap: 2.5rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .blog--list {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
