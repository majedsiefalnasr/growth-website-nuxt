<script lang="ts"></script>

<template>
  <div
    id="contact-hero-block"
    data-section="blog-hero"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row">
      <!-- Title -->
      <div class="col-12 col-lg-8 mb-5">
        <div class="d-flex flex-column" text>
          <h1
            data-cursor-magnify-inner
            class="mb-4"
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span> تواصل معنا </span>
          </h1>

          <div
            class="crow"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <img src="/assets/images/avatars/avatar-ex1.png" alt="Avatar" />
            <img src="/assets/images/avatars/avatar-ex2.png" alt="Avatar" />
            <img src="/assets/images/avatars/avatar-ex3.png" alt="Avatar" />
            <img src="/assets/images/avatars/avatar-ex4.png" alt="Avatar" />
          </div>

          <div
            class="text"
            data-reveal-self="translate-up"
            data-reveal-delay="3"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            جاهزين دائماً لمساعدتك
          </div>

          <!-- Social media links -->
          <div
            class="sm-links d-flex gap-3 my-4"
            data-reveal-self="translate-up"
            data-reveal-delay="4"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Facebook -->
            <a href="#" class="btn">
              <em class="icon"><Icon name="ri:facebook-fill" /></em>
            </a>
            <!-- Youtube -->
            <a href="#" class="btn">
              <em class="icon"><Icon name="ri:youtube-fill" /></em>
            </a>
            <!-- Google -->
            <a href="#" class="btn">
              <em class="icon"><Icon name="ri:google-fill" /></em>
            </a>
            <!-- Instagram -->
            <a href="#" class="btn">
              <em class="icon"><Icon name="ri:instagram-line" /></em>
            </a>
            <!-- Whatsapp -->
            <a href="#" class="btn">
              <em class="icon"><Icon name="ri:whatsapp-line" /></em>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-10">
        <!-- Links -->
        <div class="links" links>
          <!-- Item -->
          <div
            class="item position-relative"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Title -->
            <div class="title d-flex flex-md-column gap-4 align-items-center align-items-md-start">
              <!-- Icon -->
              <em class="icon"><Icon name="ph:compass" /></em>
              <!-- Title -->
              <h3>مركز المساعدة</h3>
            </div>

            <!-- Content -->
            <div class="text">
              شاهد الفيديوهات التعليمية واقرأ مقالات تفصيلية في مركز المساعدة من Growth
            </div>

            <!-- Action -->
            <a
              href="./help-center.html"
              class="btn btn-primary mt-auto stretched-link"
              data-cursor-hidden
            >
              مركز المساعدة
            </a>
          </div>

          <div
            class="item position-relative"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Title -->
            <div class="title d-flex flex-md-column gap-4 align-items-center align-items-md-start">
              <!-- Icon -->
              <em class="icon"><Icon name="ph:envelope" /></em>
              <!-- Title -->
              <h3>اترك لنا رسالة</h3>
            </div>

            <!-- Content -->
            <div class="text">لديك استفسار أو مشكلة؟ راسلنا الآن عبر البريد الإلكتروني لحلها.</div>

            <!-- Action -->
            <a
              href="mailto:example@ultimatesolutions.com"
              class="btn btn-primary mt-auto stretched-link"
              data-cursor-hidden
            >
              راسلنا
            </a>
          </div>
          <div
            class="item position-relative"
            data-reveal-self="translate-up"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <!-- Title -->
            <div class="title d-flex flex-md-column gap-4 align-items-center align-items-md-start">
              <!-- Icon -->
              <em class="icon"><Icon name="ph:phone-call" /></em>
              <!-- Title -->
              <h3>اتصل بنا</h3>
            </div>

            <!-- Content -->
            <div class="text">
              لديك استفسار أو مشكلة؟ دردش معنا أو حدد وقت لمكالمة هاتفية مع فريق الدعم
            </div>

            <!-- Action -->
            <div
              class="btn btn-primary mt-auto stretched-link"
              data-bs-toggle="modal"
              data-bs-target="#contact_modal"
              data-cursor-hidden
            >
              كلمنا الآن
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
#contact-hero-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
  padding-top: 10rem;
}
#contact-hero-block > *:not(.background) {
  z-index: 1;
}
#contact-hero-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
#contact-hero-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
#contact-hero-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
#contact-hero-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
#contact-hero-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
#contact-hero-block [text] .text {
  font-size: 1.25rem;
}
#contact-hero-block [text] .crow {
  display: flex;
  margin: 1rem 0;
}
#contact-hero-block [text] .crow > * {
  margin-left: -2rem;
  border: 0.5rem solid var(--root-bg);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
#contact-hero-block [links] {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
  gap: 2.5rem;
}
#contact-hero-block [links] .item {
  transition: all 0.3s ease-in-out;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
  height: fit-content;
  user-select: none;
}
#contact-hero-block [links] .item .title {
  margin-bottom: 1.5rem;
}
#contact-hero-block [links] .item h3 {
  font-weight: 700;
  font-size: 1.63rem;
}
#contact-hero-block [links] .item .title > .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--brand-200);
  padding: 0.75rem;
  width: 56px;
  height: 56px;
  font-size: 2rem;
}
#contact-hero-block [links] .item .title > .icon * {
  font-size: 32px !important;
}
#contact-hero-block [links] .item .text {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}
#contact-hero-block [links] .item .btn {
  padding: 0.63rem 2rem;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #contact-hero-block [text] h1 {
    font-size: 2.75rem;
  }
  #contact-hero-block [text] .text {
    font-size: 1.5rem;
  }
  #contact-hero-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
  #blog-block .header .subtitle {
    font-size: 1.13rem;
  }
  #blog-block > .background > .bg-dotted > * {
    transform: scale(1);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #contact-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #contact-hero-block {
    margin-bottom: 12.5rem;
  }
  #contact-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  #contact-hero-block > .background > .bg-1 {
    width: 200%;
  }
  #contact-hero-block [links] {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #contact-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  #contact-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  #contact-hero-block > .background > .bg-1 {
    width: 100%;
  }
}
.sm-links {
  display: flex;
  gap: 1rem;
}
.sm-links > * {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background-color: var(--brand-800);
  padding: 0;
  width: 3rem;
  height: 3rem;
  color: var(--brand-white) !important;
  font-size: 24px;
}
.sm-links > *:hover {
  background-color: var(--brand-white);
  color: var(--brand-800) !important;
}
</style>
