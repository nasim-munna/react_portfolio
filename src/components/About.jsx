import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-full lg:h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Md. Nasim.I am a Web & Software Developer from Dhaka, Bangladesh.
          I have rich experience in Website Development, also I am good at
          WordPress. I love to talk with you about our unique.
        </p>

        <br />

        <p className="text-xl">
          Performance-driven and motivated software developer with 3+ years of
          experience in participating in all phases of software development. As
          a software developer, I collaborate with product managers, designers,
          developers, QA, sales, and support managers throughout the product
          life-cycle to build high-quality, user-friendly, and scalable
          software. Experienced in managing a growing team to overcome
          challenges and work together to beat targets.
        </p>
      </div>
    </div>
  );
};

export default About;
