<script lang="ts"></script>

<template>
  <div
    class="common-topics-block"
    data-section="blog"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <!-- Content -->
    <div class="row justify-content-center text-center">
      <!-- Header -->
      <div class="header col-12 col-lg-8">
        <!-- Title -->
        <h2
          data-cursor-magnify
          data-reveal-self="rotate"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <span> الموضوعات الشائعة </span>
        </h2>
      </div>

      <!-- Topics -->
      <div class="col-12">
        <div class="topics--list">
          <!-- Item -->
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>

          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
          </div>
          <div
            class="item"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="type">مقال</div>
            <!-- Title -->
            <a href="./help-center-topic.html" class="title stretched-link" data-cursor-hidden>
              <h3>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى.
              </h3>
            </a>
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
.common-topics-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.common-topics-block > *:not(.background) {
  z-index: 1;
}
.common-topics-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.common-topics-block > .background > .bg-1 {
  top: 50%;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  width: 200%;
}
.common-topics-block > .background > .bg-dotted {
  top: -80px;
  right: -40px;
  transform: translateY(0px);
  -webkit-animation: floatY_dotted 6s ease-in-out infinite;
  animation: floatY_dotted 6s ease-in-out infinite;
}
.common-topics-block > .background > .bg-dotted > * {
  transform: scale(0.8);
  margin-left: auto;
}
.common-topics-block .header {
  margin-bottom: 5rem;
}
.common-topics-block .header h2 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.common-topics-block .topics--list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  user-select: none;
  text-align: start;
}
.common-topics-block .topics--list .item {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 2px solid var(--brand-white);
  border-radius: 1.13rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem 1.5rem 1rem;
}
.common-topics-block .topics--list .item:hover,
.common-topics-block .topics--list .item:focus,
.common-topics-block .topics--list .item.active {
  border-color: var(--brand-500);
}
.common-topics-block .topics--list .item a {
  transition: all 0.3s ease-in-out;
  color: inherit;
  text-decoration: none;
}
.common-topics-block .topics--list .item h3 {
  position: relative;
  transition: all 0.3s ease-in-out;
  padding-left: 3rem;
  font-weight: 400;
  font-size: 1.25rem;
}
.common-topics-block .topics--list .item h3:before {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
  pointer-events: none;
  content: '';
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3C!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --%3E%3Cpath fill='currentColor' d='M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z'/%3E%3C/svg%3E");
}
.common-topics-block .topics--list .item:hover h3:before {
  left: 0.5rem;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .common-topics-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
  .common-topics-block .header h2 {
    font-size: 2.5rem;
  }
  .common-topics-block .header .subtitle {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .common-topics-block {
    margin-bottom: 12.5rem;
  }
  .common-topics-block .header {
    margin-bottom: 7.5rem;
  }
  .common-topics-block .header h2 {
    font-size: 3rem;
  }
  .common-topics-block .topics--list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
