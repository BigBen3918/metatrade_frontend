import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

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
const Dashboard = lazy(() => import("./views/main/dashboard"));
const Deposit = lazy(() => import("./views/main/deposit"));
const Withdraw = lazy(() => import("./views/main/withdraw"));

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<NonRoute component={Home} />}
                        />
                        <Route
                            path="/login"
                            element={<NonRoute component={Login} />}
                        />
                        <Route
                            path="/registry"
                            element={<NonRoute component={Registry} />}
                        />
                        <Route
                            path="/dashboard"
                            element={<PrivateRoute component={Dashboard} />}
                        />
                        <Route
                            path="/deposit"
                            element={<PrivateRoute component={Deposit} />}
                        />
                        <Route
                            path="/withdraw"
                            element={<PrivateRoute component={Withdraw} />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
                <ToastContainer />
            </Router>
        </Provider>
    );
}

// Private Route
const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const location = useLocation();
    const auth = useSelector((state: any) => state.auth) as AuthState;

    if (!auth.isAuth) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <RouteComponent />;
};

const NonRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const auth = useSelector((state: any) => state.auth) as AuthState;

    if (auth.isAuth) {
        return <Navigate to="/dashboard" />;
    }

    return <RouteComponent />;
};
