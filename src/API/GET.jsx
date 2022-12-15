import axios from "axios";

const token = "";

const headers = () => {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
};

const map = ""

const GET = {
  mapList: () => axios.get(map, headers()),
};

export default GET;