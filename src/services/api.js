import axios from 'axios'

// export default () => {
//   return axios.create({
//     baseURL: 'http://localhost:8081'
//   })
// }

export default () => {
  return axios.create({
    baseURL: 'https://evening-ocean-62698.herokuapp.com'
  })
}
