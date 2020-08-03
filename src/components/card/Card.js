import React from "react";
import "./Card.css";
import AudioPlayer from "../audio-player/AudioPlayer";

const Card = () => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src="granat.jpg" alt="bird" className="card__image" />
        <div className="card__info">
          <h3 className="card__title">Голубь</h3>
          <p className="card__latin">Columba</p>
          <AudioPlayer />
        </div>
      </div>
      <p className="card__text">
        Голуби – сравнительно маленькие птицы, которые, в отличие от многих
        других домашних птиц, сохранили способность летать.Длина тела в среднем
        достигает 40 см, размах крыльев от 50 до 70 см, масса от 250 до 400 г.
        Окрас оперения очень изменчив и отличается у разных пород, но перья
        всегда плотные и густые. Туловище голубя продолговатое, крылья широкие с
        острыми кончиками. Хвост короткий с закругленным краем. Ноги короткие,
        как правило, без оперения. Клюв среднего размера, темный.
      </p>
      <a
        href="https://o-prirode.ru/golub/"
        className="card__link"
        target="_blank"
      >
        Узнать больше...
      </a>
    </div>
  );
};

export default Card;
