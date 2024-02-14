import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "PostgreSQL" },
  { skill: "Jest" },
  { skill: "Cypress" },
  { skill: "Supertest" },
  { skill: "React Testing Library" },
  { skill: "REST API" },
];

const learning = [
  { skill: "Python" },
  { skill: "MongoDB" },
  { skill: "GraphQL" },
  { skill: "AWS" },
  { skill: "Firebase" },
];

const MyStory = () => {
  return (
    <section id="about" className="flex flex-col items-center mb-24">
      <Image
        src="/images/mystorylogo.png"
        width={542}
        height={111}
        alt="my story"
        className="my-24 px-6"
      />
      <div className="column text-justify">
        <p>
          Hello, there! I'm Ana, a junior software developer enthusiast who
          loves cracking code puzzles and playing hide-and-seek in the code. You
          could say I'm a bit of a code detective! 
        </p>
        <p>
          During my previous role as a sales and marketing analyst, I discovered
          a passion for the technical aspects, specifically in debugging errors
          and comprehending code while utilizing macros with the developer tab
          option.
        </p>
        <p>
          While on maternity leave, I seized the opportunity to embark on a
          transformative 16-week journey at the{" "}
          <Link
            href="https://schoolofcode.co.uk"
            target="_blank"
            rel="noreferrer"
            className="highlight font-bold underline"
          >
            School of Code
          </Link>
          , a rigorous boot camp designed to facilitate the transition of
          individuals from diverse backgrounds into the tech field. It was like
          a rollercoaster ride, thrilling and intense and I successfully
          completed the program, equipping myself with valuable skills and
          knowledge.
        </p>

        <p>
          Now, I'm excited to contribute my analytical and problem-solving
          skills to a mission-driven team. When I'm not immersed in code, you
          might find me enjoying a scoop of ice cream, exploring the world of
          paint by numbers, or diving into a good book on how to negociate with
          your toddler :).
        </p>
      </div>
      {/* <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Emilia, but you can call me Milly. I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" team-oriented"}</span> full stack
              JavaScript developer.
            </p>
            <br />
            <p>
              As a teen during the web 1.0 era, I made endless terrible websites
              using table layouts and inline CSS. I was fascinated by the
              possibilities of the internet.
            </p>
            <br />
            <p>
              Fifteen years later, I decided to quit my parliamentary casework
              job and pursue my passion for technology. I enrolled in a 16-week
              intensive coding bootcamp at{" "}
              <a
                href="https://www.schoolofcode.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-500 hover:text-teal-700"
              >
                School of Code
              </a>{" "}
              and have loved every second!
            </p>
            <br />
            <p>
              I am currently looking for my first junior developer role and am
              excited to start my career in tech.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <h1 className="mt-8 text-2xl font-bold mb-6">Currently learning</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {learning.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div> */}
    </section>
  );
};

export default MyStory;
