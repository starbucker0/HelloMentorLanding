export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  tags: string[];
  category: string;
  image: string;
  imageHint: string;
}

const posts: Post[] = [
  {
    slug: 'unlocking-the-power-of-ai',
    title: 'Unlocking the Power of AI for Your Business',
    excerpt: 'Discover how artificial intelligence can revolutionize your business operations, from marketing to customer service.',
    content: `
<p>Artificial Intelligence (AI) is no longer a futuristic concept; it's a present-day reality transforming industries. In this post, we'll explore practical ways to integrate AI into your business to enhance efficiency and drive growth.</p>
<h3 class="font-bold text-xl my-4">AI in Marketing</h3>
<p>Leverage AI tools to generate compelling ad copy, analyze market trends, and personalize customer experiences. Our own AI Copy Generator is a testament to the power of AI in creative tasks.</p>
<h3 class="font-bold text-xl my-4">Streamlining Operations</h3>
<p>From automating repetitive tasks to optimizing supply chains, AI can handle complex processes, freeing up your team to focus on strategic initiatives. Chatbots, for example, can provide 24/7 customer support, improving user satisfaction.</p>
`,
    author: { name: 'Jane Doe', avatar: 'https://placehold.co/40x40.png' },
    date: '2024-07-28',
    tags: ['AI', 'Business', 'Technology'],
    category: 'Growth',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'artificial intelligence',
  },
  {
    slug: 'mastering-seo-for-your-blog',
    title: 'Mastering SEO: A Guide for Your New Blog',
    excerpt: 'Learn the fundamentals of Search Engine Optimization to ensure your blog posts reach the widest possible audience.',
    content: `
<p>Starting a blog is easy, but getting it noticed is the real challenge. Search Engine Optimization (SEO) is the key to organic visibility. This guide covers the essentials.</p>
<h3 class="font-bold text-xl my-4">Keyword Research</h3>
<p>Understand what your audience is searching for. Use tools like Google Keyword Planner to find relevant keywords with good search volume and low competition.</p>
<h3 class="font-bold text-xl my-4">On-Page SEO</h3>
<p>Optimize your content by including your primary keyword in the title, meta description, headings, and throughout the article. Ensure your site is mobile-friendly and loads quickly.</p>
`,
    author: { name: 'John Smith', avatar: 'https://placehold.co/40x40.png' },
    date: '2024-07-25',
    tags: ['SEO', 'Blogging', 'Marketing'],
    category: 'Marketing',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'search engine',
  },
  {
    slug: 'the-art-of-the-landing-page',
    title: 'The Art of the High-Converting Landing Page',
    excerpt: 'A great product needs a great landing page. We break down the essential elements that turn visitors into customers.',
    content: `
<p>Your landing page is your digital storefront. It needs to be perfect. Here are the core components of a landing page that converts.</p>
<h3 class="font-bold text-xl my-4">Compelling Headline</h3>
<p>Your headline is the first thing a visitor reads. It must be clear, concise, and communicate your value proposition instantly.</p>
<h3 class="font-bold text-xl my-4">Clear Call-to-Action (CTA)</h3>
<p>Tell visitors exactly what you want them to do next. Use action-oriented language and make your CTA buttons stand out visually.</p>
`,
    author: { name: 'Emily White', avatar: 'https://placehold.co/40x40.png' },
    date: '2024-07-22',
    tags: ['Design', 'UX', 'Conversion'],
    category: 'Design',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'web design',
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
