import Person from './Person';

const List = ({ people, deletePerson}) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} deletePerson={deletePerson} {...person} />
        )
      })}
    </div>
  )
}
export default List;
