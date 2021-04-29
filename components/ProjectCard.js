const ProjectCard = ({ title, githubLink }) => {
  return (
    <>
      <div className="p-2 w-1/2 h-1/3 border text-center text-yellow-400 flex items-center justify-center flex-col">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h3 className="font-nunito font-black text-2xl uppercase hover:text-yellow-600 ">
            {title}
          </h3>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
