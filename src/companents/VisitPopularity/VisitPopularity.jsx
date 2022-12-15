import React, { useState } from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import './VisitPopularity.scss';

export default function VisitPopularity({ popularName }) {
    const [minut, setMinut] = useState(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
    const [refreshTime, setRefreshTime] = useState(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())

    setInterval(() => {
        window.location.reload()
    }, 60000 * 5);

    return (
        <>
            <section className='visit-popular'>
                <p className="visit-popular__time">{refreshTime + ":" + minut + ":" + new Date().getSeconds()} 기준 <span><GiBackwardTime /></span></p>

                <ul className="visit-popular__info-list">
                    <li className="visit-popular__info-item">
                        <p>현재 총 방문객 수</p>
                        <h4>558명</h4>
                    </li>
                    <li className="visit-popular__info-item">
                        <p>실시간 인기 관광지</p>
                        <h4>{popularName}</h4>
                    </li>
                </ul>
            </section>
        </>
    )
}
