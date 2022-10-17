import { FaArrowAltCircleRight, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footer-ribbon.png";

export default function AuthFooter() {
    return (
        <div className="layout_footer">
            <div className="row m0">
                <div className="col-md-12 col-lg-4">
                    <img src={footerLogo} alt="" />
                    <p>
                        Are you looking for a stable, reliable, guaranteed
                        weekly income? METATRADE offers a range of options to
                        make the most off your investment. Get involved to
                        discover the power of trading.
                    </p>
                </div>
                <div className="col-md-12 col-lg-4">
                    <h4>Quick Links</h4>
                    <Link to="/login">
                        <FaArrowAltCircleRight />
                        LOGIN
                    </Link>
                    <br />
                    <Link to="/registry">
                        <FaArrowAltCircleRight />
                        REGISTRY
                    </Link>
                </div>
                <div className="col-md-12 col-lg-4">
                    <h4>Contact Information</h4>
                    <p>
                        <FaEnvelope />
                        support@notchchain.com
                    </p>
                    <p>
                        <FaWhatsapp />
                        +1 (276) 254-5486
                    </p>
                </div>
            </div>
        </div>
    );
}
