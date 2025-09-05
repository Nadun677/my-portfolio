// pages/services.tsx
import Head from 'next/head';

const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly websites tailored to your brand.",
    icon: "/icons/web-design.svg", // Add your icons to public/icons/
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces and seamless user experiences for digital products.",
    icon: "/icons/uiux-design.svg",
  },
  {
    title: "Mobile Application",
    description: "Crafting responsive and engaging mobile apps for iOS and Android platforms.",
    icon: "/icons/mobile-app.svg",
  },
  {
    title: "User Research",
    description: "Conducting research to understand user needs and improve product usability.",
    icon: "/icons/user-research.svg",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Fawzi Sayed</title>
        <meta name="description" content="Explore the design services offered by Fawzi Sayed." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">My Specialties</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
