import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const Rotas = () => {
    return(
        <Routes>
            <Route path="/dashboard" element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Rotas