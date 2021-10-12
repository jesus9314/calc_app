//importacion
import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

//generacion de la funcion del componente
const App = () => 
    {
    const clickHandlerFunction = text =>{
    console.log("Button.ClickHandler",text)
    }
    //Lo que ejecuta la función
    console.log('renderizacion de app')
    return (
        <main className="react-calculator">
            <Result value={"0"} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}>1</Button>
            <Button text="2" clickHandler={clickHandlerFunction}>2</Button>
            <Button text="3" clickHandler={clickHandlerFunction}>3</Button>
            <Button text="4" clickHandler={clickHandlerFunction}>4</Button>
            <Button text="5" clickHandler={clickHandlerFunction}>5</Button>
            <Button text="6" clickHandler={clickHandlerFunction}>6</Button>
            <Button text="7" clickHandler={clickHandlerFunction}>7</Button>
            <Button text="8" clickHandler={clickHandlerFunction}>8</Button>
            <Button text="9" clickHandler={clickHandlerFunction}>9</Button>
            <Button text="0" clickHandler={clickHandlerFunction}>0</Button>
        </div>
            <div className="functions">
                <button>clear</button>
                <button>r</button>
            </div>
            <MathOperations/>
            </main>  
    )
}

//exportacion
export default App