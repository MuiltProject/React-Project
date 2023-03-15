const BROWSER_PATH = {
  BASE: "/",
  CART: "/cart",
  DETAILS: "/details",
  JOIN: "/join",
  LOGIN: "/login",
  MY: "/my",
  OUTFIT: "/outfit",
  PRODUCT: "/product",
  REVIEW: "/review",
};

// TODO: 추후 스프링과 연동하기
const API_PATH = {
  MAIN: {
    HEADER: "http:localhost:4000/my", // GET API
  },
  CART: "http:localhost:4000/cart", // GET API
  MY: {
    BASE: "http://localhost:4000/my", // GET API
    CHANGE_ADDRESS: "https://reqres.in/api/users", // POST API
    CHANGE_EMAIL: "http://reqres.in/api/users", // POST API
    CHANGE_PASSWORD: "https://reqres.in/api/users", // POST API
  },
  PRODUCT: "http://localhost:4000/products", // GET
};

export { BROWSER_PATH, API_PATH };
