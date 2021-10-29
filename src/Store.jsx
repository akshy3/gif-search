import React, { useState, useEffect } from "react";

export const Context = React.createContext();

var schema = [
  {
    desc: "default",
    gifs: [],
  },
  {
    desc: "default2",
    gifs: [],
  },
];
const Store = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const val = JSON.parse(localStorage.getItem("posts"));
    if (val) {
      schema = val;
    }
    return schema;
  });
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts, setPosts]);

  return (
    <Context.Provider value={[posts, setPosts]}>{children}</Context.Provider>
  );
};

export default Store;
