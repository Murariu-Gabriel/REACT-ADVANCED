import "./App.css"
import MultipleReturnFetchData from "./components/conditionalRendering/MultipleReturnFetchData"
import MultipleReturns from "./components/conditionalRendering/MultipleReturns"
import ShortCircuit from "./components/conditionalRendering/ShortCircuit"
import ShortCircuitUsualUseCase from "./components/conditionalRendering/ShortCircuitUsualUseCase"
import ToggleChallenge from "./components/conditionalRendering/ToggleChallenge"
import FetchData from "./components/useEffect/fetching-data/FetchData"
import MultipleEffects from "./components/useEffect/MultipleEffects"
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
      <UseEffectBasics />
      <MultipleEffects />
      <FetchData />
      <MultipleReturns />
      <MultipleReturnFetchData />
      <ShortCircuit/>
      <ShortCircuitUsualUseCase/>
      <ToggleChallenge />
    </section>
  )
}

export default App
