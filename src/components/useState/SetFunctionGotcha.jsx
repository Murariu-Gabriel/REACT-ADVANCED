import { useState } from "react"

const SetFunctionGotcha = () => {
  const [count, setCount] = useState(0)

  const normalUpdate = () => {
    setTimeout(() => {
      setCount(count + 1)

    },2000)
    
  }

  const add = () => {
    setCount((currentState => {
      const newState = currentState + 1
      console.log(count)
      return newState
    } ))
  }

  const timeOutEx = () => {
    setTimeout(() => {
      console.log("clicked the button")
      setCount((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }
  // console.log(count)

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

      <p>
        <strong>On another note</strong> here we have another example but here
        we are updating the state immediately and synchronously by updating the
        previous state
      </p>
      <p>Count: {count}</p>
      <button onClick={timeOutEx}>timed out add</button>

      <p>
        <strong>Here</strong> is the example in which we have a timeout but we just update state normally
      </p>
      <p>Count: {count}</p>
      <button onClick={normalUpdate}>timed out add</button>
    </section>
  )
}
export default SetFunctionGotcha
