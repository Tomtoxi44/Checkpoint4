import { Routes, Route } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Message from "../03.globals/01.Pages/Message";

function Router() {
    return (
        <Routes>
            <Route path="/salon" element={<HomePage />} />
            <Route path="/message" element={<Message />} />

        </Routes>
    )
}

export default Router;