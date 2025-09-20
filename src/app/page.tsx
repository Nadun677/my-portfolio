"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">Nadun Konara</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link href="#about" className="hover:text-cyan-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-cyan-400">Nadun</span> 👋
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          I’m a <span className="text-cyan-300">Full-Stack Developer</span> passionate about 
          building modern web and mobile apps with Next.js, Flutter, Firebase, and AI.
        </p>
        <div className="flex gap-6">
          <a
            href="/Nadun-CV.pdf"
            download
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition"
          >
            Download CV
          </a>
          <Link
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-4xl mx-auto text-center mt-32 px-6 py-16 bg-gray-800/40 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I’m <span className="font-semibold text-white">Nadun Konara</span>, an enthusiastic 
          software engineer currently pursuing my{" "}
          <span className="text-cyan-300">BSc (Hons) in Computing at NIBM</span>.  
          I specialize in building modern web and mobile apps, with a strong focus on{" "}
          <span className="text-cyan-300">React, Next.js, Flutter, Firebase, and AI integration</span>.  
        </p>
        <p className="text-gray-400 text-base leading-relaxed">
          I’ve worked on projects like a{" "}
          <span className="text-cyan-300">Food Delivery App with AI recommendations</span>,  
          an <span className="text-cyan-300">IoT-based Smart Parking System</span>,  
          and a <span className="text-cyan-300">Real-Time Air Quality Monitoring System</span>.  
          My passion lies in creating scalable solutions that solve real-world problems.
        </p>
      </section>
    </main>
  );
}
