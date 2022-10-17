import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/auth";
import Action from "../../service";
import { updateAuth } from "../../store/reducer/auth";
import { Toast } from "../../utils";

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submit = async () => {
        if (username.trim() === "") {
            Toast("Please enter username", "warn");
            return;
        }
        if (password.trim() === "") {
            Toast("Please enter password", "warn");
            return;
        }
        try {
            const result = await Action.Admin_login({
                name: username,
                password: password,
            });

            dispatch(updateAuth(result.token));
        } catch (err: any) {
            switch (err.response.status) {
                case 400:
                case 404:
                case 500:
                    Toast(err.response.data, "error");
                    break;
                default:
                    Toast("Network Error", "error");
                    break;
            }
        }
    };

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
                                value={username}
                                onChange={(e: any) =>
                                    setUsername(e.target.value)
                                }
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e: any) =>
                                    setPassword(e.target.value)
                                }
                            />
                            <button onClick={submit}>Login</button>
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
