import { useEffect } from "react"
import { useState } from "react"

const MultipleEffects = () => {
const [value, setValue] = useState(0)
const [secondValue, setSecondValue] = useState(0)

useEffect(() => {
    console.log("I trigger when first value updates and initial render")
}, [value])

useEffect(() => {
console.log("I trigger when second value updates and initial render")
}, [secondValue])

  return (
    <section>
      <h2>having multiple useEffects</h2>
      <p>Yes you can have more than one <br />
      Here we gave 2 useEffects and 2 use states, each use effect has a dependency array with a useState value. Each Effect triggers based on which state is updated BUT both of them trigger on initial render
      </p>

      <p>Count one: {value}</p>
      <button onClick={() => setValue(value + 1) } >Count</button>

      <p>Count two: {secondValue}</p>
      <button onClick={() => setSecondValue(secondValue + 1)}>Second count</button>
    </section>
  )
}
export default MultipleEffects