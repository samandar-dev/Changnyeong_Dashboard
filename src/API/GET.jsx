import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NzEyNTAxNzUsImlhdCI6MTY3MTE2Mzc3NX0.jAZYkPOSEodZmKm1Jw0ToHuyRPcdqFakh6dYdqY0c1M";

const headers = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}

// const url = "http://127.0.0.1:8080" 
const url = "http://192.168.0.111:8080"

const MAP = `${url}/places`
const DAY = `${url}/day-percent`
const WEEK = `${url}/week-percent`
const ALL_COUNT = `${url}/all-count`
const CURRENT_RANGE = `${url}/current-range`

const GET = {
  mapList: () => axios.get(MAP, headers),
  dayList: () => axios.get(DAY, headers),
  weekList: () => axios.get(WEEK, headers),
  all_count: () => axios.get(ALL_COUNT, headers),
  current_range_List: () => axios.get(CURRENT_RANGE, headers),
};

export default GET;