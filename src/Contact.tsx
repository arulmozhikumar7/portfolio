import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdCall } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_c72sovn", "template_3os0tyb", form.current, {
          publicKey: "0G77_CfuuxUey0DMU",
        })
        .then(
          () => {
            alert("Hey! I received your message. I'll get back to you soon!");
          },
          (error: Error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <section className="relative w-full text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="w-full mb-12 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Contact Me
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out anytime, and let's make this conversation
            awesome!
          </p>
        </div>
        <div className="w-full mx-auto lg:w-3/4 md:w-5/6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -m-2">
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 text-base leading-8 text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 text-base leading-8 text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-4 py-2 text-base leading-6 text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="w-full px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  Send Email
                </button>
              </div>
            </div>
          </form>
          <div className="pt-8 mt-8 text-center border-t border-gray-200">
            <a
              className="text-indigo-500"
              href="mailto:arulmozhikumar7@gmail.com"
            >
              arulmozhikumar7@gmail.com
            </a>
            <p className="my-5 leading-normal">
              Chennai
              <br />
              Tamil Nadu, 600066
            </p>
            <div className="inline-flex justify-center">
              <a
                className="mx-4 text-gray-500"
                href="https://www.linkedin.com/in/arulmozhikumar7/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://wa.me/918122509442"
                className="mx-4 text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={25} />
              </a>
              <a
                className="mx-4 text-gray-500"
                href="https://github.com/arulmozhikumar7"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a className="mx-4 text-gray-500" href="tel:+918122509442">
                <MdCall size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
