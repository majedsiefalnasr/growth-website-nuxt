<script lang="ts"></script>

<template>
  <div
    class="contact-hero-block"
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
            <NuxtLink
              to="/help-center"
              class="btn btn-primary mt-auto stretched-link"
              data-cursor-hidden
            >
              مركز المساعدة
            </NuxtLink>
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

    <teleport to="body">
      <div
        id="contact_modal"
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="contact_modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div id="contact_modalLabel" class="modal-title">
                <div class="d-flex gap-4 align-items-start">
                  <!-- Icon -->
                  <em class="icon"><Icon name="ph:phone-call" class="icon" /></em>

                  <div>
                    <!-- Title -->
                    <h5>اتصل بنا</h5>

                    <!-- subtitle -->
                    <div class="text">
                      لديك استفسار أو مشكلة؟ دردش معنا أو حدد وقت لمكالمة هاتفية مع فريق الدعم
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body pb-0">
              <!-- Contact form -->
              <form id="contactForm">
                <!-- Name input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_name">الاسم</label>
                  <input
                    id="contact_name"
                    class="form-control"
                    type="text"
                    placeholder="ماجد سيف النصر"
                    required
                  />
                  <div class="invalid-feedback">الاسم مطلوب</div>
                </div>

                <!-- Email address input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_emailAddress"> البريد الالكتروني </label>
                  <input
                    id="contact_emailAddress"
                    class="form-control"
                    type="email"
                    placeholder="example@ultimatesolutions.com"
                    required
                  />
                  <div class="invalid-feedback">البريد الالكتروني مطلوب</div>
                  <div class="invalid-feedback">بريد الكتروني غير صحيح</div>
                </div>

                <!-- Subject input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_subject"> موضوع التواصل </label>
                  <select
                    id="contact_subject"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">مثال على موضوع تواصل</option>
                    <option value="2">مثال على موضوع تواصل</option>
                    <option value="3">مثال على موضوع تواصل</option>
                    <option value="4">مثال على موضوع تواصل</option>
                  </select>
                  <div class="invalid-feedback">موضوع التواصل مطلوب</div>
                </div>

                <!-- Company name input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_companyName">اسم الشركة</label>
                  <input id="contact_companyName" class="form-control" type="text" />
                </div>

                <!-- Subject input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_subject"> حجم الشركة </label>
                  <select
                    id="contact_subject"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" selected>اقل من 10 موظفين</option>
                    <option value="2">من 10 الى 50 موظف</option>
                    <option value="3">من 50 الى 100 موظف</option>
                    <option value="4">اكثر من 100 موظف</option>
                  </select>
                </div>

                <!-- Message input -->
                <div class="mb-3">
                  <label class="form-label" for="contact_message">استفسارات</label>
                  <textarea
                    id="contact_message"
                    class="form-control"
                    type="text"
                    placeholder="كيف يمكننا مساعدتك"
                    style="height: 10rem"
                    required
                  ></textarea>
                  <div class="invalid-feedback">برجاء كتابة استفسارك</div>
                </div>

                <!-- Form submissions success message -->
                <div id="submitSuccessMessage" class="d-none">
                  <div class="text-center mb-3">
                    تم ارسال رسالتك بنجاح وسيتواصل معك احد ممثلي خدمة العملاء فى اقرب وقت ممكن.
                  </div>
                </div>

                <!-- Form submissions error message -->
                <div id="submitErrorMessage" class="d-none">
                  <div class="text-center text-danger mb-3">
                    لم نتمكن من ارسال رسالتك. يمكن اعادة المحاولة مره اخري او التواصل مع الدعم
                    الفني.
                  </div>
                </div>

                <!-- Privacy message -->
                <div>
                  سنتعامل مع بياناتك الشخصية كما هو موضح في سياسة الخصوصية الخاصة بنا للإجابة على
                  سؤالك وتقديم معلومات حول منتجاتنا وخدماتنا.
                </div>
              </form>
            </div>
            <div class="modal-footer flex-nowrap">
              <button type="button" class="btn btn-primary btn-stretch w-100">إرسال</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">الغاء</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.contact-hero-block {
  position: relative;
  z-index: 0;
  margin-bottom: 8.75rem;
  padding-top: 10rem;
}
.contact-hero-block > *:not(.background) {
  z-index: 1;
}
.contact-hero-block > .background > * {
  position: absolute;
  z-index: -1;
  width: 100%;
  pointer-events: none;
  text-align: center;
}
.contact-hero-block > .background > .bg-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300%;
}
.contact-hero-block > .background > .bg-dotted {
  top: 100px;
  left: 100px;
  transform: translateX(0px);
  -webkit-animation: floatX_dotted 6s ease-in-out infinite;
  animation: floatX_dotted 6s ease-in-out infinite;
}
.contact-hero-block > .background > .bg-dotted > * {
  transform: scale(0.8);
}
.contact-hero-block [text] h1 {
  color: var(--brand-500);
  font-weight: 700;
  font-size: 2rem;
}
.contact-hero-block [text] .text {
  font-size: 1.25rem;
}
.contact-hero-block [text] .crow {
  display: flex;
  margin: 1rem 0;
}
.contact-hero-block [text] .crow > * {
  margin-left: -2rem;
  border: 0.5rem solid var(--root-bg);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.contact-hero-block [links] {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
  gap: 2.5rem;
}
.contact-hero-block [links] .item {
  transition: all 0.3s ease-in-out;
  border-radius: 1rem;
  background-color: var(--brand-white);
  padding: 1.5rem 2rem;
  height: fit-content;
  user-select: none;
}
.contact-hero-block [links] .item .title {
  margin-bottom: 1.5rem;
}
.contact-hero-block [links] .item h3 {
  font-weight: 700;
  font-size: 1.63rem;
}
.contact-hero-block [links] .item .title > .icon {
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
.contact-hero-block [links] .item .title > .icon * {
  font-size: 32px !important;
}
.contact-hero-block [links] .item .text {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}
.contact-hero-block [links] .item .btn {
  padding: 0.63rem 2rem;
}

/* Responsiveness */
/************************************* */
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .contact-hero-block [text] h1 {
    font-size: 2.75rem;
  }
  .contact-hero-block [text] .text {
    font-size: 1.5rem;
  }
  .contact-hero-block > .background > .bg-dotted > * {
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
  .contact-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .contact-hero-block {
    margin-bottom: 12.5rem;
  }
  .contact-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .contact-hero-block > .background > .bg-1 {
    width: 200%;
  }
  .contact-hero-block [links] {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .contact-hero-block [text] h1 {
    font-size: 3rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .contact-hero-block [text] h1 {
    font-size: 3.5rem;
  }
  .contact-hero-block > .background > .bg-1 {
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
