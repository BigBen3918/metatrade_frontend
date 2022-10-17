import React from "react";
import Layout from "../../components/main";
import { copyToClipboard } from "../../utils";

export default function Deposit() {
    const [copy, setCopy] = React.useState(false);

    const copyAddress = () => {
        copyToClipboard(String(process.env.REACT_APP_COMADDRESS))
            .then(() => {
                setCopy(true);
                setTimeout(() => {
                    setCopy(false);
                }, 3000);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <Layout>
            <div className="deposit">
                <h3>Deposit</h3>
                <p>
                    Scan the QR code or copy the address below into your wallet
                    to send Bitcoin.
                </p>
                <div className="spacer-30"></div>
                <span onClick={copyAddress}>
                    {process.env.REACT_APP_COMADDRESS}
                </span>
                <p style={{ color: "var(--secondary)" }}>
                    {copy ? "Copied address" : null}
                </p>
                <div className="spacer-30"></div>
                <p>
                    Your trading account will be credited once your payment is
                    fully confirmed.
                </p>
                <h5>Incase of any issue contact support</h5>
            </div>
        </Layout>
    );
}
