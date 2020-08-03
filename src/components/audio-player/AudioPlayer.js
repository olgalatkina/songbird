import React from "react";
import "./AudioPlayer.css";
import ButtonPlay from "../button-play/ButtonPlay";
import Timebar from "../timebar/Timebar";

const AudioPlayer = () => {
  return (
    <div className="random-bird__audio audio-player">
      <audio src="#" hidden></audio>
      <div className="controls">
        <ButtonPlay />
        <Timebar />
      </div>
    </div>
  );
};

export default AudioPlayer;
