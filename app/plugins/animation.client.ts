// app/plugins/animation-on-scroll.client.ts
/**
 * Nuxt plugin to handle animation on scroll using data attributes and Bootstrap 5 utility classes.
 * Loads animation CSS and sets up scroll/resize listeners to trigger reveal animations.
 *
 * @module plugins/animation-on-scroll.client
 */
import { defineNuxtPlugin } from '#app'
import { useRouter } from 'vue-router'

/**
 * Utility functions for DOM manipulation and viewport checks.
 */
const AnimationUtility = {
  /**
   * Iterate over a NodeList or array-like object.
   * @param {NodeList | ArrayLike<Element>} list - List of elements to iterate.
   * @param {(el: Element) => void} callback - Function to call for each element.
   */
  each(list: NodeList | ArrayLike<Element>, callback: (el: Element) => void) {
    Array.prototype.forEach.call(list, callback)
  },
  /**
   * Check if an element is partially in the viewport.
   * @param {Element} el
   * @returns {boolean}
   */
  isPartInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
  },
  /**
   * Get or set an attribute on an element.
   * @param {Element} el
   * @param {string} attr
   * @param {string} [value]
   * @returns {string|undefined}
   */
  attr(el: Element, attr: string, value?: string): string | undefined {
    if (typeof value === 'undefined') return el.getAttribute(attr) || ''
    el.setAttribute(attr, value)
    return value
  },
  /**
   * Check if an element has a specific attribute.
   * @param {Element} el
   * @param {string} attr
   * @returns {boolean}
   */
  hasAttr(el: Element, attr: string): boolean {
    return el.hasAttribute(attr)
  },
}

/**
 * Run animation logic for a single target element.
 * @param {Element} target
 */
function runAnimationOnScroll(target: Element): void {
  if (
    AnimationUtility.isPartInViewport(target) &&
    AnimationUtility.attr(target, 'data-scrolled-into-view') === 'false'
  ) {
    AnimationUtility.attr(target, 'data-scrolled-into-view', 'true')
    AnimationUtility.attr(target, 'data-has-intersected', 'true')
  }
  if (AnimationUtility.attr(target, 'data-scrolled-into-view') === 'false') {
    AnimationUtility.attr(target, 'data-has-intersected', 'false')
  }
  if (AnimationUtility.hasAttr(target, 'data-scrolled-past-view')) {
    if (window.scrollY > (target as HTMLElement).offsetTop + (target as HTMLElement).offsetHeight) {
      AnimationUtility.attr(target, 'data-scrolled-past-view', 'true')
    } else {
      AnimationUtility.attr(target, 'data-scrolled-past-view', 'false')
    }
  }
}

/**
 * Main plugin logic: sets up listeners and triggers animation on scroll/resize.
 */
export default defineNuxtPlugin(() => {
  /**
   * Initialize animation on scroll for all elements with [data-scrolled-into-view].
   */
  const initAnimationOnScroll = () => {
    const aosList = document.querySelectorAll('[data-scrolled-into-view]')
    AnimationUtility.each(aosList, (target: Element) => {
      runAnimationOnScroll(target)
    })
  }

  // Run on mount
  if (import.meta.client) {
    window.addEventListener('scroll', initAnimationOnScroll, { passive: true })
    window.addEventListener('resize', initAnimationOnScroll)
    // Initial run
    window.setTimeout(initAnimationOnScroll, 100)

    // Re-run animation logic after every Nuxt route change (fixes browser back/forward issue)
    const router = useRouter()
    router.afterEach(() => {
      // Timeout ensures DOM is updated before running animation logic
      setTimeout(initAnimationOnScroll, 100)
    })
  }
})
