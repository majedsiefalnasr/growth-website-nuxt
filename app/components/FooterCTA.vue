<script lang="ts"></script>

<template>
  <div
    class="footer-cta-block"
    data-section="footer-cta"
    data-scrolled-into-view="false"
    data-scrolled-past-view="false"
  >
    <div class="row justify-content-center text-center">
      <div class="col-12 col-lg-10">
        <!-- Header -->
        <div class="header">
          <!-- Title -->
          <h2
            data-cursor-magnify-inner
            data-reveal-self="rotate"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            <span>ركز على نمو تجارتك واترك</span>
            <span> لنا مهمة تشغيل متجرك الإلكتروني</span>
          </h2>

          <!-- Subtitle -->
          <div
            class="subtitle"
            data-reveal-self="translate-up"
            data-reveal-delay="2"
            data-scrolled-into-view="false"
            data-scrolled-past-view="false"
          >
            تطبيق Growth للتاجر متوفر الآن في متجري App Store & Google Play
          </div>
        </div>

        <!-- Action -->
        <div
          class="footer text-center"
          data-reveal-self="translate"
          data-reveal-delay="4"
          data-scrolled-into-view="false"
          data-scrolled-past-view="false"
        >
          <NuxtLink
            to="/create-account"
            class="btn btn-primary btn-stretch btn-lg"
            data-cursor-stick
          >
            أنشئ متجرك الآن
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Background -->
    <div class="bg">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
  </div>
</template>

<style scoped>
.footer-cta-block {
  position: relative;
  bottom: -140px;
  z-index: 0;
  margin-top: -140px;
  border-radius: 1.5rem;
  background: linear-gradient(90deg, #ece9e6 0%, #f3f4ff 100%);
  padding: 2.5rem 2rem;
  overflow: hidden;
}
.footer-cta-block > * {
  position: relative;
  z-index: 1;
}
.footer-cta-block > .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.footer-cta-block > .bg * {
  position: absolute;
  flex-shrink: 0;
  filter: blur(300px);
  transition: transform 0.2s ease-in-out;
  margin-right: auto;
  background-size: cover;
  background-repeat: no-repeat;
  content: '';
}
.footer-cta-block > .bg .b1 {
  top: -40%;
  left: 10%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc3IiBoZWlnaHQ9IjM4NiIgdmlld0JveD0iMCAwIDM3NyAzODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTA1Ljk5NiAyMy4zMzg4QzE5MC40MjMgMTIuNDAxIDI5Ni4yNjggLTMyLjU5NjcgMzM2LjIwMSA0Mi41ODg1QzM5My44MzggMTUxLjEwNCAzOTguNjU1IDMxMi40OTIgMjkxLjcyOSAzNzMuMDI3QzE5NS4xNjEgNDI3LjY5OCAxMTUuNTAxIDI5MC42MSAzNy40NiAyMTEuNzE4QzMuNzQzNzggMTc3LjYzNSAtOS4zNTQ2OSAxMzAuMjg2IDcuMDM2NSA4NS4yMzNDMjEuNzQyOSA0NC44MTA1IDYzLjMzNzcgMjguODY1MyAxMDUuOTk2IDIzLjMzODhaIiBmaWxsPSIjRUFFQUVBIi8+Cjwvc3ZnPgo=');
  width: 21.88rem;
  height: 23.75rem;
}
.footer-cta-block > .bg .b2 {
  top: 50%;
  left: 30%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjY0OSIgdmlld0JveD0iMCAwIDUwMCA2NDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjM3LjI0MyAwLjQ2MTE3M0MzNzguMDgyIC05LjQ2NzAxIDQ3Mi40NDggMTQyLjcyMSA0OTcuNDI0IDI4MS42ODNDNTE0Ljg5MyAzNzguODczIDQwMi43NDEgNDI2LjA4MiAzMjQuNTk0IDQ4Ni40NDhDMjMyLjU2OSA1NTcuNTM1IDE0MC4zNDMgNjk3LjM1MSA0NC40MjgzIDYzMS42MDhDLTUzLjA4MyA1NjQuNzcgMzUuMjkxMiA0MjQuODg2IDY5LjgzMTIgMzExLjgyNUMxMDcuODk1IDE4Ny4yMyAxMDcuMjg2IDkuNjIyMjcgMjM3LjI0MyAwLjQ2MTE3M1oiIGZpbGw9IiNBREYyQ0UiLz4KPC9zdmc+Cg==');
  width: 31.25rem;
  height: 40.63rem;
}
.footer-cta-block > .bg .b3 {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM3IiBoZWlnaHQ9IjQwNiIgdmlld0JveD0iMCAwIDQzNyA0MDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMzLjI0NyAwLjA2ODIwNzhDMzM3LjUyMyAyLjY5MjI2IDQwNy42NDQgOTkuNzI2MiA0MzIuNDc4IDIwMC45NTFDNDUyLjEzOCAyODEuMDg2IDQwNS43MTcgMzY0LjUyOCAzMzEuNTczIDQwMC44NTJDMjc4Ljc5MSA0MjYuNzExIDI0NS42MzEgMzQ4LjM0MiAxOTYuMDU2IDMxNi43NzdDMTIzLjYzIDI3MC42NjQgLTkuNDczODkgMjc1LjMwNiAwLjUzMzk0MiAxOTAuMDgxQzEzLjQ0MDMgODAuMTc0IDEyMi41MjggLTIuNzE3OTggMjMzLjI0NyAwLjA2ODIwNzhaIiBmaWxsPSIjQkJENkZGIi8+Cjwvc3ZnPgo=');
  width: 26.88rem;
  height: 25rem;
}
.footer-cta-block .header {
  margin-bottom: 3rem;
}
.footer-cta-block .header h2 {
  margin-bottom: 1.25rem;
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.footer-cta-block .header .subtitle {
  font-size: 1.25rem;
}

/* Responsiveness */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .footer-cta-block .header h2 {
    font-size: 2.5rem;
  }
  .footer-cta-block .header .subtitle {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .footer-cta-block .header h2 {
    font-size: 3rem;
  }
  .footer-cta-block {
    padding: 5rem 7.5rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
