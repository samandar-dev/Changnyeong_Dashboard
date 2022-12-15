import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import "./DailyPopularPlaces.scss";

export default function DailyPopularPlaces({ test, setPopularName }) {
    const [actItem, setActItem] = useState(1)
    const arr = [
        { id: 1, name: "옥천계곡", percentage: 13 },
        { id: 2, name: "관룡사", percentage: 6 },
        { id: 3, name: "창녕스포츠파크", percentage: 22 },
        { id: 4, name: "옥천계곡", percentage: 13 },
        { id: 5, name: "관룡사", percentage: 6 },
        { id: 6, name: "창녕스포츠파크", percentage: 22 },
        { id: 7, name: "옥천계곡", percentage: 13 },
        { id: 8, name: "관룡사", percentage: 6 },
        { id: 9, name: "창녕스포츠파크", percentage: 22 },
        { id: 10, name: "옥천계곡", percentage: 13 },
    ]

    return (
        <>
            <section className='dailyPP'>
                <h3 className="dailyPP__title">일간 인기 관광지</h3>

                <ul className="dailyPP__list">
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            perPage: 1,
                            rewind: true,
                            speed: '2000',
                            interval: 3000,
                            autoplay: true,
                            height: '10rem',
                            direction: 'ttb',
                        }}
                    >
                        {arr.map(item => (
                            <SplideSlide key={item.id}>
                                <li className={`dailyPP__item ${+localStorage.getItem('daily-popular-places-ID') === item.id ? "dailyPPAct" : ""}`}
                                    onClick={() => (setActItem(item.id), localStorage.setItem('daily-popular-places-ID', item.id), setPopularName(item.name))}
                                >
                                    <p className="dailyPP__num">{item.id}위</p>
                                    <p className="dailyPP__name">{item.name}</p>
                                    <p className='dailyPP__percentage'>
                                        <span><AiFillCaretUp /></span> {item.percentage}%
                                    </p>
                                </li>
                            </SplideSlide>
                        ))}
                    </Splide>
                </ul>
            </section>
        </>
    )
}
