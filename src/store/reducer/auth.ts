import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    name: string;
    email: string;
    gender: number;
    option: number;
}

const initialState: AuthState = {
    isAuth: false,
    name: "",
    email: "",
    gender: 1,
    option: 1,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateAuth: (state, action: PayloadAction<AuthState>) => {
            state.isAuth = action.payload.isAuth;
            state.name = action.payload.name;
        },
        resetAuth: (state) => {
            state.isAuth = false;
            state.name = "";
            state.email = "";
            state.gender = 1;
            state.option = 1;
        },
    },
});

export const { updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
