function abbreviation(string, alvo) {
  // Transformar os argumentos(strings) em arrays
  let array = string.split("")
  alvo = alvo.split("")

  // Filtrar upper e lowercases da string
  let lowerArr = array.filter(letter => letter == letter.toLowerCase())
  let upperArr = array.filter(letter => letter == letter.toUpperCase())

  // Verificar letras em comum entre string e alvo
  let mutualLetters = lowerArr.filter(letter => alvo.includes(letter.toUpperCase()))
                              .map(letter => letter.toUpperCase())

  // Reunir upperArr e letras em comum
  let newArray = [...upperArr, ...mutualLetters].sort()

  // Verificar igualdade e gerar resposta
  let answer = newArray.join() == alvo.join() ? "YES" : "NO"

  return answer
}
