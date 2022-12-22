import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import "./DailyPopularPlaces.scss";

export default function DailyPopularPlaces({ test, setPopularName }) {
    const [actItem, setActItem] = useState(1)
    const itemActRef = useRef(null)
    const arr = [
        { id: 1, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 2, status: "down", name: "관룡사", percentage: 6 },
        { id: 3, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 4, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 5, status: "down", name: "관룡사", percentage: 6 },
        { id: 6, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 7, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 8, status: "down", name: "관룡사", percentage: 6 },
        { id: 9, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 10, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 11, status: "down", name: "관룡사", percentage: 6 },
        { id: 12, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 13, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 14, status: "down", name: "관룡사", percentage: 6 },
        { id: 15, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 16, status: "down", name: "옥천계곡", percentage: 13 },
    ]

    // ITEM ACTIVE HANDLER =====

    const handlarAct = () => {
        if (itemActRef.current !== null) {
            itemActRef.current.slides.map(item => {
                if (item.id === `splide01-slide${actItem < 10 ? '0' + actItem : actItem}`) {
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
    }, [actItem])

    return (
        <>
            <section className='dailyPP'>
                <h3 className="dailyPP__title">일간 인기 관광지</h3>

                <div className="dailyPP__slid">
                    <Splide
                        aria-label="My Favorite Images"
                        ref={itemActRef}
                        options={{
                            perPage: 1,
                            rewind: true,
                            type: 'loop',
                            speed: '500',
                            interval: 3000,
                            autoplay: true,
                            height: '10rem',
                            direction: 'ttb',
                        }}>
                        {arr.map(item => (
                            <SplideSlide key={item.id}
                                className={`dailyPP__item ${item.id === actItem ? "dailyPPAct" : ""}`}
                                onClick={() => (setActItem(item.id), setPopularName(item.name))}
                            >
                                <p className="dailyPP__num">{item.id}위</p>
                                <p className="dailyPP__name">{item.name}</p>
                                <p className={`dailyPP__percentage
                                        ${actItem === item.id ? item.status === "down" ?
                                        "decreasedColor" : "" : item.status === "down" ? "decreased" : ""}
                                    `}>
                                    <span><AiFillCaretUp /></span> {item.percentage}%
                                </p>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
        </>
    )
}
