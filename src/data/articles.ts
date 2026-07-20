export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];

  image: string;
  featuredImage: string;

  category: string;
  tags: string[];

  author: string;

  date: string;
  readingTime: string;

  featured: boolean;
}

export const articles: Article[] = [
  {
    slug: "the-art-of-choosing-your-first-luxury-watch",

    title: "The Art of Choosing Your First Luxury Watch",

    excerpt:
      "Selecting your first luxury watch is more than a purchase—it's the beginning of a lifelong appreciation for craftsmanship and timeless design.",

    content: [
      "Buying your first luxury watch is a milestone. It represents your appreciation for quality, craftsmanship, and timeless style.",

      "Rather than chasing trends, choose a watch that complements your lifestyle and reflects your personality.",

      "Focus on versatile designs, reliable movements, premium materials, and a style you'll enjoy wearing for many years.",

      "A well-chosen timepiece becomes part of your story and often marks important moments throughout your life."
    ],

    image: "/images/articles/first-watch-thumb.jpg",

    featuredImage: "/images/articles/first-watch.jpg",

    category: "Buying Guide",

    tags: ["Luxury", "Buying Guide", "Beginner"],

    author: "Imperial US",

    date: "June 2026",

    readingTime: "6 min read",

    featured: true
  },

  {
    slug: "how-to-match-your-watch-with-every-outfit",

    title: "How to Match Your Watch with Every Outfit",

    excerpt:
      "Discover how the right watch complements both formal tailoring and everyday casual wear.",

    content: [
      "Your watch should complement your outfit instead of competing with it.",

      "Silver watches pair beautifully with navy, grey, and black tailoring, while darker dials create stronger contrast for evening occasions.",

      "Leather straps bring warmth and elegance, whereas stainless steel bracelets offer versatility."
    ],

    image: "/images/articles/outfit-thumb.jpg",

    featuredImage: "/images/articles/outfit.jpg",

    category: "Style",

    tags: ["Style", "Fashion"],

    author: "Imperial US",

    date: "June 2026",

    readingTime: "5 min read",

    featured: false
  },

  {
    slug: "what-makes-a-great-timepiece",

    title: "What Makes a Great Timepiece?",

    excerpt:
      "Explore the details that separate an exceptional watch from an ordinary one.",

    content: [
      "Great watches combine timeless design with dependable engineering.",

      "Attention to detail—from dial finishing to bracelet construction—defines long-term quality.",

      "While movements matter, thoughtful design and everyday comfort are equally important."
    ],

    image: "/images/articles/timepiece-thumb.jpg",

    featuredImage: "/images/articles/timepiece.jpg",

    category: "Craftsmanship",

    tags: ["Craftsmanship"],

    author: "Imperial US",

    date: "May 2026",

    readingTime: "7 min read",

    featured: false
  },

  {
    slug: "why-every-gentleman-should-own-a-dress-watch",

    title: "Why Every Gentleman Should Own a Dress Watch",

    excerpt:
      "A timeless dress watch remains one of the most versatile accessories a gentleman can own.",

    content: [
      "Minimalism never goes out of style.",

      "A refined dress watch elevates formal occasions while remaining elegant enough for everyday wear.",

      "Its versatility makes it an essential part of any modern wardrobe."
    ],

    image: "/images/articles/dress-watch-thumb.jpg",

    featuredImage: "/images/articles/dress-watch.jpg",

    category: "Lifestyle",

    tags: ["Lifestyle"],

    author: "Imperial US",

    date: "May 2026",

    readingTime: "4 min read",

    featured: false
  },

  {
    slug: "7-tips-to-keep-your-watch-looking-new",

    title: "7 Tips to Keep Your Watch Looking New",

    excerpt:
      "Simple habits that help preserve the beauty and longevity of your timepiece.",

    content: [
      "Clean your watch regularly with a microfiber cloth.",

      "Avoid exposing it to unnecessary impacts or harsh chemicals.",

      "Store it properly when not in use and service it when recommended."
    ],

    image: "/images/articles/watch-care-thumb.jpg",

    featuredImage: "/images/articles/watch-care.jpg",

    category: "Watch Care",

    tags: ["Care"],

    author: "Imperial US",

    date: "April 2026",

    readingTime: "5 min read",

    featured: false
  },

  {
    slug: "the-philosophy-behind-imperial-us",

    title: "The Philosophy Behind Imperial US",

    excerpt:
      "Discover the inspiration behind the Imperial US brand and the values that shape every collection.",

    content: [
      "Imperial US was created for gentlemen who appreciate timeless elegance and quiet confidence.",

      "Our philosophy centers on ambition, discipline, craftsmanship, and enduring design.",

      "Every collection reflects these values while remaining accessible to modern professionals."
    ],

    image: "/images/articles/philosophy-thumb.jpg",

    featuredImage: "/images/articles/philosophy.jpg",

    category: "Behind the Brand",

    tags: ["Brand", "Philosophy"],

    author: "Imperial US",

    date: "April 2026",

    readingTime: "5 min read",

    featured: false
  }
];