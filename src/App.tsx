import React, { lazy, Suspense, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";

/** Begin CSS Style */
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "./assets/styles/index.scss";
/** End CSS Style */

// Lazy Pages
import Loading from "./components/fallback";
const Home = lazy(() => import("./views/auth"));
const Login = lazy(() => import("./views/auth/login"));
const Registry = lazy(() => import("./views/auth/registry"));
const Message = lazy(() => import("./utils/meessage"));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registry" element={<Registry />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
            <ToastContainer />
            <Message />
        </Router>
    );
}

// Private Route
const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    // const location = useLocation();
    // return <Navigate to="/login" replace state={{ from: location }} />;

    return <RouteComponent />;
};
