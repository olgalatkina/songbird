import React from "react";
import "./RandomBird.css";
import AudioPlayer from "../audio-player/AudioPlayer";

const RandomBird = () => {
  return (
    <section className="random-bird">
      <img
        src="../../assets/images/bird.jpg"
        alt="bird"
        className="random-bird__image"
      />
      <div className="random-bird__info">
        <h2 className="random-bird__title">
          *&thinsp;*&thinsp;*&thinsp;*&thinsp;*
        </h2>
        <AudioPlayer />
      </div>
    </section>
  );
};

export default RandomBird;
