import { useState } from 'react'
import "../Stylesheets/Selector.css"
import naija from "../assets/FLAGS/Flag_of_Nigeria.png"
import ghs from "../assets/FLAGS/Flag_of_Ghana.png"
import kes from "../assets/FLAGS/Flag_of_Kenya.png"
import { GoChevronDown } from "react-icons/go";

export const SmallSelector = () => {

    const countries = [{name: 'NGN', name2: 'Naira', flag: naija}, {name: 'GHS', name2: 'Ghana Cedis', flag: ghs}, {name: 'KES', name2: 'Kenyan Shilling', flag: kes}]

    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState({name: 'NGN', name2: 'Naira', flag: naija})
  return (
    <>
        <div className="select-div" onClick={()=> setToggle(!toggle)} >

            <div className="img-holder"  >
                <img src={selected.flag} alt="" />
            </div>

            <p style={{fontWeight:'600'}} > {selected.name} </p>

            <GoChevronDown />

            <div className="drop-select" style={{display: toggle === true? 'block' : 'none'}} >
                {countries.map((country)=>(
                    <div className="drop-select-option" key={country.name}
                        onClick={()=> setSelected(country)} >
                        <div className="img-holder img-holder2"  >
                            <img src={country.flag} alt="" />
                        </div>
                        <p> {country.name} </p> 
                        <p> {country.name2} </p>
                    </div>
                ))}
                
            </div>
        </div>
    </>
  )
}
