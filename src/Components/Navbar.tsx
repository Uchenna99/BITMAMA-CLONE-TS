import "../Stylesheets/Navbar.css"
import logo from "../assets/SVG/bitmama-green.svg"
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";


const Navbar =()=>{
    return(
        <>
        
            <div className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-mid">
                    <div className="option-wrap">
                        <p>Products</p>
                        <BiChevronDown/>
                    </div>
                    <div className="option-wrap">
                        <p>Company</p>
                        <BiChevronDown/>
                    </div>
                    <div className="option-wrap">
                        <p>Buy and Sell</p>
                    </div>
                    <div className="option-wrap">
                        <p>Get Crypto Cards</p>
                    </div>
                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Blog</Link></p>
                    </div>
                </div>

                <div className="nav-right">
                    <Link to='/login' id='signup-link'><p>Sign In</p></Link>
                    <Link to='/signup'><button id='nav-butn'>Get Started</button></Link>
                    <div className="nav-burger">
                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1suhkff"><path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar;