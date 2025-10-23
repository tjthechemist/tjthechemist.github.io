export const Home = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl p-4">TJ the Chemists's Personal Website</h1>
            <div className="bg-[url(Background.png)] relative grid grid-cols-2 justify-center rounded-xl m-4 shadow-xl">
                <div className="justify-center">
                    <img src="/profiles.png" alt="Personal Profile"/>
                </div>
                <div></div>
            </div>
        </section>
    );
};