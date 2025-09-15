import { Navigation } from "./Navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between">
                <div className="p-4 w-2/3">
                    <Navigation />
                </div>
                <div className="p-4 w-1/3">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};
