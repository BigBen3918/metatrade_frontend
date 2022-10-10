import { Carousel } from "react-responsive-carousel";
import Layout from "./components";
import slide1 from "../../assets/images/slider1.jpg";
import slide2 from "../../assets/images/slider2.jpg";
import slide3 from "../../assets/images/slider3.jpg";

import "./index.scss";

export default function Home() {
    return (
        <Layout>
            <div className="home">
                <div className="slide">
                    <Carousel
                        autoPlay
                        emulateTouch
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        showIndicators={false}
                    >
                        <div>
                            <img src={slide1} alt="" />
                            <div className="slide_content">
                                <h2>RELIABLE, SIMPLE AND INNOVATIVE</h2>
                                <button>Create a Trading Account</button>
                            </div>
                        </div>
                        <div>
                            <img src={slide2} alt="" />
                            <div className="slide_content">
                                <h2>
                                    NOTCHCHAIN
                                    <br />
                                    WE RISE BY RISING OTHERS UNDER THE IQ OPTION
                                    AND FXTM
                                </h2>
                                <button>Create a Trading Account</button>
                            </div>
                        </div>
                        <div>
                            <img src={slide3} alt="" />
                            <div className="slide_content">
                                <h2>
                                    JOIN THOUSANDS WHO HAVE ALREDY
                                    <br /> TRADED WITH NOTCHCHAIN
                                </h2>
                                <button>Create a Trading Account</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="spacer-50"></div>
                <div className="container trading">
                    <h2 className="m0">Our Trading Services</h2>
                    <p>
                        We are Professional Traders & Portfolio Managers who
                        return profit to investors, guaranteed and Regulated by
                        the Securities and Exchange Commission. We offer optimum
                        trading service that is capable of delivering profit of
                        up to 18% of invested funds every week. We Trade on a
                        Wide Range of Assets, Cryptos, Fx Options & Commodities.
                    </p>
                    <div className="spacer-50"></div>
                    <div className="row w100">
                        <div className="col-sm-12 col-md-4 p3">
                            <div className="trading_item">
                                <img
                                    src={require("../../assets/images/trusted-icon.png")}
                                    alt=""
                                />
                                <h4>Trusted Company</h4>
                                <p>
                                    Trusted by thousand of people all over the
                                    world. Good reviews on all social channels
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 p3">
                            <div className="trading_item">
                                <img
                                    src={require("../../assets/images/secured-icon.png")}
                                    alt=""
                                />
                                <h4>Secured</h4>
                                <p>
                                    Secured blockchain transactions, Secured
                                    investors data and personal information. Top
                                    level ssl certification.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 p3">
                            <div className="trading_item">
                                <img
                                    src={require("../../assets/images/privacy-icon.png")}
                                    alt=""
                                />
                                <h4>Privacy</h4>
                                <p>
                                    All private information remains private.
                                    NOTCHCHAIN never shares Private information
                                    to any third party
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
