const data = require('../../../data')
const formatter = require('../../../formatter')

export default (request, response) => {
  let { dial } = request.query

  dial = formatter.dial_code(dial)

  const lookup = data.filter(country => {  return country.dial_code == dial })

  return response.status(200).json({ lookup })
}