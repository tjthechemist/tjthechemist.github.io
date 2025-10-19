import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Profiles, Tutoring, Projects } from "@/pages";
import { Layout } from "@/components/layouts";

const pages = [
    {path: "/", component: <Home />},
    {path: "/profiles", component: <Profiles />},
    {path: "/projects", component: <Projects />},
    {path: "/tutoring", component: <Tutoring />},
];

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {pages.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Layout component={Component}/>}/>
                ))}
            </Routes>
        </Router>
    );
};