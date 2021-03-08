import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";

import theme from "lib/theme";
import store from "redux/store";

import "styles/globals.css";
import "styles/react-slick.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
