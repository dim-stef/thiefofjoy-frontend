import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { PostLogin } from "../interface";
import { AxiosResponse } from "axios";
import axios from "axios";

export const login = createAsyncThunk(
  "authentication/login",
  async (data: PostLogin, thunkApi) => {
    let response: AxiosResponse;
    const { email, password } = data;
    try {
      let formdata = new FormData();
      formdata.append("username", email);
      formdata.append("password", password);
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/token/`,
        formdata
      );
      axios.interceptors.request.use(
        function (config) {
          // Do something before request is sent
          if (config.headers && response.data.access) {
            config.headers.authorization = `Bearer ${response.data.access}`;
          }
          return config;
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        }
      );
    } catch (e) {
      console.error(e);
      return null;
    }

    if (response.data.access) {
      localStorage.setItem("token", response.data.access);
    }
    return response.data.access;
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    token: null,
    loading: false,
  },
  reducers: {
    setupTokenInterceptor() {
      const token = localStorage.getItem("token");
      axios.interceptors.request.use(
        function (config) {
          // Do something before request is sent
          if (config.headers && token) {
            config.headers.authorization = `Bearer ${token}`;
          }
          return config;
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.loading = false;
    });
    builder.addCase(login.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { setupTokenInterceptor } = authenticationSlice.actions;
