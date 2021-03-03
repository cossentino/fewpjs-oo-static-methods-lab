class Formatter {


  static capitalize(str) {
    let myString = str
    let myString1 = myString[0].toUpperCase()
    return `${myString1}${myString.slice(1)}`
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str) {
    const array = str.split(" ")
    const badWords = ['a', 'an', 'but', 'the', 'of', 'and', 'for', 'at', 'by', 'from']
    const titleizedArray = array.map(e => {
      if (array.indexOf(e) === 0 || !badWords.includes(e)) {
        return Formatter.capitalize(e)
      } else {
        return e
      }
    })
    return titleizedArray.join(" ")
  }

  



}