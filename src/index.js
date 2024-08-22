module.exports = function reverse (n) {
    let arrayUnit = String(n).split('')
    arrayUnit = arrayUnit.reverse()
    let result = arrayUnit.join('')
    return parseInt(result)
}
