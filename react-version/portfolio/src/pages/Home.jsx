export default function Home() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="w-48 h-48 mb-6">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdrbGp5MHZ1Nzd4NXEycjdqNzQ3dTd4MXJubHZ6cmJjcTZvMDIxZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Coding GIF"
            className="w-full h-full object-contain rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
  
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hi there 👋 I'm Salva
        </h1>
  
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          💻 Junior Full-Stack Web Developer (MERN) | Passionate about UX, SEO & clean digital experiences <br />
          📍 Based in Barcelona | Open to collaboration
        </p>
      </section>
    )
  }