import { Link } from "react-router";

const LinkBigBtn = ({
    link = "/",
    grayText = "gray text",
    mainText = "main text",
}) => {
    return (
        <Link to={link}>
            <button className="grid p-4 border border-light-gray rounded-lg text-sm w-full cursor-pointer">
                <span className="text-blue-gray">{grayText}</span>
                <span className="text-imperial-blue font-medium">
                    {mainText}
                </span>
            </button>
        </Link>
    );
};

export default LinkBigBtn;
