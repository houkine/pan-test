import axios from "axios";
import React, {useContext} from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  // headers: {'jwt': tokens.jwt}
});
// if (document.cookie.includes("u_email")) {
//   let cookies =document.cookie.split("; ");

//   let jwt = cookies.filter((e) => e.includes("jwt"))[0]
//       .split("=")[1];

//   instance.defaults.headers.common['Authorization'] = jwt;
// }

export default instance;
