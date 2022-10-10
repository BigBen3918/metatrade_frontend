import { toast } from "react-toastify";

export const Toast = (message: string, status: string) => {
    switch (status) {
        case "success":
            return toast.success(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "error":
            return toast.error(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "warn":
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        default:
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
    }
};
