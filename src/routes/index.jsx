import { Cart, Details, Join, Login, Main, My, NotFound, Outfit, Product, Review } from "../pages/index";

import React from "react";
import { BROWSER_PATH } from "../constants/path";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Main />} />
      <Route path={BROWSER_PATH.CART} element={<Cart />} />
      <Route path={BROWSER_PATH.DETAILS}>
        <Route path={":id"} element={<Details />} />
      </Route>
      <Route path={BROWSER_PATH.JOIN} element={<Join />} />
      <Route path={BROWSER_PATH.LOGIN} element={<Login />} />
      <Route path={BROWSER_PATH.MY} element={<My />} />
      <Route path={BROWSER_PATH.OUTFIT} element={<Outfit />} />
      <Route path={BROWSER_PATH.PRODUCT} element={<Product />} />
      <Route path={BROWSER_PATH.REVIEW} element={<Review />} />
      <Route path={"*"} element={<NotFound />} />
    </BrowserRoutes>
  );
}

export default Routes;
