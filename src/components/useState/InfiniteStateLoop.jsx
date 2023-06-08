import { useState } from "react"

const InfiniteStateLoop = () => {
    const [count, setCount] = useState(0)

    const countUpdate = () => {
        console.log("ceva")
        setCount(count + 1) // This right here triggers infinite loop because of the function calling after 
    }
    // countUpdate()
  return (
    <section>
      <h2>InfiniteStateLoop</h2>
      <p>Count: {count}</p>
      <button onClick={countUpdate}>add 1</button>

      <p>
        At this moment this useState works normally, but a note here is that we
        should not in any case call functions inside an event without using a callback function or call them anywhere in our component when the function updates state. On initial render it sets up our code and if we call a function that updates state it will trigger re-render and that will keep happening infinitely. 
      </p>
    </section>
  )
}
export default InfiniteStateLoop