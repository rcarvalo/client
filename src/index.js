import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { AuthContextProvider } from "./context/AuthContext1";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AuthContextProvider>
      <Application />
    </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)