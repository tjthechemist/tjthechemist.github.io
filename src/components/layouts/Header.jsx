import { Navigation } from "./Navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
    return (
        <header>
            <section className="flex justify-between">
                <div className="p-8 w-9/10">
                    <Navigation />
                </div>
                <div className="p-8 w-1/10">
                    <ModeToggle />
                </div>
            </section>
        </header>
    );
};
