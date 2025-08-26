import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StarRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <>
  {/* <StrictMode> */}
    <App />
    {/* <StarRating maxRating={5} color="red" />
    <StarRating maxRating={10} />
    <StarRating maxRating={5} size={80} /> */}
  {/* </StrictMode> */}
  </>
);
