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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, debitis.
          Asperiores, ipsam! Accusamus fugiat laudantium necessitatibus deleniti
          quod quo esse, cumque illum non quis quos sint nesciunt fugit impedit
          tempore rem id? Facilis corrupti possimus, pariatur saepe a inventore
          impedit tempora ipsa nostrum iure sunt beatae voluptate. Aliquid,
          soluta voluptate?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit,
          tenetur, non inventore magnam hic praesentium sequi similique voluptas
          earum, tempore optio voluptate ex a odio dolores laboriosam quia
          laborum aut dignissimos pariatur adipisci possimus architecto!
          Repudiandae ex qui, modi nulla consequuntur eos eius non est
          praesentium harum tenetur magni?
        </p>
      </div>
    </div>
  );
};

export default About;
