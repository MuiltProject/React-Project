import { lazy } from "react";

const Cart = lazy(() => import("./Cart/index"));
const Details = lazy(() => import("./Details/index"));
const Join = lazy(() => import("./Join/index"));
const Login = lazy(() => import("./Login/index"));
const Main = lazy(() => import("./Main/index"));
const NotFound = lazy(() => import("./NotFound/index"));
const Outfit = lazy(() => import("./Outfit/index"));
const Review = lazy(() => import("./Review/index"));

export { Cart, Details, Join, Login, Main, NotFound, Outfit, Review };
