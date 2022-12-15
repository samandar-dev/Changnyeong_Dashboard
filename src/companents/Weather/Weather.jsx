import { useState } from 'react';
import React, { useEffect } from 'react';
import weaterIcon1 from "../../assets/icons/weather-icon-1.svg";
import weaterIcon2 from "../../assets/icons/weather-icon-2.svg";
import weaterIcon3 from "../../assets/icons/weather-icon-3.svg";
import weaterIcon4 from "../../assets/icons/weather-icon-4.svg";
import weaterIcon5 from "../../assets/icons/weather-icon-5.svg";
import weaterIcon6 from "../../assets/icons/weather-icon-6.svg";
import weaterIcon7 from "../../assets/icons/weather-icon-7.svg";
import weaterIcon8 from "../../assets/icons/weather-icon-8.svg";
import "./Weather.scss";
import axios from 'axios';

export default function Weather() {
  const weatherCategor = [
    { id: 1, categor: 'Sunny', icon: weaterIcon1 },
    { id: 2, categor: 'Clouds', icon: weaterIcon8 },
    { id: 3, categor: 'Raing', icon: weaterIcon5 },
    { id: 4, categor: 'Lightning', icon: weaterIcon7 },
    { id: 5, categor: 'Light rain', icon: weaterIcon3 },
    { id: 6, categor: 'Rain Lightning', icon: weaterIcon6 },
    { id: 7, categor: 'Overcast', icon: weaterIcon8 },
    { id: 8, categor: 'More Sunny', icon: weaterIcon2 },
    { id: 9, categor: 'Light rain shower', icon: weaterIcon3 },
    { id: 10, categor: 'Patchy rain possible', icon: weaterIcon3 },
    { id: 11, categor: 'Partly cloudy', icon: weaterIcon2 },
    { id: 12, categor: 'Mist', icon: weaterIcon8 },
    { id: 12, categor: 'More cloudy', icon: weaterIcon4 },
  ]
  const [humidity, setHumidity] = useState(10)
  const [weatherMain, setWeatherMain] = useState()
  const [weatherGradus, setWeatherGradus] = useState(2.5)
  const [iconIndex, setIconIndex] = useState(weaterIcon2);
  const [xml, setXML] = useState('');

  const weatherHandler = () => {
    if (weatherMain !== []) {
      let obj = weatherCategor.find(item => {
        return item.categor === weatherMain
      })
      obj !== undefined ? setIconIndex(obj.icon) : setIconIndex(weaterIcon2)
    }
  }

  useEffect(() => {
    weatherHandler()
  }, [iconIndex, weatherMain])

  useEffect(() => {
    // axios.get('https://www.cng.go.kr/country/api/curweather.do', {
    //     "Content-Type": "application/xml; charset=utf-8"
    // })
    //     .then((response) => {
    //         console.log('Your xml file as string', response.data);
    //         setXML(response)
    //     });

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Korea&units=metric&appid=33dedde6287575d237be2e1c44271762')
      .then(res => res.json())
      .then(data => {
        setWeatherMain(data.weather[0].main)
        setWeatherGradus(data.main.temp)
        setHumidity(data.main.humidity)
        console.log(data);
      })
  }, [])

  return (
    <>
      <section className="weather">
        <ul className="weather__list">
          <li className="weather__item">
            <span className="weather__icon">
              <img src={iconIndex} alt="Icon" />
            </span>
            <p className="weather__value">{weatherGradus}˚</p>
          </li>
          <li className="weather__item">
            <span className='weather__name'>강수확률</span>
            <p className="weather__value">{humidity}%</p>
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
