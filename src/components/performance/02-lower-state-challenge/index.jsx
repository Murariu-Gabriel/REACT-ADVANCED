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

  const deletePerson = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} deletePerson={deletePerson} />
      <p>
        So here we had people state and name state in the same component. Inside
        the from we have a onChange event listener that listens for the value
        introduced in the input each time we type we are changing the name state
        meaning we re-render at every key press. The solution to make each
        component render separately is to break them in multiple components each
        having it s state so it doesn't trigger re-render for elements that don'
        t need it
      </p>

      <h2>React memo</h2>

      <p>React memo helps you memoize a component and it means that if the component didn t change it will not re-render, it will just returned the same component from the last render. It checks if the props have changed if not it will returned a cached result from last render</p>
    </section>
  )
}
export default LowerStateChallenge
