import { Logo, fabricgrids } from "../assets";

const Login = () => {
    return (
        <div className="w-full h-screen grid grid-cols-2 bg-cultured font-display">
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
                <div
                    className="z-1 bg-[url(/src/assets/runningman.jpg)] bg-center
                    bg-cover h-120 w-78 rounded-[3rem] shadow-lg grid justify-stretch overflow-hidden">
                    <div className="overflow-hidden m-4 rounded-t-[50%]">
                        <div className="bg-white/40 mix-blend-plus-lighter h-20 blur-3xl"></div>
                    </div>
                    <p className="font-semibold text-lg self-end text-center mb-10 text-white">
                        Uplist your <br /> product to market
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-imperial-blue">
                    Login to your Productr Account
                </h1>
                <form className="grid">
                    <label
                        htmlFor="loginInput"
                        className="text-black font-medium text-sm">
                        Email or Phone number
                    </label>
                    <input
                        type="text"
                        id="loginInput"
                        placeholder="Enter email or phone number"
                        className="text-sm text-blue-gray border border-light-gray rounded-lg p-2"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
