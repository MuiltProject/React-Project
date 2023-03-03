import Cart from "../pages/Cart";
import Details from "../pages/Details";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Outfit from "../pages/Outfit";
import Review from "../pages/Review";

import React from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/details"} element={<Details />} />
      <Route path={"/join"} element={<Join />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/outfit"} element={<Outfit />} />
      <Route path={"/review"} element={<Review />} />
      <Route path={"*"} element={<NotFound />} />
    </BrowserRoutes>
  );
}

export default Routes;
