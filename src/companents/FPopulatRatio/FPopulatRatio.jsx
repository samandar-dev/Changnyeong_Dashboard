import React, { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./FPopulatRatio.scss";

export default function FPopulatRatio({ setPopularName }) {
    const [epolulatActItem, setEpolulatActItem] = useState(1)
    const arr = [
        { id: 1, name: "옥천계곡", percentage: 15, prev_day_percentage: 10, },
        { id: 2, name: "관룡사", percentage: 10, prev_day_percentage: 16, },
        { id: 3, name: "창녕스포츠파크", percentage: 16, prev_day_percentage: 13, },
        { id: 4, name: "옥천계곡", percentage: 15, prev_day_percentage: 5, },
        { id: 5, name: "관룡사", percentage: 22, prev_day_percentage: 10, },
        { id: 6, name: "창녕스포츠파크", percentage: 27, prev_day_percentage: 23, },
        { id: 7, name: "옥천계곡", percentage: 11, prev_day_percentage: 14, },
        { id: 8, name: "관룡사", percentage: 65, prev_day_percentage: 44, },
        { id: 9, name: "창녕스포츠파크", percentage: 24, prev_day_percentage: 31, },
        { id: 10, name: "창녕스포츠파크", percentage: 42, prev_day_percentage: 61, },
        { id: 11, name: "옥천계곡", percentage: 32, prev_day_percentage: 13, },
        { id: 12, name: "관룡사", percentage: 14, prev_day_percentage: 18, },
        { id: 13, name: "창녕스포츠파크", percentage: 12, prev_day_percentage: 25, },
        { id: 14, name: "옥천계곡", percentage: 15, prev_day_percentage: 33, },
        { id: 15, name: "관룡사", percentage: 33, prev_day_percentage: 26, },
        { id: 16, name: "창녕스포츠파크", percentage: 12, prev_day_percentage: 34, },
    ]

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
                            speed: '1000',
                            interval: 3600,
                            autoplay: true,
                            height: '10rem',
                            direction: 'ttb',
                        }}
                    >
                        {arr.map(item => (
                            <SplideSlide key={item.id}>
                                <li className={`fPopulat__item ${+localStorage.getItem('Fpopulat_item-ID') === item.id ? "fPopulatAct" : ""}`}
                                    onClick={() => (setEpolulatActItem(item.id), localStorage.setItem('Fpopulat_item-ID', item.id), setPopularName(item.name))}
                                >
                                    <div className="fPopulat__item-info">
                                        <p className='fPopulat__item-num'>{item.id}위</p>
                                        <p className="fPopulat__item-name">{item.name}</p>
                                        <p className="fPopulat__item-percetage">
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
                                </li>
                            </SplideSlide>
                        ))}
                    </Splide>
                </ul>
            </section>
        </>
    )
}
