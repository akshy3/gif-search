import React, { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import "./gif.css";

function Gif(props) {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //fetching trending gifs from giphy API
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=HyszZR1z4zjgGoSlBu6rZEYWWaa8C6l4"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        setResult(result.data);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    if (search !== "") {
      let api_key = process.env.REACT_APP_API_KEY;
      let url =
        "https://api.giphy.com/v1/gifs/search?api_key=" +
        api_key +
        "&limit=10&q=";
      //fetching searched gifs from giphy API
      fetch(url + search)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setLoading(false);
          setResult(result.data);
        });
    }
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleImageClick = (el) => () => {
    props.setOnGif(false);
    props.setIsGifSet(true);
    props.setGifs((old) => [...old, el.images.fixed_width.url]);
  };
  return (
    <div className="gif">
      <div className="gif-input">
        <input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for gif"
        />
      </div>
      <div className="gif-images">
        {loading && <Loader />}
        {result &&
          result.map((el) => {
            return (
              <div key={el.id}>
                <img
                  src={el.images.fixed_width.url}
                  alt="img"
                  onClick={handleImageClick(el)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Gif;
