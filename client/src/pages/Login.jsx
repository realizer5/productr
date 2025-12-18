import { Logo } from "../assets";

const Login = () => {
    return (
        <div className="w-full h-screen grid grid-cols-2 bg-cultured">
            <div className="p-4 relative border border-light-gray rounded-4xl m-8 bg-[linear-gradient(180deg,#010860_0%,#002283_19.23%,#734AA3_38.46%,#E7959C_57.21%,#E4A182_76.92%,#BF3613_100%)]">
                <Logo className=""/>
            </div>
            <div>
                <h1 className="text-2xl font-semibold font-display text-imperial-blue">
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
