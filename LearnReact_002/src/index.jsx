import { createRoot } from "react-dom/client";
import App from "/src/App";
import Header from "/components/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <App />
  </>
);
