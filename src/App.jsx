import './App.css'
import { useState } from "react";
import Score from "./components/Score"
import Game from "./components/Game"
import Rules from "./components/Rules"
import Fot from "./components/Fot"

function App() {

  // eslint-disable-next-line no-unused-vars
  const [contador,setcontador] = useState(12); 

  return (
    <>
    <Score contador={contador} />
    <Game/>
    <Rules/>
    <Fot/>

    </>
  )
}

export default App
