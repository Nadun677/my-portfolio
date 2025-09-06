// pages/blog.tsx
import Head from 'next/head';

const blogPosts = [
  {
    title: "Unique Examples of Portfolio Websites",
    date: "10 July 2022",
    excerpt: "Explore some of the most creative and effective portfolio designs that stand out in the digital space.",
    image: "/blog/portfolio-examples.jpg", // Add to public/blog/
  },
  {
    title: "Designing for Mobile First",
    date: "10 July 2022",
    excerpt: "Why mobile-first design matters and how it improves user experience across devices.",
    image: "/blog/mobile-first.jpg",
  },
  {
    title: "User Research Techniques",
    date: "10 July 2022",
    excerpt: "Learn how to gather meaningful insights from users to guide your design decisions.",
    image: "/blog/user-research.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Fawzi Sayed</title>
        <meta name="description" content="Read blog posts by Fawzi Sayed on design, UX, and portfolio strategies." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Read My Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
