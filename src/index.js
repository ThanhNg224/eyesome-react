import React from "react";
import { createRoot } from "react-dom/client"; // 👈 dùng createRoot thay vì ReactDOM.render
import { HashRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";
import { makeServer } from "./server";
import {
  AuthContextProvider,
  CartContextProvider,
  ProductsContextProvider,
  WishlistContextProvider,
} from "./contexts";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Router>
              <App />
            </Router>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
