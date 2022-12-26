import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import './VisitPopularity.scss';

export default function VisitPopularity({ popularName }) {
    const [minut, setMinut] = useState(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
    const [refreshTime, setRefreshTime] = useState(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
    const [sercunds, setSecunds] = useState(new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds())

    const arr = [
        { id: 1, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 2, status: "up", name: "관룡사", percentage: 6 },
        { id: 3, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 4, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 5, status: "up", name: "관룡사", percentage: 6 },
        { id: 6, status: "up", name: "창녕스포츠파크", percentage: 22 },
        { id: 7, status: "down", name: "창녕군청", percentage: 13 },
        { id: 8, status: "down", name: "관룡사", percentage: 6 },
        { id: 9, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 10, status: "up", name: "관룡사", percentage: 6 },
        { id: 11, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 12, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 13, status: "up", name: "관룡사", percentage: 6 },
        { id: 14, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 15, status: "down", name: "옥천계곡", percentage: 13 },
    ]

    setInterval(() => {
        window.location.reload()
    }, 60000 * 5);

    return (
        <>
            <section className='visit-popular'>
                <p className="visit-popular__time">{refreshTime + ":" + minut + ":" + sercunds} 기준 <span><GiBackwardTime /></span></p>

                <ul className="visit-popular__info-list">
                    <li className="visit-popular__info-item">
                        <p>현재 총 방문객 수</p>
                        <h4>558명</h4>
                    </li>
                    <li className="visit-popular__info-item">
                        <p>실시간 인기 관광지</p>
                        <Splide
                            aria-label="My Favorite Images"
                            options={{
                                perPage: 1,
                                rewind: true,
                                type: 'loop',
                                speed: '700',
                                interval: 2000,
                                autoplay: true,
                                height: '5rem',
                                direction: 'ttb',
                            }}>
                            {arr.map((item, inx) => (
                                <SplideSlide key={inx + 1}>
                                    <h4>
                                        {item.name !== undefined
                                            ? item.name.length > 10 ? item.name.substring(0, 10) + "..."
                                                : item.name : ""}
                                    </h4>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </li>
                </ul>
            </section>
        </>
    )
}
