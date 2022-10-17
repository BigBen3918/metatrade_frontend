import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useProSidebar } from "react-pro-sidebar";

export default function Header(props: any) {
    const [flag, setFlag] = React.useState(false);
    const { collapseSidebar, toggleSidebar } = useProSidebar();
    const auth = useSelector((state: any) => state.auth) as AuthState;

    React.useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 768 ? setFlag(true) : setFlag(false);
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <div className="main_header">
            <button
                onClick={() => (flag ? toggleSidebar() : collapseSidebar())}
            >
                <FaSlidersH />
            </button>
            <div>
                <p>
                    Welcome,{" "}
                    <b style={{ color: "var(--secondary)" }}>{auth.username}</b>
                </p>
                <p>
                    balance <b>{0}$</b>
                </p>
            </div>
        </div>
    );
}
