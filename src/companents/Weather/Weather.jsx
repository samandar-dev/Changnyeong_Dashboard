import React from 'react';
import "./Weather.scss";

import icon1 from "../../assets/icons/weather-icon-3.svg";

export default function Weather() {
  return (
    <>
      <section className="weather">
        <ul className="weather__list">
          <li className="weather__item">
            <span className="weather__icon">
              <img src={icon1} alt="" />
            </span>
            <p className="weather__value">15.0˚</p>
          </li>
          <li className="weather__item">
            <span className='weather__name'>강수확률</span>
            <p className="weather__value">30%</p>
          </li>
          <li className="weather__item">
            <span className='weather__name'>미세먼지</span>
            <p className="weather__value">좋음</p>
          </li>
        </ul>
      </section>
    </>
  )
}
