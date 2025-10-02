import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">📫 Contact Me</h2>

      <div className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-10 space-y-3">
        <p>
          Email: <a href="mailto:smarchese985@gmail.com" className="text-blue-600 dark:text-blue-400 underline">smarchese985@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="linkedin.com/in/salvatore-marchese-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">salvatore-marchese</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/Salva985" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Salva985</a>
        </p>
      </div>

      <ContactForm />
    </section>
  )
}