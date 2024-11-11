import { useState } from "react";
import "./BurgerMenu.css"
import { IoChevronDownSharp } from "react-icons/io5";
import arrow from "../../assets/SVG/changera_nrgura.svg"
import brief from "../../assets/SVG/mb-dev.svg"



const ProductWrap = () => {
    const [dropOption, setDropOption] = useState(false);

  return (
    <>
            <div className="select-wrapper">
                <div className="select-options" onClick={ ()=> setDropOption(!dropOption)} >
                    <p>Products</p>
                    <IoChevronDownSharp />
                </div>

                <div className="drop-div" style={{display: dropOption === true? 'block':'none'}} >
                    <div className="drop-options">
                        <img src={arrow} alt="" id="arrow" />
                        <p>Bitwaya</p>
                    </div>
                    <div className="drop-options">
                        <img src={brief} alt="" id="icon" />
                        <p>Developer Tools</p>
                        <p id="smaller">Take advantage of our developer tools</p>
                    </div>
                </div>

            </div>

    </>
  )
}

export default ProductWrap;