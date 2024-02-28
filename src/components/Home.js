import React from "react";
import heroImage from "../assets/41452926999.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a React Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a dedicated professional with a Bachelor's in Information
            Technology and a keen interest in web Development
          </p>
          <div>
          <Link to="portfolio" smooth duration={500} className="group text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2k"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-[2500px] h-[450px] md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
