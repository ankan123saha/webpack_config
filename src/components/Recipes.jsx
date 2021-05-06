import {useState} from 'react'
const person1={
    firstName: 'ankan',
    lasName: 'saha',
    age: 30
}

const person2={...person1, city: 'kolkata', age:25}


function Recipes() {
    const [recipe, setRecipe]=useState(person1)
    return (
        <center>
            <button onClick={()=>{setRecipe(person1)}}>person1</button>
            <button onClick={()=>{setRecipe(person2)}}>person2</button>
            <ul>
                {Object.keys(recipe).map(ele=><li key={ele.age}>{ele}:{recipe[ele]}</li>)}
            </ul>
        </center>
    )
}

export default Recipes
