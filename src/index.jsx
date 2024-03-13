import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MyApp from "../Layout";

function App() {
  return (
    <MyApp/>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { key: "app" }));