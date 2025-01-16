import { useState } from "react";
import "../Stylesheets/LoginPage.css"
import signupphone from "../assets/signupimg.png"
import btcimg from "../assets/signupbtc.png"
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleAuthPayload } from "../context/GlobalContext";

interface CredentialResponse {
    credential: string;
    clientId: string;
    select_by: 'btn' | 'auto' | 'user';
}




const LoginPage =()=>{
    // const { googleCred, setgoogleCred } = useOAuthContext();
    const navigate = useNavigate();
    const [googleCred, setgoogleCred] = useState('');


    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const SubmitLogin = async (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        // const SendLogin = {Email, Password}
        // const response = await axios.post('', SendLogin)
    }

    const [PassVisibilty, SetPassVisibility] = useState('see')
    const EyeToggle =()=>{
        PassVisibilty === 'hide' ? SetPassVisibility('see') : SetPassVisibility('hide')
        console.log(Email);
        
    }

    const onSuccess = (resp:any)=>{
        const googleRes = jwtDecode(resp.credential) as GoogleAuthPayload;
        console.log(googleRes.name);
        setgoogleCred(googleRes.name);
    };

    return(
        <>
        
            <div className="signup-page-wrap">
                <div className="image-section">
                    <div className="img-section-overlay">
                        <h2>The easiest way to <span id='buynsell'>buy</span> and <span id='buynsell'>sell</span> Crypto</h2>
                        <img id='sign-phone-img' src={signupphone} alt="" />
                    </div>
                </div>

                <div className="form-section">
                    <div className="signup-form-wrap">
                        <div className="bitmama-svg">
                            <svg width="50px"  viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M42.7678 37.5891C43.5883 34.0708 43.3216 30.7441 41.4242 27.6229C39.614 24.5883 36.6677 22.247 33.1219 21.0256C33.3065 20.8153 33.4245 20.6611 33.5681 20.5256C34.6509 19.5144 35.4481 18.2787 35.8912 16.9248C36.3343 15.571 36.41 14.1393 36.112 12.7529C35.8139 11.3664 35.1509 10.0666 34.1799 8.96512C33.2089 7.86363 31.9589 6.99337 30.5374 6.42909C29.2427 5.90789 27.8497 5.61915 26.435 5.57872C22.2402 5.47126 18.0352 5.53667 13.8302 5.54134C12.5841 5.54134 11.9482 6.11604 11.9482 7.23741C11.9482 12.2976 11.9482 17.3578 11.9482 22.4179C11.9482 23.1702 12.22 23.3851 13.0148 23.3758C17.866 23.3337 22.712 23.2963 27.5631 23.3103C29.4563 23.2785 31.3309 23.6556 33.0333 24.4109C34.7358 25.1662 36.2177 26.2781 37.3577 27.6556C41.5371 32.4401 40.1217 39.9393 34.286 42.9857C32.6553 43.8407 30.6451 44.2472 28.7477 44.5276C23.3424 45.3614 17.7862 44.5272 12.9603 42.1572C8.13432 39.7873 4.31484 36.0173 2.10749 31.4449C-4.61538 17.7783 5.53303 1.66328 21.8659 0.130746C35.1988 -1.12145 46.8036 6.67206 49.0445 18.6567C50.347 25.5764 48.383 31.8094 43.3473 37.1873C43.2493 37.2952 43.143 37.3967 43.0293 37.491C42.9467 37.533 42.8589 37.5659 42.7678 37.5891Z" fill="currentColor"></path><path d="M15.4862 14.3862C15.4862 12.7602 15.4862 11.1156 15.4862 9.49893C15.4862 8.93357 15.6554 8.69996 16.322 8.70463C19.7476 8.73266 23.1731 8.68127 26.5781 8.73266C28.152 8.76759 29.655 9.33624 30.7931 10.3274C31.9311 11.3185 32.6225 12.6609 32.7318 14.0919C32.7893 15.6115 32.1904 17.091 31.0638 18.2128C29.9372 19.3345 28.3727 20.0089 26.7063 20.0912C23.2244 20.1753 19.7322 20.0912 16.2451 20.1239C15.6041 20.1239 15.4759 19.8763 15.481 19.3623C15.5016 17.7036 15.4862 16.0449 15.4862 14.3862Z" fill="currentColor"></path></svg>
                            <svg width="100"  viewBox="0 0 97 19" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.0259871 17.9014H7.6894C10.8321 17.9014 13.1287 15.7499 13.1287 12.8489C13.1287 10.2622 11.3156 9.24684 9.86514 9.05345C11.1222 8.59412 12.3793 7.48208 12.3793 5.40305C12.3793 2.88887 10.542 0.979057 7.37513 0.979057H0.0259871V17.9014ZM6.28726 3.92839C8.00368 3.92839 8.6564 4.46023 8.6564 5.8382C8.6564 7.36121 7.83445 7.84471 6.09387 7.84471H3.55551V3.92839H6.28726ZM3.55551 10.7457H6.40814C8.3663 10.7457 9.40582 11.205 9.40582 12.8247C9.40582 14.2027 8.7531 14.9521 6.45649 14.9521H3.55551V10.7457ZM15.3353 2.69547C15.3353 3.83169 16.0847 4.70198 17.4143 4.70198C18.7439 4.70198 19.4933 3.83169 19.4933 2.69547C19.4933 1.46255 18.6472 0.64061 17.4143 0.64061C16.1814 0.64061 15.3353 1.46255 15.3353 2.69547ZM15.6737 17.9014H19.1549V6.39422H15.6737V17.9014ZM28.6909 15.0005C28.3041 15.1938 27.9898 15.4114 27.4338 15.4114C26.8536 15.4114 26.4426 15.1938 26.4426 14.0335V8.93257H28.9326V6.39422H26.4426V1.53508L22.9615 3.10644V6.39422H21.0517V8.93257H22.9615V14.4928C22.9615 17.2729 24.6779 18.2399 26.9261 18.2399C27.869 18.2399 28.8359 18.0465 29.537 17.7322L28.6909 15.0005ZM31.5384 17.9014H35.0196V11.9786C35.0196 9.85121 36.0108 8.9084 37.0745 8.9084C37.9448 8.9084 38.6942 9.44024 38.6942 11.0116V17.9014H42.1753V11.9786C42.1753 9.82704 43.1665 8.9084 44.2544 8.9084C45.1247 8.9084 45.8499 9.44024 45.8499 10.9874V17.9014H49.3311V9.94791C49.3311 7.36121 47.5905 6.05577 45.4873 6.05577C43.7467 6.05577 42.4896 7.07111 41.8127 8.06228C41.16 6.78101 39.9271 6.05577 38.3074 6.05577C36.5668 6.05577 35.4547 6.99859 34.8987 8.1348V6.39422H31.5384V17.9014ZM62.5149 17.9014C62.3456 17.5146 62.2489 16.9586 62.2489 16.2817V10.4072C62.2489 7.31286 60.0974 6.05577 57.2931 6.05577C54.5613 6.05577 52.3614 7.28868 52.0955 9.51277L55.4075 10.0204C55.4075 9.31937 55.9635 8.6183 57.1964 8.6183C58.3326 8.6183 58.8403 9.24684 58.8403 10.1171V10.8666C55.0448 10.8666 51.5637 11.8094 51.5637 14.9038C51.5637 17.007 53.0383 18.2399 55.5283 18.2399C57.2689 18.2399 58.2601 17.5388 58.937 16.4509C58.937 17.1037 59.0337 17.7322 59.1546 17.9014H62.5149ZM56.447 15.7499C55.6009 15.7499 54.9481 15.4114 54.9481 14.7104C54.9481 13.3324 56.4953 12.9698 58.8403 12.9698V13.8401C58.8403 15.0488 57.6557 15.7499 56.447 15.7499ZM65.1565 17.9014H68.6377V11.9786C68.6377 9.85121 69.6289 8.9084 70.6926 8.9084C71.5629 8.9084 72.3123 9.44024 72.3123 11.0116V17.9014H75.7934V11.9786C75.7934 9.82704 76.7846 8.9084 77.8725 8.9084C78.7428 8.9084 79.468 9.44024 79.468 10.9874V17.9014H82.9492V9.94791C82.9492 7.36121 81.2086 6.05577 79.1054 6.05577C77.3648 6.05577 76.1077 7.07111 75.4308 8.06228C74.7781 6.78101 73.5452 6.05577 71.9255 6.05577C70.1849 6.05577 69.0728 6.99859 68.5168 8.1348V6.39422H65.1565V17.9014ZM96.133 17.9014C95.9637 17.5146 95.867 16.9586 95.867 16.2817V10.4072C95.867 7.31286 93.7155 6.05577 90.9112 6.05577C88.1795 6.05577 85.9795 7.28868 85.7136 9.51277L89.0256 10.0204C89.0256 9.31937 89.5816 8.6183 90.8145 8.6183C91.9507 8.6183 92.4584 9.24684 92.4584 10.1171V10.8666C88.6629 10.8666 85.1818 11.8094 85.1818 14.9038C85.1818 17.007 86.6564 18.2399 89.1464 18.2399C90.887 18.2399 91.8782 17.5388 92.5551 16.4509C92.5551 17.1037 92.6518 17.7322 92.7727 17.9014H96.133ZM90.0651 15.7499C89.219 15.7499 88.5662 15.4114 88.5662 14.7104C88.5662 13.3324 90.1134 12.9698 92.4584 12.9698V13.8401C92.4584 15.0488 91.2738 15.7499 90.0651 15.7499Z" fill="currentColor"></path></svg>
                        </div>

                        <div className="signup-header">
                            <h2>Hello! {googleCred} We’re glad to have you back</h2>
                            <img id='header-btc' src={btcimg} alt="" />
                        </div>

                        <p>Log In to pick up from where you stopped.</p>

                        <form id='login-form'>
                            <div className="input-wrap">
                                <label htmlFor="email-input">Email Address</label>
                                <input id='email-input' type="email" placeholder="Enter Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="pass-input">Password</label>
                                
                                <input id='pass-input' type={PassVisibilty === 'hide'? 'password': 'text'} 
                                placeholder="Enter Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
                                
                                <Link to='' id='forgot-pass'><p>Forgot Password</p></Link>

                                <div className="password-visibility-icon" onClick={EyeToggle} >
                                    <svg style={{display: PassVisibilty==='hide' ? 'block' : 'none'}} viewBox="0 0 24 24" focusable="false" id="pass-hide" aria-hidden="true"><g fill="currentColor"><path d="M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"></path><path d="M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"></path></g></svg>
                                    <svg style={{display: PassVisibilty==='see' ? 'block' : 'none'}} viewBox="0 0 24 24" focusable="false" id="pass-visible" aria-hidden="true"><g fill="currentColor"><path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path><circle cx="12" cy="12" r="2"></circle></g></svg>
                                </div>
                            </div>

                            <div className="button-section">
                                <Link to='' id='login-link'>
                                    <button className="login-button" onClick={SubmitLogin} >
                                        <p>Login</p>
                                        <svg id='login-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" aria-hidden="true" focusable="false"><path d="M17 15L20 12L17 9" stroke="currentColor" strokeWidth="1.2"></path><path d="M20 12H5" stroke="currentColor" strokeWidth="1.2"></path></svg>
                                    </button>
                                </Link>

                                <div className="google-login">
                                    <p>OR</p>
                                    <GoogleLogin 
                                        onSuccess={onSuccess}
                                        onError={()=>console.log('Auth failed!')
                                        }
                                    />
                                </div>
                            </div>
                        </form>


                        <div className="bottom-section">
                            <p id='not-you'>Not you? <Link to='/signup' id='botton-signup'>Sign Up</Link> </p>
                            <p id='disclaimer'>By using Bitmama, you agree to our <Link to='' id='tos'>Terms of service</Link>, 
                            <Link to='' id='tos'> Privacy Policy</Link> and <Link to='' id="tos">Card Holder Agreement.</Link></p>
                            <p id='version'>v2.1.9</p>
                        </div>
                    </div>
                </div>

                <div className="customer-support-chat">
                    <svg  width="36px" height="36px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" ><rect  x="0" y="0" width="24" height="24" ></rect><path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="#ffffff"></path></g></svg>
                    <p>Chat With Us</p>
                </div>

                <div className="support-chat2">
                <svg width='22px' height='22px' viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path></svg>
                </div>
            </div>
        
        </>
    )
}

export default LoginPage;