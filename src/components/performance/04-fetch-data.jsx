import { useState, useEffect, useCallback } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section>
      <h3>UseCallback Common use</h3>
      <ul className="fetched-Users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id} className="user">
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>

        <br />

      <h2>UseMemo</h2>

      <p>
        Use memo is a hook that allows you to memoise the RESULt of a function call to avoid unnecessary recalculations when inputs don t change. It is used for optimizing expansive calculations or preventing excessive re-rendering of components.

        Bonus: A difference between useMemo and useCallback is
        <br />
        - that useMemo is used to memoise a RESULT
        <br />
        - useCallBack is used to memoise a CALLBACK FUNCTION 
      </p>
    </section>
  )
};
export default FetchData;
