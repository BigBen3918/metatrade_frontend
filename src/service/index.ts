import axios from "axios";

// Auth Manage
const Admin_create = async (data: RegistryObject) => {
    const request = axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/registry",
        data
    );

    return request;
};
const Admin_login = async (data: LoginObject) => {
    const request: any = await axios.post(
        process.env.REACT_APP_BACKENDURL + "/api/admin-login",
        data
    );

    return request;
};

// Export Functions
const Action = {
    Admin_create,
    Admin_login,
};

export default Action;
