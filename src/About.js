import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          Welcome to my portfolio! I am <span className="font-bold">Prince Palewar</span>, a dedicated front-end
          developer having a strong knowledge in <span className="font-bold">React Development</span>. Armed with a
          degree in <span className="font-bold">Information Technology</span>, I have honed my skills and knowledge
          to craft engaging and dynamic web experiences. My journey in the realm
          of <span className="font-bold">web development</span> has been fueled by a relentless pursuit of
          excellence, and I am excited to showcase my expertise in transforming
          ideas into visually stunning and functionally robust digital
          solutions.
        </p>
        <br />
        <p className="text-xl">
          As a graduate in information technology, I have equipped myself with a
          solid foundation that complements my hands-on experience in React
          development. My commitment to staying at the forefront of
          technological advancements allows me to bring innovative and
          cutting-edge solutions to every project. I am driven by a desire to
          create seamless user interfaces and immersive web applications that
          not only meet but exceed the expectations of users.
        </p>
      </div>
    </div>
  );
};

export default About;
