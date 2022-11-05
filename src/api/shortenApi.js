import queryFunction from './queryFunction'

const shortenApiBaseUrl = process.env.REACT_APP_BASE_URL

const shortenApi = (query = '') => queryFunction(
  shortenApiBaseUrl + query, {
    method: 'post',
    mode: 'cors',
  })

export default shortenApi
