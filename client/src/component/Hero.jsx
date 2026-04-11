import { useState, useEffect } from "react";
import { heroContent } from "../assets";

export const Hero = () => {
  const [herotxt, setHeroTxt] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const fulltext = heroContent[herotxt].text;

  useEffect(() => {
    setDisplayText("");
    let index = 0;

    const timer = setInterval(() => {
      setDisplayText(fulltext.slice(0, index + 1));
      index++;

      if (index >= fulltext.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [herotxt, fulltext]);

  const handleNxtText = () => {
    setHeroTxt((prev) => (prev + 1 === heroContent.length ? 0 : prev + 1));
  };

  const handleBackTxts = () => {
    setHeroTxt((prev) => (prev === 0 ? heroContent.length - 1 : prev - 1));
  };

  return (
    <section
      className="w-full h-[60vh] flex items-center justify-between bg-cover bg-center transition-all duration-700 relative"
      style={{ backgroundImage: `url(${heroContent[herotxt].img})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <span
        className="z-10 cursor-pointer text-gray-500 bg-gray-200/80 rounded-full p-5 mx-4 hover:bg-black hover:text-white transition-colors hover:animate-bounce-left"
        onClick={handleBackTxts}
      >
        &lt;
      </span>

      <div className="z-10 flex flex-col items-center max-w-2xl text-center px-4">
        <h1 className="text-2xl md:text-5xl text-white font-bold font-serif min-h-[3em] leading-tight text-shadow-amber-400 text-shadow-lg">
          {displayText}
          <span className="animate-pulse ml-1 text-blue-400">|</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 w-full">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-white font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Login
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-500 px-8 py-3 rounded-xl text-white font-bold transition-all shadow-lg">
            Join Now
          </button>
        </div>
      </div>

      <span
        className="z-10 cursor-pointer text-gray-500 bg-gray-200/80 rounded-full p-5 mx-4 hover:bg-black hover:text-white transition-colors hover:animate-bounce-right"
        onClick={handleNxtText}
      >
        &gt;
      </span>
    </section>
  );
};
