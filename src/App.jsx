import "./App.css"
import UseEffectBasics from "./components/useEffect/UseEffectBasics"
import ErrorExample from "./components/useState/ErrorExample"
import InfiniteStateLoop from "./components/useState/InfiniteStateLoop"
import SetFunctionGotcha from "./components/useState/SetFunctionGotcha"
import UseStateBasics from "./components/useState/UseStateBasics"
import UseStateWithArray from "./components/useState/UseStateWithArray"
import UseStateWithObject from "./components/useState/UseStateWithObject"

function App() {
  return (
    <section>
      <ErrorExample />
      <UseStateBasics />
      <UseStateWithArray />
      <UseStateWithObject />
      <SetFunctionGotcha />
      <InfiniteStateLoop />
      <UseEffectBasics/>
    </section>
  )
}

export default App
