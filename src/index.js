import "./styles/index.scss"

const person={
    firstName: 'ankan',
    lasName: 'saha',
    age: 30
}

const personCopy={...person, city: 'kolkata', age:25}

console.log(personCopy)