import StackCard from "@components/StackCard";
import React from "react";

const About = () => {
  const StackSection = () => {
    const myStacks = [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Javascript",
      "Angular",
      "React",
      "NextJs",
      "NodeJs",
      "MongoDB",
    ];

    const array = [];

    for (let i = 0; i < myStacks.length; i++) {
      array.push(<StackCard key={i} stack={myStacks[i]} />);
    }
    return (
      <div className="max-w-full w-[1200px] pb-10 mt-20 text-center sm:text-left">
        <h1 className="text-emerald-500">My Stacks</h1>
        <div className="mt-12 grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {array}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full max-w-[95%] px-[20px] pt-[30px] md:pt-[120px] lg:px-[100px]">
      <div className="w-[800px] max-w-[95%]">
        <h1 className="text-emerald-500">About Me</h1>
        <p className="font-thin mt-12">
          Hello!My name is Károly Simon, and I am a Frontend Developer.My goal
          is continuous improvement and finding creative solutions.I enjoy
          working with Angular and React, but currently, I am focusing on
          developing my knowledge of Next.js and studying web development.I am
          committed to lifelong learning and learning about modern web
          technologies.
        </p>
      </div>

      <StackSection />
    </section>
  );
};

export default About;
