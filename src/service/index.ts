import axios from "axios";

// Auth Manage
const Admin_create = async (data: RegistryObject) => {
    const request: any = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/registry",
        data
    );

    return request.data;
};

const Admin_login = async (data: LoginObject) => {
    const request: any = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/login",
        data
    );

    axios.defaults.headers.common["Authorization"] = request?.data?.token;
    return request.data;
};

// Export Functions
const Action = {
    Admin_create,
    Admin_login,
};

export default Action;
