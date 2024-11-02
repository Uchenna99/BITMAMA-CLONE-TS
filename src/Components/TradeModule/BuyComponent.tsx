import { CoinSelector, Flag } from "../CoinSelector";
import { CountrySelector } from "../CountrySelector";

export interface BuySell {
    BuySellState: string;
    coinUpdate: (update: Flag)=>void;
}

const BuyComponent = ( {BuySellState, coinUpdate}: BuySell ) => {

  return (
    <>
        <div className="amount-box" style={{display: BuySellState === 'buyside' ? 'flex' : 'none'}}>
            <label htmlFor="you-buy">You buy</label>
            <input id="you-buy" type="number" placeholder="Amount in Naira" />

            <CountrySelector />
        </div>

        <div className="amount-box" style={{display: BuySellState === 'sellside' ? 'flex' : 'none'}}>
            <label htmlFor="you-buy">You sell</label>
            <input id="you-buy" type="text" placeholder="0" />
            <CoinSelector coinUpdate={(update)=>coinUpdate(update)} coinReset={BuySellState} />
        </div>

    </>
  )
}

export default BuyComponent