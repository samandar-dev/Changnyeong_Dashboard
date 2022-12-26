import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiFillCaretUp } from 'react-icons/ai';
import "./DailyPopularPlaces.scss";

export default function DailyPopularPlaces() {
    const arr = [
        { id: 1, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 2, status: "up", name: "관룡사", percentage: 6 },
        { id: 3, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 4, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 5, status: "up", name: "관룡사", percentage: 6 },
        { id: 6, status: "up", name: "창녕스포츠파크", percentage: 22 },
        { id: 7, status: "down", name: "창녕군청", percentage: 13 },
        { id: 8, status: "down", name: "관룡사", percentage: 6 },
        { id: 9, status: "down", name: "옥천계곡", percentage: 13 },
        { id: 10, status: "up", name: "관룡사", percentage: 6 },
        { id: 11, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 12, status: "up", name: "옥천계곡", percentage: 13 },
        { id: 13, status: "up", name: "관룡사", percentage: 6 },
        { id: 14, status: "down", name: "창녕스포츠파크", percentage: 22 },
        { id: 15, status: "down", name: "옥천계곡", percentage: 13 },
    ]

    return (
        <>
            <section className='dailyPP'>
                <h3 className="dailyPP__title">일간 인기 관광지</h3>

                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        perPage: 1,
                        rewind: true,
                        type: 'loop',
                        speed: '700',
                        interval: 3200,
                        autoplay: true,
                        height: '10rem',
                        direction: 'ttb',
                        updateOnMove: true,
                    }}>
                    {arr.map(item => (
                        <SplideSlide key={item.id}
                            className="dailyPP__item"
                        >
                            <p className="dailyPP__num">{item.id}위</p>
                            <p className="dailyPP__name">{item.name}</p>
                            <p className={`dailyPP__percentage ${item.status === "down" ? "downParcen" : "upParcen"}`}>
                                <span><AiFillCaretUp /></span> {item.percentage}%
                            </p>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </>
    )
}
