import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Provider from "./context/context";
import { ChakraProvider } from "@chakra-ui/react";
//import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <BrowserRouter>
      <Provider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
