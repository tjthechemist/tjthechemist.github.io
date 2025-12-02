import { ExperiencesCard } from "./ExperiencesCard";

export const ExperiencesList = ({ experiencesList }) => {
    return (
        <div className="grid grid-cols-2">
            {experiencesList.map((experience) => (
                <div className="p-4"><ExperiencesCard experience={experience}/></div>
            ))}
        </div>
    );
};