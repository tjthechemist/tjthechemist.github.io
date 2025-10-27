import { ExperiencesList } from "./components/ExperiencesList";
import { EducationList } from "./components/EducationsList";
import { educationList } from "../../data/educationsData";
import { internshipExperiences } from "../../data/experiencesData";

export const Profiles = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl p-4">Full Profiles</h1>
            <div className="flex flex-2">
                <h2 className="font-semibold text-xl p-4">Current Status</h2>
                <p className="p-4">A full-time freelancer, with some coding skills and teaching skills</p>
            </div>
            <div>
                <h2 className="font-semibold text-xl p-4">Educations</h2>
                <EducationList educationsList={educationList} />
            </div>
            <div>
                <h2 className="font-semibold text-xl p-4">Internship Experiences</h2>
                <ExperiencesList experiencesList={internshipExperiences}/>
            </div>
        </section>
    );
};