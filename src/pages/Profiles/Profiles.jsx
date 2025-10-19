import { CurrentStatus, Educations, Experiences } from "./components";

export const Profiles = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl p-8">Full Profiles</h1>
            <CurrentStatus />
            <Educations />
            <Experiences />
        </section>
    );
};