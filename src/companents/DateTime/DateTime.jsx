import React, { useState } from 'react';
import "./DateTime.scss";

export default function DateTime() {
  const [time, setTime] = useState(new Date().getMinutes())

  setInterval(() => {
    setTime(new Date().getMinutes());
  }, new Date().getSeconds());

  return (
    <>
      <section className='date-time'>
        <p className='date-time__day-month'>{new Date().getMonth()}월 {new Date().getDate()}일 </p>
        <p className='date-time__time'>
          <span>{new Date().getHours() >= 12 ? 'PM' : 'AM'}</span>
          {" " + new Date().getHours() + ":" + (time < 10 ? '0' + time : time)}
        </p>
      </section>
    </>
  )
}