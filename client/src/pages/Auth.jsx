import { Outlet } from "react-router";
import { LoginBgCard, LoginCard } from "../components";

const Auth = () => {
    return (
        <div className="w-full h-screen grid grid-cols-2 bg-cultured font-display">
            <LoginBgCard>
                <LoginCard />
            </LoginBgCard>
            <div className="m-auto flex flex-col gap-96">
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
