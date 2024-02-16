import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio built in next.js, showing a little bit about me, my work and how to get in touch with me.",
    image: "/images/work/personalportfolio (3).png",
    github: "https://github.com/AnaRaducanu/ana-s-portfolio",
    link: "https://anaraducanu.vercel.app/",
  },
  {
    name: "Habitap",
    description:
      "A simple yet engaging habit tracking app that helps people build new and better habits in a fun, social and trackable way, without distracting from what’s important.",
    image: "/images/work/HabitapAppPresentationImg.png",
    github: "https://github.com/AnaRaducanu/habitap",
    link: "https://habitap.vercel.app/login",
  },
  {
    name: "BootcampBuddy",
    description:
      "An app designed for fellow bootcampers to have all the learning resources in our single place, structured by the agenda of the week.",
    image: "/images/work/BootcampBuddyImg.png",
    github: "https://github.com/AnaRaducanu/Week8_Project_Week_Team5",
    link: "https://github.com/AnaRaducanu/Week8_Project_Week_Team5",
  },
  {
    name: "First Blog Post",
    description: "A simple blog post app to to practice react concepts",
    image: "/images/work/blogpost.PNG",
    github:
      "https://github.com/SchoolOfCode/bc15-w10-recap-task-react-front-end-blog-AnaRaducanu",
    link: "https://github.com/SchoolOfCode/bc15-w10-recap-task-react-front-end-blog-AnaRaducanu",
  },
  {
    name: "React Flashcard-App",
    description:
      "A simple flashcard app that answers questions regarding the main concepts about react.",
    image: "/images/work/reactapp.PNG",
    github:
      "https://github.com/SchoolOfCode/bc15-w10-d2-workshop-react-flash-cards-app-team-cinci",
    link: "https://github.com/SchoolOfCode/bc15-w10-d2-workshop-react-flash-cards-app-team-cinci",
  },
  {
    name: "Cat Encyclopedia",
    description:
      "An app that retrieves some data from one of the cat API endpoints and renders it on a web page. It was built to practice API concept.",
    image: "/images/work/Cat Encyclopedia.PNG",
    github: "https://github.com/AnaRaducanu/CatAPI-App",
    link: "https://github.com/AnaRaducanu/CatAPI-App",
  },
];

const MyWork = () => {
  const paragraphStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#133362",
    fontSize: "60px",
    marginBottom: "50px",
  };
  return (
    <section id="work" className="flex flex-col items-center mb-24">
      {/* <Image
        src="/images/Projects.svg"
        alt="my work"
        className="my-24 px-6"
        width={558}
        height={105}
      /> */}
      <h1 style={paragraphStyle}>Projects</h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={700}
                      height={700}
                      className="rounded-xl shadow-xl hover:opacity-70"
                      aria-label="Open project in new window"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {/* <Link href={project.page}>
                        <button className="px-4 py-2 text-white rounded-md bg-primary-dark">
                          Read More
                        </button>
                      </Link> */}
                    <Link
                      href={project.github}
                      target="_blank"
                      aria-label="Open project repo in GitHub"
                    >
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      aria-label="Open live project in new window"
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
