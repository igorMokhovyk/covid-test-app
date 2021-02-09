import axios from "axios";

export const getGlobalStats = () => {
  return (dispatch) => {
    axios.get(`https://api.covid19api.com/summary`, {
      headers: {
        'Authorization': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
      }
    })
      .then(res => {
        dispatch({
          type: 'GET_GLOBAL_STATS',
          payload: res.data
        })
      })
      .catch(err => console.log(err, "Error"))
  }
}

// export const getAllCountries = () => {
//   return (dispatch) => {
//     axios.get('https://api.covid19api.com/countries', {
//       headers: {
//         'Authorization': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
//       }
//     })
//       .then(res => {
//         dispatch({
//           type: 'GET_ALL_COUNTRIES',
//           payload: res.data
//         })
//       })
//       .catch(err => console.log(err, "Error"))
//   }
// }

