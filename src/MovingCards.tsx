import reactIcon from "./assets/react.svg";
import nodeIcon from "./assets/nodejs.svg";
import mongoDb from "./assets/mongodb.svg";
import express from "./assets/expressjs.svg";
import tailwind from "./assets/tailwind.svg";
import vite from "./assets/vite.svg";
import git from "./assets/git.svg";
import vs from "./assets/vs.svg";
import github from "./assets/github.svg";
import npm from "./assets/npm.svg";
import postman from "./assets/postman.svg";
const MovingCards = () => {
  return (
    <div className="bg-black mt-9">
      <h1 className="pt-5 text-3xl font-bold text-center text-white">
        Things I Code With
      </h1>
      <main className="relative flex flex-col justify-center h-16 mt-5 overflow-hidden bg-gray-100">
        <div className="w-full max-w-5xl px-4 py-24 mx-auto md:px-6">
          <div className="text-center">
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul
                x-ref="logos"
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img src={reactIcon} alt="" />
                </li>
                <li>
                  <img src={nodeIcon} alt="Disney" />
                </li>
                <li>
                  <img src={mongoDb} alt="Airbnb" className="h-6" />
                </li>
                <li>
                  <img src={express} alt="Apple" className="h-6" />
                </li>
                <li>
                  <img src={tailwind} alt="Spark" className="h-6" />
                </li>
                <li>
                  <img src={vite} alt="Samsung" className="h-7" />
                </li>
                <li>
                  <img src={git} alt="Quora" className="h-8" />
                </li>
                <li>
                  <img src={vs} alt="Sass" className="h-7" />
                </li>
                <li>
                  <img src={github} alt="Sass" className="h-8" />
                </li>
                <li>
                  <img src={npm} alt="Sass" className="h-8" />
                </li>
                <li>
                  <img src={postman} alt="" className="h-6" />
                </li>
              </ul>
              <ul
                x-ref="logos"
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img src={reactIcon} alt="" className="h-6" />
                </li>
                <li>
                  <img src={nodeIcon} alt="Disney" />
                </li>
                <li>
                  <img src={mongoDb} alt="Airbnb" className="h-6" />
                </li>
                <li>
                  <img src={express} alt="Apple" className="h-7" />
                </li>
                <li>
                  <img src={tailwind} alt="Spark" className="h-5" />
                </li>
                <li>
                  <img src={vite} alt="Samsung" className="h-7" />
                </li>
                <li>
                  <img src={git} alt="Quora" className="h-8" />
                </li>
                <li>
                  <img src={vs} alt="Sass" className="h-7" />
                </li>
                <li>
                  <img src={github} alt="Sass" className="h-8" />
                </li>
                <li>
                  <img src={npm} alt="Sass" className="h-8" />
                </li>
                <li>
                  <img src={postman} alt="" className="h-6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovingCards;
