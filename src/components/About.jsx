import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <h3 className="text-2xl font-bold mb-5  w-[500px]">
            A dedicated Front-end Developer based in Delhi, India
          </h3>

          <p className="pb-5">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap. I
            excel in designing and maintaining responsive websites that offer a
            mdooth user experience. My expertise lies in crafting dynamic,
            engaging interfaces through writing clean and optimized code and
            utilizing cutting-edge development tools and techniques.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
