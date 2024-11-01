import "../Stylesheets/BlogPage.css"
import NavbarBlog from "../Components/NavbarBlog";
import { Link } from "react-router-dom";
import topimg from "../assets/bloo.png"
import { RxDotFilled } from "react-icons/rx";
import Footer from "../Components/Footer";
import prod1 from "../assets/products1.png"
import prod2 from "../assets/products2.png"
import prod3 from "../assets/products3.png"
import prod4 from "../assets/products4.png"
import prod5 from "../assets/products5.png"
import ind1 from "../assets/bitcoinimage.png"
import indimg from "../assets/goldbars.png"
import indimg2 from "../assets/invest.jpg"
import indimg1 from "../assets/industry1.png"
import indsimg2 from "../assets/industry2.png"
import indimg4 from "../assets/industry4.png"




const BlogPage =()=>{
    return(
        <>
        
            <NavbarBlog/>
            
           <div className="blog-section">
                <div className="blog-hero-section-wrap">
                    <div className="blog-hero-section">
                        <div className="blog-hero-content">

                            <div className="bit-blog-header">
                                <p>Bitmama Blog</p>
                            </div>

                            <h1 id='welcome-header'>Welcome to <span id='our-blog'>Our Blog</span></h1>

                            <p id='welcome-text'>Sign up to our weekly newsletter and stay up-to-date on the latest stories in the Crypto and Fintech spaces</p>

                            <div className="blog-email-input">
                                <svg id='login-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                <input id='blog-email-add' type="email" placeholder="Enter your email address" />
                                <Link to='/signup'><button id='blog-hero-butn'>Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="latest-stories-grid">

                    <div className="latest-stories-head">
                        <h2>Latest Stories</h2>
                    </div>

                    <div className="latest-stories-left">
                        <div className="top-story-img">
                            <img src={topimg} alt="" />
                        </div>

                        <div className="news-box1">
                            <div className="news-tag"><p>News</p></div>
                            <h2>Polkadot: Pioneering Blockchain Interoperability Solutions</h2>
                            <p>In this blog post, we’ll explore how Polkadot is pioneering blockchain interoperability through its Relay Chain and Parachain architecture.</p>

                            <div className="newsbox-info">
                                <div className="user-img"></div>
                                <div className="user-info">
                                    <p id='user-name'>Adeola Adebo</p>
                                    <p id='user-date'>Oct 7, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                </div>
                                <div className="user-button">
                                    <p>Read More</p>
                                </div>
                            </div>                            
                        </div>
                    </div>

                    <div className="latest-stories-right">
                        <div className="news-box2">
                            <div className="news-img"></div>

                            <div className="news-box1 newsbox-adjust">
                                <div className="news-tag"><p>News</p></div>
                                <h2>XAUT: The Power of Gold in the Cryptocurrency World</h2>
                                <p>That's why in this post, we’ll help you unlock the power of gold in the cryptocurrency world with XAUT, highlighting its use cases.</p>

                                <div className="newsbox-info">
                                    <div className="user-img user-img-adj"></div>
                                    <div className="user-info">
                                        <p id='user-name'>Adeola Adebo</p>
                                        <p id='user-date'>Sep 3, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                    </div>
                                    <div className="arrow-circle">
                                        <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                    </div>
                                </div>                            
                            </div>
                        </div>

                        <div className="news-box2">
                            <div className="news-img news-img2"></div>

                            <div className="news-box1 newsbox-adjust">
                                <div className="news-tag"><p>News</p></div>
                                <h2>Why You Should Spend To Earn</h2>
                                <p>Discover why you should spend to earn with Bitmama and unlock potentially exciting rewards with every transaction.</p>

                                <div className="newsbox-info">
                                    <div className="user-img user-img-adj"></div>
                                    <div className="user-info">
                                        <p id='user-name'>Adeola Adebo</p>
                                        <p id='user-date'>Aug 28, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                    </div>
                                    <div className="arrow-circle">
                                        <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                    </div>
                                </div>                            
                            </div>
                        </div>

                        <div className="news-box2">
                            <div className="news-img news-img3"></div>

                            <div className="news-box1 newsbox-adjust">
                                <div className="news-tag"><p>News</p></div>
                                <h2>Can Cryptocurrency Commoditize AI?</h2>
                                <p>Can cryptocurrency commoditize AI? This detailed guide explores how blockchain might transform AI into a tradable asset.</p>

                                <div className="newsbox-info">
                                    <div className="user-img user-img-adj"></div>
                                    <div className="user-info">
                                        <p id='user-name'>Adeola Adebo</p>
                                        <p id='user-date'>Aug 26, 2024  <RxDotFilled id='dot'/> 4 mins read </p>
                                    </div>
                                    <div className="arrow-circle">
                                        <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-updates">
                    <div className="prod-updates">
                        <h2>Product Updates</h2>
                        <p>See All</p>
                    </div>

                    <div className="products-slide">

                        <div className="prod-slide-cards">

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={prod1} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>Featured</p></div>
                                        <div className="prod-news-tag"><p>Product Updates</p></div>
                                    </div>

                                    <h2>Product Update: Bitmama Crypto Cards are Live</h2>
                                    <p>Bitmama Crypto Cards are live. No more converting to FIAT before making online payments. Available on Web, Android and iOS. Get yours now.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Bitmama Team</p>
                                            <p id='user-date'>Nov 18, 2021  <RxDotFilled id='dot'/> 2 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={prod2} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                        <div className="prod-news-tag"><p>Product Updates</p></div>
                                    </div>

                                    <h2>Bitmama closes pre-seed round of $350,000</h2>
                                    <p>Bitmama closes pre-Seed funding of $350,000 led by Flori Ventures to expand its blockchain payment solution across Sub-Saharan Africa.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Bitmama Team</p>
                                            <p id='user-date'>Oct 4, 2021  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={prod3} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>Featured</p></div>
                                        <div className="prod-news-tag"><p>Product Updates</p></div>
                                    </div>

                                    <h2>Product Update: You can now deposit Naira in your Bitmama Wallet with ba...</h2>
                                    <p>with this new product release, as a user, you can now deposit Naira in your Bitmama Wallet with bank transfer. Buy, sell and swap coins.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Bitmama Team</p>
                                            <p id='user-date'>Aug 4, 2021  <RxDotFilled id='dot'/> 2 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={prod4} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>Product Updates</p></div>
                                    </div>

                                    <h2>How to earn Bitcoins on Bitmama</h2>
                                    <p>You can earn bitcoins on Bitmama. Here's how to earn bitcoin on Bitmama - one of the best crypto platforms in the world.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Bitmama Team</p>
                                            <p id='user-date'>Apr 1, 2021  <RxDotFilled id='dot'/> 3 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={prod5} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>Product Updates</p></div>
                                    </div>

                                    <h2>How to secure your account on Bitmama</h2>
                                    <p>Secure your account on Bitmama. Here's is a simple guide to secure account on Bitmama crypto platform and ensure you are safe</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Bitmama Team</p>
                                            <p id='user-date'>Apr 1, 2021  <RxDotFilled id='dot'/> 4 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-updates">
                    <div className="prod-updates">
                        <h2>Industry Picks</h2>
                        <p>See All</p>
                    </div>

                    <div className="products-slide">

                        <div className="prod-slide-cards">

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={ind1} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Polkadot: Pioneering Blockchain Interoperability Solutions</h2>
                                    <p>In this blog post, we’ll explore how Polkadot is pioneering blockchain interoperability through its Relay Chain and Parachain architecture.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Oct 7, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={topimg} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>XAUT: The Power of Gold in the Cryptocurrency World</h2>
                                    <p>That's why in this post, we’ll help you unlock the power of gold in the cryptocurrency world with XAUT, highlighting its use cases.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Sep 3, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={indimg} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Why You Should Spend To Earn</h2>
                                    <p>Discover why you should spend to earn with Bitmama and unlock potentially exciting rewards with every transaction.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 28, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={indimg2} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Can Cryptocurrency Commoditize AI?</h2>
                                    <p>Can cryptocurrency commoditize AI? This detailed guide explores how blockchain might transform AI into a tradable asset.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 26, 2024  <RxDotFilled id='dot'/> 4 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={ind1} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Unlocking Crypto’s Future: The Rise of Layer 2 Solutions</h2>
                                    <p>Explore the rise of Layer 2 solutions and how they are unlocking scalability, reducing costs, and shaping the future of cryptocurrency.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 21, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={indimg1} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Understanding Spend-To-Earn; A Comprehensive Guide</h2>
                                    <p>This guide is your perfect path to understanding spend-to-earn in detail, exploring its benefits, risks, and understanding its popularity.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 19, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={indsimg2} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>Intersection of AI and Blockchain Technology</h2>
                                    <p>In this post, we’ll explore the intersection of AI and blockchain technology and its impact on the cryptocurrency space</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 14, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="prod-card-img">
                                    <img src={indimg4} alt="" />
                                </div>

                                <div className="prod-card-box">
                                    <div className="news-tag-holder">
                                        <div className="prod-news-tag"><p>News</p></div>
                                    </div>

                                    <h2>The Latest Security Challenges in the Crypto Space</h2>
                                    <p>Explore the latest security challenges in the crypto space, including cyber attacks, smart contract vulnerabilities, and regulatory issues.</p>

                                    <div className="newsbox-info">
                                        <div className="user-img"></div>
                                        <div className="user-info">
                                            <p id='user-name'>Adeola Adebo</p>
                                            <p id='user-date'>Aug 13, 2024  <RxDotFilled id='dot'/> 5 mins read </p>
                                        </div>
                                        <div className="arrow-circle">
                                            <svg className='circle-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           <Footer/>
        
        </>
    )
}

export default BlogPage;