import { useEffect } from 'react';

const Person = ({ name, id, removePerson }, {}) => {
  // console.log('render');
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove person</button>
    </div>
  )
}
export default Person;
