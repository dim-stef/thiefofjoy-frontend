import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { LightMode } from "@chakra-ui/color-mode";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/store";
import { setupTokenInterceptor } from "../src/features/Authentication/slices/authenticationSlice";
import { store } from "../src/store";

const queryClient = new QueryClient();

type Props = {
  children: JSX.Element;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider>
          <LightMode>
            <AppWrapper>
              <Component {...pageProps} />
            </AppWrapper>
          </LightMode>
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  );
}

function AppWrapper({ children }: Props) {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.authentiction);

  useEffect(()=>{
    dispatch(setupTokenInterceptor());
  }, [token, dispatch])

  return <>{children}</>;
}

export default MyApp;
