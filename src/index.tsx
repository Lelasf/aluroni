import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import Router from "./routes/routes";

const root = createRoot(document.getElementById("root"));
root.render(<Router />);
