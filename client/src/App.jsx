import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
