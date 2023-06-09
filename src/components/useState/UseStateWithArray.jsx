import { useState } from "react"
import { data } from "../../data"

const UseStateWithArray = () => {
  const [people, setPeople] = useState(data)
  // console.log(people)

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const removePeople = () => {
    setPeople([])
  }
  return (
    <section>
      <h2>UseState with Arrays</h2>

      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => removePerson(id)}>Remove this person</button>
          </div>
        )
      })}
      <button style={{ marginTop: "2rem" }} onClick={() => removePeople()}>
        REMOVE ALL PEOPLE
      </button>
    </section>
  )
}
export default UseStateWithArray
