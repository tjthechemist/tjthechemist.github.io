import { Header, Footer } from "@/components/layouts";

export const Layout = ({ component }) => {

    return (
        <div>
            <Header />
            <main>
                { component }
            </main>
            <Footer />
        </div>
    );
};