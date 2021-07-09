const data = require('../../../data')
const formatter = require('../../../formatter')

export default (request, response) => {
  let { iso } = request.query

  iso = formatter.iso(iso)

  const lookup = data.filter(country => {  return country.iso == iso })

  return response.status(200).json({ lookup })
}