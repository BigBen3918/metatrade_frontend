import React from "react";
import QRCode from "react-qr-code";
import Layout from "../../components/main";
import { copyToClipboard } from "../../utils";

export default function Deposit() {
    const [flag, setFlag] = React.useState(0);
    const [copyFlag, setCopyFlag] = React.useState(false);

    const PaymentMethod = [
        { name: "Bitcoin", address: String(process.env.REACT_APP_BTCADDRESS) },
        { name: "Ether", address: String(process.env.REACT_APP_ETHADDRESS) },
        { name: "USDT", address: String(process.env.REACT_APP_USDTADDRESS) },
    ];

    const copyAddress = () => {
        copyToClipboard(PaymentMethod[flag].address)
            .then(() => {
                setCopyFlag(true);
                setTimeout(() => {
                    setCopyFlag(false);
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
                <div className="payment_method">
                    {PaymentMethod.map((title: any, index: number) => (
                        <div
                            onClick={() => setFlag(index)}
                            className={flag === index ? "active" : undefined}
                            key={index}
                        >
                            {title.name}
                        </div>
                    ))}
                </div>
                <div className="spacer-50"></div>
                <div className="payment_code">
                    <QRCode
                        size={256}
                        className="qrcode"
                        value={PaymentMethod[flag].address}
                        viewBox={`0 0 256 256`}
                    />
                    <span onClick={copyAddress}>
                        {PaymentMethod[flag].address}
                    </span>
                </div>
                <div className="spacer-20"></div>
                <h6 style={{ color: "var(--secondary)" }}>
                    {copyFlag ? "Copied address!!!" : ""}
                </h6>
                <div className="spacer-20"></div>
                <p>
                    Your trading account will be credited once your payment is
                    fully confirmed.
                </p>
                <h5>Incase of any issue contact support</h5>
            </div>
        </Layout>
    );
}
