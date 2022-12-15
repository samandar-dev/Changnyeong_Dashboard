import React from 'react';
import { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import "./WeeklyTopSpots.scss";

import icon1 from "../../assets/icons/icon-1.svg";
import icon2 from "../../assets/icons/icon-2.svg";
import icon3 from "../../assets/icons/icon-3.svg";
import icon4 from "../../assets/icons/icon-4.svg";
import icon5 from "../../assets/icons/icon-5.svg";
import icon6 from "../../assets/icons/icon-6.svg";
import icon7 from "../../assets/icons/icon-7.svg";
import icon8 from "../../assets/icons/icon-8.svg";
import icon9 from "../../assets/icons/icon-9.svg";
import icon10 from "../../assets/icons/icon-10.svg";
import icon11 from "../../assets/icons/icon-11.svg";
import icon12 from "../../assets/icons/icon-12.svg";
import icon13 from "../../assets/icons/icon-13.svg";
import icon14 from "../../assets/icons/icon-14.svg";
import icon15 from "../../assets/icons/icon-15.svg";
import icon16 from "../../assets/icons/icon-16.svg";
import Slider from 'react-slick';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function WeeklyTopSpots({ setPopularName }) {
    const [weekSpotsActItem, setWeekSpotsActItem] = useState(1)
    const arr = [
        { id: 1, name: "옥천계곡", percentage: 38, iconID: icon11 },
        { id: 2, name: "부곡온천", percentage: 38, iconID: icon15 },
        { id: 3, name: "관룡사", percentage: 38, iconID: icon9 },
        { id: 4, name: "옥천계곡", percentage: 38, iconID: icon11 },
        { id: 5, name: "부곡온천", percentage: 38, iconID: icon15 },
        { id: 6, name: "관룡사", percentage: 38, iconID: icon9 },
        { id: 7, name: "옥천계곡", percentage: 38, iconID: icon11 },
        { id: 8, name: "부곡온천", percentage: 38, iconID: icon15 },
        { id: 9, name: "관룡사", percentage: 38, iconID: icon9 },
        { id: 10, name: "옥천계곡", percentage: 38, iconID: icon15 },
    ]

    return (
        <>
            <section className='week-spots'>
                <h3 className="week-spots__title">주간 인기 관광지</h3>

                <ul className="week-spots__list">
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            perPage: 3,
                            type: 'loop',
                            rewind: true,
                            delay: '200',
                            speed: '3000',
                            autoplay: true,
                            interval: 2800
                        }}
                    >
                        {arr.map(item => (
                            <SplideSlide key={item.id}>
                                <li className={`week-spots__item ${item.id === weekSpotsActItem ? "weekSpotsActItem" : ""}`}
                                    onClick={() => (setWeekSpotsActItem(item.id), setPopularName(item.name))}
                                >
                                    <span className='week-spots__item-icon'>
                                        <img src={item.iconID} alt={item.name} />
                                    </span>
                                    <p className="week-spots__item-num">{item.id}위</p>
                                    <h4 className="week-spots__item-name">{item.name}</h4>
                                    <p className="week-spots__item-percentage">
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
