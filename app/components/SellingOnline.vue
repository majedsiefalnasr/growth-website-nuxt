<script lang="ts"></script>

<template>
  <div
    class="selling-online-block"
    data-section="selling-online"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row">
      <!-- Header -->
      <div class="header col-12 col-lg-8">
        <!-- Title -->
        <h2
          data-cursor-magnify-inner
          data-reveal-self="rotate"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <span> البيع عبر الإنترنت لم يكن </span>
          <span> أسهل من أي وقت مضى </span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          أنشئ متجرك في دقائق واجعل علامتك التجارية تنبض بالحياة
        </div>
      </div>

      <!-- Futures list -->
      <div class="col-12">
        <!-- Futures Slider -->
        <SellingOnlineSlider />
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.selling-online-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.selling-online-block > *:not(.background) {
  z-index: 1;
}
.selling-online-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.selling-online-block > .background > .bg-dotted {
  right: -100px;
  bottom: -100px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.selling-online-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.selling-online-block .header {
  margin-bottom: 5rem;
}
.selling-online-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.selling-online-block .header .subtitle {
  font-size: 1.25rem;
}

/* Responsiveness */
/********************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .selling-online-block .header h2 {
    font-size: 2.5rem;
  }
  .selling-online-block .header .subtitle {
    font-size: 1.5rem;
  }
  .selling-online-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .selling-online-block {
    margin-bottom: 12.5rem;
  }
  .selling-online-block .header {
    margin-bottom: 7.5rem;
  }
  .selling-online-block .header h2 {
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
