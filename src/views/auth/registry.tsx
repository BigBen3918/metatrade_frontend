import { Link } from "react-router-dom";
import Layout from "../../components/auth";

export default function Registry() {
    return (
        <Layout>
            <div className="registry">
                <div className="container">
                    <div>
                        <h4>MetaTrade</h4>
                        <div>
                            <input type="text" placeholder="Fullname" />
                            <input type="password" placeholder="Username" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <input type="email" placeholder="Email" />
                            <input type="string" placeholder="Phone Number" />
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <select>
                                <option>Binary Option</option>
                                <option>Bitcoin Mining</option>
                                <option>Forex Trading</option>
                            </select>
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <p>Already have an acount?</p>
                        <Link to={"/login"}>Sign In</Link>
                    </div>
                </div>
            </div>
            <div className="container p2">
                <div className="row m0">
                    <div className="col-sm-12 col-md-6">
                        <h4>After registering you will receive:</h4>
                        <p>
                            Access to the best platform for trading CFDs, Forex
                            and Options
                        </p>
                        <p>Personal manager</p>
                        <p>Weekly webinars from professional brokers</p>
                        <p>Access to educational Videos</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h4>We Provide:</h4>
                        <p>
                            The most advanced trading platform for trading CFD,s
                            Forex and Options
                        </p>
                        <p>A wide range of trading tools</p>
                        <p>5 account types to suit every type of trader</p>
                        <p>Daily markets analysis</p>
                        <p>Over 90 assets</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
