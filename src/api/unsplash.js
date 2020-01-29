import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b697ae2d4e143771974a591ff29feefb322960de6d24f3158016a8f45c03aac3"
  }
});
