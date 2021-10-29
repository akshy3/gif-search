import React from "react";
import Feed from "./components/feed/Feed";
import "./App.css";
import Store from "./Store";

export default function App() {
  return (
    <Store>
      <Feed />
    </Store>
  );
}
