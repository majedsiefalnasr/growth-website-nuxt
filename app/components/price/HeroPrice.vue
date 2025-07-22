<script lang="ts" setup>
import { computed, ref } from 'vue'

/**
 * State for the selected plan type (monthly or yearly)
 * @type {import('vue').Ref<'monthly' | 'yearly'>}
 */
const selectedPlanType = ref<'monthly' | 'yearly'>('yearly')

/**
 * Handler for radio input change
 * @param {Event} event - The change event from the radio input
 */
function handlePlanTypeChange(event: Event): void {
  const target = event.target as HTMLInputElement
  if (target.id === 'monthly') {
    selectedPlanType.value = 'monthly'
  } else if (target.id === 'yearly') {
    selectedPlanType.value = 'yearly'
  }
}

/**
 * Computed class for the plans container
 */
const plansClass = computed(() => ({
  plans: true,
  monthly: selectedPlanType.value === 'monthly',
  yearly: selectedPlanType.value === 'yearly',
}))
</script>

<template>
  <div
    class="price-block"
    data-section="price"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row text-center text-xl-start justify-content-center">
      <div class="col-12 col-lg-8 col-xl-10 mb-5 mb-xl-0">
        <div class="d-flex flex-column justify-content-center align-items-center text-center" text>
          <h1
            data-cursor-magnify-inner
            class="mb-4"
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span>باقات وأسعار Growth</span>
          </h1>

          <div
            class="text"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            ادفع مره واحدة واحصل على متجر ساري على مدار السنة
          </div>

          <!-- Price switcher -->
          <div
            class="switch-wrapper my-5"
            data-cursor-stick
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <input
              id="monthly"
              type="radio"
              name="switch"
              :checked="selectedPlanType === 'monthly'"
              @change="handlePlanTypeChange"
            />
            <input
              id="yearly"
              type="radio"
              name="switch"
              :checked="selectedPlanType === 'yearly'"
              @change="handlePlanTypeChange"
            />
            <label for="monthly">شهري</label>
            <label for="yearly">سنوى ( وفر 10%)</label>
            <span class="highlighter"></span>
          </div>

          <!-- Plans -->
          <div
            :class="plansClass"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
            data-reveal-delay="1"
          >
            <!-- Item -->
            <div class="item">
              <!-- Header -->
              <div class="header">
                <!-- Price -->
                <div class="price">
                  <div class="d-flex gap-2 align-items-end flex-wrap">
                    <div v-if="selectedPlanType === 'monthly'" class="value">$100</div>
                    <div v-else class="value">$1000</div>
                    <div>/ شهري</div>
                  </div>
                  <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                </div>

                <!-- Name -->
                <div class="name">اسم الباقة</div>
              </div>

              <!-- Content -->
              <div class="content">
                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Futures -->
                <div class="futures">
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                </div>
              </div>

              <!-- Action -->
              <a href="./forms/create-account.html" class="btn" data-cursor-stick> أختر الباقة </a>
            </div>

            <!-- Item - recommended-->
            <div class="item recommended active">
              <!-- Recommended label -->
              <span class="label"> موصي بها </span>

              <!-- Header -->
              <div class="header">
                <!-- Price -->
                <div class="price">
                  <div class="d-flex gap-2 align-items-end flex-wrap">
                    <div v-if="selectedPlanType === 'monthly'" class="value">$150</div>
                    <div v-else class="value">$1500</div>
                    <div>/ شهري</div>
                  </div>
                  <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                </div>

                <!-- Name -->
                <div class="name">اسم الباقة</div>
              </div>

              <!-- Content -->
              <div class="content">
                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Futures -->
                <div class="futures">
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                </div>
              </div>

              <!-- Action -->
              <a href="./forms/create-account.html" class="btn" data-cursor-stick> أختر الباقة </a>
            </div>

            <!-- Item -->
            <div class="item">
              <!-- Header -->
              <div class="header">
                <!-- Price -->
                <div class="price">
                  <div class="d-flex gap-2 align-items-end flex-wrap">
                    <div v-if="selectedPlanType === 'monthly'" class="value">$200</div>
                    <div v-else class="value">$2000</div>
                    <div>/ شهري</div>
                  </div>
                  <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                </div>

                <!-- Name -->
                <div class="name">اسم الباقة</div>
              </div>

              <!-- Content -->
              <div class="content">
                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Futures -->
                <div class="futures">
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                  <div class="item">
                    <em class="ph-icon-check"></em>
                    <span>مثال على ميزة</span>
                  </div>
                </div>
              </div>

              <!-- Action -->
              <a href="./forms/create-account.html" class="btn" data-cursor-stick> أختر الباقة </a>
            </div>
          </div>

          <!-- View compare table action -->
          <a
            href="./price-features.html"
            class="compare"
            data-cursor-magnify-sm
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
            data-reveal-delay="2"
          >
            قارن بين الخطط
            <em class="ph-icon-caretdown"></em>
          </a>

          <!-- Taxes notes -->
          <div
            class="text small"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
            data-reveal-delay="2"
          >
            جميع الرسوم بالدولار الأمريكي ولا تشمل الرسوم والضرائب المفروضة من قِبل سلطات الضرائب،
            وتكون مسؤولاً عن دفعها. لمزيد من المعلومات، يرجى الرجوع إلى موقعنا. لمزيد من المعلومات
            اقرأ
            <a href="#" data-cursor-magnify-sm target="_blank">الشروط والأحكام</a>
          </div>

          <!-- Pay methods -->
          <div
            class="pay-methods"
            data-reveal-self="translate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
            data-reveal-delay="3"
          >
            <div class="title">طرق الدفع</div>

            <!-- Methods -->
            <div class="methods">
              <img src="/assets/images/pay-methods/Visa.png" alt="Pay Methods" />
              <img src="/assets/images/pay-methods/Mastercard.png" alt="Pay Methods" />
              <img src="/assets/images/pay-methods/PayPal.png" alt="Pay Methods" />
              <img src="/assets/images/pay-methods/ApplePay.png" alt="Pay Methods" />
              <img src="/assets/images/pay-methods/GooglePay.png" alt="Pay Methods" />
            </div>
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
.price-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
  padding-top: 10rem;
}
.price-block > *:not(.background) {
  z-index: 1;
}
.price-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.price-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
.price-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.price-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.price-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.price-block [text] .text {
  font-size: 1.25rem;
}
.price-block [text] .text.small {
  font-size: 1rem;
}
.price-block [text] .text a {
  color: var(--brand-600);
  text-decoration: none;
}
.price-block .switch-wrapper {
  display: inline-flex;
  position: relative;
  margin: 2.5rem 0;
  border-radius: 5rem;
  background: var(--brand-100);
  padding: 0.75rem 0.5rem;
}
.price-block .switch-wrapper [type='radio'] {
  position: absolute;
  left: -9999px;
}
.price-block .switch-wrapper [type='radio']:checked#monthly ~ label[for='monthly'],
.price-block .switch-wrapper [type='radio']:checked#yearly ~ label[for='yearly'] {
  color: var(--brand-white);
}
.price-block .switch-wrapper [type='radio']:checked#monthly + label[for='yearly'] ~ .highlighter {
  transform: translateX(100%);
}
.price-block .switch-wrapper [type='radio']:checked#yearly + label[for='monthly'] ~ .highlighter {
  transform: none;
}
.price-block .switch-wrapper label {
  z-index: 1;
  transition: color 0.25s ease-in-out;
  cursor: pointer;
  border-radius: 30px;
  min-width: 160px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
}
.price-block .switch-wrapper .highlighter {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  transform: translateX(100%);
  transition: transform 0.25s ease-in-out;
  border-radius: 30px;
  background: var(--brand-500);
  width: calc(50% - 0.5rem);
  height: calc(100% - 1rem);
}
.price-block .plans {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin: 2rem 0 4rem;
}
.price-block .plans > .item {
  box-shadow: 0px 20px 20px rgb(27 65 75 / 20%);
  border-radius: 2rem;
  background: var(--brand-white);
  padding: 2rem;
  text-align: start;
}
.price-block .plans > .item.recommended {
  border: 0.19rem solid var(--brand-500);
  padding: 2rem;
}
.price-block .plans > .item .label {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 10rem;
  background-color: var(--brand-500);
  padding: 0.75rem 1.5rem;
  width: fit-content;
  color: var(--brand-white);
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
}
.price-block .plans > .item .header .price {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
}
.price-block .plans > .item .header .price .value {
  font-weight: 700;
  font-size: 2.25rem;
}
.price-block .plans > .item .header .price .note {
  display: block;
  border-radius: 10rem;
  background-color: var(--brand-100);
  padding: 0.25rem 1rem;
  color: var(--brand-500);
  font-size: 0.88rem;
  text-align: center;
}
.price-block .plans > .item .header .name {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.75rem;
}
.price-block .plans > .item .content {
  transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;
}
.price-block .plans > .item.active .content {
  height: auto;
}
.price-block .plans > .item .content .description {
  margin-bottom: 0.5rem;
}
.price-block .plans > .item .content .futures {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}
.price-block .plans > .item .content .futures .item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.price-block .plans > .item .content .futures .item em {
  border-radius: 50%;
  background: var(--brand-100);
  padding: 0.25rem;
  color: var(--brand-500);
}
.price-block .plans > .item .btn {
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  background-color: var(--brand-100);
  width: 100%;
}
.price-block .plans > .item.recommended .btn {
  background-color: var(--brand-500);
  color: var(--brand-white) !important;
}
.price-block .plans > .item .btn:hover,
.price-block .plans > .item .btn:active,
.price-block .plans > .item .btn.active {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(180 218 228 / 20%);
  background-color: var(--brand-200);
  color: var(--brand-500);
}
.price-block .plans > .item.recommended .btn:hover,
.price-block .plans > .item.recommended .btn:active,
.price-block .plans > .item.recommended .btn.active {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
  background-color: var(--brand-700);
  color: var(--brand-white);
}
.price-block .plans > .item .btn:focus {
  box-shadow: 0 0 0 0.25rem rgb(30 72 84 / 50%);
}
.price-block .compare {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--brand-600);
  text-decoration: none;
}
.price-block .pay-methods {
  margin-top: 2rem;
}
.price-block .pay-methods > .title {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.25rem;
}
.price-block .pay-methods > .methods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.price-block .pay-methods > .methods > * {
  height: 5rem;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .price-block [text] h1 {
    font-size: 2.75rem;
  }
  .price-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .price-block [text] h1 {
    font-size: 3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .price-block {
    margin-bottom: 12.5rem;
  }
  .price-block [text] h1 {
    font-size: 3.5rem;
  }
  .price-block > .background > .bg-1 {
    width: 200%;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .price-block [text] h1 {
    font-size: 3rem;
  }
  .price-block .plans {
    flex-direction: row;
    margin: 6rem 0 4rem;
  }
  .price-block .plans > .item.recommended {
    transform: translateY(-3.5rem) scale(1.04);
    box-shadow: 0px 42px 34px rgb(27 65 75 / 37%);
    padding: 1rem 2rem 2rem;
  }
  .price-block .plans > .item .label {
    width: auto;
  }
  .price-block .plans > .item .content {
    height: auto !important;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .price-block [text] h1 {
    font-size: 3.5rem;
  }
  .price-block > .background > .bg-1 {
    width: 100%;
  }
}
</style>
