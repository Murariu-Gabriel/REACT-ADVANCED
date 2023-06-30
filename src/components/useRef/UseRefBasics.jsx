import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false)

  
  useEffect(() => {
    refContainer.current.focus()
    console.log(refContainer, "after initial render")
  })
  
  console.log(refContainer, "during initial render")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current)
    const name = refContainer.current.value
    console.log(name)
  }

  useEffect(() => {
      if(!isMounted.current){
          isMounted.current = true
          return
      }
      console.log('re-render')
  }, 
  [value]
  )

  return (
    <section>
      <h2>Use Ref Basics</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>

      <p>
        An here we have Use Ref, apparently used for preserving values between
        renders. Use Ref does not trigger re-renders and it targets dom elements.
        <br /> <br />

        In the last useEffect we have the case where we don t want to run some functionality on initial render and only on re-render. So we set up a useRef with the value false and check for falsy. It enters our if sets ref to true and exits without executing the rest of the code. And after that because the ref is set to true it will display content of useEffect on re-render

        <br /> <br />

        Important note for useEffect: UseEffect executes after initial render meaning no matter it s position inside the component it will execute last this also applies to any render/re-render use effects will execute last and depending on their order.
      </p>
    </section>
  )
}
export default UseRefBasics
