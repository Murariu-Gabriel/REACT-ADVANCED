import "./App.css"
import {
  MultipleReturnFetchData,
  MultipleReturns,
  ProjectStructure,
  ShortCircuit,
  ShortCircuitUsualUseCase,
  ToggleChallenge,
  UserChallenge,
  FetchData,
  MultipleEffects,
  UseEffectBasics,
  ErrorExample,
  InfiniteStateLoop,
  SetFunctionGotcha,
  UseStateBasics,
  UseStateWithArray,
  UseStateWithObject,
  List,
  ControlledInputs,
  FormUserChallenge,
  MultipleInputs,
} from "./index"

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
      <ShortCircuit />
      <ShortCircuitUsualUseCase />
      <ToggleChallenge />
      <UserChallenge />
      <ProjectStructure />
      <List />
      <ControlledInputs />
      <FormUserChallenge />
      <MultipleInputs />
    </section>
  )
}

export default App
