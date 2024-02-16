import Image from "next/image";

const Toolbox = () => {
  const paragraphStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#133362",
    fontSize: "60px",
    marginBottom: "50px",
  };
  return (
    <section id="work" className="flex flex-col items-center mb-24">
      <h1 style={paragraphStyle}>Toolbox</h1>
      {/* <Image
        src="/images/toolbox.svg"
        alt="toolbox"
        className="my-24 pr-7 pl-10"
        width={558}
        height={105}
      /> */}
      <Image
        src="/images/toolboxAna.png"
        alt="tool icons"
        width={1300}
        height={700}
      />
    </section>
  );
};

export default Toolbox;
