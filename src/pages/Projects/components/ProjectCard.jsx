import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const ProjectCard = ({ project }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.projectName}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <h3>Programming Language: {project.programmingLanguage}</h3>
                {project.tools && project.tools.length > 0 && (
                    <div>
                        <h3>Tools or Frameworks:</h3>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {project.tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">{tag}</span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};