import Layout from "../../components/main";

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard">
                <div style={{ height: "600px", width: "100%" }}>
                    <iframe
                        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8004d&symbol=BITSTAMP%3ABTCUSD&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=notchchain.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
                        title="trading_view"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </div>
                <div className="spacer-50"></div>
                <div style={{ height: "200px", width: "100%" }}>
                    <iframe
                        src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A220%2C%22dateRange%22%3A%2212m%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22%2337a6ef%22%2C%22underLineColor%22%3A%22%23e3f2fd%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22notchchain.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%7D"
                        title="trading_view"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </div>
                <div className="spacer-50"></div>
                <div style={{ height: "420px", width: "100%" }}>
                    <iframe
                        src="https://s.tradingview.com/embed-widget/market-quotes/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A450%2C%22symbolsGroups%22%3A%5B%7B%22name%22%3A%22Indices%22%2C%22originalName%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22OANDA%3ASPX500USD%22%2C%22displayName%22%3A%22S%26P%20500%22%7D%2C%7B%22name%22%3A%22OANDA%3ANAS100USD%22%2C%22displayName%22%3A%22Nasdaq%20100%22%7D%2C%7B%22name%22%3A%22FOREXCOM%3ADJI%22%2C%22displayName%22%3A%22Dow%2030%22%7D%2C%7B%22name%22%3A%22INDEX%3ANKY%22%2C%22displayName%22%3A%22Nikkei%20225%22%7D%2C%7B%22name%22%3A%22INDEX%3ADEU30%22%2C%22displayName%22%3A%22DAX%20Index%22%7D%2C%7B%22name%22%3A%22OANDA%3AUK100GBP%22%2C%22displayName%22%3A%22FTSE%20100%22%7D%5D%7D%2C%7B%22name%22%3A%22Commodities%22%2C%22originalName%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22CME_MINI%3AES1!%22%2C%22displayName%22%3A%22E-Mini%20S%26P%22%7D%2C%7B%22name%22%3A%22CME%3A6E1!%22%2C%22displayName%22%3A%22Euro%22%7D%2C%7B%22name%22%3A%22COMEX%3AGC1!%22%2C%22displayName%22%3A%22Gold%22%7D%2C%7B%22name%22%3A%22NYMEX%3ACL1!%22%2C%22displayName%22%3A%22Crude%20Oil%22%7D%2C%7B%22name%22%3A%22NYMEX%3ANG1!%22%2C%22displayName%22%3A%22Natural%20Gas%22%7D%2C%7B%22name%22%3A%22CBOT%3AZC1!%22%2C%22displayName%22%3A%22Corn%22%7D%5D%7D%2C%7B%22name%22%3A%22Bonds%22%2C%22originalName%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22CME%3AGE1!%22%2C%22displayName%22%3A%22Eurodollar%22%7D%2C%7B%22name%22%3A%22CBOT%3AZB1!%22%2C%22displayName%22%3A%22T-Bond%22%7D%2C%7B%22name%22%3A%22CBOT%3AUB1!%22%2C%22displayName%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22name%22%3A%22EUREX%3AFGBL1!%22%2C%22displayName%22%3A%22Euro%20Bund%22%7D%2C%7B%22name%22%3A%22EUREX%3AFBTP1!%22%2C%22displayName%22%3A%22Euro%20BTP%22%7D%2C%7B%22name%22%3A%22EUREX%3AFGBM1!%22%2C%22displayName%22%3A%22Euro%20BOBL%22%7D%5D%7D%2C%7B%22name%22%3A%22Forex%22%2C%22originalName%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22name%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22name%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22name%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22name%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22name%22%3A%22FX%3AUSDCAD%22%7D%5D%7D%5D%2C%22utm_source%22%3A%22notchchain.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-quotes%22%7D"
                        title="trading_view"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
}
