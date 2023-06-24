import { useState } from "react"
import { data } from "../../data"

const FormUserChallenge = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [people, setPeople] = useState(data)


const deletePerson = (id) => {
  const newPeople = people.filter(person => person.id !== id)
  setPeople(newPeople)
}

  const handleSubmit = (e) => {
    e.preventDefault()

  if (!name) return

  const fakeId = Date.now();

    const newPerson = {name: name, id: fakeId}
    const updatedPeople = [...people, newPerson]
    setPeople(updatedPeople)
    setName("")
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled inputs adding people</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h2>users</h2>

      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => deletePerson(id)}>Delete user</button>
          </div>
        )
      })}

      <h2>Thoughts</h2>

      <p>Here we have a form, what is interesting here is that we give the input a state value inside the value attribute and then on change we change that attribute value, I guess when we need to grab input value it s always going to be state value, or better said we just grab state value and don t bother with input value anymore.</p>

    </section>
  )
}
export default FormUserChallenge