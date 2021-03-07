import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "lib/theme";

import "styles/globals.css";
import "styles/react-slick.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
