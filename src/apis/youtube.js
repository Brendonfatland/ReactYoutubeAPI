import axios from "axios";

const KEY = "AIzaSyABRpEkfS0sWezjrsDy2JhWubNBYqN9RJ4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
