import Head from "next/head";
import Navigation from "components/Navigation";
import ListArrows from "components/ListArrows";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Tailwindcss",
    "React",
    "Next.js",
    "GraphQL",
    "Apollo",
    "MongoDB",
    "Node.js",
    "Git",
  ];
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="layout">
        <div className="left-side bg-blackFade">
          <h1 className="left-title">ABOUT ME</h1>
          <img src="images/person.svg" className="h-44" />
          <Navigation />
        </div>
        <div className="right-side text-blackFade font-nunito text-center">
          <h3 className="font-bold font-poppins  text-2xl">
            Hola, soy Marcos, este es mi portafolio, espero que sea de tu
            agrado.
          </h3>
          <p className="font-semibold text-lg">
            Soy de Argentina, Buenos Aires, tengo 18 años, aprendí programación
            de forma autodidacta y estoy en la carrera de ciencias de la
            computación en la UBA.
          </p>
          <div>
            <h3 className="font-black text-xl">
              Las tecnologias con las que hice proyectos son estas:
            </h3>
            <ListArrows list={skills} colorHex={"#292929"} />
          </div>

          <h5 className="font-bold text-xl">
            Este es mi{" "}
            <a
              href="https://github.com/Marcosmzq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose font-black"
            >
              GitHub
            </a>{" "}
            donde están todos los proyectos que hice.
          </h5>
        </div>
      </div>
    </>
  );
};

export default About;
