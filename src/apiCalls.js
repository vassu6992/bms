import axios from "axios";

const theatreApi = () =>{
axios.get('https://random-data-api.com/api/v2/users')
  .then(function (response) {
    // handle success
    console.log(response?.data)
    return response?.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
export default theatreApi