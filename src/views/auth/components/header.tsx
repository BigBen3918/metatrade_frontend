import { Link } from "react-router-dom";

export default function AuthHeader() {
    return (
        <div className="layout_header">
            <Link to="/">NOTCHCHAIN</Link>

            <div>
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/registry">REGISTRY</Link>
            </div>
        </div>
    );
}
