import React, { useEffect, useRef, useState } from 'react';
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
    const [weekActItem, setWeekActItem] = useState(1)
    const itemActRef = useRef(null)
    const arr = [
        { id: 1, icon: icon1, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 2, icon: icon2, status: "down", name: "관룡사", percentage: 6 },
        { id: 3, icon: icon3, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 4, icon: icon4, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 5, icon: icon5, status: "down", name: "관룡사", percentage: 6 },
        { id: 6, icon: icon6, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 7, icon: icon7, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 8, icon: icon8, status: "down", name: "관룡사", percentage: 6 },
        { id: 9, icon: icon9, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 10, icon: icon10, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 11, icon: icon11, status: "down", name: "관룡사", percentage: 6 },
        { id: 12, icon: icon12, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 13, icon: icon13, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 14, icon: icon14, status: "down", name: "관룡사", percentage: 6 },
        { id: 15, icon: icon15, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 16, icon: icon16, status: "down", name: "옥천계곡", percentage: 13 },
    ]

    // ITEM ACTIVE HANDLER =====

    const handlarAct = () => {
        if (itemActRef.current !== null) {
            itemActRef.current.slides.map(item => {
                if (item.id === `splide02-slide${weekActItem < 10 ? '0' + weekActItem : weekActItem}`) {
                    item.classList.add('is-active')
                }
                else {
                    item.classList.remove('is-active')
                }
            })
        }
    }

    useEffect(() => {
        handlarAct()
    }, [weekActItem])

    return (
        <>
            <section className='week-spots'>
                <h3 className="week-spots__title">주간 인기 관광지</h3>

                {/* <Splide
                    aria-label="My Favorite Images"
                    options={{
                        perPage: 1,
                        rewind: true,
                        type: 'loop',
                        speed: '1000',
                        interval: 3400,
                        autoplay: true,
                    }}
                > */}
                <ul className="week-spots__list">
                    {arr.map((item, inx) => (
                        inx + 1 <= 3 ?
                            <li key={item.id}
                                className={`week-spots__item ${item.id === weekActItem ? "weekSpotsActItem" : ""}`}
                                onClick={() => (setWeekActItem(item.id), setPopularName(item.name))}
                            >
                                <span className='week-spots__item-icon'>
                                    <img src={item.icon} alt={item.name} />
                                </span>
                                <p className="week-spots__item-num">{item.id}위</p>
                                <h4 className="week-spots__item-name">{item.name}</h4>
                                <p className={`week-spots__item-percentage 
                                ${weekActItem === item.id ? item.status === "down" ?
                                        "decreasedColor" : "" : item.status === "down" ? "decreased" : ""}
                                    `}>
                                    <span><AiFillCaretUp /></span> {item.percentage}%
                                </p>
                            </li> : ""
                    ))}
                </ul>
                {/* </Splide> */}
            </section>
        </>
    )
}
