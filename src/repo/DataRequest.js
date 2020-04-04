const axios = require('axios');

const axiosGet = () => {
  return axios({
    method: 'GET',
    url: 'https://api.covid19india.org/data.json',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

let fetchData = (value) => {
  return new Promise((resolve, reject) => {
    axiosGet(value)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default fetchData;
