<script setup lang="ts"></script>

<template>
  <div
    id="hero-block"
    data-section="hero"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row text-center text-xl-start justify-content-center">
      <!-- CTA -->
      <div class="col-12 col-lg-8 col-xl-5 mb-5 mb-xl-0">
        <div
          class="d-flex flex-column justify-content-center align-items-center align-items-xl-start h-100"
          text
        >
          <h1
            class="mb-5"
            data-cursor-magnify-inner
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span>ابدأ تجارتك الإلكترونية</span>
            <span>في اقل من 5 دقائق</span>
          </h1>

          <div
            class="text"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            تحول إلى التجارة الالكترونية بسهولة و سرعة و أمتلك متجر إلكتروني خاص بك بجميع مزايا
            التجارة الإلكترونية مع توفير الخدمات المساندة له ودعم فنى على مدار الساعة
          </div>

          <!-- Introduction video - play -->
          <button
            class="btn btn-play d-flex gap-2 align-items-center my-4"
            data-cursor-stick
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <Icon name="ph:play-circle-fill" />
            <span>شاهد كيف تعمل</span>
          </button>

          <!-- Register action -->
          <div
            class="d-flex flex-column gap-2 justify-content-center text-center w-100"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Action -->
            <a href="./forms/create-account.html" class="btn btn-primary btn-lg" data-cursor-stick>
              أنشئ متجرك الآن
            </a>
            <!-- Note -->
            <p>مجانًا لمدة 14 يوم بدون بطاقة بنكية أو مصاريف خفية</p>
          </div>
        </div>
      </div>

      <!-- Spacer -->
      <div class="col-12 col-xl-1 mb-5 mb-xl-0"></div>

      <!-- Futures -->
      <div class="col-12 col-xl-6 text-start">
        <HeroFutures />
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
#hero-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
  padding-top: 10rem;
}
#hero-block > *:not(.background) {
  z-index: 1;
}
#hero-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
#hero-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
#hero-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
#hero-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
#hero-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
#hero-block [text] .text {
  font-size: 1.25rem;
}
#hero-block [text] .btn-play {
  transition: all 0.3s ease-in-out;
  padding-right: 0.5rem;
  color: var(--brand-500);
  font-size: 1.13rem;
}
#hero-block [text] .btn-play em {
  font-size: 2rem;
}
#hero-block [text] .btn-play:hover {
  transform: translateY(-0.25rem);
  background-color: var(--brand-200);
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #hero-block [text] h1 {
    font-size: 2.75rem;
  }
  #hero-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #hero-block {
    margin-bottom: 12.5rem;
  }
  #hero-block [text] h1 {
    font-size: 3.5rem;
  }
  #hero-block > .background > .bg-1 {
    width: 200%;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  #hero-block [text] h1 {
    font-size: 3.5rem;
  }
  #hero-block > .background > .bg-1 {
    width: 100%;
  }
}
</style>
