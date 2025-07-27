<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'

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
 * Ref for the nav container
 */
const navContainer = ref<HTMLElement | null>(null)

/**
 * Ref for all nav links
 */
const navLinks = ref<NodeList | null>(null)

/**
 * Scroll to target element with offset
 * @param targetId string
 */
function scrollToTarget(targetId: string): void {
  const element = document.querySelector(targetId) as HTMLElement | null
  if (!element) return
  const headerOffset = 220
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

/**
 * Set active link based on scroll position
 */
function setActiveLinkOnScroll(): void {
  if (!navLinks.value || navLinks.value.length === 0) return
  const firstLink = navLinks.value[0] as HTMLAnchorElement
  if (!firstLink) return
  let bestLink: HTMLAnchorElement = firstLink
  let bestVisible = -Infinity
  ;(navLinks.value as NodeList).forEach((link: unknown) => {
    const anchor = link as HTMLAnchorElement
    const targetId = anchor.getAttribute('href') || ''
    const target = document.querySelector(targetId) as HTMLElement | null
    if (target) {
      const rect = target.getBoundingClientRect()
      // Calculate visible area in viewport
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0))
      if (visible > bestVisible) {
        bestVisible = visible
        bestLink = anchor
      }
    }
  })
  ;(navLinks.value as NodeList).forEach((l: unknown) =>
    (l as HTMLAnchorElement).classList.remove('active')
  )
  bestLink.classList.add('active')
}

onMounted(() => {
  nextTick(() => {
    navContainer.value = document.querySelector('.plans--table .table--nav')
    navLinks.value = navContainer.value?.querySelectorAll('a[href]') || null
    if (navLinks.value) {
      ;(navLinks.value as NodeList).forEach((link: unknown) => {
        const anchor = link as HTMLAnchorElement
        anchor.addEventListener('click', (event: Event) => {
          event.preventDefault()
          const targetId = anchor.getAttribute('href') || ''
          scrollToTarget(targetId)
        })
      })
      document.addEventListener('scroll', setActiveLinkOnScroll)
    }
  })
})
</script>

<template>
  <div
    class="price-block"
    data-section="price"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row text-center text-xl-start justify-content-center">
      <div class="col-12 mb-5 mb-xl-0">
        <div class="d-flex flex-column justify-content-center align-items-center text-center" text>
          <h1
            data-cursor-magnify-inner
            class="mb-4"
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span>قارن بين باقات Growth</span>
          </h1>

          <!-- Price switcher -->
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
          <div class="plans--table yearly">
            <!-- Plane table mobile nav -->
            <nav class="table--nav">
              <div>
                <a href="#plane_1" class="link active"> اسم الباقة 1 </a>
              </div>
              <div>
                <a href="#plane_2" class="link"> اسم الباقة 2 </a>
              </div>
              <div>
                <a href="#plane_3" class="link"> اسم الباقة 3 </a>
              </div>
            </nav>

            <!-- plan 1 -->
            <div id="plane_1" class="table--plane">
              <!-- Header -->
              <div class="table--header">
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

                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Action -->
                <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
              </div>

              <!-- Content -->
              <div class="table--content">
                <!-- Table heading -->
                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <!-- Table features -->
                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>

                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- plan 2 -->
            <div id="plane_2" class="table--plane">
              <!-- Header -->
              <div class="table--header">
                <!-- Price -->
                <div class="price">
                  <div class="d-flex gap-2 align-items-end flex-wrap">
                    <div v-if="selectedPlanType === 'monthly'" class="value monthly">$150</div>
                    <div v-else class="value yearly">$1500</div>
                    <div>/ شهري</div>
                  </div>
                  <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                </div>

                <!-- Name -->
                <div class="name">اسم الباقة</div>

                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Action -->
                <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
              </div>

              <!-- Content -->
              <div class="table--content">
                <!-- Table heading -->
                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <!-- Table features -->
                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>

                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- plan 3 -->
            <div id="plane_3" class="table--plane">
              <!-- Header -->
              <div class="table--header">
                <!-- Price -->
                <div class="price">
                  <div class="d-flex gap-2 align-items-end flex-wrap">
                    <div v-if="selectedPlanType === 'monthly'" class="value monthly">$200</div>
                    <div v-else class="value yearly">$2000</div>
                    <div>/ شهري</div>
                  </div>
                  <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                </div>

                <!-- Name -->
                <div class="name">اسم الباقة</div>

                <!-- Description -->
                <div class="description">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </div>

                <!-- Action -->
                <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
              </div>

              <!-- Content -->
              <div class="table--content">
                <!-- Table heading -->
                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <!-- Table features -->
                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>

                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <div class="table--features">
                  <!-- Item -->
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--mobile">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- All plans -->
            <div class="table--all-plans">
              <div class="table--order-wrap">
                <div class="d-flex flex-column justify-content-center">
                  <h3 class="text-uppercase fw-bold fs-5">Choose your plan:</h3>
                  <p>
                    Take a look at the features included in our plans and pick the right one for
                    you.
                  </p>
                </div>

                <div class="plan">
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

                  <!-- Action -->
                  <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
                </div>
                <div class="plan">
                  <!-- Price -->
                  <div class="price">
                    <div class="d-flex gap-2 align-items-end flex-wrap">
                      <div v-if="selectedPlanType === 'monthly'" class="value monthly">$150</div>
                      <div v-else class="value yearly">$1500</div>
                      <div>/ شهري</div>
                    </div>
                    <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                  </div>

                  <!-- Name -->
                  <div class="name">اسم الباقة</div>

                  <!-- Action -->
                  <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
                </div>
                <div class="plan">
                  <!-- Price -->
                  <div class="price">
                    <div class="d-flex gap-2 align-items-end flex-wrap">
                      <div v-if="selectedPlanType === 'monthly'" class="value monthly">$200</div>
                      <div v-else class="value yearly">$2000</div>
                      <div>/ شهري</div>
                    </div>
                    <div v-if="selectedPlanType === 'yearly'" class="note">تدفع سنوياً</div>
                  </div>

                  <!-- Name -->
                  <div class="name">اسم الباقة</div>

                  <!-- Action -->
                  <a href="./forms/create-account.html" class="btn">أختر الباقة</a>
                </div>
              </div>

              <!-- Content -->
              <div class="table--content">
                <!-- Table heading -->
                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <!-- Table features -->
                <div class="table--features">
                  <!-- Item -->
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                    <div>مثال</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                    <div><strong>4545</strong></div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                </div>

                <div class="table--heading">
                  <h3>مثال علي عنوان</h3>
                </div>

                <div class="table--features">
                  <!-- Item -->
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div>مثال</div>
                    <div>مثال</div>
                    <div>مثال</div>
                  </div>

                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div><strong>4545</strong></div>
                    <div><strong>4545</strong></div>
                    <div><strong>4545</strong></div>
                  </div>
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                  <div class="table--desktop">
                    <div>هذا النص هو مثال علي نص يمكن ان يستبدل</div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                    <div class="text-secondary">
                      <em class="ph-icon-x"></em>
                    </div>
                    <div class="text-success">
                      <em class="ph-icon-check"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-12 col-xl-8">
              <!-- Taxes notes -->
              <div
                class="text small mt-5"
                data-reveal-self="translate"
                data-scrolled-into-view="false"
                data-scrolled-past-view="false"
              >
                جميع الرسوم بالدولار الأمريكي ولا تشمل الرسوم والضرائب المفروضة من قِبل سلطات
                الضرائب، وتكون مسؤولاً عن دفعها. لمزيد من المعلومات، يرجى الرجوع إلى موقعنا. لمزيد
                من المعلومات اقرأ
                <a href="#" class="magnify" data-cursor-magnify-sm>الشروط والأحكام</a>
              </div>

              <!-- Pay methods -->
              <div class="pay-methods">
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
.price-block .plans--table {
  display: block;
  margin: 0;
  width: 100%;
  text-align: start;
}
.price-block .plans--table .table--plane .table--header .price,
.price-block .plans--table .table--all-plans .table--order-wrap .plan .price {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
}
.price-block .plans--table .table--all-plans .table--order-wrap .plan .price {
  flex-direction: column;
}
.price-block .plans--table .table--plane .table--header .price .value,
.price-block .plans--table .table--all-plans .table--order-wrap .plan .price .value {
  font-weight: 700;
  font-size: 2.25rem;
}
.price-block .plans--table .table--plane .table--header .price .note,
.price-block .plans--table .table--all-plans .table--order-wrap .plan .price .note {
  display: block;
  border-radius: 10rem;
  background-color: var(--brand-100);
  padding: 0.25rem 1rem;
  color: var(--brand-500);
  font-size: 0.88rem;
  text-align: center;
}
.price-block .plans--table .table--plane .table--header .name,
.price-block .plans--table .table--all-plans .name {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.75rem;
}
.price-block .plans--table .table--all-plans .btn,
.price-block .plans--table .table--plane .table--header .btn {
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  background-color: var(--brand-100);
  width: 100%;
}
.price-block .plans--table .table--all-plans .btn,
.price-block .plans--table .table--plane .table--header .btn {
  margin: 1.5rem 0;
  background-color: var(--brand-500);
  padding: 0.63rem 4.25rem;
  width: auto;
  color: var(--brand-white) !important;
}
.price-block .plans--table .table--all-plans .btn:hover,
.price-block .plans--table .table--all-plans .btn:active,
.price-block .plans--table .table--all-plans .btn.active,
.price-block .plans--table .table--plane .table--header .btn:hover,
.price-block .plans--table .table--plane .table--header .btn:active,
.price-block .plans--table .table--plane .table--header .btn.active {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
  background-color: var(--brand-700);
  color: var(--brand-white) !important;
}
.price-block .plans--table .table--nav {
  display: grid;
  position: -webkit-sticky;
  position: sticky;
  top: 8.75rem;
  grid-template-columns: repeat(3, 1fr);
  align-self: stretch;
  z-index: 1;
  margin-bottom: 3rem;
  border: 1px solid var(--brand-700);
  border-radius: 10rem;
  background: var(--brand-white);
  overflow: hidden;
  text-align: center;
}
.price-block .plans--table .table--nav > *:not(:last-child) {
  border-left: 1px solid var(--brand-700);
}
.price-block .plans--table .table--nav > * a {
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 1rem;
  color: var(--brand-500);
  font-weight: 700;
  text-decoration: none;
}
.price-block .plans--table .table--nav > * a:hover,
.price-block .plans--table .table--nav > * a:focus {
  background-color: var(--brand-100);
  color: var(--brand-500);
}
.price-block .plans--table .table--nav > * a.active,
.price-block .plans--table .table--nav > * a:active {
  background-color: var(--brand-500);
  color: var(--brand-white);
}
.price-block .plans--table .table--plane {
  padding-bottom: 3rem;
}
.price-block .plans--table .table--plane .table--header {
  margin-bottom: 1rem;
  text-align: start;
}
.price-block .plans--table .table--plane .table--content .table--heading,
.price-block .plans--table .table--all-plans .table--content .table--heading {
  border-top: 1px solid #363636;
  border-bottom: 1px solid #363636;
  padding: 1rem;
}
.price-block .plans--table .table--plane .table--content .table--heading *,
.price-block .plans--table .table--all-plans .table--content .table--heading * {
  margin: 0;
  font-size: 1.25rem;
}
.price-block .plans--table .table--plane .table--content .table--features .table--mobile,
.price-block .plans--table .table--all-plans .table--content .table--features .table--desktop {
  display: grid;
  grid-template-columns: minmax(160px, 65%) auto;
  align-self: stretch;
}
.price-block
  .plans--table
  .table--plane
  .table--content
  .table--features
  .table--mobile
  + .table--mobile,
.price-block
  .plans--table
  .table--all-plans
  .table--content
  .table--features
  .table--desktop
  + .table--desktop {
  border-top: 1px solid #807d7d;
}
.price-block .plans--table .table--plane .table--content .table--features .table--mobile em,
.price-block .plans--table .table--all-plans .table--content .table--features .table--desktop em {
  font-weight: 800;
  font-size: 1.25rem;
}
.price-block .plans--table .table--plane .table--content .table--features .table--mobile > *,
.price-block .plans--table .table--all-plans .table--content .table--features .table--desktop > * {
  padding: 1rem;
}
.price-block
  .plans--table
  .table--plane
  .table--content
  .table--features
  .table--mobile
  > *:not(:first-child),
.price-block
  .plans--table
  .table--all-plans
  .table--content
  .table--features
  .table--desktop
  > *:not(:first-child) {
  text-align: center;
}
.price-block .plans--table .table--all-plans {
  display: none;
}
.price-block .plans--table .table--all-plans .table--order-wrap {
  display: grid;
  position: -webkit-sticky;
  position: sticky;
  top: 6.88rem;
  align-self: stretch;
  backdrop-filter: saturate(180%) blur(1rem);
  -webkit-backdrop-filter: saturate(180%) blur(1rem);
  background: rgb(241 245 246 / 10%);
  grid-gap: 1rem;
  grid-template-columns: minmax(200px, 33%) repeat(3, 1fr);
  padding: 2rem;
}
.price-block .plans--table .table--all-plans .table--order-wrap .plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.price-block .plans--table .table--all-plans .table--order-wrap .plan .price > *:first-child {
  flex-direction: column;
  justify-content: center;
  align-items: center !important;
}
.price-block .plans--table .table--all-plans .table--content .table--features .table--desktop {
  grid-template-columns: minmax(200px, 33%) repeat(3, 1fr);
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
  .price-block .plans--table .table--nav,
  .price-block .plans--table .table--plane {
    display: none;
  }
  .price-block .plans--table .table--all-plans {
    display: block;
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
