// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Fawzi Sayed</title>
        <meta name="description" content="Learn more about Fawzi Sayed, his background and experience in UI/UX design." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-700">
              I’m Fawzi Sayed, a passionate Product Designer based in Egypt. With over a decade of experience in crafting intuitive and engaging digital experiences, I specialize in UI/UX design, user research, and mobile applications.
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold">Lead UI/UX Designer</h3>
                <p className="text-gray-600">2020 – Present</p>
                <p className="text-gray-700">Leading design teams and overseeing product strategy for global clients.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
                <p className="text-gray-600">2016 – 2020</p>
                <p className="text-gray-700">Designed complex interfaces and improved user flows for enterprise platforms.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold">Junior UI/UX Designer</h3>
                <p className="text-gray-600">2012 – 2016</p>
                <p className="text-gray-700">Started my journey in design, focusing on mobile apps and web interfaces.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
