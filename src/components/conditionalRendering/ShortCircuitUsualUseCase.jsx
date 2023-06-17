import { useState } from "react"

const ShortCircuitUsualUseCase = () => {
  const [text, setText] = useState("")
  const [name, setName] = useState("some name")
  const [user, setuser] = useState({ name: "Yes this is a name" })
  const [isEditing, setIsEditing] = useState(false)
  return (
    <section>
      <h2>ShortCircuitUsualUseCase</h2>

      <h3>{text || "default Value"}</h3>
      {text && (
        <div>
          <h3>If you see this it means the value compared with me is truthy</h3>
          <h3>{name}</h3>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      {user ? (
        <div>
          <h3>Hello there, {user.name}</h3>
        </div>
      ) : (
        <div>
          <h3>Please log in</h3>
        </div>
      )}
      <p>
        So here we have a couple of short circuits, the first one uses OR
        operator to display default value is our state is falsy <br />
        The second one has AND operator, our first compared value it s falsy so
        it is the one returned meaning we display nothing here. <br />
        The third one is more interesting because if our first compared value is
        truthy we return a component that makes use of the value by grabbing
        name from it. <br />
        The last one is also very interesting, it uses ternary operator and has cases for truthy and falsy. The ternary is made to display user name when connected
      </p>
    </section>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Hello there, {name}</h4>
      <button>log out</button>
    </div>
  )
}

export default ShortCircuitUsualUseCase
