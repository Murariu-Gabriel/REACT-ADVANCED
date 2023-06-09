import { useEffect } from "react"
import { useState } from "react"

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const saySomething = () => {
    console.log("hi")
  }

  saySomething()

  useEffect(() => {
    console.log(
      "hi from use State, that renders each time useState is triggered"
    )
  })

  useEffect(() => {
    console.log("hi from use State")
  }, [])
  return (
    <section>
      <h2>Use Effect Basics</h2>
      <p>
        {" "}
        It allows you to perform side effects inside function components
        <br />
        <br /> Use effect is used to do any work outside a component
        <br />
        Examples of side effects are: subscriptions, fetching data, directly
        updating DOM, event listeners, timers etc
      </p>
      <p>
        This hook: <br />
        - Accepts 2 arguments <br />
        - First argument is a callback function <br />
        - Second argument is a dependency array <br />
        - By default runs on each render (initial and re-render) <br />
        - The callback function can t return a promise (so you can t make it
        async) <br />- If dependency array is empty, use effect runs only on
        initial render
      </p>

      <p>Count: {value}</p>
      <button onClick={() => setValue(value + 1)}>
        Make useEffect render again by updating useState
      </button>

      <p>
        In this component we have an useEffect without dependency array and that
        makes it render each time we update state because we render entire
        component. <br /> <br />
        We also have a function which we call inside component that function
        also gets called each time useState updates and runs <br /> <br />
        The second useEffect we have has a dependency array so it renders only
        on initial render
      </p>
    </section>
  )
}
export default UseEffectBasics
