import React, { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import "./FPopulatRatio.scss";

export default function FPopulatRatio({ setPopularName }) {
    const [epolulatActItem, setEpolulatActItem] = useState(1)
    const arr = [
        { id: 1, name: "옥천계곡", percentage: 15 },
        { id: 2, name: "관룡사", percentage: 10 },
        { id: 3, name: "창녕스포츠파크", percentage: 12 },
    ]

    return (
        <>
            <section className="fPopulat">
                <h4 className="fPopulat__title">관광지별 유동인구 비율 <span>(전체 관광객 기준)</span></h4>

                <ul className="fPopulat__list">
                    {arr.map(item => (
                        <li className={`fPopulat__item ${epolulatActItem === item.id ? "fPopulatAct" : ""}`}
                            onClick={() => (setEpolulatActItem(item.id), setPopularName(item.name))}
                            key={item.id}
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
                    ))}
                </ul>
            </section>
        </>
    )
}
