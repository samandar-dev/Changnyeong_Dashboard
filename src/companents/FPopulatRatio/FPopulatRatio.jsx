import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./FPopulatRatio.scss";

export default function FPopulatRatio({ setPopularName }) {
    const [actItem, setActItem] = useState(1)
    const [eActItem, setEActItem] = useState(1)
    const arr = [
        { id: 1, icon: icon1, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 2, icon: icon2, status: "up", name: "관룡사", percentage: 6 },
        { id: 3, icon: icon3, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 4, icon: icon4, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 5, icon: icon5, status: "up", name: "관룡사", percentage: 6 },
        { id: 6, icon: icon6, status: "up", name: "창녕스포츠파크", percentage: 22 },
        { id: 7, icon: icon7, status: "down", name: "창녕군청", percentage: 13 },
        { id: 8, icon: icon8, status: "down", name: "관룡사", percentage: 6 },
        { id: 9, icon: icon10, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 10, icon: icon11, status: "up", name: "관룡사", percentage: 6 },
        { id: 11, icon: icon12, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 12, icon: icon13, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 13, icon: icon14, status: "up", name: "관룡사", percentage: 6 },
        { id: 14, icon: icon15, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 15, icon: icon16, status: "down", name: "옥천계곡", percentage: 13 },
    ]

    const itemActRef = useRef(null)

    // ITEM ACTIVE HANDLER =====

    const handlarAct = () => {
        if (itemActRef.current !== null) {
            itemActRef.current.slides.map(item => {
                if (item.id === `splide03-slide${eActItem < 10 ? '0' + eActItem : eActItem}`) {
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
    }, [eActItem])

    return (
        <>
            <section className="fPopulat">
                <h4 className="fPopulat__title">관광지별 유동인구 비율 <span>(전체 관광객 기준)</span></h4>

                <ul className="fPopulat__list">
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            perPage: 1,
                            rewind: true,
                            type: 'loop',
                            speed: '700',
                            interval: 4000,
                            autoplay: true,
                            height: '10rem',
                            updateOnMove: true,
                            direction: 'ttb',
                        }}
                    >
                        {arr.map(item => (
                            <SplideSlide key={item.id}
                                className="fPopulat__item"
                            // onClick={() =>  setPopularName(item.name)}
                            >
                                <div className="fPopulat__item-info">
                                    <p className='fPopulat__item-num'>{item.id}위</p>
                                    <p className="fPopulat__item-name">{item.name}</p>
                                    <p className={`fPopulat__item-percetage ${item.status === "down" ?
                                        "downParcen" : "upParcen"}
                                    `}>
                                        <span><AiFillCaretUp /></span> {item.percentage}%
                                    </p>
                                </div>

                                <div className="fPopulat__item-range">
                                    <span>
                                        {/* <style>
                                                {`@keyframes fPopulatAnimRange { 100% { width: ${item.percentage}px;} }`}
                                             </style> */}
                                    </span>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </ul>
            </section>
        </>
    )
}
