const name = (string) =>{
    return string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
}
const iso = (string) =>{
    return string.toUpperCase()
}
const dial_code = (string) =>{
    const identifier = '+'
    const first = string.substring(0, 1)
    return first != identifier ? identifier.concat(string) : string
}
module.exports = {
    name,
    iso,
    dial_code
}