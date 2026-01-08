import {
    Input,
    Button,
    OtpInput,
    LinkBigBtn,
} from "../components";
import { useState, useRef } from "react";

const Login = () => {
    const [cred, setCred] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [timer, setTimer] = useState(30);

    const timerInterval = useRef(null);

    const requestOtp = () => {
        // otp requesting logic
        if (timerInterval.current) {
            clearInterval(timerInterval.current);
        }

        timerInterval.current = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtp(true);
        requestOtp();
        const formData = new FormData(e.currentTarget);
        const otpValue = formData.get("otp");
        if (!otpValue) return;
        // otp verification logic
    };

    return (
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
                            <button
                                className="text-imperial-blue cursor-pointer"
                                onClick={requestOtp}
                                disabled={timer > 0}>
                                Resend {timer ? "in " + timer + "s" : ""}
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {!showOtp && (
                        <LinkBigBtn
                            link="/auth/signup"
                            mainText="Signup"
                            grayText="Don’t have a Productr Account"
                        />
                    )}
                </div>
            </div>
    );
};

export default Login;
