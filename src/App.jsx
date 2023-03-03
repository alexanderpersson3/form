import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Nummer } from "./Steps/Nummer";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  return (
    <ChakraProvider>
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/nummer" element={<Nummer />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </ChakraProvider>
  );
};
