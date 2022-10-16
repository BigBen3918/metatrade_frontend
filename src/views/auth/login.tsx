import { Link } from "react-router-dom";
import Layout from "../../components/auth";

export default function Login() {
    return (
        <Layout>
            <div className="login">
                <div className="container">
                    <div>
                        <h4>MetaTrade</h4>
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <button>Login</button>
                        </div>
                    </div>
                    <div>
                        <p>Create an account?</p>
                        <Link to={"/registry"}>Registry</Link>
                    </div>
                </div>
            </div>
            <div className="container p2 text-center">
                <div className="row m0">
                    <div className="col-sm-6 col-md-3">
                        <p>24/7 Customer Support</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <p>support@notchchain.com</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <p>Friendly Support Ticket</p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <p>+1 (276) 254-5486</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
