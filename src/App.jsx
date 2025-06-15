import React from "react";
import { motion } from "framer-motion";
import pancarga from "./pancarga.png";
import humo from "./humo.png";

export default function App() {
  const breadItems = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 4,
  }));
  const smokeItems = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 2,
    duration: 10 + Math.random() * 5,
  }));

  return (
    <div className="relative bg-white text-gray-800 min-h-screen overflow-hidden">
      {/* Background doodle pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/03/19/09/pattern-3371401_1280.png"
          alt="doodle background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Animated bread and smoke */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {breadItems.map(({ id, x, delay, duration }) => (
          <motion.img
            key={id}
            src={pancarga}
            alt="bread slice"
            initial={{ x, y: window.innerHeight + 50, opacity: 1 }}
            animate={{ x: Math.random() * window.innerWidth, y: -50, opacity: 0 }}
            transition={{ repeat: Infinity, duration, ease: 'linear', delay }}
            className="absolute w-16 h-16 object-contain"
          />
        ))}
        {smokeItems.map(({ id, x, delay, duration }) => (
          <motion.img
            key={id}
            src={humo}
            alt="smoke"
            initial={{ x, y: window.innerHeight + 50, opacity: 0.5 }}
            animate={{ x, y: -100, opacity: 0 }}
            transition={{ repeat: Infinity, duration, ease: 'linear', delay }}
            className="absolute w-24 h-24 object-contain blur-lg"
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur-sm py-4 shadow-md z-20 text-center"
      >
        <h1 className="text-4xl font-bold text-yellow-700">Panadería Montoya 🍞</h1>
      </motion.header>

      <main className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 pt-16">
        {/* Video Section Centered */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl mx-auto"
        >
          <video
            src="video.mp4"
            controls
            loop
            muted
            poster={pancarga}
            className="w-full rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center max-w-2xl"
        >
          <h2 className="text-3xl font-semibold text-yellow-600 mb-4">
            Deléitate con el auténtico sabor peruano
          </h2>
          <p className="text-lg leading-relaxed">
            Descubre la tradición y el aroma incomparables de nuestros panes
            artesanales, horneados diariamente en el corazón de Lima.
          </p>
        </motion.section>

        {/* Footer with name */}
        <footer className="mt-16 mb-8 text-center text-gray-500 text-sm">
          sjaquer@
        </footer>
      </main>
    </div>
  );
}
