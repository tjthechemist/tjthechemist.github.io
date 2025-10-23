import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const EducationCard = ({ education }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{education.degree}</CardTitle>
                <CardDescription>{education.institution}</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="font-semibold">Field of Study: {education.field}</h3>
                {education.specialCourses && education.specialCourses.length > 0 && (
                    <div>
                        <h3>Special Courses:</h3>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {education.specialCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <p className="font-semibold">Year {education.year}</p>
            </CardContent>
        </Card>
    );
};