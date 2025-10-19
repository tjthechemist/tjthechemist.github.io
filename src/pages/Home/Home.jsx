import { HeroSection, Summary } from "./components";

export const Home = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl p-8">TJ the Chemists's Personal Website</h1>
            <HeroSection />
            <Summary />
        </section>
    );
};