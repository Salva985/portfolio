export default function Projects() {
    return (
      <section className="min-h-screen px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">🚀 Featured Projects</h2>
  
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              🔎 <a href="https://github.com/Salva985/project-Dive-and-Discover" target="_blank" rel="noopener noreferrer">
                Dive & Discover
              </a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Dive center and marine life search app (v0.0). Full-stack application using React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
  
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mt-16 mb-8">🧪 Practice Projects</h2>
  
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
            <h3 className="text-lg font-semibold">🎵 Spotify Clone (HTML & CSS)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              🎧 Layout replica of Spotify’s landing page using semantic HTML and modern CSS. <br />
              📂 <a href="https://github.com/Salva985/lab-css-spotify-clone" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                GitHub Repo
              </a>
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
            <h3 className="text-lg font-semibold">🎬 Greatest Movies (JavaScript Arrays & Methods)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              🍿 Practice using map, filter, reduce, and other JS methods to analyze a movie dataset. <br />
              📂 <a href="https://github.com/Salva985/lab-javascript-greatest-movies" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                GitHub Repo
              </a>
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
            <h3 className="text-lg font-semibold">🍳 Recipe Page Clone (HTML & CSS)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              📋 One-page recipe layout using structured HTML and responsive CSS. <br />
              📂 <a href="https://github.com/Salva985/lab-css-recipes-clone" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                GitHub Repo
              </a>
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
            <h3 className="text-lg font-semibold">🛒 Ironhack Cart (JavaScript & DOM)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              🧮 Shopping cart app where you dynamically calculate totals and remove items using the DOM. <br />
              📂 <a href="https://github.com/Salva985/lab-dom-ironhack-cart" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                GitHub Repo
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }