import React, { useEffect, useState } from 'react';
import Map from "./Map/Map";
import Title from './Title/Title';
import Weather from './Weather/Weather';
import DateTime from './DateTime/DateTime';
import TrafficInfo from './TrafficInfo/TrafficInfo';
import FPopulatRatio from "./FPopulatRatio/FPopulatRatio";
import ItemInfoModal from "./ItemInfoModal/ItemInfoModal";
import WeeklyTopSpots from "./WeeklyTopSpots/WeeklyTopSpots";
import VisitPopularity from "./VisitPopularity/VisitPopularity";
import DailyPopularPlaces from "./DailyPopularPlaces/DailyPopularPlaces";
import "./Changnyeong.scss";

export default function Changnyeong() {
  const [mapItemIDAct, setMapItemIDAct] = useState(0)
  const [popularName, setPopularName] = useState('옥천계곡')
  const date = [
    {
      id: 1,
      users_count: 5,
      area: "68,182㎡",
      name: "대합면 체육공원",
      phone: "055-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 2.4,
      rate_of_change_over_the_last_7_days: 8.9,
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
      area: "68,182㎡",
      name: "산토끼 노래동산",
      phone: "155-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 5,
      rate_of_change_over_the_last_7_days: 5.9,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "우포 잠자리나라",
      phone: "255-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 1.4,
      rate_of_change_over_the_last_7_days: 7,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 있으며, 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "만옥정 공원",
      phone: "355-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 2.4,
      rate_of_change_over_the_last_7_days: 13.4,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산은 산토끼 동요관을 중심으로 먹이  조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 있다.",
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
      area: "68,182㎡",
      name: "창녕시장",
      phone: "455-533-1400",
      population_congestion: 55,
      rate_of_change_1_hour_ago: 4.1,
      rate_of_change_over_the_last_7_days: 8,
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
      id: 6,
      users_count: 5,
      area: "68,182㎡",
      name: "술정리동 삼층석탑",
      phone: "555-533-1400",
      population_congestion: 25,
      rate_of_change_1_hour_ago: 7,
      rate_of_change_over_the_last_7_days: 3.6,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 체험장과 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "송현동고분군",
      phone: "655-533-1400",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 8.2,
      rate_of_change_over_the_last_7_days: 11.5,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산은 산토끼 동요관을 중심으로 먹이 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "도성암",
      phone: "755-533-1400",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 2.6,
      rate_of_change_over_the_last_7_days: 8.5,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      name: "관룡사",
      area: "68,182㎡",
      phone: "055-533-1400",
      population_congestion: 0,
      rate_of_change_1_hour_ago: 1.5,
      rate_of_change_over_the_last_7_days: 19.5,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산은 산토끼  야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "옥천계곡",
      phone: "515-533-1400",
      population_congestion: 5,
      rate_of_change_1_hour_ago: 3.4,
      rate_of_change_over_the_last_7_days: 17,
      text: "이방면사무소먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "영산시장",
      phone: "055-533-1400",
      population_congestion: 83,
      rate_of_change_1_hour_ago: 8.9,
      rate_of_change_over_the_last_7_days: 8.9,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 야외학습장이 조성되어 있으며, 테마별로 구성된 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "부곡온천",
      phone: "655-533-1400",
      population_congestion: 35,
      rate_of_change_1_hour_ago: 14.4,
      rate_of_change_over_the_last_7_days: 6.5,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토 중심으로 먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "연지못",
      phone: "055-533-1400",
      population_congestion: 45,
      rate_of_change_1_hour_ago: 11.5,
      rate_of_change_over_the_last_7_days: 8.1,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 로 먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "창녕스포츠파크",
      phone: "055-533-1400",
      population_congestion: 35,
      rate_of_change_1_hour_ago: 11.8,
      rate_of_change_over_the_last_7_days: 4.7,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산 심으로 먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "남지시장",
      phone: "055-533-1400",
      population_congestion: 97,
      rate_of_change_1_hour_ago: 9,
      rate_of_change_over_the_last_7_days: 10.3,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 노래동산은 산토끼 동요관을 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
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
      area: "68,182㎡",
      name: "창녕남지유채밭",
      phone: "055-533-1400",
      population_congestion: 5,
      rate_of_change_1_hour_ago: 2.1,
      rate_of_change_over_the_last_7_days: 8,
      text: "이방면사무소 뒷편 68,182㎡ 규모의 산토끼 요관을 중심으로 먹이 체험장과 야외학습장이 조성되어 있으며, 테마별로 구성된 동화마을과 토끼마을을 비롯하여 미로공원, 70m 롤링미끄럼틀 등의 놀이시설로 이루어져 있다.",
      prev_times: [
        { timeID: 1, time_user_count: 5, at_this_time: 5, month_num: 10, day: 12, time: '11:05' },
        { timeID: 2, time_user_count: 121, at_this_time: 10, month_num: 10, day: 12, time: '10:55' },
        { timeID: 3, time_user_count: 1, at_this_time: 15, month_num: 10, day: 13, time: '10:50' },
        { timeID: 4, time_user_count: 9, at_this_time: 20, month_num: 10, day: 14, time: '10:45' },
        { timeID: 5, time_user_count: 48, at_this_time: 25, month_num: 10, day: 15, time: '10:40' },
        { timeID: 6, time_user_count: 16, at_this_time: 30, month_num: 10, day: 16, time: '10:35' },
      ],
    },
  ];

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
            date={date}
            setMapItemIDAct={setMapItemIDAct}
            mapItemIDAct={mapItemIDAct}
          />
        </div>

        <div className="changnyeong__right">
          <DateTime />
          <VisitPopularity popularName={popularName} />
          <DailyPopularPlaces setPopularName={setPopularName} />
          <WeeklyTopSpots setPopularName={setPopularName} />
          <FPopulatRatio setPopularName={setPopularName} />
        </div>

        <div className="changnyeong__modal">
          <ItemInfoModal
            date={date}
            mapItemIDAct={mapItemIDAct}
            setMapItemIDAct={setMapItemIDAct}
          />
        </div>
      </section>
    </>
  )
}
