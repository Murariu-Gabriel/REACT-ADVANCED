import { useReducer } from "react"
import { data } from "../../data"

const CLEAR_LIST = "CLEAR_LIST"
const RESET_LIST = "RESET_LIST"
const REMOVE_ITEM = "REMOVE_ITEM"

const defaultState = {
    people: data,
}

const reducer = (state, action) => {
  if(action.type === CLEAR_LIST){
    return { ... state, people: []}
  }

  if(action.type === RESET_LIST){
    return {... state, people: data}
  }

  if(action.type === REMOVE_ITEM){
    let newPeople = state.people.filter((person) => person.id !== action.payload.id)
    return {...state, people: newPeople}
  }

  throw new Error(`No Matching "${action.type}" - action`)
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
    </div>
  )
}
export default UseReduceBasics