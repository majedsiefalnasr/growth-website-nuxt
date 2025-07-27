<script lang="ts"></script>

<template>
  <div
    class="distinguish-brand-block"
    data-section="distinguish-brand"
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
          <span> ميّز علامتك التجارية </span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          اختر الألوان والصور والخطوط بسهولة دون خبرة في التصميم!
        </div>
      </div>

      <!-- Futures list -->
      <div class="col-12 col-lg-8">
        <!-- Content for scroll purpose -->
        <div
          class="list"
          data-reveal-self="translate"
          data-reveal-delay="4"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <div class="content">
            <!-- Item -->
            <div class="item">
              <div class="d-flex flex-column flex-md-row gap-4">
                <!-- Content -->
                <div class="content">
                  <!-- Icon -->
                  <div class="icon">
                    <span class="iconify i-ph:gear icon" aria-hidden="true" style=""></span>
                  </div>
                  <!-- Title -->
                  <h3 class="mt-4 mb-2">لا حاجه لخبره بالتصميم او البرمجة</h3>
                  <!-- Content -->
                  <div class="text">
                    وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة
                  </div>
                </div>

                <!-- Image -->
                <img src="/assets/images/future-ex.png" alt="Futures" />
              </div>
            </div>

            <div class="item">
              <div class="d-flex flex-column flex-md-row gap-4">
                <!-- Content -->
                <div class="content">
                  <!-- Icon -->
                  <div class="icon">
                    <span class="iconify i-ph:gear icon" aria-hidden="true" style=""></span>
                  </div>
                  <!-- Title -->
                  <h3 class="mt-4 mb-2">لا حاجه لخبره بالتصميم او البرمجة</h3>
                  <!-- Content -->
                  <div class="text">
                    وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة
                  </div>
                </div>

                <!-- Image -->
                <img src="/assets/images/future-ex.png" alt="Futures" />
              </div>
            </div>

            <div class="item">
              <div class="d-flex flex-column flex-md-row gap-4">
                <!-- Content -->
                <div class="content">
                  <!-- Icon -->
                  <div class="icon">
                    <span class="iconify i-ph:gear icon" aria-hidden="true" style=""></span>
                  </div>
                  <!-- Title -->
                  <h3 class="mt-4 mb-2">لا حاجه لخبره بالتصميم او البرمجة</h3>
                  <!-- Content -->
                  <div class="text">
                    وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة
                  </div>
                </div>

                <!-- Image -->
                <img src="/assets/images/future-ex.png" alt="Futures" />
              </div>
            </div>

            <div class="item">
              <div class="d-flex flex-column flex-md-row gap-4">
                <!-- Content -->
                <div class="content">
                  <!-- Icon -->
                  <div class="icon">
                    <span class="iconify i-ph:gear icon" aria-hidden="true" style=""></span>
                  </div>
                  <!-- Title -->
                  <h3 class="mt-4 mb-2">لا حاجه لخبره بالتصميم او البرمجة</h3>
                  <!-- Content -->
                  <div class="text">
                    وفّر لعملائك خيارات متعددة للشراء من متجرك و فعّلها بكل سهولة
                  </div>
                </div>

                <!-- Image -->
                <img src="/assets/images/future-ex.png" alt="Futures" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background -->
    <div class="background">
      <div class="bg-1">
        <img src="/assets/images/ellipse-2.png" alt="background element" />
      </div>

      <div class="bg-dotted">
        <img src="/assets/images/bg-dots.png" alt="background element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.distinguish-brand-block {
  position: relative;
  z-index: 0;
  margin-bottom: 2.75rem;
}
.distinguish-brand-block > *:not(.background) {
  z-index: 1;
}
.distinguish-brand-block > .background > * {
  position: absolute;
  z-index: -1;
  pointer-events: none;
  text-align: center;
}
.distinguish-brand-block > .background > .bg-1 {
  top: 0;
  right: 0;
  transform: translateX(50%) translateY(-30%);
  height: 200%;
}
.distinguish-brand-block > .background > .bg-1 > * {
  height: 100%;
}
.distinguish-brand-block > .background > .bg-dotted {
  top: 20px;
  left: -80px;
  transform: translateY(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.distinguish-brand-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.distinguish-brand-block .header {
  margin-bottom: 5rem;
}
.distinguish-brand-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.distinguish-brand-block .header .subtitle {
  font-size: 1.25rem;
}
.distinguish-brand-block .list .content .item {
  --top: 12rem;
  position: sticky;
  top: var(--top);
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.distinguish-brand-block .list .content .item > * {
  transform: rotate(2deg);
  margin-bottom: 8rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
}
.distinguish-brand-block .list .content .item:nth-child(2) {
  transform: rotate(-5deg);
}
.distinguish-brand-block .list .content .item:nth-child(3) {
  transform: translateY(1rem) rotate(3deg);
}
.distinguish-brand-block .list .content .item:nth-child(4) {
  transform: translateY(1rem) rotate(-4deg);
}
.distinguish-brand-block .list .content .item .title {
  margin-bottom: 1.5rem;
}
.distinguish-brand-block .list .content .item h3 {
  font-weight: 700;
  font-size: 1.63rem;
}
.distinguish-brand-block .list .content .item .icon {
  display: inline-flex;
  border-radius: 50%;
  background-color: var(--brand-200);
  padding: 0.75rem;
  font-size: 2rem;
}
.distinguish-brand-block .list .content .item .icon > * {
  background: var(--brand-black);
}
.distinguish-brand-block .list .content .item .text {
  font-size: 1.5rem;
}
.distinguish-brand-block .list .content .item img {
  border-radius: 1rem;
  width: 100%;
}
.distinguish-brand-block .marquee {
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
.distinguish-brand-block .marquee__group {
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  gap: var(--gap);
  animation: scroll-x var(--duration) linear infinite;
  min-width: 100%;
}
@media (prefers-reduced-motion: reduce) {
  .distinguish-brand-block .marquee__group {
    animation-play-state: paused;
  }
}
.distinguish-brand-block .marquee--vertical {
  --mask-direction: to bottom;
}
.distinguish-brand-block .marquee--vertical,
.distinguish-brand-block .marquee--vertical .marquee__group {
  flex-direction: column;
}
.distinguish-brand-block .marquee--vertical .marquee__group {
  animation-name: scroll-y;
}
.distinguish-brand-block .marquee--reverse .marquee__group {
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
.distinguish-brand-block .marquee__group .item {
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
  height: 100%;
}
.distinguish-brand-block [splide] .splide__track {
  overflow: visible;
}
.distinguish-brand-block [splide] .content .item {
  flex: none;
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .distinguish-brand-block .header h2 {
    font-size: 2.5rem;
  }
  .distinguish-brand-block .header .subtitle {
    font-size: 1.5rem;
  }
  .distinguish-brand-block > .background > .bg-dotted > * {
    transform: scale(0.8);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .distinguish-brand-block .list .content .item img {
    width: 50%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .distinguish-brand-block {
    margin-bottom: 6.5rem;
  }
  .distinguish-brand-block .header {
    margin-bottom: 7.5rem;
  }
  .distinguish-brand-block .header h2 {
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
