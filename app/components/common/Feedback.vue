<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue'

/**
 * Feedback component for help center topics or posts.
 * Handles helpful/not-helpful, checkboxes, verbatim, and submit/cancel actions.
 * @file Feedback.vue
 */

// Props
const props = defineProps<{ id: string }>()

// Refs for feedback container and form
const feedbackContainer = ref<HTMLElement | null>(null)
const feedbackForm = ref<HTMLFormElement | null>(null)

// State for feedback UI
const feedbackState = ref<'none' | 'helpful' | 'not-helpful' | 'thanks'>('none')
const checkboxes = ref<HTMLInputElement[]>([])
const verbatimFeedback = ref('')
const submitDisabled = ref(true)

// Used to set .active class on textarea
const verbatimActive = ref(false)

/**
 * Scroll to feedback block.
 */
function scrollToFeedback(): void {
  if (feedbackContainer.value) {
    const top = feedbackContainer.value.getBoundingClientRect().top + window.pageYOffset - 160
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/**
 * Handle thumbs up (helpful) click.
 */
function onThumbsUp(): void {
  scrollToFeedback()
  feedbackState.value = 'helpful'
  resetCheckboxes()
}

/**
 * Handle thumbs down (not helpful) click.
 */
function onThumbsDown(): void {
  scrollToFeedback()
  feedbackState.value = 'not-helpful'
  resetCheckboxes()
}

/**
 * Handle submit feedback.
 */
function onSubmit(): void {
  feedbackState.value = 'thanks'
  resetCheckboxes()
  verbatimFeedback.value = ''
  submitDisabled.value = true
  verbatimActive.value = false
  // # Reason: In future, feedback can be stored using the provided id prop
}

/**
 * Handle cancel feedback.
 */
function onCancel(): void {
  feedbackState.value = 'none'
  resetCheckboxes()
  verbatimFeedback.value = ''
  submitDisabled.value = true
  verbatimActive.value = false
}

/**
 * Reset all checkboxes.
 */
function resetCheckboxes(): void {
  checkboxes.value.forEach((el) => {
    el.checked = false
  })
}

/**
 * Check if any checkbox is checked.
 * @returns {boolean}
 */
function checkCheckboxes(): boolean {
  return checkboxes.value.some((el) => el.checked)
}

/**
 * Update submit button state based on checkboxes and verbatim.
 */
function updateSubmitState(): void {
  if (checkCheckboxes() || verbatimFeedback.value.length > 0) {
    submitDisabled.value = false
  } else {
    submitDisabled.value = true
  }
}

/**
 * Handle checkbox change event.
 */
function onCheckboxChange(): void {
  updateSubmitState()
}

/**
 * Handle verbatim feedback input.
 */
function onVerbatimInput(e: Event): void {
  const val = (e.target as HTMLTextAreaElement).value
  verbatimFeedback.value = val
  verbatimActive.value = val.length > 0
  updateSubmitState()
}

// On mount, collect checkboxes and wire up events
onMounted(() => {
  feedbackContainer.value = document.querySelector(
    `.feedback[data-feedback-id='${props.id}']`
  ) as HTMLElement
  feedbackForm.value = feedbackContainer.value?.querySelector('form') as HTMLFormElement
  checkboxes.value = Array.from(
    feedbackContainer.value?.querySelectorAll('.experience-option input') || []
  ) as HTMLInputElement[]
  checkboxes.value.forEach((el) => {
    el.addEventListener('change', onCheckboxChange)
  })
  updateSubmitState()
})
</script>

<template>
  <div
    ref="feedbackContainer"
    class="feedback col-12"
    topic-feedback
    :data-feedback-id="props.id"
    data-reveal-self="translate-up"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
    :class="{
      helpful: feedbackState === 'helpful',
      'not-helpful': feedbackState === 'not-helpful',
      thanks: feedbackState === 'thanks',
    }"
  >
    <!-- Feedback form -->
    <form
      ref="feedbackForm"
      class="smart-feedback-form"
      action="javascript:void(0);"
      name="smartFeedbackForm"
      @submit.prevent="onSubmit"
    >
      <!-- Content -->
      <div class="smart-feedback-begin" aria-label="Provide feedback about this article">
        <!-- Title -->
        <h2 class="title">هل وجدت المعلومات التي كنت تبحث عنها؟</h2>

        <!-- Feedback Actions -->
        <div class="feedback-buttons">
          <!-- Article Helpful -->
          <button
            class="btn"
            type="button"
            thumbs-up
            data-cursor-magnify
            data-cursor="-inverse"
            @click="onThumbsUp"
          >
            <Icon name="ph:thumbs-up" class="icon" />
          </button>

          <!-- Article Not Helpful -->
          <button
            class="btn"
            type="button"
            thumbs-down
            data-cursor-magnify
            data-cursor="-inverse"
            @click="onThumbsDown"
          >
            <Icon name="ph:thumbs-down" class="icon" />
          </button>
        </div>
      </div>

      <!-- Extended Feedback -->
      <div class="smart-feedback-reply">
        <!-- Header -->
        <div class="title">
          <!-- Article Helpful -->
          <label for="feedbackText" class="helpful">
            <strong aria-hidden="true"> شكرًا لك! هل هناك المزيد من التعليقات؟ </strong>
            (كلما أخبرتنا أكثر كلما استطعنا المساعدة.)
          </label>

          <!-- Article Not Helpful -->
          <label for="feedbackText" class="not-helpful">
            <strong aria-hidden="true"> هل يمكنك مساعدتنا على التحسن؟ </strong>
            (كلما أخبرتنا أكثر كلما استطعنا المساعدة.)
          </label>
        </div>

        <!-- Article Experience -->
        <fieldset class="smart-feedback-experience feedback-group">
          <!-- Title -->
          <legend class="title">ما الذي أثر على تجربتك؟</legend>

          <!-- Article Helpful -->
          <div class="helpful">
            <!-- Option -->
            <div class="experience-option form-check">
              <input id="helpful_0" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_0"> تم حل مشكلتي </label>
            </div>

            <div class="experience-option form-check">
              <input id="helpful_1" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_1"> إرشادات واضحة </label>
            </div>

            <div class="experience-option form-check">
              <input id="helpful_2" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_2"> سهل المتابعة </label>
            </div>

            <div class="experience-option form-check">
              <input id="helpful_3" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_3"> لغة واضحة </label>
            </div>

            <div class="experience-option form-check">
              <input id="helpful_4" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_4"> ساعدت الصور </label>
            </div>

            <div class="experience-option form-check">
              <input id="helpful_5" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="helpful_5"> آخر </label>
            </div>
          </div>

          <!-- Article Not Helpful -->
          <div class="not-helpful">
            <!-- Option -->
            <div class="experience-option form-check">
              <input id="not_helpful_0" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_0"> لم يتطابق مع شاشتي </label>
            </div>

            <div class="experience-option form-check">
              <input id="not_helpful_1" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_1"> تعليمات غير صحيحة </label>
            </div>

            <div class="experience-option form-check">
              <input id="not_helpful_2" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_2"> تقني للغاية </label>
            </div>

            <div class="experience-option form-check">
              <input id="not_helpful_3" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_3"> لا توجد معلومات كافية </label>
            </div>

            <div class="experience-option form-check">
              <input id="not_helpful_4" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_4"> لا توجد صور كافية </label>
            </div>

            <div class="experience-option form-check">
              <input id="not_helpful_5" class="form-check-input" type="checkbox" value />
              <label class="form-check-label" for="not_helpful_5"> آخر </label>
            </div>
          </div>
        </fieldset>

        <!-- Feedback Verbatim -->
        <div class="smart-feedback-verbatim feedback-group">
          <label for="verbatimFeedback" class="form-label"> أي ملاحظات إضافية؟ (اختياري) </label>
          <textarea
            id="verbatimFeedback"
            class="form-control"
            name="feedbackText"
            rows="6"
            cols="40"
            maxlength="250"
            placeholder="لحماية خصوصيتك ، لا تقدم أي معلومات شخصية مثل عنوان البريد الإلكتروني أو رقم الهاتف أو مفتاح المنتج أو كلمة المرور أو رقم بطاقة الائتمان."
            :class="{ active: verbatimActive }"
            :value="verbatimFeedback"
            @input="onVerbatimInput"
          ></textarea>
        </div>

        <!-- Feedback Submit -->
        <div class="smart-feedback-submit feedback-group">
          <!-- Submit -->
          <button
            id="buttonFeedbackVerbatimSubmit"
            class="btn btn-primary"
            type="submit"
            data-cursor-stick
            :disabled="submitDisabled"
          >
            إرسال ملاحظات
          </button>

          <!-- Cancel -->
          <button
            id="buttonFeedbackVerbatimCancel"
            class="btn btn-secondary"
            type="button"
            data-cursor-stick
            @click="onCancel"
          >
            الغاء
          </button>
        </div>
      </div>

      <div class="feedback-thank-you" aria-label="شكرا لك على ملاحظاتك!" role="alert">
        <h2>
          <Icon name="ph:heart" class="icon" />
          شكرا لك على ملاحظاتك!
        </h2>
      </div>
    </form>
  </div>
</template>

<style scoped>
.feedback {
  margin-top: 5rem;
  user-select: none;
}
.feedback .smart-feedback-form {
  border-radius: 1.13rem;
  background: var(--brand-white);
}
.feedback .smart-feedback-form > * {
  margin: auto;
  max-width: 48rem;
}
.feedback .smart-feedback-begin {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease-in-out;
  padding: 2rem 3rem;
  max-height: 100rem;
  overflow: hidden;
}
.feedback.helpful .smart-feedback-begin,
.feedback.not-helpful .smart-feedback-begin,
.feedback.thanks .smart-feedback-begin {
  padding: 0;
  max-height: 0;
}
.feedback .smart-feedback-begin > .title {
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1.25rem;
}
.feedback .smart-feedback-begin .feedback-buttons > * {
  transition: all 0.3s ease-in-out;
  margin: 0.63rem 1rem;
  border: none;
  padding: 0;
  font-size: 2rem;
}
.feedback .smart-feedback-begin .feedback-buttons > *:hover,
.feedback .smart-feedback-begin .feedback-buttons > *:focus {
  box-shadow: none;
  border: none;
}
.feedback .smart-feedback-reply {
  transition: all 0.3s ease-in-out;
  padding: 0rem 3rem;
  max-height: 0;
  overflow: hidden;
}
.feedback.helpful .smart-feedback-reply,
.feedback.not-helpful .smart-feedback-reply {
  padding: 3rem;
  max-height: 100rem;
}
.feedback:not(.helpful) .smart-feedback-reply .title .helpful,
.feedback:not(.not-helpful) .smart-feedback-reply .title .not-helpful {
  display: none;
}
.feedback .smart-feedback-reply > .title strong {
  font-weight: 500;
}
.feedback .feedback-group {
  margin-top: 1.75rem;
}
.feedback .smart-feedback-experience > .title {
  float: none;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.feedback .smart-feedback-experience > *:not(.title) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.feedback:not(.helpful) .smart-feedback-experience .helpful,
.feedback:not(.not-helpful) .smart-feedback-experience .not-helpful {
  display: none;
}
.feedback .smart-feedback-verbatim label {
  margin-bottom: 1rem;
}
.feedback .smart-feedback-verbatim textarea {
  border: 2px solid #efefef;
  resize: none;
}
.feedback .smart-feedback-verbatim textarea:focus,
.feedback .smart-feedback-verbatim textarea.active {
  box-shadow: none;
  border: 2px solid var(--brand-700);
}
.feedback .smart-feedback-submit {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.feedback .smart-feedback-submit .btn:hover {
  transform: translateY(0);
}
.feedback .feedback-thank-you {
  transition: all 0.3s ease-in-out;
  padding: 0rem 3rem;
  max-height: 0;
  overflow: hidden;
  text-align: center;
}
.feedback.thanks .feedback-thank-you {
  padding: 3rem;
  max-height: 100rem;
}
.feedback .feedback-thank-you h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1.25rem;
}
.feedback .feedback-thank-you em {
  font-size: 2rem;
}
.feedback .icon {
  font-size: 2rem !important;
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
  .feedback .smart-feedback-begin {
    gap: 4rem;
  }
  .feedback .smart-feedback-experience > *:not(.title) {
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
