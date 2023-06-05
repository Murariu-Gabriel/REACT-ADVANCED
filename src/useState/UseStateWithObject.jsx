import { useState } from "react"

const UseStateWithObject = () => {
    const [name, setName] = useState("Gheorghe")
    const [age, setAge] = useState(69)
    const [hobby, setHobby] = useState("shake and bake")


    const changePerson = () => {
        setAge(22)
        setHobby("wastes life on video games")
        setName("gamer")
    }
  return (
    <section>
      <h2>UseState with Object</h2>
      <p>- Person -</p>
      <br />
      <span>Nume: {name}</span> 
      <br />
      <span>Varsta: {age} </span>
      <br />
      <span>Hobby : {hobby}</span>
      <br />
      <button style={{marginTop: "1rem"}} onClick={changePerson}>Change person</button>

      <h2>Automatic batching</h2>

      <p>So react has an interesting thing, when you have multiple states that change something react will group them into a single update (batching) that meaning it will re-render only one time(automatic batching). If you call state update multiple times in a short period of time react will perform only one re-render for all updates. <br />
      React ensures that states will batch regardless of location and includes native event handlers asynchronous operations, timeouts and intervals
       </p>
    </section>
  )
}
export default UseStateWithObject