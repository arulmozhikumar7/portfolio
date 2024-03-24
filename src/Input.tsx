"use client";
import React from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./utils/cn";
import emailjs from "@emailjs/browser";
import { useToast } from "./components/ui/use-toast";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMedium } from "react-icons/fa6";
export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
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
            toast({
              title: "Hey I received your message!",
              description: "I'll get back to you as soon as possible!",
            });
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
                placeholder="Tyler"
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
      <div className="flex flex-row items-center justify-center w-full p-4 mx-auto bg-black rounded-none md:p-8">
        <a
          href="https://github.com/arulmozhikumar7"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <FaGithub className="text-white" />
        </a>
        <a
          href="www.linkedin.com/in/arulmozhikumar7"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/918122509442?text=Hi Arul, I would like to get in touch with you"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://medium.com/@arulmozhikumar7"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <FaMedium />
        </a>
      </div>
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
