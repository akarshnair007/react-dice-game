import { useState } from "react"
import { StartGame } from "./components/StartGame"
import GamePlay from "./components/GamePlay";


function App() {

  const [isGameStarted,setIsGameStarted]=useState(false)


  const toggleGamePlay = () =>{

    setIsGameStarted((prev) =>!prev);
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />    // the StartGame component will be shown initially as isGameStarted is false. So then user interacts and click the button "Play Now" in StartGame component, the isGameStarted will be true and the GamePlay component will be displayed, and it will persist until the user ends the game or performs some action to toggle isGameStarted back to false
    }
    </> 
  )
}

export default App
