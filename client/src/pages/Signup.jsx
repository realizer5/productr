import { useState } from "react";
import {
    Input,
    Button,
    LoginCard,
    LoginBgCard,
    LinkBigBtn,
} from "../components";

const Signup = () => {
    const [cred, setCred] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = () => {};
    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold text-imperial-blue p-4">
                    Signup for your Productr Account
                </h1>
                <form className="grid mt-8" onSubmit={handleSubmit}>
                    <Input
                        label={"Email or Phone number"}
                        placeholder={"Email or Phone number"}
                        value={cred}
                        onChange={(e) => setCred(e.target.value)}
                        required
                        autoFocus
                    />
                    <Input
                        label={"Name"}
                        placeholder={"Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Button type="submit">Signup</Button>
                </form>
            </div>
            <div>
                <LinkBigBtn
                    link="/auth/login"
                    mainText="Login"
                    grayText="Already have an Account"
                />
            </div>
        </>
    );
};

export default Signup;
