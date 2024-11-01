import "../Stylesheets/Footer.css"
import { Link } from "react-router-dom";
import whitelogo from "../assets/SVG/bitmama-white.svg"
import google from "../assets/SVG/google-play.svg"
import apple from "../assets/SVG/app-store.svg"
import facebook from "../assets/SVG/facebook.svg"
import insta from "../assets/SVG/instagram.svg"
import twitter from "../assets/SVG/twitter.svg"
import linkedin from "../assets/SVG/linkedin.svg"
import footerimg from "../assets/footerimg.png"



const Footer =()=>{
    return(
        <>
        
            <div className="footer-wrap">
                <div className="footer-main">
                    <img id='footer-img' src={footerimg} alt="" />
                    <div className="footer-grid">
                        <div className="footer-links">
                            <h4>Company</h4>
                            <Link id='foot' to={""}><p>About</p></Link>
                            <Link id='foot' to={""}><p>Career</p></Link>
                            <Link id='foot' to={""}><p>Privacy Policy</p></Link>
                            <Link id='foot' to={""}><p>Terms of Service</p></Link>
                        </div>
                        <div className="footer-links">
                            <h4>Support</h4>
                            <Link id='foot' to={""}><p>FAQ</p></Link>
                            <Link id='foot' to={""}><p>Supported Countries</p></Link>
                            <Link id='foot' to={""}><p>Join Us on Discord</p></Link>
                        </div>
                        <div className="footer-links">
                            <h4>Features</h4>
                            <Link id='foot' to={""}><p>Crypto Cards</p></Link>
                            <Link id='foot' to={""}><p>Partners Program</p></Link>
                            <Link id='foot' to={""}><p>Greenbox</p></Link>
                            <Link id='foot' to={""}><p>Earn by Staking</p></Link>
                            <Link id='foot' to={""}><p>Buy Airtime & Data</p></Link>
                        </div>
                        <div className="footer-links">
                            <h4>Resources</h4>
                            <Link id='foot' to={""}><p>Blog</p></Link>
                        </div>
                        <div className="footer-links">
                            <h4>Buy Globally</h4>
                            <Link id='foot' to={""}><p>Buy Bitcoin in Nigeria</p></Link>
                            <Link id='foot' to={""}><p>Buy Bitcoin in Ghana</p></Link>
                            <Link id='foot' to={""}><p>Buy Bitcoin in Kenya</p></Link>
                        </div>
                    </div>

                    <div className="footer-details">
                        <h3>Did you know you can do more with crypto while on the go?</h3>
                        <p id='get-app'>Get Bitmama mobile app and find out</p>
                        <img id='white-bitlogo' src={whitelogo} alt="" />
                        <p id='fastest'>Fastest, Easiest and Cheapest way to buy cryptocurrencies.</p>
                        <div className="store-logos">
                            <img id='app-logo' src={google} alt="" />
                            <img id='app-logo' src={apple} alt="" />
                        </div>
                        <div className="social-handles">
                            <img src={facebook} alt="" />
                            <img src={insta} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>

                <div className="sub-footer">
                    <p>Bitmama offers its products and services in partnership with licensed transmitters in their respective jurisdictions.</p>
                    <p>All trademarks and brand names belong to their respective owners. Use of these trademarks and brand names do not 
                        represent endorsement by or association with Bitmama.
                    </p>
                    <p><span id='cap-text'>IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT:</span> To help the government fight the funding of 
                        terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and 
                        record information that identifies each person who opens an Account. What this means for you: When you open an Account, 
                        we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may 
                        also ask to see a copy of your driver’s license and/or International Passport.
                    </p>
                </div>
            </div>
        
        </>
    )
}
export default Footer;