import map from "../../assets/images/map.png";
import React from 'react';
import "./Map.scss";

export default function Map({ date, setMapItemIDAct, setNotInfoAct }) {
    return (
        <>
            <section className="map">
                <img className="map__img" src={map} alt="" />

                <div className="map__info">
                    <ul className="map__info-list">
                        {date !== undefined ? date.map(item => (
                            <li className="map__info-item" key={item.id}>
                                <div className="map__info-item-zona">
                                    <span className='map__info-item-line'></span>
                                    <span className={`map__info-item-metka ${item.id === +localStorage.getItem('itemID') ? "mapAnimMetka" : ""}`}>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>

                                <div className={`map__info-item-box ${item.id === +localStorage.getItem('itemID') ? "mapItemAct" : ""}`}
                                    onClick={() => (
                                        setMapItemIDAct(item.id),
                                        localStorage.setItem('itemID', item.id),
                                        setNotInfoAct(item.users_count === 0
                                            ? (item.id, localStorage.setItem('count_0_itemID', item.id))
                                            : localStorage.setItem('count_0_itemID', 0))
                                    )}
                                >
                                    <p className="map__info-item-name">{item.name}</p>

                                    <div className="map__info-item-count-range">
                                        <p className='map__info-item-count'
                                            style={{
                                                color: `${item.id === +localStorage.getItem('count_0_itemID') ? "#020202" :
                                                    item.users_count <= 0 ? "#fff" :
                                                        item.users_count < 5 ? "#4DA9FF" :
                                                            item.users_count < 35 ? "#46D085" :
                                                                item.users_count < 50 ? "#EE8E1D" : "#DD4F4F"}`
                                            }}>{item.users_count}명
                                        </p>

                                        <ul className="map__info-item-range-list">
                                            <li className="map__info-item-range-item">
                                                <span style={{ background: `${item.users_count > 0 ? "#4DA9FF" : ""}` }}></span>
                                            </li>
                                            <li className="map__info-item-range-item">
                                                <span style={{ background: `${item.users_count >= 5 ? "#46D085" : ""}` }}></span>
                                            </li>
                                            <li className="map__info-item-range-item">
                                                <span style={{ background: `${item.users_count >= 35 ? "#EE8E1D" : ""}` }}></span>
                                            </li>
                                            <li className="map__info-item-range-item">
                                                <span style={{ background: `${item.users_count >= 50 ? "#DD4F4F" : ""}` }}></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )) : ""}
                    </ul>
                </div>
            </section>
        </>
    )
}
