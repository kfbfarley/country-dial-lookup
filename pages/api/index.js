const data = require('../../data')
const formatter = require('../../formatter')

export default (request, response) => {
  const key = Object.keys(request.body)[0]
  const value = request.body[Object.keys(request.body)[0]]

  const lookup = data.filter(country => { return country[key] == formatter[key](value) })

  response.status(200).json({ lookup })
}