import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} />


      <p>The idea here is that everything re-renders because the state changes</p>
    </section>
  );
};
export default LowerState;
