import { useState } from "react";
import "../Stylesheets/SelectMenu.css"
import { BiChevronDown } from "react-icons/bi";
import Bfaso from "../assets/FLAGS/Flag_of_Burkina_Faso.png"
import Cameroon from "../assets/FLAGS/Flag_of_Cameroon.png"
import Canada from "../assets/FLAGS/Flag_of_Canada_(Pantone).svg.png"
import Cote from "../assets/FLAGS/Flag_of_Côte_d'Ivoire.svg.png"
import DRC from "../assets/FLAGS/Democratic_Republic_of_the_Congo.png"
import Ghana from "../assets/FLAGS/Flag_of_Ghana.png"
import Kenya from "../assets/FLAGS/Flag_of_Kenya.png"
import Nigeria from "../assets/FLAGS/Flag_of_Nigeria.png"
import Benin from "../assets/FLAGS/Flag_of_Benin.png"
import Senegal from "../assets/FLAGS/Flag_of_Senegal.svg.png"
import SouthA from "../assets/FLAGS/Flag_of_South_Africa.svg.png"



const SelectMenu =()=>{

    const countries = [
        {
            "name": "Burkina Faso",
            "flag": Bfaso
        }, 
        {
            "name": "Cameroon",
            "flag": Cameroon
        }, 
        {
            "name": "Canada",
            "flag": Canada
        }, 
        {
            "name": "Cote D'ivoire",
            "flag": Cote
        },
        {
            "name": "Democratic Republuic Of The Congo",
            "flag": DRC
        },
        {
            "name": "Ghana",
            "flag": Ghana
        },
        {
            "name": "Kenya",
            "flag": Kenya
        },
        {
            "name": "Nigeria",
            "flag": Nigeria
        },
        {
            "name": "Republic of Benin",
            "flag": Benin
        },
        {
            "name": "Senegal",
            "flag": Senegal
        },
        {
            "name": "South Africa",
            "flag": SouthA
        }
]

       
    const [activate, setActivate] = useState(false)
    const [selected, setSelected] = useState(['', 'Select Country'])

    return(
        <>
        
            <div className="select-box">

                <div className="select-option" onClick={()=>{setActivate(!activate)}}>

                    <div className="country-flag" style={{display: selected[0]===''? 'none' : 'flex' }} >
                        <img src={selected[0]} alt="" />
                    </div>
                    <p> {selected[1]} </p>
                    <div className="chevron"> <BiChevronDown/> </div>

                </div>

                {activate && (
                    <div className="select-options-list" style={{padding:'5px'}}>
                        {countries.map((nation)=>(
                            <div className="select-option highlight" onClick={()=>{
                                const flag = nation.flag
                                const cntry = nation.name
                                setSelected([flag, cntry])
                                setActivate(false)
                                
                                }} >

                                <div className="country-flag">
                                    <img src={nation.flag} alt="" />
                                </div>
                                <p> {nation.name} </p>
        
                            </div>
                        ))}

                </div>
                )}
            </div>
        
        </>
    )
}

export default SelectMenu;