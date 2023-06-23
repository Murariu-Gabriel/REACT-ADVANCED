import { people } from "../../../data"
import Person from "../Person"

const List = () => {
  return (
    <section>
      <h2>Setup Challenge </h2>

      {people.map(person => {
        return <Person key={person.id} {...person} />
      })}

      <p>So, here we have optional chaining. Optional chaining is this ? question mark that helps us avoid errors and at the same time is is an alternative for && and ||. Before searching for something we initiate ? this will return undefined if what we are looking for does not exist and we can use || operator to return a default value that is not undefined if need be.</p>

      <p>I think this is used for objects. If I try to get a value from an object or access it i will get an error bu optional chaining prevents that by checking if it exists and after that if it does not it returns undefined which is useful because again we can set default value</p>
    </section>
  )
}
export default List