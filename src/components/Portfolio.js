import React from "react";
import Video_Studio from "../assets/portfolio/Video_Studio.jpg";
import Netflix_GPT from "../assets/portfolio/Netflix_GPT.jpg";
import Food_app from "../assets/portfolio/Food_app.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 2,
      src: Netflix_GPT,
      link: "https://github.com/princepalewar12/Netflix-GPT",
      style: "cursor-pointer",
      href: "https://netflix-gpt-87774.web.app",
    },
    {
      id: 1,
      src: Video_Studio,
      link: "https://github.com/princepalewar12/Learn-Tube",
    },

    {
      id: 3,
      src: Food_app,
      link: "https://github.com/princepalewar12/Food-App"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work Right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, link, style, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt=""
                  className={`rounded-md h-40 duration-200 hover:scale-105 ${style}`}
                />
              </a>
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer" className="border-2 p-3 rounded-lg">
                    CODE
                  </a>
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
