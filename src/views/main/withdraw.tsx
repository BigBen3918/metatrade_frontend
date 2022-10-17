import React from "react";
import Layout from "../../components/main";

export default function Withdraw() {
    const [address, setAddress] = React.useState("");
    const [amount, setAmount] = React.useState(0);

    const makeWithdraw = () => {};

    return (
        <Layout>
            <div className="withdraw">
                <h3>Make A Withdrawal Request</h3>
                <p>
                    METATRADE recommend the use of bitcoin, it's safe and fast
                </p>
                <div className="spacer-30"></div>
                <p>Your Account Balance Is: $0</p>
                <input
                    type={"text"}
                    placeholder="BTC address"
                    value={address}
                    onChange={(e: any) => setAddress(e.target.value)}
                />
                <div className="spacer-10"></div>
                <input
                    type={"number"}
                    placeholder="amount"
                    value={amount}
                    onChange={(e: any) => setAmount(e.target.value)}
                />
                <div className="spacer-30"></div>
                <button onClick={makeWithdraw}>Make Withdraw</button>
            </div>
        </Layout>
    );
}
