import requester from "./api";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return requester({
      url: `${url}`,
      method: "PUT",
      data: model,
      //JWT
    });
  };

  post = (url, model) => {
    return requester({
      url: `${url}`,
      method: "POST",
      data: model,
    });
  };

  get = (url, model = "") => {
    return requester({
      url: `${url}`,
      method: "GET",
      data: model,
    });
  };

  delete = (url) => {
    return requester({
      url: `${url}`,
      method: "DELETE",
    });
  };
}
