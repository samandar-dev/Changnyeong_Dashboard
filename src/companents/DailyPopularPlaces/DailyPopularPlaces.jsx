import React, { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import "./DailyPopularPlaces.scss";

export default function DailyPopularPlaces({ setPopularName }) {
    const [actItem, setActItem] = useState(1)
    const arr = [
        { id: 1, name: "옥천계곡", percentage: 13 },
        { id: 2, name: "관룡사", percentage: 6 },
        { id: 3, name: "창녕스포츠파크", percentage: 22 },
    ]

    return (
        <>
            <section className='dailyPP'>
                <h3 className="dailyPP__title">일간 인기 관광지</h3>

                <ul className="dailyPP__list">
                    {arr.map(item => (
                        <li className={`dailyPP__item ${actItem === item.id ? "dailyPPAct" : ""}`}
                            onClick={() => (setActItem(item.id), setPopularName(item.name))}
                            key={item.id}
                        >
                            <p className="dailyPP__num">{item.id}위</p>
                            <p className="dailyPP__name">{item.name}</p>
                            <p className='dailyPP__percentage'>
                                <span><AiFillCaretUp /></span> {item.percentage}%
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
