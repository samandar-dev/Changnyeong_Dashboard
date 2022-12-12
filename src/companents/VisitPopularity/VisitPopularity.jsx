import React from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import './VisitPopularity.scss';

export default function VisitPopularity({popularName}) {
    return (
        <>
            <section className='visit-popular'>
                <p className="visit-popular__time">15:45:00 기준 <span><GiBackwardTime /></span></p>
                
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
