import loading from "../assets/images/preloader.gif";

export default function Fallback() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img src={loading} alt="" style={{ width: "150px" }} />
        </div>
    );
}
