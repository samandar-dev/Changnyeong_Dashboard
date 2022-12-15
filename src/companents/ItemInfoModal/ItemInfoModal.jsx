import { useState } from 'react';
import React, { useEffect } from 'react';
import { RxStack } from 'react-icons/rx';
import { TbPhoneCall } from 'react-icons/tb';
import { AiFillCaretUp } from 'react-icons/ai';
import userIcon2 from "../../assets/icons/user-three.svg";
import userIcon1 from "../../assets/icons/user-switch.svg";
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoClose, IoChevronDownOutline } from 'react-icons/io5';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import "./ItemInfoModal.scss";

export default function ItemInfoModal({ date, setMapItemIDAct, setNotInfoAct }) {
    const [rotateAccardIcon, setRotateAccardIcon] = useState(false)
    const [privTimesItem, setPrivTimesItem] = useState(1)
    const [removModal, setRemovModal] = useState(false)
    const tableLine = [300, 200, 150, 100, 50, 30]

    return (
        <>
            {date !== undefined ? date.map(item => (
                item.id === +localStorage.getItem('itemID') ?
                    <section className={`infoModal ${removModal ? "removModal" : ""}`}>
                        <div className="infoModal__top">
                            <h3 className="infoModal__title">{item.name} <span>창녕군 이방면 이방로 623</span></h3>
                            <button className='infoModal__top-remove'
                                onClick={() => (
                                    setRemovModal(true),
                                    setTimeout(() => {
                                        setNotInfoAct(0)
                                        setMapItemIDAct(0)
                                        localStorage.setItem('itemID', 0)
                                        localStorage.setItem('count_0_itemID', 0)
                                        setRemovModal(false)
                                    }, 300))}
                            >
                                <IoClose />
                            </button>
                        </div>

                        <div className="infoModal__inner">
                            <div className="infoModal__accard">
                                <Accordion className='infoModal__accard-box'>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <div className="infoModal__accard-top" onClick={() => setRotateAccardIcon(!rotateAccardIcon)}>
                                            <Typography>
                                                <h4>장소 정보</h4>
                                            </Typography>
                                            <button className={`infoModal__btn ${rotateAccardIcon ? "rotate" : ""}`}>
                                                <IoChevronDownOutline />
                                            </button>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className='infoModal__accard-desc'>
                                        <Typography className='infoModal__accard-item'>
                                            <p className='infoModal__accard-text'>{item.text}</p>

                                            <ul className="infoModal__accard-desc-list">
                                                <li className="infoModal__accard-dec-item">
                                                    <p><span><TbPhoneCall /></span> 전화번호</p>
                                                    <p>{item.phone}</p>
                                                </li>
                                                <li className="infoModal__accard-dec-item">
                                                    <p><span><RxStack /></span> 부지면적</p>
                                                    <p>{item.area}</p>
                                                </li>
                                            </ul>

                                            <p className='infoModal__dash-info-source'>출처 : 창녕군청 홈페이지</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className="infoModal__dash">
                                <div className="infoModal__dash-top">
                                    <h4 className='infoModal__dash-title'>유동인구 수 <span><AiOutlineExclamationCircle /></span></h4>
                                    <p className='infoModal__dash-date-time'>
                                        {new Date().getFullYear() + "." + new Date().getMonth() + "." + new Date().getDate()}
                                        {" " + (new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()) + ":" + (new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())} 기준
                                    </p>
                                </div>

                                <div className="infoModal__dash-table">
                                    <ul className="infoModal__dash-table-list">
                                        {tableLine.map((item, inx) => (
                                            <li className="infoModal__dash-table-item" key={inx + 1}>
                                                <p>{item}</p><span></span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="infoModal__dash-now-box">
                                        <div className="infoModal__dash-counting">
                                            <p>집계중</p>
                                        </div>
                                        <p className='infoModal__dash-now'>NOW</p>
                                    </div>

                                    <div className="infoModal__dash-info">
                                        <ul className="infoModal__dash-info-list">
                                            {item.prev_times.map(timesItem => (
                                                <li
                                                    className={`infoModal__dash-info-item ${privTimesItem === timesItem.timeID ? "dashItemAct" : ""}`}
                                                    key={timesItem.timeID}
                                                >
                                                    <div className="infoModal__dash-info-rating"
                                                        onClick={() => setPrivTimesItem(timesItem.timeID)}
                                                    >
                                                        <div className="infoModal__dash-info-rating-box">
                                                            <span className='infoModal__dash-info-line'></span>
                                                            <p className='infoModal__dash-info-rating-count'>{timesItem.time_user_count}명</p>
                                                            <p className="infoModal__dash-info-rating-data-time">10월 12일 11:00</p>
                                                        </div>
                                                    </div>
                                                    <p className="infoModal__dash-info-categor">{timesItem.at_this_time}분 전</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="infoModal__range">
                                <h4>인구 혼잡도 <span><AiOutlineExclamationCircle /></span></h4>

                                <div className="infoModal__info-range">
                                    <div className="infoModal__info-range-anim">
                                        <span></span>
                                        <style>
                                            {`@keyframes animRange { 100% { width: 350px;} }`}
                                        </style>
                                    </div>
                                    <div className="infoModal__info-range-line">
                                        <span></span>
                                    </div>
                                    <span></span>
                                </div>

                                <ul className="infoModal__range-categor-list">
                                    <li className="infoModal__range-categor-item">
                                        <p>여유</p>
                                    </li>
                                    <li className="infoModal__range-categor-item">
                                        <p>보통</p>
                                    </li>
                                    <li className="infoModal__range-categor-item">
                                        <p>붐빔</p>
                                    </li>
                                    <li className="infoModal__range-categor-item">
                                        <p>매우붐빔</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="infoModal__desc">
                                <div className="infoModal__desc-box">
                                    <h4>보통</h4>

                                    <ul className="infoModal__desc-list">
                                        <li className="infoModal__desc-item">
                                            <p>사람이 몰려있을 수 있지만 크게 붐비지는 않아요.</p>
                                        </li>
                                        <li className="infoModal__desc-item">
                                            <p>도보 이동에 큰 제약이 없어요.</p>
                                        </li>
                                        <li className="infoModal__desc-item">
                                            <p>특정지역에 인구가 집중되어 있을 수 있어요.</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="infoModal__desc-info">
                                    <ul className="infoModal__desc-info-list">
                                        <li className="infoModal__desc-info-item">
                                            <p>1시간 전 대비 증감율</p>
                                            <span><span><AiFillCaretUp /></span> {item.rate_of_change_1_hour_ago}%</span>
                                        </li>
                                        <li className="infoModal__desc-info-item">
                                            <p>최근 7일 동시간 평균 대비 증감율</p>
                                            <span><span><AiFillCaretUp /></span> {item.rate_of_change_over_the_last_7_days}%</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="infoModal__static">
                                <span className="infoModal__static-span">Beta</span>
                                <h4 className="infoModal__static-title">주간 통계로 본 혼잡도 예상 <span><AiOutlineExclamationCircle /></span></h4>

                                <ul className="infoModal__static-list">
                                    <li className="infoModal__static-item">
                                        <span><img src={userIcon1} alt="user switch" /></span>
                                        <div>
                                            <p className="infoModal__static-item-name-one">지난 14시,</p>
                                            <p className="infoModal__static-item-name">매우 붐볐음</p>
                                        </div>
                                    </li>
                                    <li className="infoModal__static-item">
                                        <span><img src={userIcon2} alt="user three" /></span>
                                        <div>
                                            <p className="infoModal__static-item-name-one">향후 18시,</p>
                                            <p className="infoModal__static-item-name">붐빌 예정</p>
                                        </div>
                                    </li>
                                </ul>

                                <p className="infoModal__static-text">
                                    ※ 혼잡도는 실시간 인구 데이터를 분석하여 가공한 것으로,<br />
                                    실제 현장과는 차이가 있을 수 있음을 알려드립니다.
                                </p>
                            </div>
                        </div>
                    </section>
                    : ""
            )) : ""
            }
        </>
    )
}
