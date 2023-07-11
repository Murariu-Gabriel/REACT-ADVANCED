const Person = ({ name, deletePerson, id }) => {
  console.log(id)
  return (
    <div key={id}>
      <h4>{name}</h4>
      <button onClick={() => deletePerson(id)}>Delete</button>
    </div>
  )
}
export default Person;
