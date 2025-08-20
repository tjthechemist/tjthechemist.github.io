import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "@pages"

const AppRouter = () => {

    const location = useLocation();

    const pages = [
        {path: "/", title: "TJ the Chemist's Personal Webpage - Home", component: <Home />},
    ];

    useEffect(() => {
        const currentPage = pages.find(page => page.path === location.pathname);
        document.title = currentPage ? currentPage.title : "TJ the Chemist's Personal Webpage";
    }, [location]);

    return (
        <Routes>
            {pages.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Layout><Component /></Layout>} />
            ))}
        </Routes>
    );
};

export default AppRouter;