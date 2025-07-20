<script lang="ts"></script>

<template>
  <div
    class="faq-block"
    data-section="faq"
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
          <span>تعلم المزيد عن البيع عبر الإنترنت</span>
        </h2>

        <!-- Subtitle -->
        <div
          class="subtitle"
          data-reveal-self="translate-up"
          data-reveal-delay="2"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          بعض الأسئلة التي تتكرر من عملاء Growth وزوار الموقع.
        </div>
      </div>

      <!-- Accordion list -->
      <div class="col-12 col-lg-8 pb-5">
        <div
          id="faq_accordion"
          class="accordion faq_accordion"
          accordion
          data-reveal-self
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <div class="accordion-item" style="--reveal-delay: calc(1 * 0.05s + 0.2s)">
            <h3 id="headingOne" class="accordion-header" data-cursor-magnify-sm>
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faq_accordion"
            >
              <div class="accordion-body">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            </div>
          </div>
          <div class="accordion-item" style="--reveal-delay: calc(2 * 0.05s + 0.2s)">
            <h3 id="headingTwo" class="accordion-header" data-cursor-magnify-sm>
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faq_accordion"
            >
              <div class="accordion-body">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            </div>
          </div>
          <div class="accordion-item" style="--reveal-delay: calc(3 * 0.05s + 0.2s)">
            <h3 id="headingThree" class="accordion-header" data-cursor-magnify-sm>
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faq_accordion"
            >
              <div class="accordion-body">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                زيادة عدد الحروف التى يولدها التطبيق.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="footer col-12 col-lg-8 text-center mt-5"
        data-reveal-self="translate-up"
        data-reveal-delay="4"
        data-scrolled-into-view="false"
        data-scrolled-past-view="false"
      >
        <div>هل لديك أي سؤال؟</div>

        <!-- Action -->
        <NuxtLink to="/contact" class="btn btn-secondary btn-stretch mt-4" data-cursor-stick>
          تواصل معنا
        </NuxtLink>
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
.faq-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.faq-block > *:not(.background) {
  z-index: 1;
}
.faq-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.faq-block > .background > .bg-dotted {
  right: -100px;
  bottom: -100px;
  transform: translateY(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.faq-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.faq-block .header {
  margin-bottom: 5rem;
}
.faq-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.faq-block .header .subtitle {
  font-size: 1.25rem;
}
.faq_accordion {
  padding: 0 2rem;
}
.faq_accordion[data-reveal-self] .accordion-item {
  -webkit-transform: translate(-2rem, 0);
  transform: translate(-2rem, 0);
  opacity: 0;
  -webkit-transition-property:
    opacity,
    -webkit-transform;
  transition-property:
    opacity,
    -webkit-transform;
  -o-transition-property: opacity, transform;
  transition-property: opacity, transform;
  transition-property:
    opacity,
    transform,
    -webkit-transform;
  -webkit-transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}
.faq_accordion[data-reveal-self][data-has-intersected='true'] .accordion-item {
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition-delay: var(--reveal-delay);
  -o-transition-delay: var(--reveal-delay);
  transition-delay: var(--reveal-delay);
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
}
.faq_accordion .accordion-button {
  padding: 2rem 0 2rem 2.5rem;
  font-size: 1.13rem;
  line-height: 150%;
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .faq-block .header h2 {
    font-size: 2.5rem;
  }
  .faq-block .header .subtitle {
    font-size: 1.5rem;
  }
  .faq-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .faq_accordion .accordion-button {
    font-size: 1.25rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .faq-block {
    margin-bottom: 12.5rem;
  }
  .faq-block .header {
    margin-bottom: 7.5rem;
  }
  .faq-block .header h2 {
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
