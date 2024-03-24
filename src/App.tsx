import { AnimatedPinDemo } from "./AnimatedPinDemo";
import BoxBackgroundDemo from "./BoxBackgroundDemo";

import Hero from "./Hero";
import { SignupFormDemo } from "./Input";
import MovingCards from "./MovingCards";
import Projects from "./Projects";

function App() {
  return (
    <>
      <div className="hidden w-full sm:block">
        <BoxBackgroundDemo />
      </div>

      <Hero />
      <Projects />
      <AnimatedPinDemo />
      {/* <Contact />
 <div className="flex items-center justify-center mt-9">
        {" "}
        <TextRevealCard
          text={"You Know the business"}
          revealText="I Know the technology"
        />
      </div> */}

      <MovingCards />

      <SignupFormDemo />
    </>
  );
}

export default App;
