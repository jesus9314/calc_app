//importacion
import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

//generacion de la funcion del componente
const App = () => 
    {
    //Lo que ejecuta la función
    console.log('renderizacion de app')
    return (
        <main className="react-calculator">
            <Result value={"0"} />
        <Numbers onClickNumber={number=> console.log("Click en number", number)} />
            <Functions onContentClear={()=> console.log("Clear")}  onDelete={()=> console.log("Delete")} />
            <MathOperations onClickOperation={operation => console.log("Operación: ", operation)}
            onClickEqual={equal => console.log("Igual: ", equal)}/>
            </main>  
    )
    }

//exportacion
export default App