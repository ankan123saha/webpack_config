import "../styles/index.scss"
import Recipes from './Recipes'
import mountains from '../images/mountains.png'

function App() {
    return (
        <>
           <section className="hero"></section> 
           <main>
               <section>
                   <h1>Oh hai, React</h1>
               </section>
               <img src={mountains} alt="" width="250"/>
           </main>
                              <Recipes/>

        </>
    )
}

export default App
