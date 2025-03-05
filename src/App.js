import React from 'react';
import './index.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaXing } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-gray-400 to-gray-900 text-white py-14 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Emmanuel Gomez</h1>
        <p className="text-xl md:text-2xl">Front End Developer</p>
        <p className="mt-2 text-lg">Crafting beautiful and functional web experiences</p>
      </header>

      

    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">My projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-transparent border border-zinc-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold mb-2">Boiled Egg Timer</h3>
        <p className="text-white text-lg mb-4">
          A responsive timer app for perfect boiled eggs, featuring custom designs and dynamic timers.
        </p>
        <div className="flex flex-col gap-2">
        <a
        href="https://github.com/Manyg11/boiled-eggs-app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on GitHub
        </a>
        <a 
        href="https://boiledeggstimer-emmanuel-gomez.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Netlify
        </a>
      </div>
      </div>
      <div className="bg-transparent border border-zinc-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-2">Task Manager</h3>
      <p className="text-white text-lg mb-4">
          A drag-and-drop task organizer with dynamic task creation.
        </p>
        <div className="flex flex-col gap-2">
        <a
        href="https://github.com/Manyg11/to-do-app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Github
        </a>
        <a 
        href="https://taskmanager-emmanuel-gomez.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Netlify
        </a>
        </div>
      </div>
      <div className="bg-transparent border border-zinc-400  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-2">Little Lemon</h3>
      <p className="text-white text-lg mb-4">
         Little Lemon website, this was my final project of my course on Coursera by META.
        </p>
        <div className="flex flex-col gap-2">
        <a
        href="https://github.com/Manyg11/Capstone-project"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Github
        </a>
        <a 
        href="https://littlelemon-emmanuel-gomez.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Netlify
        </a>
        </div>
        </div>
        <div className="bg-transparent border border-zinc-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-2">Weather forecast</h3>
      <p className="text-white text-lg mb-4">
         A weather forecast app with city suggestions, 5-day forecast, and dynamic backgrounds.
        </p>
        <div className="flex flex-col gap-2">
        <a
        href="https://github.com/Manyg11/Weather-app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Github
        </a>
        <a 
        href="https://weatherapp-emmanuel-gomez.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline font-medium"
        >
          View on Netlify
        </a>
        </div>
      </div>
      </div>

      <div className="mt-10 text-left max-w-6xl mx-auto px-4">
        <a
        href="/cv-emmanuel-gomez.pdf"
        download="cv-emmanuel-gomez.pdf"
        className="inline-block bg-gray-700  text-white py-2 px-2 border border-2-zinc-400 rounded-lg hover:text-sky-500"
        >
          Download my CV
        </a>
      </div>
    </section>

    <footer className="bg-gradient-to-r from-gray-400 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
    <div className="flex items-center  gap-4">
          <p className="text-2xl font-bold">Contact me:</p>
          <a href="mailto:emmanuelgomez1188@gmail.com" className="text-white hover:text-blue-500">
            <FaEnvelope size={30} />
          </a>
          </div>
          <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/emmanuel-gomez-b3716119b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/Manyg11" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaGithub size={40} />
          </a>
          <a href="https://www.xing.com/profile/Emmanuel_Gomez065222/web_profiles?expandNeffi=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaXing size={40} />
          </a>
          </div>
        </div>
    </footer>
    </div>
    
  );
}

export default App;
