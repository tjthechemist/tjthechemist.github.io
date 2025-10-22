import { ProjectCard } from "./ProjectCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

export const ProjectList = ({ projectsList }) => {
    return (
        <div className="p-4">
            <Carousel opts={{align: "start", loop: true}} className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-4">
                    {projectsList.map((project) => (
                        <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1"><ProjectCard project={project}/></div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};