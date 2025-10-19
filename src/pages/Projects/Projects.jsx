import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OngoingProjects, FinishedProjects, FutureProjects } from "./components";


export const Projects = () => {

    return (
        <section>
            <h1 className="font-semibold text-2xl p-8">Projects Lists</h1>
            <Accordion type="single" collapsible className="w-[80] m-8" defaultValue="project-1">
                <AccordionItem value="project-1">
                    <AccordionTrigger>Finished Projects</AccordionTrigger>
                    <AccordionContent><FinishedProjects /></AccordionContent>
                </AccordionItem>
                <AccordionItem value="project-2">
                    <AccordionTrigger>Ongoing Projects</AccordionTrigger>
                    <AccordionContent><OngoingProjects /></AccordionContent>
                </AccordionItem>
                <AccordionItem value="project-3">
                    <AccordionTrigger>Future Projects</AccordionTrigger>
                    <AccordionContent><FutureProjects /></AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
};