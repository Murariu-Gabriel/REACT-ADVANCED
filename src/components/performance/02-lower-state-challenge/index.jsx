import { data } from "../../../data"
import { useState } from "react"
import List from "./List"
import Form from "./Form"

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)

  const addPerson = (name) => {
    const fakeId = Date.now()
    const newPerson = { id: fakeId, name }
    setPeople([...people, newPerson])
  }

  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
      <p>So here we had people state and name state in the same component. Inside the from we have a onChange event listener that listens for the value introduced in the input each time we type we are changing the name state meaning we re-render at every key press. The solution to make each component render separately is to break them in multiple components each having it s state so it doesn't trigger re-render for elements that don' t need it</p>
    </section>
  )
}
export default LowerStateChallenge
