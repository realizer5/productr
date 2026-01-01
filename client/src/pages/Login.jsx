import { Link } from "react-router";
import { Input, Button, LoginCard, LoginBgCard, OtpInput } from "../components";
import { useState } from "react";

const Login = () => {
    const [cred, setCred] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtp(true);
        const formData = new FormData(e.currentTarget);
        const otpValue = formData.get("otp");
        if (otpValue.length < 5) return;
        console.log(otpValue);
    };

    return (
        <div className="w-full h-screen grid grid-cols-2 bg-cultured font-display">
            <LoginBgCard>
                <LoginCard />
            </LoginBgCard>
            <div className="m-auto flex flex-col gap-96">
                <div>
                    <h1 className="text-2xl font-semibold text-imperial-blue p-4">
                        Login to your Productr Account
                    </h1>
                    <form className="grid mt-8" onSubmit={handleSubmit}>
                        {showOtp ? (
                            <OtpInput />
                        ) : (
                            <Input
                                label={"Email or Phone number"}
                                placeholder={"Email or Phone number"}
                                value={cred}
                                onChange={(e) => setCred(e.target.value)}
                                required
                                autoFocus
                            />
                        )}
                        <Button type="submit">
                            {showOtp ? "Enter your OTP" : "Login"}
                        </Button>
                    </form>
                    {showOtp && (
                        <div className="text-sm text-center mt-4 font-medium">
                            <span className="text-blue-gray mr-1">
                                Didn't receive OTP?
                            </span>
                            <button className="text-imperial-blue cursor-pointer">
                                Resend in {seconds}s
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {!showOtp && (
                        <Link to="/signup">
                            <button className="grid p-4 border border-light-gray rounded-lg text-sm w-full cursor-pointer">
                                <span className="text-blue-gray">
                                    Don't have a Productr Account
                                </span>
                                <span className="text-imperial-blue font-medium">
                                    SignUp Here
                                </span>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
