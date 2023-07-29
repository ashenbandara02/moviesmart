import { NavLink } from "react-router-dom";
import ig from "../sources/media-icons/instagram.png";
import fb from "../sources/media-icons/facebook.png";
import wtsapp from "../sources/media-icons/whatsapp.png";


const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="inner-footer">
                <div className='footer-title'><h1>MOVIE<span>SMART</span></h1></div>
                <div className="footer-one explore">
                    <h3>Explore</h3>
                    <ul id="footerNav">
                        <NavLink to="/home"><li>Home</li></NavLink>
                        <NavLink to="/movies"><li>Movies</li></NavLink>
                        {/* <NavLink to="/contact-us"><li>Contact</li></NavLink> */}
                    </ul>
                </div>
                <div className="footer-one">
                    <h3>Follow-Us On</h3>
                        <div className="mediaicons">
                            <NavLink to="www.instagram.com/moviesmart"><img src={ig} className="mediaicon"/></NavLink>
                            <NavLink to="www.facebook.com/moviesmart"><img src={fb} className="mediaicon"/></NavLink>
                            <NavLink to="#"><img src={wtsapp} className="mediaicon"/></NavLink>
                        </div>
                </div>
                <div className="footer-one contact">
                    <h3>Contact Us</h3>
                    <input type="email" placeholder="Your Email" id="email-send"/>
                    <input type="text" maxLength="250" placeholder="Enter the Message...!" id="message-send"/>
                    <input type="submit" value="Send" id="submit"/>
                </div>
            </div>
        </div>
        <div className="copyright">
            ©2023 MovieSmart | All Rights Reserved
        </div>
        </>
    );

}

export default Footer;