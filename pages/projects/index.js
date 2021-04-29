import Head from "next/head";
import ProjectCard from "components/ProjectCard";
import Navigation from "components/Navigation";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="layout">
        <div className="left-side bg-yellow-500">
          <h1 className="left-title">MY PROJECTS</h1>
          <img src="images/work.svg" className="h-44" />
          <Navigation />
        </div>
        <div className="w-full sm:w-1/2 h-screen flex flex-wrap">
          <ProjectCard
            title="social media"
            githubLink="https://github.com/Marcosmzq?tab=repositories&q=social-media&type=&language=&sort="
          />
          <ProjectCard
            title="notes app"
            githubLink="https://github.com/Marcosmzq?tab=repositories&q=notes-app&type=&language=&sort="
          />
          <ProjectCard
            title="drum machine"
            githubLink="https://github.com/Marcosmzq/drum-machine"
          />
          <ProjectCard
            title="ramdom quote machine"
            githubLink="https://github.com/Marcosmzq/ramdom-quote-machine"
          />
          <ProjectCard
            title="pomodoro clock"
            githubLink="https://github.com/Marcosmzq/pomodoro"
          />
          <ProjectCard
            title="javascript calculator"
            githubLink="https://github.com/Marcosmzq/calculator"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
