/**
 * UseMouseFollower composable for Nuxt 4
 *
 * This composable initializing and destroying the Cuberto Mouse Follower effect. It ensures the
 * effect only runs on devices with a fine pointer.
 *
 * Usage: Call useMouseFollower() in the <script setup> of any page/component where you want the
 * effect.
 */
import { onBeforeUnmount, onMounted } from 'vue'

/** Extends the Window interface to include MouseFollower and gsap. */
declare global {
  interface Window {
    MouseFollower?: {
      registerGSAP: (_gsapInstance: typeof window.gsap) => void
      new (_options: Record<string, unknown>): {
        destroy: () => void
      }
    }
    gsap?: {
      // Add specific gsap methods/types as needed, or use typeof import('gsap')
      [key: string]: unknown
    }
  }
}

/**
 * Initializes and manages the Cuberto Mouse Follower effect.
 *
 * @returns {void}
 */
export function useMouseFollower(): void {
  let cursor: InstanceType<NonNullable<Window['MouseFollower']>> | null = null
  let resizeHandler: (() => void) | null = null

  /**
   * Initializes the MouseFollower if available.
   *
   * @returns {InstanceType<NonNullable<Window['MouseFollower']>> | null}
   */
  function init(): InstanceType<NonNullable<Window['MouseFollower']>> | null {
    if (!window.MouseFollower || !window.gsap) return null
    window.MouseFollower.registerGSAP(window.gsap)
    return new window.MouseFollower({
      el: null,
      container: document.body,
      className: 'g-cursor',
      innerClassName: 'g-cursor-inner',
      textClassName: 'g-cursor-text',
      mediaClassName: 'g-cursor-media',
      mediaBoxClassName: 'g-cursor-media-box',
      iconSvgClassName: 'g-svgsprite',
      iconSvgNamePrefix: '-',
      iconSvgSrc: '',
      dataAttr: 'cursor',
      hiddenState: '-hidden',
      textState: '-text',
      iconState: '-icon',
      activeState: '-active',
      mediaState: '-media',
      stateDetection: {
        '-stick': `
              [data-cursor-stick], 
              .splide__arrows--rtl .splide__arrow, 
              .splide__pagination,
              .categories .item,
              .blog--pagination .pagination .page-link,
              .sm-links > *,
              #floating-actions > *,
              .anchorjs-link,
              [topics] .item .links > *,
              [topics] .item > .btn,
              .topic--nav .links .content > *,
              [more-topics] .links > *`,
        '-stick -magnetic': '[data-cursor-stick][data-magnetic]',
        '-magnify -color-burn': `
              [data-cursor-magnify], 
              [data-cursor-magnify-inner] > *,
              .site-logo`,
        '-magnify-sm -color-burn': `
              [data-cursor-magnify-sm], 
              [data-cursor-magnify-sm-inner] > *, 
              [navbar-main-list] .nav-link,
              .links-list .links .link,
              .topic--category-content > * .links > *,
              #toc .tocify-item a,
              [data-feedback] a`,
        '-magnify-lg -color-burn': `
              [data-cursor-magnify-lg],
              [data-cursor-magnify-lg-inner] > *`,
        '-hidden': `
              iframe, [data-cursor-hidden],
              .form-control, .form-select,
              [verify-code] .code`,
      },
      visible: true,
      visibleOnState: false,
      speed: 0.6,
      ease: 'expo.out',
      overwrite: true,
      skewing: 4,
      skewingText: 2,
      skewingIcon: 3,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    })
  }

  /**
   * Destroys the MouseFollower instance if it exists.
   *
   * @param cursor MouseFollower instance or null
   * @returns Null
   */
  function destroy(cursor: InstanceType<NonNullable<Window['MouseFollower']>> | null): null {
    if (cursor) cursor.destroy()
    return null
  }

  // Helper: does the device have a fine pointer (mouse/trackpad)?
  /**
   * Checks if the device has a fine pointer (mouse/trackpad).
   *
   * @returns {boolean}
   */
  function hasFinePointer(): boolean {
    return window.matchMedia !== undefined && window.matchMedia('(pointer: fine)').matches
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    if (!cursor && hasFinePointer()) cursor = init()
    resizeHandler = () => {
      cursor = !cursor && hasFinePointer() ? init() : destroy(cursor)
    }
    window.addEventListener('resize', resizeHandler)
    // Listen for pointer device connect/disconnect events only
    window.addEventListener('pointerover', (event: PointerEvent) => {
      if (event.pointerType === 'mouse') {
        // Mouse/trackpad connected
        if (!cursor && hasFinePointer()) cursor = init()
      } else {
        // Touch/pen or other device, destroy if exists
        if (cursor) cursor = destroy(cursor)
      }
    })
  })

  onBeforeUnmount(() => {
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
    }
    destroy(cursor)
  })
}
