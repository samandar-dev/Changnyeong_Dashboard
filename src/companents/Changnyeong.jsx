import Map from "./Map/Map";
import GET from "../API/GET";
import Title from './Title/Title';
import Weather from './Weather/Weather';
import "slick-carousel/slick/slick.css";
import DateTime from './DateTime/DateTime';
import "slick-carousel/slick/slick-theme.css";
import TrafficInfo from './TrafficInfo/TrafficInfo';
import FPopulatRatio from "./FPopulatRatio/FPopulatRatio";
import ItemInfoModal from "./ItemInfoModal/ItemInfoModal";
import WeeklyTopSpots from "./WeeklyTopSpots/WeeklyTopSpots";
import VisitPopularity from "./VisitPopularity/VisitPopularity";
import React, { useEffect, useCallback, useState } from 'react';
import DailyPopularPlaces from "./DailyPopularPlaces/DailyPopularPlaces";
import "./Changnyeong.scss";

export default function Changnyeong() {
  const [mapItemIDAct, setMapItemIDAct] = useState(+localStorage.getItem('itemID'))
  const [notInfoAct, setNotInfoAct] = useState(+localStorage.getItem('count_0_itemID'))
  const [popularName, setPopularName] = useState('옥천계곡')
  // const [arr, setArr] = useState()
  
  const [arr, setArr] = useState([
    {
      id: 1,
      users_count: 5,
      area: "68,182㎡",
      name: "산토끼노래동산",
      phone: "055-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 2.4,
      rate_of_change_over_the_last_7_days: 8.9,
      prev_1_hour_ago: 3.7,
      prev_7_days: 5.4,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산은 산토끼 동요관을 중심으로 먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 2,
      users_count: 5,
      area: "53,468㎡",
      name: "우포잠자리나라",
      phone: "055-530-7411",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 5,
      rate_of_change_over_the_last_7_days: 5.9,
      prev_1_hour_ago: 3.7,
      prev_7_days: 7.4,
      text: "우포잠자리나라는 다양한 생물의 생태, 멸종위기야생생물 복원 및 증식, 교육적인 생물 전시와 체험, 생물의 보전 등의 주제를 표현해 자라나는 아이들에게 자연 생태의 중요성을 인식시켜 주기 위한 공간으로, 창녕생태곤충원으로 명칭이 변경되었다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 3,
      users_count: 5,
      area: "",
      name: "대합면 체육공원",
      phone: "",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 1.4,
      rate_of_change_over_the_last_7_days: 7,
      prev_1_hour_ago: 3.7,
      prev_7_days: 5.4,
      text: "준비중입니다",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 4,
      users_count: 5,
      area: "10,000㎡",
      name: "만옥정 공원",
      phone: "055-530-1661",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 2.4,
      rate_of_change_over_the_last_7_days: 13.4,
      prev_1_hour_ago: 1.7,
      prev_7_days: 15.4,
      text: "면적 1만㎡의 도시공원으로 공원내는 창녕 신라 진흥왕 척경비(국보 제33호), 창녕척화비, 창녕객사, 퇴천3층석탑, UN전적비, 창녕현감비군, 지석묘(고인돌)가 있으며, 열린 문화공간인 야외공연장도 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 5,
      users_count: 45,
      area: "2,129㎡",
      name: "창녕시장",
      phone: "055-530-1681",
      population_congestion: 55,
      rate_of_change_1_hour_ago: 4.1,
      rate_of_change_over_the_last_7_days: 8,
      prev_1_hour_ago: 3.7,
      prev_7_days: 11.4,
      text: "창녕에서 가장 큰 장이 창녕장이며 3일과 8일에 장이 선다.2011년 10월, KBS 예능프로그램인 '1박 2일' 의 이수근이 창녕장을 둘러보고 수구레국밥을 먹는 장면이 방송되면서 창녕장을 찾는 이들이 아주 많아졌다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 6,
      users_count: 5,
      area: "",
      name: "술정리동 삼층석탑",
      phone: "",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 7,
      rate_of_change_over_the_last_7_days: 3.6,
      prev_1_hour_ago: 12.7,
      prev_7_days: 1.4,
      text: "국보 제34호로 민가의 담 밑으로 하층기단(下層基壇)의 일부가 들어가 있었으나,1965년 주위에 있던 민가들을 철거하여 정화 보존 조치를 취하였고 탑도 함께 해체해서 수리하였다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 7,
      users_count: 0,
      area: "",
      name: "송현동 고분군",
      phone: "",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 8.2,
      rate_of_change_over_the_last_7_days: 11.5,
      prev_1_hour_ago: 3.7,
      prev_7_days: 5.4,
      text: "화왕산 서쪽 기슭의 목마산성 아래 창녕읍 교리와 송현리 일대에 분포하고 있는 대형고분군으로, 1911년 일본인 학자 세키노 타다시(關野貞)에 의해 처음 알려졌다.1917년의 분포조사를 시작으로 1918년, 1919년에 걸쳐 11기의 고분이 발굴조사 되었으나 제21, 31호분을 제외하고는 보고서가 간행되지 않았으며, 조사자에 따라 고분번호를 달리하는 등의 요인으로 인해 조사된 고분이 어느 고분인지 정확하게 구분하기조차 어렵다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 8,
      users_count: 0,
      area: "",
      name: "도성암",
      phone: "055-533-2073",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 2.6,
      rate_of_change_over_the_last_7_days: 8.5,
      prev_1_hour_ago: 3.7,
      prev_7_days: 5.4,
      text: "도성암은 신라 현덕왕 2년(810)에 창건한 고찰로 임진왜란 때 전소되어 한 때 역사가 끊어진 사찰이었다. 그러나 현재의 도성암은 아미타부처님의 위신력에 기대어 창녕의 주산이자 절경으로 잘 알려진 화왕산 중턱에 자리하면서 현묘한 자성을 찾는 염불기도 영험도량으로 거듭나고 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 9,
      users_count: 0,
      area: "",
      name: "관룡사",
      phone: "055-521-1747",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 1.5,
      rate_of_change_over_the_last_7_days: 19.5,
      prev_1_hour_ago: 1.7,
      prev_7_days: 15.4,
      text: "해발 739m의 관룡산 서남에 위치하고 있는 관룡사는산내에 전하는 석조불상 등으로 미뤄 볼 때 통일신라시대에 창건된 사찰로 추정되지만 그 창건 경위에 대해서는 자세하지 않다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 10,
      users_count: 1,
      area: "",
      name: "옥천계곡",
      phone: "055-530-1661",
      population_congestion: 5,
      rate_of_change_1_hour_ago: 3.4,
      rate_of_change_over_the_last_7_days: 17,
      prev_1_hour_ago: 1.7,
      prev_7_days: 15.4,
      text: "화왕산 정상(해발 757m)에서 골짜기마다 굽이굽이 흘러내린 물길로 형성된 옥천계곡은시원하고 장쾌한 물줄기와 화왕산 숲에서 불어오는 청량한 바람으로 여름철 피서객들의 최적의 휴양지로서 각광을 받고 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 11,
      users_count: 89,
      area: "1,039㎡",
      name: "영산시장",
      phone: "055-530-1681",
      population_congestion: 83,
      rate_of_change_1_hour_ago: 8.9,
      rate_of_change_over_the_last_7_days: 8.9,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "영산장은 5일, 10일 장이서며 1957년에 형성되어 지금까지 이어지고 있다.특히, 부곡온천을 지나는 곳에 위치하고 있어 아직도 많은 사람들이 찾고 있으며, 계성, 도천 등 인근지역의 주민들도 많이 방문하고 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 12,
      users_count: 10,
      area: "",
      name: "연지못",
      phone: "055-530-1661",
      population_congestion: 35,
      rate_of_change_1_hour_ago: 14.4,
      rate_of_change_over_the_last_7_days: 6.5,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "영산 호국공원과 인접하여 있는 도심속의 연못을 정비하여 만든 공원으로 해마다 유등제가 열린다.주변 시설로는 놀이터, 운동기구, 건강지압시설 등이 갖추어져 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 13,
      users_count: 35,
      area: "4,820,000㎡",
      name: "부곡온천",
      phone: "055-530-1591",
      population_congestion: 45,
      rate_of_change_1_hour_ago: 11.5,
      rate_of_change_over_the_last_7_days: 8.1,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "1973년 신현택옹이 발견한 최고 78℃의 온천수를 하루 6천톤을 채수할 수 있는 유황온천이 오늘의 부곡온천이다.유황이외에도 규소, 염소 등 20여종의 무기질을 함유하고 있어 호흡기질환, 피부질환 등에 효과가 크다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 14,
      users_count: 10,
      area: "축구장 178,200㎡, 야구장 77,206㎡, 전천후 게이트볼장 13,750㎡, 궁도장 부지 5,683㎡ ",
      name: "창녕스포츠파크",
      phone: "055-521-3537",
      population_congestion: 35,
      rate_of_change_1_hour_ago: 11.8,
      rate_of_change_over_the_last_7_days: 4.7,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "야구장 ·축구장 등 다양한 스포츠 전용시설이 구비되어 있다. 지난해 스포츠 502개팀 방문…8만 6637명 유치하여 4년 연속 ‘동계훈련하기 좋은 도시’ 대상을 수상했다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 15,
      users_count: 124,
      area: "1,534㎡",
      name: "남지시장",
      phone: "055-530-1681",
      population_congestion: 97,
      rate_of_change_1_hour_ago: 9,
      rate_of_change_over_the_last_7_days: 10.3,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "남지장은 2일, 7일에 장이서며, 남지리 일대에서 열리는 전통시장으로조선중기 때부터 장이 서기 시작하였고, 예전보다 규모가 많이 줄어들기는 하였지만 여전히 성시를 이루고 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
    {
      id: 16,
      users_count: 2,
      area: "1,100,000㎡",
      name: "창녕남지유채밭",
      phone: "055-530-1533",
      population_congestion: 5,
      rate_of_change_1_hour_ago: 2.1,
      rate_of_change_over_the_last_7_days: 8,
      prev_1_hour_ago: 2.7,
      prev_7_days: 5.4,
      text: "2006년 제1회 낙동강 유채 축제를 주최하면서 전국적으로 유명한 유채 축제로 발전했다. 면적이 110㏊로 전국 단일 규모로는 최대의 유채밭이다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
  ])
  const [test, setTest] = useState(arr)

  // setInterval(() => {
  //   setTest(arr.filter(item => item.id === 2 ? item.users_count += 5 : item.users_count))
  // }, 15000);

  // useEffect(() => { setTest(arr) }, [test])

  return (
    <>
      <section className='changnyeong'>
        <div className="changnyeong__title">
          <Title />
        </div>
        <div className="changnyeong__weather">
          <Weather />
        </div>
        <div className="changnyeong__trafficInfo">
          <TrafficInfo />
        </div>

        <div className="changnyeong__map">
          <Map
            date={test}
            setNotInfoAct={setNotInfoAct}
            setMapItemIDAct={setMapItemIDAct}
          />
        </div>

        <div className="changnyeong__right">
          <DateTime />
          <VisitPopularity popularName={popularName} />
          <DailyPopularPlaces test={test} setPopularName={setPopularName} />
          <WeeklyTopSpots test={test} setPopularName={setPopularName} />
          <FPopulatRatio test={test} setPopularName={setPopularName} />
        </div>

        <div className="changnyeong__modal">
          <ItemInfoModal
            date={test}
            setNotInfoAct={setNotInfoAct}
            setMapItemIDAct={setMapItemIDAct}
          />
        </div>
      </section>
    </>
  )
}
