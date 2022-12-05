import React from 'react';
import "./DateTime.scss";

export default function DateTime() {
  return (
    <>
      <section className='date-time'>
        <p className='date-time__day-month'>12월 1일 </p>
        <p className='date-time__time'><span>AM</span> 06:20</p>
      </section>
    </>
  )
}
