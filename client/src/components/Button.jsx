const Button = ({ children, type = "button", className = "", ...porps }) => {
    return (
        <button
            type={type}
            className={`bg-imperial-blue text-white rounded-lg font-semibold text-sm
p-2 cursor-pointer hover:bg-imperial-blue/90 active:bg-imperial-blue duration-200 ${className}`}>
            {children}
        </button>
    );
};

export default Button;
