import { useEffect, useState } from 'react'
import "../Stylesheets/Selector.css"
import { GoChevronDown } from "react-icons/go";
import { countries } from './CryptoFlags';


interface Props {
    coinUpdate: (country: Flag)=>void;
    coinReset: string;
}

export interface Flag { name: string; flag: string}




export const CoinSelector = ( {coinUpdate, coinReset}:Props ) => {

    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState<Flag>(countries[0])
    useEffect(()=>{
        setSelected(countries[0])
    }, [coinReset])
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
                        onClick={()=> {setSelected(country);
                            coinUpdate(country);
                        }} >
                        <div className="img-holder img-holder2"  >
                            <img src={country.flag} alt="" />
                        </div>
                        <p> {country.name} </p> 
                    </div>
                ))}
                
            </div>
        </div>
    </>
  )
}
