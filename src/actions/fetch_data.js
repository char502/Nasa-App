import axios from "axios";

export default function fetchData() {
  const API_KEY = "fZp9BI7rfkDXrekzfTWQcaBxF0ga6gNLDCrPCirI";

  const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";

  const request = axios.get(END_POINT + API_KEY);

  return {
    // return plain object with props
    type: "FETCH_DATA", // Action Type
    payload: request // Action Payload (cargo)
  };
}
