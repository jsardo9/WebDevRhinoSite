import axios from "axios";

// user data is stored at this json web server
const url = "https://my-json-server.typicode.com/annagietl/webdevproj";

// create a user using axios
export const createUser = (id, name, type) => {
  return axios({
    method: "post",
    url: `${url}/data`,
    data: {
      id,
      name,
      type
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

// axios get request to retrieve user data
export const getAllUsers = () => {
  return axios
    .get(`${url}/data`)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
