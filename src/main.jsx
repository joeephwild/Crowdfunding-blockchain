import react from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateProvider } from "./context";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <StateProvider>
        <App />
      </StateProvider>
    </Router>
  </ThirdwebProvider>
);
