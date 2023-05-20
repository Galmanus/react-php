import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const lightTheme = createTheme({
    type: 'light',
  })

ReactDOM.createRoot(document.getElementById("root")).render(
<NextUIProvider theme={lightTheme}>
    <App />
</NextUIProvider>

);
