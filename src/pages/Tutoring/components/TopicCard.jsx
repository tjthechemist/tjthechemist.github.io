import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const TopicCard = ({ topic }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {topic.subtopic && topic.subtopic.length > 0 && (
                    <div className="mt-4 mb-4">
                        <h3>All Topics:</h3>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {topic.subtopic.map((subtopic, index) => (
                                <li key={index}>{subtopic}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {topic.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">{tag}</span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};