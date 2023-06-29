import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)

  console.log(refContainer)

  useEffect(() => {
    refContainer.current.focus()
  })

  const isMounted = useRef(false)

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
      </p>
    </section>
  )
}
export default UseRefBasics
