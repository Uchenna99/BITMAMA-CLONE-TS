import "../Stylesheets/Navbar.css"
import logo from "../assets/SVG/bitmama-green.svg"
import { Link } from "react-router-dom";
import useGlobalState from "../context/GlobalState";



const NavbarBlog =()=>{
    const { userName } = useGlobalState();

    return(
        <>
        
            <div className="navbar blog-nav">
                <Link to='/'>
                    <div className="nav-left">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="nav-mid">

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Product Updates</Link></p>
                    </div>

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Industry Picks</Link></p>
                    </div>

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Bitstars</Link></p>
                    </div>

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Humans of Bitmama</Link></p>
                    </div>

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Bitmama Hub</Link></p>
                    </div>

                    <div className="option-wrap">
                        <p><Link to='/blog' id="option-wrap">Bitmama TV</Link></p>
                    </div>

                </div>

                <div className="nav-right">
                    {
                        userName?
                        <h4> Hi, {userName} </h4> :
                        <Link to='/signup'><button id='nav-butn'>Get Started</button></Link>
                    }
                    
                </div>
            </div>

        
        </>
    )
}

export default NavbarBlog;