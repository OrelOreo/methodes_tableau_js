const emojis = ["🔥", "🌹", "⚽️", "🥶"]


FOREACH
emojis.forEach((el, index, array) => console.log(el, index, array))

.map()
const users = [
    {
        name: "John",
        age: 33
    },
    {
        name: "Peter",
        age: 35
    },
    {
        name: "Patrick",
        age: 56
    }
]

const names = users.map(user => user.name)
console.log(names)

// .find() - .findIndex() - .indexOf()

const fruits = ["🍓", "🍎", "🍒", "🍉", "🍑"]

console.log(fruits.find(el => el === "🍑"))
console.log(fruits.findIndex(el => el === "🍑"))
console.log(fruits.indexOf("🍑"))


// .some() - .every() - .includes()

const numbers = [1,2,3,4,5,6]
// Si un seul élément du tableau correspond à la condition retrourne true sinon false
console.log(numbers.some(numb => numb === 2))
// Si -->TOUT<-- les éléments respectent la condition retourne true sinon false
console.log(numbers.every(numb => numb === 2))

console.log(numbers.includes(5))


.filter()

const salaries = [1000, 2000, 3000, 4000, 5000, 6440]
// Retourne un nouveau tableau des éléments qui respectent la condition
const filteredSalaries = salaries.filter(el => el > 3000)
console.log(filteredSalaries)

.sort()

const marks = [14,5,10,40,44,3]
const letters = ["z", "b", "a"]

const sortedMarks = marks.sort((a, b) => a - b)
console.log(sortedMarks)

.reduce()

// Réduire le tableau marks en les accumulants
// a est l'accumulateur
// b est la valeur courante

const average = (marks.reduce((a,b) => a + b) / marks.length).toFixed(2)
console.log(average)