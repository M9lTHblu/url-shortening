const queryFunction = async (url, options = {}) => {
  const response = await fetch(url, options)
  return response.json()
}

export default queryFunction
