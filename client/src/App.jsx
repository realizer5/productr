import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Auth, Home, Login, Signup } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/auth" element={<Auth />}>
                    <Route index element={<Navigate to="login" replace />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
