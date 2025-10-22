import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

const EducationCard = ({data}) => {

    return (
        <Card className="m-8">
            <CardHeader>
                <CardTitle>{data.degree}</CardTitle>
                <CardDescription>{data.university}</CardDescription>
            </CardHeader>
            <CardContent>
                <h3>Thesis/Project: {data.thesisName}</h3>
                <p>{data.thesisDescription}</p>
            </CardContent>
        </Card>
    );
}

export const Educations = () => {

    const degreeData = [
        {
            degree: "Master of Science",
            university: "Chulalongkorn University",
            thesisName: "Planning Chemical Synthesis with Deep Neural Network and Open Datasets",
            thesisDescription: "",
        },
        {
            degree: "Bachelor of Science",
            university: "Chulalongkorn University",
            thesisName: "",
            thesisDescription: "",
        },
    ];

    return (
        <section>
            <h2 className="font-semibold text-xl p-8">Educations</h2>
            {degreeData.map((data) => (
                <EducationCard data={data} />
            ))}
        </section>
    );
};