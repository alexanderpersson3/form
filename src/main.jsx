import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <div className="App">
        <App />
      </div>
    </ChakraProvider>
  </StrictMode>
);
