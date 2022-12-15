import React, { useState } from 'react';
import "./DateTime.scss";

export default function DateTime() {
  const [minut, setMinut] = useState(new Date().getMinutes())

  setInterval(() => {
    setMinut(new Date().getMinutes());
  }, new Date().getSeconds());

  return (
    <>
      <section className='date-time'>
        <p className='date-time__day-month'>{new Date().getMonth()+1}월 {new Date().getDate()}일 </p>
        <p className='date-time__time'>
          <span>{new Date().getHours() >= 12 ? 'PM' : 'AM'}</span>
          {" " + (new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()) + ":" + (minut < 10 ? '0' + minut : minut)}
        </p>
      </section>
    </>
  )
}