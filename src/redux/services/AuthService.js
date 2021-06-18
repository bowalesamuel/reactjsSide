import fetch from "./FetchInterceptor";

const authService = {};

authService.getFilms = function (payload) {

  return fetch({
    url: "/films/",
    method: "get",
    headers: {
      "public-request": "true",
    },
  });
};



export default authService;
