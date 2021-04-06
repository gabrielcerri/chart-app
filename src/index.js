import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import { App } from "./components/index";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
