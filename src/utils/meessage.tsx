import React from "react";

export default function Message() {
    const [time, setTime] = React.useState(+new Date());
    const [earn, setEarn] = React.useState(0);
    const [country, setCountry] = React.useState("");
    const [flag, setFlag] = React.useState(false);

    React.useEffect(() => {
        const countriesName = [
            "Asia",
            "China",
            "France",
            "Spain",
            "Japan",
            "German",
            "Austria",
            "South Africa",
            "America",
            "Italy",
            "England",
            "Brazil",
            "Mexico",
            "Chile",
            "Cuba",
        ] as Array<string>;

        let timeHandler: any;
        timeHandler = setTimeout(() => {
            setFlag(true);
            setEarn(Math.round(Math.random() * 1e4) + 1e3);
            setCountry(
                countriesName[Math.round(Math.random() * countriesName.length)]
            );
            setTime(+new Date());
            setTimeout(() => {
                setFlag(false);
            }, 5e3);
        }, Math.round(Math.random() * 5e3) + 1e4);

        return () => timeHandler && clearTimeout(timeHandler);
    }, [time]);

    return (
        <div className={!flag ? "message" : "message message_show"}>
            <p>
                Someone from <b>{country}</b> just earned
            </p>
            <p style={{ color: "green" }}>${earn}</p>
        </div>
    );
}
