import { TopicCard } from "./TopicCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

export const TopicList = ({ teachingTopics }) => {
    return (
        <div className="p-4">
            <Carousel opts={{align: "start", loop: true}} className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-4">
                    {teachingTopics.map((topic) => (
                        <CarouselItem key={topic.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1"><TopicCard topic={topic}/></div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};