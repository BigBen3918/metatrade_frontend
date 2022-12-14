import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import decode from "jwt-decode";

const initialState: AuthState = {
    isAuth: false,
    fullname: "",
    username: "",
    email: "",
    gender: 1,
    option: 1,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateAuth: (state, action: PayloadAction<string>) => {
            const data: any = decode(action.payload);
            state.isAuth = true;
            state.email = data.email;
            state.username = data.username;
            state.fullname = data.fullname;
            state.gender = data.gender;
            state.option = data.option;

            localStorage.setItem("metatrade_session", action.payload);
        },
        resetAuth: (state) => {
            state.isAuth = false;
            state.username = "";
            state.email = "";
            state.fullname = "";
            state.gender = 1;
            state.option = 1;
            localStorage.removeItem("metatrade_session");
        },
    },
});

export const { updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
