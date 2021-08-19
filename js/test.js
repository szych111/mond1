const myArray = []

myArray.splice(0,0,1,2,3,456,321)
console.log(myArray)
myArray.splice(myArray.length, 0, 'new item')
console.log(myArray)
myArray[myArray.length-1] = 'newer'
console.log(myArray)
const newItem = myArray.pop()
console.log(newItem)
myArray.splice(myArray.length, 0, 8, 'hat', 'pepperoni pizza', null)
const index = myArray.indexOf(null)
console.log(index)
myArray.splice(myArray.length/2, 0, 'ladybug', 25)
console.log(myArray)

let people = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln'
  ]

const body = document.body

function addElement(someContent, someClass) {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(someContent)
  newP.appendChild(newContent)
  newP.classList.add(someClass)
  body.appendChild(newP)
}

for (let person in people) {
  addElement(people[person], 'blue-paragraph')
}

const newOldPeople = []

for (let someone in people) {
  newOldPeople.push(people[someone])
}

const whiteSpace = ' '

function toNameOnly(fullName) {
  const fullnameArray = Array.from(fullName)
  const whitespaceIndex = fullnameArray.indexOf(whiteSpace)
  const nameArray = fullnameArray.splice(whitespaceIndex+1, fullName.length-whitespaceIndex)
  return nameArray.join('')
}

const lastnamesOnly = []

for (let aPerson in people) {
  let toBePushed = toNameOnly(people[aPerson])
  lastnamesOnly.push(toBePushed)
}

console.log(lastnamesOnly)








