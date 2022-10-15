import { lazy } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

/** Begin CSS Style */
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "./assets/styles/index.scss";
/** End CSS Style */

// Lazy Pages
const Home = lazy(() => import("./views/auth"));
const Login = lazy(() => import("./views/auth/login"));
const Registry = lazy(() => import("./views/auth/registry"));

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registry" element={<Registry />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

// Private Route
const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    // const location = useLocation();
    // return <Navigate to="/login" replace state={{ from: location }} />;

    return <RouteComponent />;
};
