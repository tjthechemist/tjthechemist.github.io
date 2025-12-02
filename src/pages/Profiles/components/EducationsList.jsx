import { EducationCard } from "./EducationsCard";

export const EducationList = ({ educationsList }) => {
    return (
        <div className="grid grid-cols-2">
            {educationsList.map((education) => (
                <div className="p-4"><EducationCard education={education}/></div>
            ))}
        </div>
    );
};