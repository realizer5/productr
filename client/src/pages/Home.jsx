import { Link } from "react-router"

const Home = () => {
    return (
        <div>
            home
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">signup</Link>
        </div>
    )
}

export default Home
