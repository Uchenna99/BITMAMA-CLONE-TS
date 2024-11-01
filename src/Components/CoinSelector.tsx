import { useState } from 'react'
import "../Stylesheets/Selector.css"
import { GoChevronDown } from "react-icons/go";
import xrp from "../assets/SVG/xrp.svg"
import btc from "../assets/SVG/btc.svg"
import eth from "../assets/SVG/eth.svg"
import celo from "../assets/SVG/celo.svg"
import xlm from "../assets/SVG/xlm.svg"
import usdt from "../assets/SVG/usdt.svg"
import cusd from "../assets/SVG/cusd.svg"
import usdc from "../assets/SVG/usdc.svg"
import pyusd from "../assets/SVG/pyusd.svg"


export const CoinSelector = () => {

    const countries = [ {name: 'BTC', flag: btc}, 
        {name: 'ETH', flag: eth},
        {name: 'CELO', flag: celo},
        {name: 'XLM', flag: xlm},
        {name: 'XRP', flag: xrp},
        {name: 'USDT', flag: usdt},
        {name: 'CUSD', flag: cusd},
        {name: 'USDC', flag: usdc},
        {name: 'PYUSD', flag: pyusd}
    ]

    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState({name: 'BTC', flag: btc})
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
                    </div>
                ))}
                
            </div>
        </div>
    </>
  )
}
