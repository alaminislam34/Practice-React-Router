import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a href="skill">Skill</a>
            </nav>
                <Outlet></Outlet>
        </div>
    );
};

export default Header;