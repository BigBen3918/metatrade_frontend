import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/auth";
import Action from "../../service";
import { Toast } from "../../utils";

export default function Registry() {
    const navigate = useNavigate();
    const [fullname, setFullname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [gender, setGender] = React.useState(1);
    const [option, setOption] = React.useState(1);

    const submit = async () => {
        if (fullname.trim() === "") {
            Toast("Please enter fullname", "warn");
            return;
        }
        if (username.trim() === "") {
            Toast("Please enter username", "warn");
            return;
        }
        if (password.trim() === "") {
            Toast("Please enter password", "warn");
            return;
        }
        if (password !== confirmPassword) {
            Toast("Please check confirm password", "warn");
            return;
        }
        if (email.trim() === "") {
            Toast("Please check email", "warn");
            return;
        }
        if (phone.trim() === "") {
            Toast("Please check phone number", "warn");
            return;
        }

        try {
            const result: any = await Action.Admin_create({
                fullname: fullname,
                username: username,
                email: email,
                password: password,
                gender: gender,
                option: option,
                phonenumber: phone,
            });

            if (result.success) {
                Toast("Successfully Registry", "success");
                navigate("/login");
            }
        } catch (err: any) {
            switch (err.response.status) {
                case 400:
                case 409:
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
            <div className="registry">
                <div className="container">
                    <div>
                        <h4>MetaTrade</h4>
                        <div>
                            <input
                                type="text"
                                placeholder="Fullname"
                                value={fullname}
                                onChange={(e: any) =>
                                    setFullname(e.target.value)
                                }
                            />
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
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e: any) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e: any) => setPhone(e.target.value)}
                            />
                            <select
                                onChange={(e: any) => setGender(e.target.value)}
                                defaultValue={gender}
                            >
                                <option value={1}>Male</option>
                                <option value={0}>Female</option>
                            </select>
                            <select
                                onChange={(e: any) => setOption(e.target.value)}
                                defaultValue={option}
                            >
                                <option value={1}>Binary Option</option>
                                <option value={2}>Bitcoin Mining</option>
                                <option value={3}>Forex Trading</option>
                            </select>
                            <button onClick={submit}>Sign Up</button>
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
