import { Educations, Experiences } from "./components";
import { Separator } from "@/components/ui/separator";

export const Profiles = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl p-8">Full Profiles</h1>
            <div>
                <h2 className="font-semibold text-xl p-8">Current Status</h2>
                <p className="px-8 py-4">A full-time freelancer, with some coding skills and teaching skills</p>
            </div>
            <div className="px-8">
                <Separator className=""/>
            </div>
            <Educations />
            <div className="px-8">
                <Separator className=""/>
            </div>
            <Experiences />
        </section>
    );
};