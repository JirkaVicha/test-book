import { useEffect, useState } from "react"

const Counter = () => {
  const [value, setValue] = useState(0)


  const complexIncrease = () => {
    setTimeout(() => {
      setValue(prevState => prevState + 1)
    }, 2000)
  }

  useEffect(() => {
    console.log('call useefect')
    if (value >= 1) {
      document.title = `New messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('hello')
  }, [])

 
  return (
    <>
      <div className="container">{value}</div>
      <div className="buttons">
        <button onClick={() => setValue(value + 1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
        <button onClick={() => setValue(value - 1)}>+</button>
      </div>
      <div className="buttons-delay">
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
        <button onClick={complexIncrease}>+</button>
      </div>
    </>
    
  )
}

export default Counter