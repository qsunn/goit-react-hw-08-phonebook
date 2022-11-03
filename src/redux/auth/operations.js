import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const resetAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthHeader(data.token)
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkApi) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthHeader(data.token)
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            resetAuthHeader();
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const persistedToken = thunkApi.getState().auth.token;
        if (!persistedToken) return thunkApi.rejectWithValue('Unable to refresh user')
        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get('/users/current', persistedToken);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)