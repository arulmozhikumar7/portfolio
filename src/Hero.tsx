import { Button } from "./components/ui/moving-border";
const Hero = () => {
  return (
    <section className="text-gray-600 bg-[#09090b] body-font w-full">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-bold text-white title-font sm:text-4xl">
            Hi, I'm Arulmozhikumar <br className=" lg:inline-block" />
            Full-Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Passionate about building robust web applications with the MERN
            stack and crafting beautiful user interfaces using Tailwind CSS and
            other UI libraries. Experienced in frontend and backend development,
            I strive to create seamless digital experiences that delight users.
          </p>
          <div className="flex justify-center gap-3">
            <a href="/Arulmozhikumar.pdf" download="Arulmozhikumar.pdf">
              <Button borderRadius="3px" duration={3000} className="font-bold">
                Download <br />
                Resume
              </Button>{" "}
            </a>
            <a href="https://wa.me/918122509442?text=Hi Arul, I would like to get in touch with you">
              <Button borderRadius="3px" duration={3000} className="font-bold">
                Contact
              </Button>
            </a>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.infomazeelite.com/wp-content/uploads/2022/12/MERN-Stack-Development.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
