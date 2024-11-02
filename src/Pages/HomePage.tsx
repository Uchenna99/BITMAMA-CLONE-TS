import { useEffect, useState } from "react";
import "../Stylesheets/HomePage.css"
import img1 from "../assets/SVG/received.svg"
import google from "../assets/SVG/google-play.svg"
import apple from "../assets/SVG/app-store.svg"
import cube from "../assets/SVG/_cube.svg"
import card1 from "../assets/bitcardpink.png"
import card2 from "../assets/bitcardblack.png"
import card3 from "../assets/bitcardgreen.png"
import circle from "../assets/yellow.png"
import cylinder from "../assets/cylinder.png"
import phone1 from "../assets/phone1.png"
import phone2 from "../assets/phone2.png"
import phone3 from "../assets/phone3.png"
import amy from "../assets/amy.png"
import adisa from "../assets/adisa.png"
import umar from "../assets/umar.png"
import jesicca from "../assets/jesicca.png"
import hollins from "../assets/hollins.png"
import amy2 from "../assets/amy2.png"
import circle1 from "../assets/revcircle1.png"
import circle2 from "../assets/revcircle.png"
import circle3 from "../assets/semicircle.png"
import peeps from "../assets/people.png"
import portfo from "../assets/portfolio.png"
import bitc from "../assets/bitportfolio.png"
import sub from "../assets/subscribe.png"
import arrow from "../assets/arrow.png"
import Footer from "../Components/Footer";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Flag } from "../Components/CoinSelector";
import { countries } from "../Components/CryptoFlags";
import BuyComponent from "../Components/TradeModule/BuyComponent";
import SellComponent from "../Components/TradeModule/SellComponent";


const Homepage =()=>{

    const [buyCoin, changePage] = useState('buyside')

    const [coinPrice, setCoinPrice] = useState<Flag>(countries[0])
    
    useEffect(()=>{
        setCoinPrice(countries[0]);
    }, [buyCoin])

    return(
        <>
        
        <Navbar/>

        <div className="homepage-wrap">
            <div className="hero-section">
                <div className="hero-left">
                    <div className="hero-header">
                        <h2>Enjoy Crypto beyond <span id='hero-head'>Trading</span></h2>
                    </div>
                    <div className="hero-text">
                        <p id='hero-big'>Bitmama is a highly-secure crypto platform to buy, sell or trade Bitcoin, Ethereum, Tether (USDT), Celo, Stellar, USDC and other cryptocurrencies at the best rates.</p>
                        <p id='hero-small'>Get crypto cards, make payments in crypto, send and receive fiat and crypto globally.</p>
                    </div>
                    <div className="hero-button">
                        <Link to='/signup' ><button id='hero-butn'>Sign Up Now</button></Link>
                    </div>
                    <div className="playstore-wrap">
                        <p>DOWNLOAD ON</p>
                        <div className="store-logos">
                            <img id='app-logo' src={google} alt="" />
                            <img id='app-logo' src={apple} alt="" />
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="buy-sell-outer-wrap">
                        <div className="buy-sell-box">
                            <div className="buy-sell-wrap">
                                <div className="buy-sell-label">
                                    <div className="buy-section" onClick={()=>{changePage('buyside');}}>
                                        <p>Buy</p>
                                        <div className="buy-border" style={{display: buyCoin==='buyside' ? 'flex' : 'none'}}></div>
                                    </div>
                                    <div className="sell-section" onClick={()=>{changePage('sellside');}}>
                                        <p>Sell</p>
                                        <div className="buy-border" style={{display: buyCoin==='sellside' ? 'flex' : 'none'}}></div>
                                    </div>
                                </div>
                                <BuyComponent BuySellState={buyCoin} coinUpdate={(update)=> setCoinPrice(update)} />
                                
                                <img id='received' src={img1} alt="" />

                                <SellComponent BuySellState={buyCoin} coinUpdate={(update)=> setCoinPrice(update)} />

                                <button id='hero-butn' className="butn-margin">Buy</button>
                                <div className="btc-price">
                                    <img id='btc-icon' src={coinPrice.flag} alt="" />
                                    <p>1 {coinPrice.name} = 500 Naira</p>
                                </div>
                            </div>
                        </div>
                        <img id='cube1' src={cube} alt="" />
                        <img id='cube2' src={cube} alt="" />
                        <img id='circle' src={circle} alt="" />
                        <img id='cylinder' src={cylinder} alt="" />

                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="section2-left">
                    <div className="sec2-grid">
                        <div className="left-header">
                            <h2>Pay for Everything you need with your Bitmama Crypto Card</h2>
                            <p>Spend over $10,000 monthly with your physical and virtual crypto debit card</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Shop from global stores like Amazon, ASOS etc</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Make International Payments</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Seamlessly pay on POS terminals and ATMs around the world</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Pay international bills like Spotify, Google Workspace and AWS subscription</p>
                        </div>
                    </div>
                </div>

                <div className="section2-right">
                    <div className="cards-wrapper">
                        <img className='card' id="card1" src={card1} alt="" />
                        <img className='card' id="card2" src={card3} alt="" />
                        <img className='card' id="card3" src={card2} alt="" />
                    </div>
                </div>
            </div>

            <div className="section3">
                <div className="section3-grid">
                    <div className="sec3-grid-box g-1">
                        <h3>Crypto Trading Made Easy</h3>
                        <div className="sec3-text">
                            <div className="sec3-text-img"></div>
                            <div className="sec3-text-text">
                                <p>Trade Bitcoin, Ethereum, Tether (USDT), Stellar, Ripple, Matic, USDC and your favorite cryptocurrencies on the Bitmama trading platform</p>
                            </div>
                        </div>
                        <button id='hero-butn' className="sec3-butn">Start Crypto Trading</button>
                    </div>
                    <div className="sec3-grid-box sec3-img g-2"></div>
                    <div className="sec3-grid-box sec3-img sec3-img2 g-3"></div>
                    <div className="sec3-grid-box g-4">
                        <h3>Crypto giveaways just got better with Bitmama GreenBox</h3>
                        <div className="sec3-text">
                            <div className="sec3-text-img"></div>
                            <div className="sec3-text-text">
                                <p>Gift USDT, cUSD and USDC easily with a Green Box from Bitmama</p>
                            </div>
                        </div>
                        <button id='hero-butn' className="sec3-butn">Gift Someone Now</button>
                    </div>
                    <div className="sec3-grid-box g-5">
                        <h3>Let your money work for you, staking your coins on Bitmama Earn</h3>
                        <div className="sec3-text">
                            <div className="sec3-text-img small-img1"></div>
                            <div className="sec3-text-text">
                                <p>Lock your crypto assets and earn interests over time.</p>
                            </div>
                        </div>
                        <button id='hero-butn' className="sec3-butn">Stake Your Coins Now</button>
                    </div>
                    <div className="sec3-grid-box sec3-img sec3-img3 g-6"></div>
                    <div className="sec3-grid-box sec3-img sec3-img4 g-7"></div>
                    <div className="sec3-grid-box g-8">
                        <h3>Do more with crypto</h3>
                        <div className="do-more-wrap">
                            <div className="sec3-text">
                                <div className="sec3-text-img small-img"></div>
                                <div className="sec3-text-text">
                                    <p>Purchase airtime and data with your crypto wallet</p>
                                </div>
                            </div>
                            <div className="sec3-text">
                                <div className="sec3-text-img small-img"></div>
                                <div className="sec3-text-text">
                                    <p>Fund Mobile Money wallets</p>
                                </div>
                            </div>
                            <div className="sec3-text">
                                <div className="sec3-text-img small-img"></div>
                                <div className="sec3-text-text">
                                    <p>Spend cryptocurrencies directly without first converting to fiat</p>
                                </div>
                            </div>
                            <div className="sec3-text">
                                <div className="sec3-text-img small-img"></div>
                                <div className="sec3-text-text">
                                    <p>Send and receive fiat and crypto globally</p>
                                </div>
                            </div>
                        </div>
                        <button id='hero-butn' className="sec3-butn">Get Started Now</button>
                    </div>
                </div>
            </div>

            <div className="using-bitmama">
                <div className="using-bitmama-header">
                    <h2>Using Bitmama is as simple as these 3 steps</h2>
                </div>
                <div className="using-bitmama-body">
                    <div className="bitmama-left">

                        <div className="bit-left-holder one">
                            <div className="number">
                                <div className="num-div">1</div>
                            </div>
                            <div className="descript">
                                <h2 id='h2one'>Create an account</h2>
                                <p>Sign up for a free account on our website or mobile apps</p>
                            </div>
                            <div className="thick-border one-b"></div>
                        </div>

                        <div className="bit-left-holder two">
                            <div className="number">
                                <div className="num-div">2</div>
                            </div>
                            <div className="descript">
                                <h2 id='h2two'>Fund your account</h2>
                                <p>Link your bank account and add money with your preferred payment method</p>
                            </div>
                            <div className="thick-border two-b"></div>
                        </div>

                        <div className="bit-left-holder three">
                            <div className="number">
                                <div className="num-div">3</div>
                            </div>
                            <div className="descript">
                                <h2 id='h2three'>Enjoy</h2>
                                <p>Experience limitless banking in web3</p>
                            </div>
                            <div className="thick-border three-b"></div>
                        </div>
                    </div>
                    <div className="bitmama-right">
                        <img id='ph1' src={phone1} alt="" />
                        <img id='ph2' src={phone2} alt="" />
                        <img id='ph3' src={phone3} alt="" />
                    </div>
                </div>
            </div>

            <div className="user-reviews">
                <div className="review-header">
                    <p>We won't toot our horns; </p>
                    <p id='rev-head'>Our users do that for us 💚</p>
                </div>
                <div className="review-header review-header2">
                    <p>We won't toot our horns; Our users do that for us 💚</p>
                </div>
                <div className="review-slide">
                    <div className="review-slide-wrap">
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={amy} alt="" />
                                <p>Amy, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>My first interaction with the Bitmama platform was through referral from a friend. I had to ditch a global 
                                    platform for a simpler and easier interface. It's been a worthwhile decision and I have built my portfolio 
                                    to over $2,070
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={adisa} alt="" />
                                <p>Adisa, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>I have always been concerned about the security of trading platforms. To assuage my fears, these guys were willing 
                                    to refund me if I feel unsatisfied after trying them out. Well, it's been 6 months and it's been a fantastic 
                                    experience so far. And now, my earnings have exceeded that amount I was initially afraid to commit
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={amy2} alt="" />
                                <p>Amy, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>My first interaction with the Bitmama platform was through referral from a friend. I had to ditch a global 
                                    platform for a simpler and easier interface. It's been a worthwhile decision and I have built my portfolio 
                                    to over $2,070
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={hollins} alt="" />
                                <p>Hollins, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>I like that Bitmama takes their time to improve on their processes and feedback from users. It's a good 
                                    one for the team to be innovative.
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={umar} alt="" />
                                <p>Umar, <span id='cntry'>Kenya</span></p>
                            </div>
                            <div className="review-text">
                                <p>For me, and a couple of my friends, what we found most interesting about Bitmama is that human interaction. 
                                    The team is always fantastic and they don't make you feel alone even if it's your first time trading. Love it!
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={jesicca} alt="" />
                                <p>Jessica, <span id='cntry'>Ghana</span></p>
                            </div>
                            <div className="review-text">
                                <p>I was really skeptical about crypto trading thinking it was too complex till I was introduced to Bitmama. 
                                    I discovered the platform is easy to navigate and understand. It's perfect for novices and suitable for 
                                    more advanced traders.
                                </p>
                            </div>
                        </div>
                   </div>
                    
                   <div className="review-slide-wrap">
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={amy} alt="" />
                                <p>Amy, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>My first interaction with the Bitmama platform was through referral from a friend. I had to ditch a global 
                                    platform for a simpler and easier interface. It's been a worthwhile decision and I have built my portfolio 
                                    to over $2,070
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={adisa} alt="" />
                                <p>Adisa, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>I have always been concerned about the security of trading platforms. To assuage my fears, these guys were willing 
                                    to refund me if I feel unsatisfied after trying them out. Well, it's been 6 months and it's been a fantastic 
                                    experience so far. And now, my earnings have exceeded that amount I was initially afraid to commit
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={amy2} alt="" />
                                <p>Amy, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>My first interaction with the Bitmama platform was through referral from a friend. I had to ditch a global 
                                    platform for a simpler and easier interface. It's been a worthwhile decision and I have built my portfolio 
                                    to over $2,070
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={hollins} alt="" />
                                <p>Hollins, <span id='cntry'>Nigeria</span></p>
                            </div>
                            <div className="review-text">
                                <p>I like that Bitmama takes their time to improve on their processes and feedback from users. It's a good 
                                    one for the team to be innovative.
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={umar} alt="" />
                                <p>Umar, <span id='cntry'>Kenya</span></p>
                            </div>
                            <div className="review-text">
                                <p>For me, and a couple of my friends, what we found most interesting about Bitmama is that human interaction. 
                                    The team is always fantastic and they don't make you feel alone even if it's your first time trading. Love it!
                                </p>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-header">
                                <img src={jesicca} alt="" />
                                <p>Jessica, <span id='cntry'>Ghana</span></p>
                            </div>
                            <div className="review-text">
                                <p>I was really skeptical about crypto trading thinking it was too complex till I was introduced to Bitmama. 
                                    I discovered the platform is easy to navigate and understand. It's perfect for novices and suitable for 
                                    more advanced traders.
                                </p>
                            </div>
                        </div>
                   </div>
                </div>
                <img id='circ1' src={circle1} alt="" />
                <img id='circ2' src={circle2} alt="" />
                <img id='circ3' src={circle2} alt="" />
                <img id='circ4' src={circle2} alt="" />
                <img id='circ5' src={circle2} alt="" />
                <img id='circ6' src={circle3} alt="" />
            </div>

            <div className="vibes-section">
                <div className="vibes-left">
                    <h2>Vibes, chats, and hangouts with the team; our Community is different!</h2>
                    <p>Meet the coolest people in crypto, there is an extra spot reserved for you. Join us now</p>
                    <button id='hero-butn'>Yes, Take Me There</button>
                    <img id='vibe-cylinder' src={cylinder} alt="" />
                </div>
                <div className="vibes-right">
                    <img id='people' src={peeps} alt="" />
                </div>
            </div>

            <div className="portfolio-section">
                <div className="portfolio-left">
                    <img  src={portfo} alt="" />
                    <img id='port-bit' src={bitc} alt="" />
                </div>
                <div className="portfolio-right">
                    <h2>Robust and secure—a crypto portfolio you’ll be proud of</h2>
                    <button id='hero-butn'>Build A Portfolio</button>
                </div>
            </div>

            <div className="promo-section">
                <h2>Promos, Crypto round-up, and witty convos; our newsletters are the dopest</h2>
                <img src={sub} alt="" />
                <div className="subscribe">
                    <label htmlFor="mail">See for yourself</label>
                    <div className="sub-wrap">
                        <input id='mail' type="email" placeholder="Enter your email address" />
                        <button className="sub-butn">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="ambassador-section">
                <div className="amb-left">
                    <h2>Join the Bitmama Train. Represent us on your campus</h2>
                    <p>Become a campus ambassador and stand out in your school. You get access to us, our merch, and host 
                        events with us in your school.
                    </p>
                    <button id='amb-butn'>Become an ambassador</button>
                </div>
                <div className="amb-right">
                    <p>We did this at LASU👇! Your school could be next.</p>
                    <div className="youtube">
                        <div className="y-tube-icon-back">
                        <FaYoutube id="y-tube-icon"/>
                        </div>
                        
                    </div>
                    <img id='vid-arrow' src={arrow} alt="" />
                </div>
            </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default Homepage;