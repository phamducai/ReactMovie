import axios from "axios";

const requester = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjgiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.-sXhSm2A8dUpDfsN4cjBj9auGIK5OepmyvljUureawc",
  },
});

//interceptor
requester.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  return req;
});
// requester.interceptors.response.use()

export default requester;
