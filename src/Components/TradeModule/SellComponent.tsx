import { CoinSelector } from "../CoinSelector"
import { CountrySelector } from "../CountrySelector"
import { BuySell } from "./BuyComponent"


const SellComponent = ({BuySellState, coinUpdate}: BuySell) => {
  return (
    <>
        <div className="amount-box" style={{display: BuySellState === 'buyside' ? 'flex' : 'none'}}>
            <label htmlFor="you-buy">You get</label>
            <input id="you-buy" type="text" placeholder="0" />
            <CoinSelector coinUpdate={(update)=> coinUpdate(update)} coinReset={BuySellState} />
        </div>

        <div className="amount-box" style={{display: BuySellState === 'sellside' ? 'flex' : 'none'}}>
            <label htmlFor="you-buy">You get</label>
            <input id="you-buy" type="text" placeholder="0" />
            <CountrySelector />
        </div>
    </>
  )
}

export default SellComponent