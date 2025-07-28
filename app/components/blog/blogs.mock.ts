// Blog mock data for BlogListItem in List.vue

/**
 * Blog  item type.
 * @typedef {Object} Blog
 * @property {string} image - The URL of the blog post image.
 * @property {string} title - The title of the blog post.
 * @property {string} date - The publication date of the blog post.
 * @property {strin} excerpt - A brief excerpt or summary of the blog post, can be a single string or an array of strings.
 * @property {string} postLink - The URL link to the full blog post.
 * @property {Array<{ name: string; url: string }>} [categories] - The categories associated with the blog.
 * @property {string} readTime - The estimated reading time for the blog post.
 * @property {string} [size] - Optional size property, can be 'big'
 */
export interface Blog {
  image: string
  title: string
  date: string
  excerpt: string
  postLink: string
  categories: { name: string; link: string }[]
  readTime: string
  size?: 'big'
}

/**
 * Returns the Blogs to display in the list.
 * @returns {Blog[]} Array of blog objects.
 */
export const blogsMock: Blog[] = [
  {
    image: '/assets/images/blog/blog-ex1.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
    size: 'big',
  },
  {
    image: '/assets/images/blog/blog-ex2.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
  },
  {
    image: '/assets/images/blog/blog-ex3.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
  },
  {
    image: '/assets/images/blog/blog-ex4.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
  },
  {
    image: '/assets/images/blog/blog-ex5.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
  },
  {
    image: '/assets/images/blog/blog-ex6.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
  },
  {
    image: '/assets/images/blog/blog-ex7.png',
    title: 'مرحبا بك في منصة حلول!',
    date: '23 سبتمبر 2022',
    excerpt:
      'مولد النص العربى هو أداة مجانية تتيح لك إنشاء نصوص عربية وهمية، يمكنك استخدامه لتوليد فقرات نصية عشوائية باللغة العربية، هذه الأداة مفيدة لمصممي المواقع والمطورين الذين يحتاجون إلى نصوص تجريبية لمواقعهم أو تطبيقاتهم.',
    postLink: '/blog/post',
    categories: [
      { name: 'تقنية', link: '/blog/category' },
      { name: 'تجارة', link: '/blog/category' },
    ],
    readTime: '9 دقائق',
    size: 'big',
  },
]
