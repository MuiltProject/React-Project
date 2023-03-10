import { Cart, Details, Join, Login, Main, My, NotFound, Outfit, Product, Review } from "../pages/index";

import React from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/details"}>
        <Route path={":id"} element={<Details />} />
      </Route>
      <Route path={"/join"} element={<Join />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/my"} element={<My />} />
      <Route path={"/outfit"} element={<Outfit />} />
      <Route path={"/product"} element={<Product />} />
      <Route path={"/review"} element={<Review />} />
      <Route path={"*"} element={<NotFound />} />
    </BrowserRoutes>
  );
}

export default Routes;
