import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col text-center md:text-left items-center justify-center mb-24 max-w-4xl mx-auto"
    >
      <Image
        src="/images/ContactMe.svg"
        alt="toolbox"
        className="my-24 pl-8 pr-5"
        width={558}
        height={105}
      />

      <div className="flex flex-col md:flex-row-reverse gap-16 justify-center items-center">
        <div>
          <p className="max-w-[65ch]">
            I am excited to join a mission-driven team, where I can contribute
            my analytical skills, technical aptitude, and passion for
            problem-solving. I am seeking a collaborative and friendly
            environment where I can continue to grow and make a meaningful
            impact. Don't hesitate to get in contact with me!
          </p>
          <Link
            href="mailto:danuta.anna@yahoo.com"
            className="font-bold underline highlight"
          >
            danuta.anna@yahoo.com
          </Link>
          <div className="flex flex-row gap-2 mt-4 items-center justify-center md:justify-start">
            <Link
              href="https://www.linkedin.com/in/ana-danuta-raducanu-2b1b2590/"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline "
              aria-label="Open LinkedIn profile in new window"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer "
                size={36}
              />
            </Link>{" "}
            <Link
              href="https://github.com/AnaRaducanu"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline"
              aria-label="Open GitHub profile in new window"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer"
                size={36}
              />
            </Link>
          </div>
        </div>
        <Image
          src="/images/Launching-pana (1).svg"
          alt="tool icons"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Contact;
