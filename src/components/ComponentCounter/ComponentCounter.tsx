import { useState } from "react"

export const ComponentCounter = () => {
    const [counter, setCounter] =  useState<number>(0);

    const incrementCounter = ()=>{
        setCounter((prev:number) => prev + 1)
    }

    const decrementCounter = ()=>{
        if(counter > 0){
            setCounter((prev:number) => prev - 1)
        }
    }
  return (
    <div>
        <h2>Valor de counter: {counter}</h2>

        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Decrementar</button>
    </div>
  )
}
