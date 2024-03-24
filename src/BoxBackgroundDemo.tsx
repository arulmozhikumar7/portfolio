"use client";

import { Boxes } from "./components/ui/background-boxes";
import { cn } from "./utils/cn";

export default function BoxBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black rounded-none">
      <div className="absolute inset-0 w-full h-full bg-grey-800 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Arulmozhikumar
      </h1>
      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Crafting both front and back-end magic, I bring ideas to life with a
        blend of creativity and technical finesse
      </p>
    </div>
  );
}
