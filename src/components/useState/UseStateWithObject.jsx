import { useState } from "react"

const UseStateWithObject = () => {
    const [name1, setName] = useState("Gheorghe")
    const [age1, setAge] = useState(69)
    const [hobby1, setHobby] = useState("shake and bake")
    const [person, setPerson] = useState({
      name: "peter",
      age: 19,
      hobby: "something useless anyway",
    })

    const changePerson = () => {
      setAge(22)
      setHobby("wastes life on video games")
      setName("gamer")
    }

    const updatePerson = () => {
      setPerson({name: "John", age: 32, hobby: "coding addict"})
    }



    const {name, age, hobby} = person
  return (
    <section>
      <h2>UseState leading example for Object</h2>
      <p>- Person -</p>
      <br />
      <span>Nume: {name1}</span> 
      <br />
      <span>Varsta: {age1} </span>
      <br />
      <span>Hobby : {hobby1}</span>
      <br />
      <button style={{marginTop: "1rem"}} onClick={changePerson}>Change person</button>

      <h2>Automatic batching</h2>

      <p>So react has an interesting thing, when you have multiple states that change something react will group them into a single update (batching) that meaning it will re-render only one time(automatic batching). If you call state update multiple times in a short period of time react will perform only one re-render for all updates. <br />
      React ensures that states will batch regardless of location and includes native event handlers asynchronous operations, timeouts and intervals
       </p>

       <h2>Use state example using an object</h2>

      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h4>Hobby: {hobby}</h4>
      <button onClick={updatePerson}>Show John</button>
    </section>
  )
}
export default UseStateWithObject