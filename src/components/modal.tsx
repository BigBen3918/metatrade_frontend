import tradeImage from "../assets/images/modal1.jpg";

export default function Modal(props: any) {
    const { closeModal } = props;

    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="content">
                <header>
                    <h4>MetaTrade</h4>
                    <button onClick={closeModal} className="close-button">
                        &times;
                    </button>
                </header>

                <main className="modal__main">
                    <img src={tradeImage} alt="" />
                    <p>
                        METATRADE is a group of Bitcoin Miners, traders, analyst
                        and brokers, with valuable experience in the sphere of
                        forex and crypto dedicated their time to research
                        development. Anyone all over the world can become an
                        investor. We provide investment vehicles to investors of
                        all sizes interested in being part of the revolutionary
                        forex,binary option, crypto and bitcoin mining world. We
                        have studied the bitcoin marketplace very closely, as
                        well as other digital currencies, and we have built bots
                        with AI (artificial intelligence). We have created a
                        database with all the trading volume available on
                        digital currencies and which is updated daily, allowing
                        the software to spot different patterns in price
                        movement. It uses different strategies, and they are
                        capable of adapting to any online trading platform. Join
                        millions who have already discovered smarter strategies
                        for investing. Join experienced traders and earn greatly
                    </p>
                </main>
            </div>
        </div>
    );
}
