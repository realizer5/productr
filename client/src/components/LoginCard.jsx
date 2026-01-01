const LoginCard = () => {
    return (
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
    );
};

export default LoginCard;
