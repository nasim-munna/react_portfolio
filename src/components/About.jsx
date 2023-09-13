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
        This is Md. Nasim, Full Stack Developer.
        I have over 3 years of experience in the Software Development area. Throughout my career, I worked in a wide range of stacks of Software Engineering that includes Frontend, Backend and DevOps.
        I am very passionate about my career and looking forward to growing myself in this industry by trying to convert my technical expertise and effort into a successful business.
        </p>

        <br />

        <p className="text-xl">
        My goal is to be one of the top ten programmers. Choosing Python and JavaScript as the programming language does
        notmean that I am bound by a limitation. I want to know the programming language deeply, and I'm still trying. I love
        innovation a lot, so I always try to discover something new.
        </p>
      </div>
    </div>
  );
};

export default About;
