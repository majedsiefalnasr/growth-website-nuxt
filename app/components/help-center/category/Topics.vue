<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Handles toggling the links menu in the help center topics block.
 * Uses Vue refs and lifecycle hooks for safe DOM manipulation.
 * @returns {void}
 */
const topicNavRef = ref<HTMLElement | null>(null)
const toggleButtonRef = ref<HTMLButtonElement | null>(null)
const linksRef = ref<HTMLElement | null>(null)

let clickHandler: ((e: Event) => void) | null = null

onMounted(() => {
  if (toggleButtonRef.value && linksRef.value) {
    clickHandler = () => {
      toggleButtonRef.value?.classList.toggle('open')
      linksRef.value?.classList.toggle('open')
    }
    toggleButtonRef.value.addEventListener('click', clickHandler)
  }
})

onBeforeUnmount(() => {
  if (toggleButtonRef.value && clickHandler) {
    toggleButtonRef.value.removeEventListener('click', clickHandler)
  }
})
</script>

<template>
  <div
    class="help-center-topics-block"
    data-section="blog"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <!-- Content -->
    <div class="row justify-content-between">
      <!-- Side nav -->
      <div class="col-12 col-lg-3 mb-5 mb-lg-0">
        <div class="side--nav">
          <!-- Back action -->
          <NuxtLink
            to="/help-center"
            class="btn btn-secondary btn-back"
            data-cursor-stick
            data-reveal-self="translate-up"
            data-reveal-delay="5"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            كل المواضيع
          </NuxtLink>

          <!-- Topic nav -->
          <div
            ref="topicNavRef"
            class="topic--nav"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <div class="d-flex align-items-center gap-4">
              <!-- Toggle links menu -->
              <button
                ref="toggleButtonRef"
                links-toggler
                class="d-lg-none d-flex justify-content-center align-items-center btn btn-secondary btn-icon"
                type="button"
                aria-label="Toggle topics menu"
              >
                <Icon name="ph:list" open />
                <Icon name="ph:x" close />
              </button>

              <!-- Title -->
              <h3>كيف تبدأ</h3>
            </div>

            <!-- Links -->
            <div ref="linksRef" class="links">
              <div class="content">
                <a href="#" class="link active">كيف تبدأ</a>
                <a href="#" class="link">حل المشكلات الفنية</a>
                <a href="#" class="link">الاتصال بخدمة عملاء Growth</a>
                <a href="#" class="link">اختيار القالب الخاص بك</a>
                <a href="#" class="link">التعاقد مع متخصص في Growth</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="col-12 col-lg-8">
        <!-- Topic category content -->
        <div
          class="topic--category-content"
          data-reveal-self="translate"
          data-reveal-delay="4"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <!-- Title -->
          <h4>كيف تبدأ</h4>

          <!-- Articles -->
          <div class="topic--articles">
            <!-- Title -->
            <h5>المقالات</h5>

            <!-- Links -->
            <div class="links">
              <NuxtLink to="/help-center/topic" class="link">كيف تبدأ</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">حل المشكلات الفنية</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">الاتصال بخدمة عملاء Growth</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">اختيار القالب الخاص بك</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">التعاقد مع متخصص في Growth</NuxtLink>
            </div>
          </div>

          <!-- known issues -->
          <div class="topic--issues">
            <!-- Title -->
            <h5>مشاكل معروفة</h5>

            <!-- Links -->
            <div class="links">
              <NuxtLink to="/help-center/topic" class="link">كيف تبدأ</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">حل المشكلات الفنية</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">الاتصال بخدمة عملاء Growth</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">اختيار القالب الخاص بك</NuxtLink>
              <NuxtLink to="/help-center/topic" class="link">التعاقد مع متخصص في Growth</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.help-center-topics-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
.help-center-topics-block .side--nav > .btn {
  position: relative;
  margin-bottom: 3rem;
  padding: 0.63rem 2.5rem 0.63rem 1.25rem;
}
.help-center-topics-block .side--nav > .btn:hover {
  transform: translateY(0);
}
.help-center-topics-block .side--nav > .btn em {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
}
.help-center-topics-block .side--nav > .btn:hover em {
  right: 0.75rem;
}
.help-center-topics-block .side--nav .topic--nav {
  display: flex;
  flex-direction: column;
}
.help-center-topics-block .side--nav .topic--nav h3 {
  margin-bottom: 0;
  font-weight: 700;
  font-size: 1.5rem;
}
.help-center-topics-block .side--nav .topic--nav [links-toggler].open [open],
.help-center-topics-block .side--nav .topic--nav [links-toggler]:not(.open) [close] {
  display: none;
}
.help-center-topics-block .side--nav .topic--nav .links {
  transition: all 0.6s ease-in-out;
  max-height: 0;
  overflow: hidden;
}
.help-center-topics-block .side--nav .topic--nav .links.open {
  max-height: 2000px;
}
.help-center-topics-block .side--nav .topic--nav .links > .content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  width: 100%;
}
.help-center-topics-block .side--nav .topic--nav .links .content > * {
  position: relative;
  transition: all 0.3s ease-in-out;
  border: 2px solid var(--brand-white);
  border-radius: 1.13rem;
  background-color: var(--brand-white);
  padding: 0.75rem 1.5rem 0.75rem 3rem;
  color: inherit;
  font-weight: 400;
  text-decoration: none;
}
.help-center-topics-block .side--nav .topic--nav .links .content > *:before {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  pointer-events: none;
  content: '';
  font-size: 1rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3C!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --%3E%3Cpath fill='currentColor' d='M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z'/%3E%3C/svg%3E");
}
.help-center-topics-block .side--nav .topic--nav .links .content > *:hover,
.help-center-topics-block .side--nav .topic--nav .links .content > *:active,
.help-center-topics-block .side--nav .topic--nav .links .content > *.active {
  border-color: var(--brand-500);
}
.help-center-topics-block .side--nav .topic--nav .links .content > *.active {
  pointer-events: none;
}
.help-center-topics-block .side--nav .topic--nav .links .content > *:hover:before,
.help-center-topics-block .side--nav .topic--nav .links .content > *:active:before,
.help-center-topics-block .side--nav .topic--nav .links .content > *.active:before {
  left: 1rem;
}
.help-center-topics-block .topic--category-content h4 {
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.25rem;
}
.help-center-topics-block .topic--category-content > *:not(h4):not(:last-child) {
  margin-bottom: 1.5rem;
}
.help-center-topics-block .topic--category-content > * h5 {
  margin-bottom: 0.75rem;
  color: #989898;
  font-weight: 400;
  font-size: 1.13rem;
}
.help-center-topics-block .topic--category-content > * .links {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.75rem;
  width: 100%;
}
.help-center-topics-block .topic--category-content > * .links > * {
  position: relative;
  transition: all 0.3s ease-in-out;
  border-radius: 1.13rem;
  padding-right: 2rem;
  color: inherit;
  font-weight: 400;
  font-size: 1.13rem;
  text-decoration: none;
}
.help-center-topics-block .topic--category-content > * .links > *:before {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  background-color: currentColor;
  width: 1em;
  height: 1em;
  pointer-events: none;
  content: '';
  font-size: 1rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3C!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --%3E%3Cpath fill='currentColor' d='M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z'/%3E%3C/svg%3E");
}
.help-center-topics-block .topic--category-content > * .links > *:hover,
.help-center-topics-block .topic--category-content > * .links > *:active {
  text-decoration: underline;
}
.help-center-topics-block .topic--category-content > * .links > *:hover:before,
.help-center-topics-block .topic--category-content > * .links > *:active:before {
  right: 0.5rem;
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
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .help-center-topics-block {
    margin-bottom: 12.5rem;
  }
  .help-center-topics-block .side--nav .topic--nav .links {
    max-height: 2000px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
