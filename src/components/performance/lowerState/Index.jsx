import { useCallback } from 'react';
import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const removePerson = useCallback((id)=>{
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }, [people])


  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>

      <List people={people} removePerson={removePerson} />

      <p>
        The idea here is that everything re-renders because the state changes
        <br />
        <br />
        In this component we pass another component list that renders for us a
        list of people. The idea is that if we want to not re-render list every
        time we click on count we need to use memo in the list component which
        we do and it works but here is a catch, if we implement a removePerson
        function list is still going to re-render because we have this new
        function in the component that we pass to list and that is considered a
        prop change because every time we click on counter the function is
        created and passed. This would not happen if the function would not be
        passed. So to fix that we need to use useCallBack to memoize the
        function that when we click on counter the function is remembered and
        not created from scratch.
      </p>

    </section>
  )
};
export default LowerState;
