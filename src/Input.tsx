"use client";
import React from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./utils/cn";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMedium } from "react-icons/fa6";
export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
            setFormData({ name: "", email: "", message: "" });
            toast.success("Hey! I received your message.");
            toast.info("I'll get back to you soon!");
          },
          (error: Error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className="grid grid-cols-1 bg-black md:grid-cols-12 ">
      <div className="grid p-4 mx-auto bg-black rounded-none md:col-span-6 md:p-8 shadow-input">
        <h2 className="text-xl font-bold text-neutral-200">Contact Me</h2>
        <p className="max-w-sm mt-2 text-sm text-neutral-300">
          Feel free to reach out anytime, and let's make this conversation
          awesome!
        </p>

        <form className="my-8" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input
                id="firstname"
                placeholder="Arulmozhikumar"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="abc.@example.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              placeholder="Your message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="grid w-full p-4 mx-auto bg-black rounded-none md:col-span-6 md:p-8">
        <div className="">
          <h2 className="text-xl font-bold text-neutral-200">Social Links</h2>
          <p className="max-w-sm mt-2 text-sm text-neutral-300">
            Let us connect on social media
          </p>
          <div className="flex mt-4 ">
            <a
              href="https://github.com/arulmozhikumar7"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="www.linkedin.com/in/arulmozhikumar7"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/918122509442?text=Hi Arul, I would like to get in touch with you"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://medium.com/@arulmozhikumar7"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white"
            >
              <FaMedium size={24} />
            </a>
          </div>
          <h2 className="mt-8 text-xl font-bold text-neutral-200">
            Blog Links
          </h2>
          <div>
            <ul className="mt-4 ">
              <li className="mb-1 text-neutral-300">
                {" "}
                <a
                  href="https://medium.com/@arulmozhikumar7/3-useful-libraries-for-react-applications-46344e045a17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-thin text-gray-200 hover:text-emerald-300"
                >
                  3 Useful Libraries for React Applications
                </a>
              </li>
              <li className="text-neutral-300">
                {" "}
                <a
                  href="https://medium.com/@arulmozhikumar7/a-battle-of-frontend-build-tools-npx-create-react-app-vs-vite-b00452ea5d6d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-thin text-gray-200 hover:text-emerald-300"
                >
                  Create-react-app vs Vite
                </a>
              </li>
            </ul>
          </div>
          <h2 className="mt-8 text-xl font-bold text-neutral-200">
            Other Links
          </h2>
          <div>
            <ul className="mt-4 ">
              <li className="mb-1 text-neutral-300">
                {" "}
                <a
                  href="https://github.com/stars/arulmozhikumar7/lists/react-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-thin text-gray-200 hover:text-emerald-300"
                >
                  List of React Projects
                </a>
              </li>
              <li className="text-neutral-300">
                {" "}
                <a
                  href="https://github.com/stars/arulmozhikumar7/lists/chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-thin text-gray-200 hover:text-emerald-300"
                >
                  Chatbots with Wit.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover/btn:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
