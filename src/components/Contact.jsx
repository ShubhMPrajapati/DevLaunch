import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function formSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out the full form");
      return;
    }

    alert("Form submitted!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact">
      <div className="min-h-screen flex flex-col  justify-center items-center gap-10  pt-26 px-6 ">
        <div className="flex flex-col items-center justify-center gap-3 text-center">


          <h2 className="text-3xl font-bold md:text-4xl">
            Let&apos;s Build Something Great
          </h2>

          <p className="max-w-md text-gray-600">
            Have a question or want to start learning? Send us a message and we&apos;ll
            get back to you.
          </p>
        </div>

        {/* form */}
        <form onSubmit={formSubmit} className="flex flex-col items-center justify-center gap-5 textUp p-10 rounded-3xl shadow-2xl w-full max-w-xl ">

          <input type="text" onChange={(e) => { setName(e.target.value); }}
            placeholder="Name" className="p-3 border-b-2 border-t-2 rounded-2xl border-blue-700 w-full  text-center outline-none focus:outline-none focus:ring-0" value={name} />

          <input type="email" onChange={(e) => { setEmail(e.target.value); }}
            placeholder="Email" className="p-3 border-b-2 border-t-2 rounded-2xl border-blue-700 w-full text-center outline-none focus:outline-none focus:ring-0" value={email} />

          <textarea placeholder="Enter your message" onChange={(e) => { setMessage(e.target.value); }} value={message}
            className="p-3 border-b-2  border-t-2  rounded-2xl border-blue-700 w-full h-30 text-center outline-none focus:outline-none focus:ring-0"></textarea>

          <button type="submit" className="cursor-pointer rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>

    </section>
  )
}
export default Contact