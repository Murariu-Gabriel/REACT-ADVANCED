import React from "react"
import { data } from "../../data"

const WithoutUseReduce = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const reset = () => {
    setPeople(data)
  }

  return (
    <div>
      <h2>With no Use Reducer</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {people.length < 1 ? (
        <button onClick={reset} style={{ marginTop: "2rem" }}>
          Reset people
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      )}
    </div>
  )
}

export default WithoutUseReduce
