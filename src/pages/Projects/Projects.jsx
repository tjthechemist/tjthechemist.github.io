import { ProjectList } from "./components/ProjectList";
import {
    finishedProjectsList,
    currentProjectsList,
    futureProjectsList
} from "@/data/projectsData";


export const Projects = () => {

    return (
        <section>
            <h1 className="font-semibold text-2xl p-4">Projects Lists</h1>
            <div>
                <h2 className="font-semibold text-xl p-4">Finished Projects</h2>
                <ProjectList projectsList={finishedProjectsList} />
            </div>
            <div>
                <h2 className="font-semibold text-xl p-4">Current Projects</h2>
                <ProjectList projectsList={currentProjectsList} />
            </div>
            <div>
                <h2 className="font-semibold text-xl p-4">Future Projects</h2>
                <ProjectList projectsList={futureProjectsList} />
            </div>
        </section>
    );
}