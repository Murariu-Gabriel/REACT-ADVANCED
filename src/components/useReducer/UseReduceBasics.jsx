import { useReducer } from "react"
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions"
import  reducer  from "./reducer"
import { data } from "../../data"


const defaultState = {
  people: data,
}


const UseReduceBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload:{id}})
  }

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" })
  }

  const reset = () => {
    dispatch({type: "RESET_LIST"})
  }

  return (
    <div>
      <h2>With no Use Reducer</h2>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length < 1 ? (
        <button onClick={reset} style={{ marginTop: "2rem" }}>
          Reset people
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}

      <p> 
        UseReducer allows us to manage more complex states and state transitions in components. It is an alternative to using the useState hook when you need more control over how state changes.
        <br />

        UseReducer handles everything outside the component

        <br />
        We can have better performance with useReducer if we have more complex logic that requires multiple state updates, useReducer can provide better performance by avoiding multiple re-renders caused by multiple useState calls.
        <br />

        With use reducer you can have more control over the state transitions and reliably rely on the previous state inside the reducer to calculate a new state. With useState you need to use the functional form of state setter to access the previous state and this can lead to potential issues. 
      </p>
    </div>
  )
}
export default UseReduceBasics
