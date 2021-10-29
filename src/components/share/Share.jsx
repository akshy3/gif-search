import React, { useState } from "react";
import Gif from "../gif/Gif";
import "./share.css";

function Share() {
  const [onGif, setOnGif] = useState(false);
  const [isGifSet, setIsGifSet] = useState(false); // For checking if gif is set

  const handleShareButton = () => {};
  const [Gifs, setGifs] = useState([]); // Storing gif
  return (
    <div className="share-container">
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src="assets/person/9.jpeg"
              alt=""
            />
            <input placeholder="What's in your mind?" className="shareInput" />
          </div>
          {isGifSet &&
            Gifs.map((g, index) => {
              return (
                <div key={index} className="selected-gifs">
                  <img src={g} alt="gif" />
                </div>
              );
            })}
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <div className="gif-clickable" onClick={() => setOnGif(!onGif)}>
                  <img
                    className="shareIcon"
                    src="assets/gif-icon.png"
                    alt="gif"
                  />
                  <span className="shareOptionText">GIF</span>
                </div>
                <div className="gif-select">
                  {onGif && (
                    <Gif
                      setOnGif={setOnGif}
                      setIsGifSet={setIsGifSet}
                      setGifs={setGifs}
                    />
                  )}
                </div>
              </div>
            </div>
            <button className="shareButton" onClick={handleShareButton}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
