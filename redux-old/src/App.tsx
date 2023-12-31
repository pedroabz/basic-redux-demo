import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect } from 'react-redux'
import { useState } from 'react'

function App({count, text, incrementCount, changeText} : {count: number, text: string, incrementCount: () => void, changeText: (modifiedText: string) => void}) {

  const [newText, setNewText] = useState<string>("")

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

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.value,
    text: state.text.description,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    incrementCount: () => dispatch({ type: 'counter/increment' }),
    changeText: (modifiedText: string) => dispatch({type: "text/modify", modifiedText: modifiedText})
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App)
