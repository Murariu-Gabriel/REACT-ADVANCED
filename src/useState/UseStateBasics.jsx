import { useState } from "react"

const UseStateBasics = () => {
const [count, setCount] = useState(0)

const plusOne = () => {
    setCount(count + 1)
   
}

  return (
    <section>
        <h2>Use state Basics</h2>

        <p>
            UseState is a destructured array which contains 2 things: <br /><br />
            - The state we pass <br />
            - A function that updates state
        </p>

        <p>Here we have a button which upon pressing is going to count how many times we have clicked  <br />
        Inside this component we have a function which updates the state
        </p>
        
        <p>You clicked {count} times</p>

        <button onClick={plusOne}>CLICK ME</button>

        <p>{`"A slight note tho, you should probably not declare useState with let and directly change the value of the state without using the setState function and if you do you need to pre increment not post increment if you post increment it s not going to work properly "`}</p>
    </section>
  )
}
export default UseStateBasics