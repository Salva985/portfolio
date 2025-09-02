export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-12">
      {/* Featured */}
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        🚀 Featured Projects
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            🔎{" "}
            <a
              href="https://github.com/Salva985/project-Dive-and-Discover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dive & Discover
            </a>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Dive center and marine life search app (v0.0). Full-stack
            application using React, Node.js, and MongoDB.
          </p>
        </div>
      </div>

      {/* Java */}
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mt-16 mb-8">
        ☕ Java Projects
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">📚 IronLibrary</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Library management system with Java, CSV persistence, and unit
            testing. <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/IronLibrary-Salva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🐾 PawMatch</h3>
            <p className="text-gray-700 dark:text-gray-300">
                A pet adoption matching app built with React & TailwindCSS. Users can browse pets, swipe to match, and learn more about adoption centers. <br />
                📂{" "}
              <a
                href="https://github.com/Salva985/demo-pawmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                GitHub Repo
              </a>
            </p>
        </div>
      </div>

      {/* Frontend Practice */}
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mt-16 mb-8">
        🎨 Frontend Practice Projects
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🎵 Spotify Clone</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Landing page replica of Spotify (HTML, CSS). <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/lab-css-spotify-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🍳 Recipe Page Clone</h3>
          <p className="text-gray-700 dark:text-gray-300">
            One-page recipe layout (HTML & responsive CSS). <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/lab-css-recipes-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🛒 Ironhack Cart</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Shopping cart app (JS + DOM manipulation). <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/lab-dom-ironhack-cart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>

      {/* Backend Practice */}
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mt-16 mb-8">
        ⚙️ Backend Practice Projects
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🎬 Greatest Movies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Data analysis project using JavaScript (map, filter, reduce). <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/lab-javascript-greatest-movies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h3 className="text-lg font-semibold">🏥 Hospital API</h3>
          <p className="text-gray-700 dark:text-gray-300">
            REST API built with Java Spring Boot + JPA + MySQL. <br />
            📂{" "}
            <a
              href="https://github.com/Salva985/Enterprise-Java-Development-4.02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}