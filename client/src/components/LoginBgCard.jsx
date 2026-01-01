import { Logo, fabricgrids } from "../assets";

const LoginBgCard = ({ children }) => {
    return (
        <div
            className="relative border border-light-gray rounded-4xl m-8 overflow-hidden
                bg-[linear-gradient(180deg,#010860_0%,#002283_19.23%,#734AA3_38.46%,#E7959C_57.21%,#E4A182_76.92%,#BF3613_100%)]
                grid place-items-center">
            <Logo className="absolute inset-4 z-1" />
            <img
                src={fabricgrids}
                alt="fabric grid background"
                className="absolute opacity-95 mix-blend-hard-light object-center
                    object-cover h-full w-full"
            />
            {children}
        </div>
    );
};

export default LoginBgCard;
