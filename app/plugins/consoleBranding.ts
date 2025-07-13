// plugins/consoleBranding.ts
// Shows a custom branding message in the browser console on app start.

/**
 * Nuxt plugin to display a styled branding message in the browser console on app start.
 *
 * @function
 * @returns {void}
 * @see https://ultimate-eg.net
 */
export default defineNuxtPlugin(() => {
  /**
   * Provider and project branding constants.
   *
   * @constant
   */
  const PROVIDER = 'Ultimate Solutions Egypt'
  const PROVIDER_INFO =
    'International leader in Enterprise Resource Solutions and Software Development'
  const PROVIDER_LINK = 'https://ultimate-eg.net'
  const PROJECT = 'Growth - Smart shopping platform'
  const PROJECT_INFO =
    'Without technical experience and with ease, you can sell anywhere and anytime with your online store and with your commercial identity'
  const VERSION = 'beta'

  // # Reason: We want to show a styled message for Chrome users, and a plain message for others for best compatibility.
  const isChrome =
    typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('chrome')

  if (isChrome) {
    /**
     * Styled log message for Chrome browsers.
     *
     * @type {readonly [string, string, string, string]}
     */
    const logArgs = [
      `\n%c  ${PROVIDER}  %c \n${PROVIDER_INFO} \n${PROVIDER_LINK}  \n\n${PROJECT} - ${VERSION} %c  \n${PROJECT_INFO}`,
      'color: #fff; border: 1px solid #22447B; background: #22447B; padding:5px;',
      'border: none; padding:5px 5px 0;',
      'border: none; padding:0 5px 5px;',
    ] as const

    // Use setTimeout to ensure the message appears after the app loads.
    setTimeout(() => console.log(...logArgs))
  } else if (typeof window !== 'undefined' && window.console) {
    // Fallback for non-Chrome browsers: plain text message.
    setTimeout(() => {
      console.log(
        `\n  ${PROVIDER}  \n ${PROVIDER_INFO}  \n ${PROVIDER_LINK} \n ${PROJECT}  \n ${PROJECT_INFO}\n`
      )
    })
  }
})
