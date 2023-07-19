import { Routes, Route } from "react-router-dom";
import Salon from "../03.globals/01.Pages/Salon";
import Message from "../03.globals/01.Pages/Message";
import Login from "../03.globals/01.Pages/Login";
import Inscription from "../03.globals/01.Pages/Inscription";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Inscription" element={<Inscription/>}/>
            <Route path="/Salon" element={<Salon />} />
            <Route path="/Message" element={<Message />} />

        </Routes>
    )
}

export default Router;