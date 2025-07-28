// Blog mock data for BlogHero and HeroSlider

/**
 * Blog item type.
 * @typedef {Object} Blog
 * @property {string} title - The blog title.
 * @property {string} [subtitle] - The blog subtitle.
 * @property {string} [content] - The blog content.
 * @property {string} [image] - The image source for the blog.
 * @property {string} [date] - The publication date for the blog.
 * @property {string} [reading_time] - The time it takes to read the blog.
 * @property {string} [url] - The URL for the blog post.
 * @property {Array<{ name: string; url: string }>} [categories] - The categories associated with the blog.
 */
export interface Blog {
  title: string
  subtitle?: string
  content?: string
  image?: string
  date?: string
  reading_time?: string
  url?: string
  categories?: { name: string; url: string }[]
}

/**
 * Returns the Blogs to display in the slider.
 * @returns {Blog[]} Array of blog objects.
 */
export const blogsMock: Blog[] = [
  {
    title: 'مرحبا بك في منصة حلول!',
    subtitle:
      'بدون خبرة تقنية وبكل سهولة يمكنك البيع في أي مكان وزمان بمتجر إلكتروني خاص بك وبهويتك التجارية',
    content:
      'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.',
    image: '/assets/images/blog/blog-ex1.png',
    date: '2023-01-01',
    reading_time: '5 دقائق',
    url: '/blog/post',
    categories: [
      {
        name: 'تصنيف',
        url: '/blog/category',
      },
      {
        name: 'تصنيف آخر',
        url: '/blog/category',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content:
      'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.',
    image: '/assets/images/blog/blog-ex2.png',
    date: '2023-01-02',
    reading_time: '4 دقائق',
    url: '/blog/post',
    categories: [
      {
        name: 'تصنيف',
        url: '/blog/category',
      },
      {
        name: 'تصنيف آخر',
        url: '/blog/category',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content:
      'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.',
    image: '/assets/images/blog/blog-ex3.png',
    date: '2023-01-03',
    reading_time: '6 دقائق',
    url: '/blog/post',
    categories: [
      {
        name: 'تصنيف',
        url: '/blog/category',
      },
      {
        name: 'تصنيف آخر',
        url: '/blog/category',
      },
    ],
  },
  {
    title: 'أسم المدونة',
    subtitle: 'عنوان فرعي',
    content:
      'إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.',
    image: '/assets/images/blog/blog-ex4.png',
    date: '2023-01-04',
    reading_time: '3 دقائق',
    url: '/blog/post',
    categories: [
      {
        name: 'تصنيف',
        url: '/blog/category',
      },
      {
        name: 'تصنيف آخر',
        url: '/blog/category',
      },
    ],
  },
]
