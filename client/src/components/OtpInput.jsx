import { useRef, useState } from "react";

const OtpInput = ({ length = 5 }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        const digit = e.target.value.replace(/\D/g, "");

        if (!digit) return;

        const next = [...otp];
        next[index] = digit[0];
        setOtp(next);

        if (index < length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            const next = [...otp];
            if (next[index]) {
                next[index] = "";
            } else if (index > 0) {
                next[index - 1] = "";
                inputs.current[index - 1]?.focus();
            }
            setOtp(next);
        }

        if (e.key === "ArrowLeft" && index > 0) {
            inputs.current[index - 1]?.focus();
        }

        if (e.key === "ArrowRight" && index < length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length);

        if (!pasted) return;

        const next = [...otp];
        pasted.split("").forEach((digit, i) => {
            next[i] = digit;
        });
        setOtp(next);

        inputs.current[pasted.length - 1]?.focus();
    };

    return (
        <>
            <label className="block text-black font-medium text-sm mb-2">
                Enter OTP
            </label>
            <div className="flex justify-between gap-2 mb-4">
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        inputMode="numeric"
                        value={otp[index]}
                        ref={(el) => (inputs.current[index] = el)}
                        className="w-12 text-sm text-center border border-light-gray rounded-lg p-2 focus:ring-2 focus:ring-light-gray outline-none"
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        autoFocus={index === 0}
                    />
                ))}
                <input type="hidden" name="otp" value={otp.join("")} />
            </div>
        </>
    );
};

export default OtpInput;
