import react, { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [input, setInput] = react.useState("")
  const [result , setResult] = react.useState("")
  const clear = () => {
    setInput("");
    setResult("");
  };


  useEffect(() => {
    if (input === "") {
      setResult(null); 
    } 
    else {
      try { 
        setResult(eval(input)); 
        
      } catch{
        
        setResult(result); 
      }
    }
  }, [input]); 
  const numberr = (value1 :string) => {

    setInput((prev) => prev + value1);
    // setResult(eval(input))
  }
  function clicked(value: string){

        setInput((prev) => prev + value);
        
  };
  const Evaluate = () => {
    
    setResult(eval(input).toString()); 
  };
  

  return (
    <>
    
    <div className="calculator">
        <div className = "res">
        <input type="text" id="display" className="display" disabled value={input}/>
        <input type="text" id="display" className="display" disabled value={result}/>
        </div>
        
        <div className="buttons">
            <button className="btn" onClick={() => {numberr('7')}}>7</button>
            <button className="btn" onClick={() => {numberr('8') }}>8</button>
            <button className="btn" onClick={() =>{numberr('9') }}>9</button>
            <button className="btn operator" onClick={() => clicked('/')}>/</button>

            <button className="btn" onClick={() => numberr('4')}>4</button>
            <button className="btn" onClick={() => numberr('5')}>5</button>
            <button className="btn" onClick={() => numberr('6')}>6</button>
            <button className="btn operator" onClick={() => clicked('*')}>*</button>

            <button className="btn" onClick={() => numberr('1')}>1</button>
            <button className="btn" onClick={() => numberr('2')}>2</button>
            <button className="btn" onClick={() => numberr('3')}>3</button>
            <button className="btn operator" onClick={() => clicked('-')}>-</button>

            <button className="btn" onClick={() => numberr('0')}>0</button>
            <button className="btn" onClick={clear}>C</button>
            <button className="btn" onClick={Evaluate}>=</button>
            <button className="btn operator" onClick={() => clicked('+')}>+</button>
        </div>
    </div>

  

    </>
  )

  
}

export default App
