import ShortCircuit from "./ShortCircuit"
import ShortCircuitUsualUseCase from "./ShortCircuitUsualUseCase"
import ToggleChallenge from "./ToggleChallenge"
import UserChallenge from "./UserChallenge"
import ProjectStructure from "./ProjectStructure"
import MultipleReturns from "./MultipleReturns"
import MultipleReturnFetchData from "./MultipleReturnFetchData"

const ConditionalRenderingMainComponent = () => {
  return (
    <section>
        <ShortCircuit/>
        <ShortCircuitUsualUseCase />
        <ToggleChallenge/>
        <UserChallenge/>
        <ProjectStructure/>
        <MultipleReturns/>
        <MultipleReturnFetchData/>
    </section>
  )
}
export default ConditionalRenderingMainComponent