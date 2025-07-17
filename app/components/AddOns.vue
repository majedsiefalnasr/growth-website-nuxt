<script lang="ts"></script>

<template>
  <div
    class="add-ons-block"
    data-section="add-ons"
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
          <span> أضف المزيد من الميزات </span>
          <span> والوظائف إلى متجرك </span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
          النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
          الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        </div>
      </div>

      <!-- Futures list -->
      <div
        rotate-reverse-2
        class="list col-12"
        data-cursor-magnify
        data-reveal-self="translate"
        data-reveal-delay="4"
        data-scrolled-into-view="false"
        data-scrolled-past-view="false"
      >
        <!-- Content for scroll purpose -->
        <div class="marquee">
          <div class="marquee__group">
            <!-- Item -->
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-1.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-2.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-3.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-4.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-5.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-6.png" alt="service" />
            </div>
          </div>

          <div aria-hidden="true" class="marquee__group">
            <!-- Item -->
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-1.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-2.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-3.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-4.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-5.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-6.png" alt="service" />
            </div>
          </div>
        </div>

        <div class="marquee marquee--reverse">
          <div class="marquee__group">
            <!-- Item -->
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-7.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-8.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-9.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-10.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-11.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-12.png" alt="service" />
            </div>
          </div>

          <div aria-hidden="true" class="marquee__group">
            <!-- Item -->
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-7.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-8.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-9.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-10.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-11.png" alt="service" />
            </div>
            <div class="item">
              <!-- Image -->
              <img src="/assets/images/services/services-12.png" alt="service" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-1">
        <img src="/assets/images/ellipse-3.png" alt="background element" />
      </div>

      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-ons-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.add-ons-block > *:not(.background) {
  z-index: 1;
}
.add-ons-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.add-ons-block > .background > .bg-1 {
  top: 50%;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  width: 200%;
}
.add-ons-block > .background > .bg-dotted {
  bottom: -80px;
  left: -40px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.add-ons-block > .background > .bg-dotted > * {
  transform: scale(0.8);
  margin-right: auto;
}
.add-ons-block .header {
  margin-bottom: 5rem;
}
.add-ons-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.add-ons-block .header .subtitle {
  font-size: 1.25rem;
}
.add-ons-block .marquee {
  --gap: 24px;
  --duration: 60s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));
  display: flex;
  gap: var(--gap);
  -webkit-mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
  mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
  margin: auto -200px;
  margin-bottom: var(--gap);
  overflow: hidden;
  direction: ltr;
  user-select: none;
}
.add-ons-block .marquee__group {
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  gap: var(--gap);
  animation: scroll-x var(--duration) linear infinite;
  min-width: 100%;
}
@media (prefers-reduced-motion: reduce) {
  .add-ons-block .marquee__group {
    animation-play-state: paused;
  }
}
.add-ons-block .marquee--vertical {
  --mask-direction: to bottom;
}
.add-ons-block .marquee--vertical,
.add-ons-block .marquee--vertical .marquee__group {
  flex-direction: column;
}
.add-ons-block .marquee--vertical .marquee__group {
  animation-name: scroll-y;
}
.add-ons-block .marquee--reverse .marquee__group {
  animation-delay: -3s;
  animation-direction: reverse;
}
@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
@keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }
  to {
    transform: translateY(var(--scroll-end));
  }
}
.add-ons-block .marquee__group .item {
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
  height: 100%;
}
.add-ons-block .marquee__group .item img {
  height: 2.38rem;
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .add-ons-block .header h2 {
    font-size: 2.5rem;
  }
  .add-ons-block .header .subtitle {
    font-size: 1.5rem;
  }
  .add-ons-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .add-ons-block {
    margin-bottom: 12.5rem;
  }
  .add-ons-block .header {
    margin-bottom: 7.5rem;
  }
  .add-ons-block .header h2 {
    font-size: 3rem;
  }
  .add-ons-block .marquee__group .item img {
    height: 3.25rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
