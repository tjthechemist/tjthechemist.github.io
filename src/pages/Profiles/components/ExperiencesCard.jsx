import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const ExperiencesCard = ({ experience }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription>{experience.workplace}</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="font-semibold">Work Period: {experience.period}</h3>
                <h3 className="font-semibold">Job Description</h3>
                <p>{experience.description}</p>
            </CardContent>
        </Card>
    );
};