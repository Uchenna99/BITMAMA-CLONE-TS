import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5"
import icon1 from "../../assets/SVG/mb-about.svg"
import icon2 from "../../assets/SVG/mb-policy.svg"
import icon3 from "../../assets/SVG/mb-career.svg"
import icon4 from "../../assets/SVG/mb-partners.svg"


const CompanyWrapper = () => {
    const [dropOption, setDropOption] = useState(false);

  return (
    <>
            <div className="select-wrapper">
                <div className="select-options" onClick={ ()=> setDropOption(!dropOption)} >
                    <p>Company</p>
                    <IoChevronDownSharp />
                </div>

                <div className="drop-div" style={{display: dropOption === true? 'block':'none'}} >
                    <div className="drop-options">
                        <img src={icon1} alt="" id="icon" />
                        <p>About</p>
                        <p id="smaller">Learn more about us</p>
                    </div>
                    <div className="drop-options">
                        <img src={icon2} alt="" id="icon" />
                        <p>Privacy Policy</p>
                        <p id="smaller">Our privacy guidelines</p>
                    </div>
                    <div className="drop-options">
                        <img src={icon3} alt="" id="icon" />
                        <p>Career</p>
                        <p id="smaller">Join our brilliant team</p>
                    </div>
                    <div className="drop-options">
                        <img src={icon4} alt="" id="icon" />
                        <p>Partners Program</p>
                        <p id="smaller">Check out our related products as a partner</p>
                    </div>
                </div>

            </div>

    </>
  )
}

export default CompanyWrapper