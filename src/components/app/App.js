import React from "react";
import "./App.css";
import axios from "axios";

// const URL = 'http://localhost:3001/species';

function App() {
  const getSpecies = () => {
    axios.get(URL).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="app container">
      {/* <button onClick={getSpecies}>Get Species</button> */}
      <header className="header">
        <h1 className="visually-hidden">Голоса птиц</h1>
        <div className="logo__line">
          <div className="logo"></div>
          <p className="score">
            Очки:&nbsp;<span className="score__result">0</span>
          </p>
        </div>
        <ul className="pagination">
          <li className="pagination__item">Разминка</li>
          <li className="pagination__item">Домашние</li>
          <li className="pagination__item">Лесные</li>
          <li className="pagination__item">Морские</li>
          <li className="pagination__item">Ночные</li>
          <li className="pagination__item">Осёдлые</li>
          <li className="pagination__item">Певчие</li>
          <li className="pagination__item">Перелётные</li>
          <li className="pagination__item">Хищные</li>
        </ul>
      </header>
      <main className="main">
        <section className="random-bird">
          <img src="bird.jpg" alt="bird" className="random-bird__image" />
          <div className="random-bird__info">
            <h2 className="random-bird__species">
              *&thinsp;*&thinsp;*&thinsp;*&thinsp;*
            </h2>
            <div className="random-bird__audio">
              <audio src="#" hidden></audio>
              <div className="controls">
                <button
                  className="play-button controls__btn-play"
                  type="button"
                ></button>
                <div className="timebar">
                  <div className="timebar__line"></div>
                  <div className="timebar__circle"></div>
                  <div className="timebar__info">
                    <p className="timebar__start">00:00</p>
                    <p className="timebar__finish">24:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="species">
          <ul className="species__list">
            <li className="species__item">
              <span className="species__bullet"></span>Рябки
            </li>
            <li className="species__item">
              <span className="species__bullet"></span>Утка
            </li>
            <li className="species__item">
              <span className="species__bullet"></span>Цесарка
            </li>
            <li className="species__item">
              <span className="species__bullet"></span>Голубь
            </li>
            <li className="species__item">
              <span className="species__bullet"></span>Гусь
            </li>
            <li className="species__item">
              <span className="species__bullet"></span>Индейка
            </li>
          </ul>
          <div className="species__info">
            <p className="species__instructions">
              <span className="species__text">Послушайте плеер.</span>
              <span className="species__text">Выберите птицу из списка.</span>
            </p>
            <div className="card">
              <div className="card__wrapper">
                <img src="granat.jpg" alt="bird" className="card__image" />
                <div className="card__info">
                  <h3 className="card__title">Голубь</h3>
                  <p className="card__latin">Columba</p>
                  <div className="random-bird__audio audio-player">
                    <audio src="#" hidden></audio>
                    <div className="controls">
                      <button
                        className="play-button play-button_stop controls__btn-play"
                        type="button"
                      ></button>
                      <div className="timebar">
                        <div className="timebar__line"></div>
                        <div className="timebar__circle"></div>
                        <div className="timebar__info">
                          <p className="timebar__start">00:00</p>
                          <p className="timebar__finish">24:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="card__text">
                Голуби – сравнительно маленькие птицы, которые, в отличие от
                многих других домашних птиц, сохранили способность летать.Длина
                тела в среднем достигает 40 см, размах крыльев от 50 до 70 см,
                масса от 250 до 400 г. Окрас оперения очень изменчив и
                отличается у разных пород, но перья всегда плотные и густые.
                Туловище голубя продолговатое, крылья широкие с острыми
                кончиками. Хвост короткий с закругленным краем. Ноги короткие,
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
          </div>
        </section>
        <button className="next" type="button">
          Дальше
        </button>
      </main>
      <audio src="#" id="winSound"></audio>
      <audio src="#" id="errorSound"></audio>
    </div>
  );
}

export default App;
