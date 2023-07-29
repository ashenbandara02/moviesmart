
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="inner_header">
                <div className='header-title'><h1>MOVIE<span>SMART</span></h1></div>
                <ul className="navigation">
                    <NavLink to="/home"><li>Home</li></NavLink>
                    <NavLink to="/movies"><li>Movies</li></NavLink>
                    {/* <NavLink to="/#bottom"><li>Contact</li></NavLink> */}
                </ul>
            </div>
        </div>

    );

}

export default Header;