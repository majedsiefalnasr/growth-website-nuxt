<script lang="ts"></script>

<template>
  <footer
    class="footer-block"
    data-cursor="-inverse"
    data-section="footer"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="container">
      <div class="row justify-content-center">
        <!-- Links -->
        <div class="col-12 col-lg-10 mb-5" links>
          <div class="footer-nav">
            <!-- Group 1 -->
            <div class="links-list">
              <!-- Title -->
              <div class="title">المنصة</div>

              <!-- Links -->
              <div class="links">
                <NuxtLink to="/features" class="link">الميزات والخدمات</NuxtLink>
                <NuxtLink to="/price" class="link">الباقات</NuxtLink>
                <NuxtLink to="/stores" class="link">متاجرنا</NuxtLink>
                <NuxtLink to="/partners" class="link">شركاؤنا</NuxtLink>
              </div>
            </div>

            <!-- Group 1 -->
            <div class="links-list">
              <!-- Title -->
              <div class="title">الشركة</div>

              <!-- Links -->
              <div class="links">
                <NuxtLink to="/about/company" class="link">من نحن</NuxtLink>
                <NuxtLink to="/about/careers" class="link">انضم لنا</NuxtLink>
                <a href="/about/brand" class="link external" target="_blank">علامتنا التجارية</a>
                <a href="#" class="link external" target="_blank">الاكاديمية</a>
                <NuxtLink to="/terms-of-service" class="link">شروط الخدمة</NuxtLink>
                <NuxtLink to="/privacy" class="link">سياسة الخصوصية</NuxtLink>
                <NuxtLink to="/contact" class="link">تواصل معنا</NuxtLink>
              </div>
            </div>

            <!-- Group 2 -->
            <div class="links-list">
              <!-- Title -->
              <div class="title">المساعدة</div>

              <!-- Links -->
              <div class="links">
                <NuxtLink to="/help-center" class="link external" target="_blank"
                  >مركز المساعدة</NuxtLink
                >
                <NuxtLink to="/hire-expert" class="link">توظيف خبير</NuxtLink>
                <NuxtLink to="/faq" class="link">الأسئلة الشائعة</NuxtLink>
              </div>
            </div>

            <!-- Group 3 -->
            <div class="links-list">
              <!-- Title -->
              <div class="title">المجتمع</div>

              <!-- Links -->
              <div class="links">
                <NuxtLink to="/blog" class="link external" target="_blank">المدونة</NuxtLink>
                <NuxtLink to="/community" class="link external" target="_blank"
                  >مجتمع Growth</NuxtLink
                >
                <NuxtLink to="/customers" class="link">آراء عملائنا</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Site info -->
        <div class="col-12 col-lg-10 text-center">
          <!-- Social media links -->
          <div class="sm-links justify-content-center mb-5 mt-4">
            <!-- Facebook -->
            <a href="#" class="btn">
              <em class="usg-icon-facebook"></em>
            </a>
            <!-- Youtube -->
            <a href="#" class="btn">
              <em class="usg-icon-youtube"></em>
            </a>
            <!-- Google -->
            <a href="#" class="btn">
              <em class="usg-icon-google"></em>
            </a>
            <!-- Instagram -->
            <a href="#" class="btn">
              <em class="usg-icon-instagram"></em>
            </a>
            <!-- Whatsapp -->
            <a href="#" class="btn">
              <em class="usg-icon-whatsapp"></em>
            </a>
          </div>

          <!-- Site logo -->
          <NuxtLink to="/" class="site-logo d-inline-block">
            <img class="m-auto" src="/assets/images/logo-dark.png" alt="Growth" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-block {
  position: -webkit-relative;
  position: relative;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: var(--brand-900);
  padding: 14.5rem 0 7rem;
  color: var(--brand-white);
  font-weight: 300;
}
.footer-block .footer-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  gap: 2.5rem;
}
.footer-block .links-list.big {
  grid-column: auto / span 2;
}
.footer-block .links-list.big .links {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  gap: 0.5rem;
}
.footer-block .links-list .title {
  opacity: 0.6;
  font-weight: 500;
  font-size: 1.25rem;
}
.footer-block .links-list .links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
  user-select: none;
}
.footer-block .links-list .links .link {
  position: relative;
  transition: all 0.3s ease-in-out;
  color: var(--brand-white);
  text-decoration: none;
}
.footer-block .links-list .links:hover .link {
  opacity: 0.5;
}
.footer-block .links-list .links .link:hover {
  opacity: 1;
}
.footer-block .links-list .links .link.external {
  display: flex;
  align-items: center;
}
.footer-block .links-list .links .link.external:after {
  display: inline-block;
  vertical-align: middle;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  margin-right: -0.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3C!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --%3E%3Cpath fill='white' d='M197.66 197.66a8 8 0 0 1-11.32 0L72 83.31V168a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h104a8 8 0 0 1 0 16H83.31l114.35 114.34a8 8 0 0 1 0 11.32'/%3E%3C/svg%3E");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: '';
}
.footer-block .links-list .links .link.external:hover:after {
  opacity: 1;
  margin-right: 0.5rem;
}
.footer-block .links-list .links .link.current {
  opacity: 1;
  pointer-events: none;
}
.footer-block [help-actions] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.footer-block [help-actions] .action {
  color: var(--brand-white);
  text-decoration: none;
}
.footer-block [help-actions] .action .icon {
  display: flex;
  flex: 0 0 3rem;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  background-color: var(--brand-800);
  width: 3rem;
  height: 3rem;
  color: var(--brand-white);
  font-size: 24px;
}
.footer-block [help-actions] .action:hover .icon {
  background-color: var(--brand-white);
  color: var(--brand-800);
}
.footer-block [help-actions] .action .info {
  font-size: 0.88rem;
}
.footer-block [help-actions] .action .info .title {
  font-weight: 700;
  font-size: 1.25rem;
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .footer-block [help-actions] {
    flex-direction: row;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .footer-block {
    position: -webkit-sticky;
    position: sticky;
    padding: 14.5rem 0 3rem;
  }
  .footer-block .footer-nav {
    grid-template-columns: repeat(4, 1fr);
  }
  .footer-block [help-actions] {
    flex-direction: column;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
