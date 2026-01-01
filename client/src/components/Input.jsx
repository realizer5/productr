import { useId } from "react";

const Input = ({ type = "text", className = "", label, ...props }) => {
    const id = useId();
    return (
        <div className="mb-4 w-full">
            <label
                htmlFor={id}
                className="block text-black font-medium text-sm mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={`w-full text-sm placeholder:text-blue-gray border border-light-gray
                    rounded-lg p-2 focus:ring-2 focus:ring-light-gray outline-none ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
