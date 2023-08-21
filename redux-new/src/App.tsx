import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { increment } from "./features/counter/counter-slice";

function App() {

  const [newText, setNewText] = useState<string>("")

  const dispatch = useDispatch();
  
  const count = useSelector( (state: any) => state.counter.value)
  const text = useSelector( (state: any) => state.text.description)

  // you can use the function directly defined in the slice. no need to use strings in the dispatch.
  const incrementCount = () => dispatch(increment())
  
  // nevertheless, if the string is in the 'domain/actionType' syntax, it should work fine as well => uses <reducerName>/<actionType) in that case dispatch(counter/increment) would also work 
  // const incrementCount = () => dispatch(({type: "counter/increment"}))

  const changeText = (modifiedText: string) => dispatch({type: "text/modify", modifiedText: modifiedText})

  function handleChangeText(){
    changeText(newText)
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
        <button onClick={incrementCount}>
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
