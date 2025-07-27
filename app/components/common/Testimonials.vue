<script lang="ts"></script>

<template>
  <div
    id="testimonials-block"
    data-section="testimonials"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <!-- Content for scroll purpose -->
    <div class="content" mask-image>
      <!-- Trustpilot -->
      <div
        class="d-flex flex-column gap-1 align-items-center"
        trustpilot
        data-reveal-self="translate-left"
        data-scrolled-into-view="false"
        data-scrolled-past-view="false"
      >
        <div class="title">Excellent</div>
        <img
          src="/assets/images/trustpilot/stars-4.5.svg"
          alt="Trustpilot Rating"
          height="40px"
          style="max-width: unset"
        />
        <div class="note">
          <span>Based on </span>
          <strong>456 reviews</strong>
        </div>
        <img src="/assets/images/trustpilot/logo-black.svg" alt="Trustpilot" height="24px" />
      </div>

      <!-- Testimonials Slider -->
      <CommonTestimonialsSlider />
    </div>
  </div>
</template>

<style scoped>
#testimonials-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
}
#testimonials-block > *:not(.background) {
  z-index: 1;
}
#testimonials-block > .content {
  display: flex;
  align-items: center;
  gap: 4rem;
}
#testimonials-block [trustpilot] {
  padding: 1.5rem;
  user-select: none;
  white-space: nowrap;
}
#testimonials-block [trustpilot] .title {
  margin-bottom: 0.5rem;
  font-weight: 6=700;
  font-size: 1.13rem;
}
#testimonials-block [trustpilot] .note {
  font-size: 0.88rem;
}
#testimonials-block .list .content .item {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  background-color: var(--color-white);
  padding: 2rem 2rem 1.5rem;
}
#testimonials-block .list .content .item.is-active:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0px 3px 8px 0rem rgb(30 72 84 / 20%);
}
#testimonials-block .list .content .item:not(.is-active) {
  transform: scale(0.95);
  filter: blur(4.8px);
}
#testimonials-block .list .content .item h4 {
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
}
#testimonials-block .list .content .item .review {
  font-size: 1.13rem;
}
#testimonials-block .list .content .item .author {
  margin-top: 2.5rem;
  line-height: 120%;
}
#testimonials-block .list .content .item .author .avatar {
  border-radius: 3.13rem;
  width: 3.13rem;
  height: 3.13rem;
  object-fit: cover;
}
#testimonials-block .list .content .item .author .name {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.13rem;
}
#testimonials-block .list .content .item .author .job,
#testimonials-block .list .content .item .author .organization {
  font-size: 0.81rem;
}

/* Responsiveness */
/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  #testimonials-block > .content {
    flex-direction: column;
  }
  #testimonials-block [splide] {
    margin-left: 0;
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  #testimonials-block [splide] {
    width: 100%;
  }
}

/* Extra Small devices (mobile phones, less than 414px) */
@media (max-width: 413.98px) {
}

/************************** */
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
  #testimonials-block {
    margin-bottom: 12.5rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
/* #endregion */
</style>
