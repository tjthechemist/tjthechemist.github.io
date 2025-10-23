import { Navigation } from "./Navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
    return (
        <header>
            <section className="grid grid-cols-2">
                <div className="p-4">
                    <Navigation />
                </div>
                <div className="p-4 justify-self-end-safe">
                    <ModeToggle />
                </div>
            </section>
        </header>
    );
};
