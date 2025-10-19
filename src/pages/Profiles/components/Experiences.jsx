import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ExperienceCard = ({data}) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.jobTitle}</CardTitle>
                <CardDescription>{data.company}</CardDescription>
            </CardHeader>
            <CardContent>
                <h4>Period: {data.period}</h4>
                <p>{data.jobDescription}</p>
            </CardContent>
        </Card>
    );
};

const BlankCard = () => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>No Work Experience Yet.</CardTitle>
            </CardHeader>
        </Card>
    );
};

export const Experiences = () => {

    const internshipExperiences = [
        {
            jobTitle: "Data Analyst",
            company: "Generation Thailand",
            period: "",
            jobDescription: "Analyze the ",
        },
    ];

    const jobExperiences = [];

    return (
        <section>
            <h2 className="font-semibold text-xl p-8">Experiences</h2>
            <Accordion type="single" collapsible className="w-[80] m-8" defaultValue="exp-1">
                <AccordionItem value="exp-1">
                    <AccordionTrigger><h3>Internship</h3></AccordionTrigger>
                    <AccordionContent>
                        {internshipExperiences.map((data, index) => (
                            <ExperienceCard data={data} />
                        ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="exp-2">
                    <AccordionTrigger><h3>Job Experience</h3></AccordionTrigger>
                    <AccordionContent>
                        {jobExperiences.length > 0 ? jobExperiences.map((data, index) => (<ExperienceCard data={data}/>)): <BlankCard />}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
};