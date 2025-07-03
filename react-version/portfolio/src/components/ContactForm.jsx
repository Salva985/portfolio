import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_joyg6j3',     
      'template_oidslks',    
      form.current,
      'MjNI7tP03g5iapi21'      
    ).then(
      (result) => {
        alert("✅ Message sent!")
        form.current.reset()
      },
      (error) => {
        alert("❌ Failed to send message.")
        console.error(error)
      }
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Me</h2>

      <input
        type="text"
        name="user_name"
        placeholder="Your name"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your email"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        className="w-full p-2 border border-gray-300 rounded h-32"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Send
      </button>
    </form>
  )
}