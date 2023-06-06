import { useState } from "react"

const SetFunctionGotcha = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
    console.log(count)
  }
  console.log(count)

  return (
    <section>
      <h2>Set function gotcha</h2>
      <p>Count: {count}</p>
      <button onClick={add}>add</button>
      <p>
        There is one important aspect to remember here. The state does not
        update immediately or mutate state. It actually schedules an update for
        the state and tells React that it needs to re-render component. The
        actual state update will be performed as part of the next rendering.
      </p>
    </section>
  )
}
export default SetFunctionGotcha
