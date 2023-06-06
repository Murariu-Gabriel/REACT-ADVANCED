import "./App.css"
import ErrorExample from "./useState/ErrorExample"
import SetFunctionGotcha from "./useState/SetFunctionGotcha"
import UseStateBasics from "./useState/UseStateBasics"
import UseStateWithArray from "./useState/UseStateWithArray"
import UseStateWithObject from "./useState/UseStateWithObject"

function App() {
  return (
    <section>
      <ErrorExample />
      <UseStateBasics />
      <UseStateWithArray />
      <UseStateWithObject/>
      <SetFunctionGotcha/>
    </section>
  )
}

export default App
