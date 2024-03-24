"use client";
import React from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./utils/cn";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="w-1/2 p-4 mx-auto bg-black rounded-none md:p-8 shadow-input">
        <h2 className="text-xl font-bold text-neutral-200">Contact Me</h2>
        <p className="max-w-sm mt-2 text-sm text-neutral-300">
          Feel free to reach out anytime, and let's make this conversation
          awesome!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="abc.@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Your message" type="textarea" />
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
