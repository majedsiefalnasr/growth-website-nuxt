<script lang="ts"></script>

<template>
  <div
    class="help-center-hero-block"
    data-section="blog-hero"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row">
      <!-- Title -->
      <div class="col-12 col-lg-8">
        <div class="d-flex flex-column" text>
          <h1
            data-cursor-magnify-inner
            class="mb-4"
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span> مركز المساعدة </span>
          </h1>

          <div
            class="text"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            كل معرفتنا في متناول يدك. اسال اسئلتك. تصفح المقالات. ابحث عن اجابات.
          </div>

          <!-- Search form -->
          <div
            data-cursor-hidden
            class="search-bar d-flex form-inputs"
            data-reveal-self="translate-up"
            data-reveal-delay="3"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <Icon name="ph:magnifying-glass" />
            <input class="form-control" type="text" placeholder="كيف يمكننا مساعدتك" />
          </div>
        </div>
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
.help-center-hero-block {
  position: relative;
  z-index: 0;
  margin-bottom: 6rem;
  padding-top: 10rem;
}
.help-center-hero-block > *:not(.background) {
  z-index: 1;
}
.help-center-hero-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.help-center-hero-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
.help-center-hero-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.help-center-hero-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.help-center-hero-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.help-center-hero-block [text] .text {
  font-size: 1.25rem;
}
.help-center-hero-block [text] .search-bar {
  position: relative;
  margin-top: 2rem;
}
.help-center-hero-block [text] .search-bar .icon {
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1.5rem;
}
.help-center-hero-block [text] .search-bar input {
  transition: all 0.3s ease-in-out;
  border: 2px solid var(--brand-white);
  border-radius: 1.13rem;
  padding-right: 3.5rem;
  height: 55px;
}
.help-center-hero-block [text] .search-bar input:focus {
  box-shadow: none;
  border-color: var(--brand-500);
}
.help-center-hero-block
  [topics]
  .item
  .links
  > *:active
  .help-center-hero-block
  [topics]
  .item
  .links
  > *.active {
  border-color: var(--brand-500);
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .help-center-hero-block [text] h1 {
    font-size: 2.75rem;
  }
  .help-center-hero-block [text] .text {
    font-size: 1.5rem;
  }
  .help-center-hero-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .help-center-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .help-center-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .help-center-hero-block > .background > .bg-1 {
    width: 200%;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .help-center-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .help-center-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .help-center-hero-block > .background > .bg-1 {
    width: 100%;
  }
}
</style>
