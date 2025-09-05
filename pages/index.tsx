// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NADUN KONARA | SOFTWARE ENGINEER</title>
        <meta name="description" content="Portfolio of Nadun Konara, Developer based in Sri Lanka" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hello, I’m <span className="text-blue-600">Fawzi Sayed</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              A Product Designer based in Egypt. I design thoughtful digital experiences & beautiful brand aesthetics.
            </p>

            <div className="flex gap-6 mt-4">
              <div>
                <h2 className="text-3xl font-bold text-blue-600">10+</h2>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600">14</h2>
                <p className="text-sm text-gray-500">Clients Worldwide</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Start a Conversation
            </a>
          </div>

          {/* Right Image or Illustration */}
          <div className="flex-1">
            <img
              src="/profile-illustration.png"
              alt="Fawzi Sayed Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>
      </main>
    </>
  );
}
