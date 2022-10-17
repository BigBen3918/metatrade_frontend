import React from "react";
import { FaCheck, FaArrowRight, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import MultiCarousel from "../../components/multicarousel";
import Layout from "../../components/auth";
import slide1 from "../../assets/images/slider1.jpg";
import slide2 from "../../assets/images/slider2.jpg";
import slide3 from "../../assets/images/slider3.jpg";
import { card_mock, testi_mock } from "./mock";
import pay1 from "../../assets/images/ethereum.png";
import pay2 from "../../assets/images/bitcoin.png";
import pay3 from "../../assets/images/litecoin.png";
import pay4 from "../../assets/images/perfect-money.png";
import introduce from "../../assets/video/video.mp4";
import Modal from "../../components/modal";

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

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
                                <button onClick={() => navigate("/registry")}>
                                    Create a Trading Account
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={slide2} alt="" />
                            <div className="slide_content">
                                <h2>
                                    METATRADE
                                    <br />
                                    WE RISE BY RISING OTHERS UNDER THE IQ OPTION
                                    AND FXTM
                                </h2>
                                <button onClick={() => navigate("/registry")}>
                                    Create a Trading Account
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={slide3} alt="" />
                            <div className="slide_content">
                                <h2>
                                    JOIN THOUSANDS WHO HAVE ALREDY
                                    <br /> TRADED WITH METATRADE
                                </h2>
                                <button onClick={() => navigate("/registry")}>
                                    Create a Trading Account
                                </button>
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
                                    <FaCheck /> Trusted by thousand of people
                                    all over the world. Good reviews on all
                                    social channels
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
                                    <FaCheck /> Secured blockchain transactions,
                                    Secured investors data and personal
                                    information. Top level ssl certification.
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
                                    <FaCheck /> All private information remains
                                    private. METATRADE never shares Private
                                    information to any third party
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-50"></div>

                <div className="about">
                    <div className="container">
                        <div className="spacer-20"></div>
                        <h2 className="m0">About Us</h2>
                        <div className="row w100">
                            <div className="col-sm-12 col-md-6 p2">
                                <div className="about_item">
                                    <p>
                                        METATRADE is a group of investors,
                                        traders, analyst and brokers, with
                                        valuable experience in the sphere of
                                        forex and METATRADE dedicated their time
                                        to research development. Anyone all over
                                        the world can become an investor. We
                                        provide investment vehicles to investors
                                        of all sizes interested in being part of
                                        the revolutionary forex,binary option,
                                        crypto-currency and bitcoin mining
                                        world.
                                    </p>
                                    <div className="spacer-10"></div>
                                    <div>
                                        <button onClick={() => setOpen(!open)}>
                                            Read More <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 p2">
                                <div className="about_video">
                                    <img
                                        src={require("../../assets/images/desktop.png")}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="spacer-30"></div>
                    </div>
                </div>

                <div className="size">
                    <div className="spacer-20"></div>
                    <div className="row w100">
                        {card_mock.map((item: CardObject, index: number) => (
                            <div
                                className="col-sm-12 col-md-6 col-lg-3 p2"
                                key={index}
                            >
                                <Card
                                    title={item.title}
                                    cost={item.cost}
                                    bonus={item.bonus}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="spacer-30"></div>
                </div>

                <div className="payment">
                    <div className="container">
                        <div className="spacer-50"></div>
                        <h3>Payment Method</h3>
                        <p>Payment methods for Deposit and Withdrawal</p>
                        <div className="spacer-20"></div>
                        <div className="row m0">
                            <div className="col-6 col-md-3 p1">
                                <img src={pay1} alt="" />
                            </div>
                            <div className="col-6 col-md-3 p1">
                                <img src={pay2} alt="" />
                            </div>
                            <div className="col-6 col-md-3 p1">
                                <img src={pay3} alt="" />
                            </div>
                            <div className="col-6 col-md-3 p1">
                                <img src={pay4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonies">
                    <h3>TESTIMONIES</h3>
                    <p>
                        <i>
                            Happy investors{" "}
                            <b style={{ color: "gold" }}>sharing</b> their
                            testimonies
                        </i>
                    </p>
                    <div className="spacer-30"></div>
                    <div className="test_slide">
                        <MultiCarousel>
                            {testi_mock.map(
                                (item: TestiObject, index: number) => (
                                    <Testi
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        content={item.content}
                                    />
                                )
                            )}
                        </MultiCarousel>
                    </div>
                    <div className="spacer-50"></div>
                    <h3>TESTIMONIES(VIDEOS)</h3>
                    <div className="test_video">
                        <video controls src={introduce} datatype="video/mp4" />
                    </div>
                    <div className="spacer-50"></div>
                </div>
            </div>

            {open ? <Modal closeModal={() => setOpen(false)} /> : null}
        </Layout>
    );
}

const Card = (props: CardObject) => {
    const { title, cost, bonus } = props;
    const navigate = useNavigate();

    return (
        <div className="card">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <span className="spacer-10"></span>
                <p>${cost}</p>
                <p>
                    <b>TRADING</b>
                </p>
                <p>
                    <span style={{ color: "var(--secondary)" }}>BOUNS</span>{" "}
                    {bonus}%
                </p>
                <span className="spacer-10"></span>
            </div>
            <div>
                <button onClick={() => navigate("/registry")}>
                    <b>Sign Up</b>
                    <FaUser />
                </button>
            </div>
        </div>
    );
};

const Testi = (props: TestiObject) => {
    const { image, name, content } = props;

    return (
        <div className="slide_card">
            <img src={image} alt="" />
            <p>{content}</p>
            <h5>{name}</h5>
        </div>
    );
};
