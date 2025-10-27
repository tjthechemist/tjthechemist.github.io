import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ projectsList }) => {
    return (
        <div className="p-4">
            {projectsList.map((project) => (
                <div className="py-2"><ProjectCard project={project}/></div>
            ))}
        </div>
    );
};