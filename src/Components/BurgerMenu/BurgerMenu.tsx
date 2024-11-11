import "./BurgerMenu.css"
import { IoCloseOutline } from "react-icons/io5";
import bitlog from "../../assets/SVG/bitmama-white.svg"
import ProductWrap from "./ProductWrapper";
import CompanyWrapper from "./CompanyWrapper";
import google from "../../assets/SVG/google-play.svg"
import apple from "../../assets/SVG/app-store.svg"
import { Link } from "react-router-dom";

 export interface BurgMenu { activeSwitch: (isActive: boolean)=> void; }

const BurgerMenu = ( {activeSwitch}: BurgMenu ) => {
  return (
    <>

        <div className="burger-menu-inner-top">

            <div className="bitlogo-close">
                <Link to={'/'}><img src={bitlog} alt="" id="bitmama-img" /></Link>
                <IoCloseOutline id="close" onClick={ ()=> {activeSwitch(false)}} />
            </div>

            <ProductWrap />

            <CompanyWrapper />

            <div className="extra-options">
                <p id="extra">Buy and Sell Crypto</p>
            </div>

            <div className="extra-options">
                <p id="extra">Crypto Cards</p>
            </div>

            <button id="signin"><p>Sign In</p></button>

            <button id="started"><p>Get Started</p></button>
            
        </div>

        <div className="burger-menu-inner-bottom">
            <p>DOWNLOAD ON</p>

            <div className="playstore">
                <img src={google} alt="" />
                <img src={apple} alt="" />
            </div>
        </div>
    </>
  )
}

export default BurgerMenu