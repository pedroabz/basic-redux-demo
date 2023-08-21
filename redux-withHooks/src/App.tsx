import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function App() {

  const [newText, setNewText] = useState<string>("")

  const dispatch = useDispatch();
  
  const count = useSelector( (state: any) => state.counter.value)
  const text = useSelector( (state: any) => state.text.description)

  const handleIncrementButton = () => {
    dispatch({ type: 'counter/increment' })
  }

  const handleChangeText = () => {
    dispatch({type: "text/modify", modifiedText: newText})
    setNewText("")
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{text}</h1>
      <div className="card">
        <button onClick={handleIncrementButton}>
          count is {count}
        </button>

        <button onClick={handleChangeText}>
          Change text
        </button>
      </div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
    </>
  )
}

export default App
