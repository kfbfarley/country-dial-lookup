const data = require('../../../data')
const formatter = require('../../../formatter')

export default (request, response) => {
  let { name } = request.query

  name = formatter.name(name)

  const lookup = data.filter(country => {  return country.name == name })

  return response.status(200).json({ lookup })
}