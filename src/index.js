import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
//dev-zgc9kzju.us.auth0.com
//TZGFuBVB5MFZn9tICzacV2zsGFrudztz

ReactDOM.render(
  <Auth0Provider
    //domain={process.env.REACT_APP_AUTH_DOMAIN}
    domain="dev-zgc9kzju.us.auth0.com"
    //clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    clientId="TZGFuBVB5MFZn9tICzacV2zsGFrudztz"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
