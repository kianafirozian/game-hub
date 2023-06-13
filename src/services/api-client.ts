import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5bf87dd6538141adacbc88a743fc1bdf",
  },
});
