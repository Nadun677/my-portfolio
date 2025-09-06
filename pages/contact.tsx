// pages/contact.tsx
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Fawzi Sayed</title>
        <meta name="description" content="Get in touch with Fawzi Sayed for design projects and collaborations." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="max-w-4xl mx-auto space-y-12">
          {/* Contact Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Let’s Work Together</h1>
            <p className="text-gray-700">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p><strong>Phone:</strong> +20 123 456 789</p>
            <p><strong>Email:</strong> fawzi@example.com</p>
            <p><strong>Address:</strong> Cairo, Egypt</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">Dribbble</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
