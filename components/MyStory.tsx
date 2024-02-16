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
  const paragraphStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#133362",
    fontSize: "60px",
    marginBottom: "50px",
  };
  return (
    <section id="about" className="flex flex-col items-center mb-24">
      <h1 style={paragraphStyle}>My Story</h1>
      {/* <Image
        src="/images/myStory.svg"
        width={558}
        height={105}
        alt="my story"
        className="my-24 px-6"
      /> */}
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
    </section>
  );
};

export default MyStory;
