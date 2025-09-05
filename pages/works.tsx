// pages/works.tsx
import Head from 'next/head';

const projects = [
  {
    title: "Bally Website Research",
    description: "A case study on user behavior and design improvements for Bally’s e-commerce platform.",
    image: "/projects/bally.png", // Add your image to public/projects/
  },
  {
    title: "File Storage App",
    description: "Designed a secure and intuitive file storage solution for enterprise users.",
    image: "/projects/file-storage.png",
  },
];

const testimonial = {
  quote: "Fawzi’s work on our file storage app was exceptional. The design is clean, intuitive, and user-friendly.",
  author: "Larry Diamond",
  role: "CEO, TechCorp",
};

export default function Works() {
  return (
    <>
      <Head>
        <title>Works | Fawzi Sayed</title>
        <meta name="description" content="Explore recent design projects and case studies by Fawzi Sayed." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="max-w-5xl mx-auto space-y-16">
          {/* Projects Section */}
          <div>
            <h1 className="text-4xl font-bold mb-12 text-center">Recent Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-blue-50 p-8 rounded-lg shadow text-center">
            <p className="text-xl italic text-gray-800 mb-4">“{testimonial.quote}”</p>
            <p className="font-semibold text-blue-600">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </section>
      </main>
    </>
  );
}
