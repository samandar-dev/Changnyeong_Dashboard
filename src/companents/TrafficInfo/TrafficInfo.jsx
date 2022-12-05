import React from 'react';
import "./TrafficInfo.scss"

export default function TrafficInfo() {
  return (
    <>
      <section className="traffic">
        <div className="traffic__info">
          <ul className="traffic__info-list">
            <li className="traffic__info-item">
              <span></span>
            </li>
            <li className="traffic__info-item">
              <span></span>
            </li>
            <li className="traffic__info-item">
              <span></span>
            </li>
            <li className="traffic__info-item">
              <span></span>
            </li>
          </ul>

          <div className="traffic__info-names">
            <p>여유</p>
            <p>혼잡</p>
          </div>
        </div>

        <p className="traffic__desc">혼잡도는 실시간 인구 데이터를 분석하여 가공한 것으로,
          실제 현장과는 차이가 있을 수 있습니다</p>

        <p className="traffic__date">Last Inspection Date  22.10.11</p>
      </section>
    </>
  )
}
