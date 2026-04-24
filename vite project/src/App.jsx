import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterApp from './components/CounterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <Card 
    //   img="https://img.freepik.com/free-vector/urban-boy-character_1308-28395.jpg"
    //   name="deepak"
    //   class="10 class"
    //   />
    //   <br/>
    //   <card
    //    name="sohan"
    //    class="10 calss"
    //   />
    //   <br/>
    //   <card
    //   name="rupak"
    //   class="10 class"
    //   />
    //   <br/>
    // </div>
    <CounterApp/>
  )
   
}

export default App
