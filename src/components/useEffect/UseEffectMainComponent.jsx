import UseEffectBasics from "../useEffect/UseEffectBasics"
import MultipleEffects from "../useEffect/MultipleEffects"
import FetchData from "./fetching-data/FetchData"

const UseEffectMainComponent = () => {
  return (
    <section>
        <UseEffectBasics/>
        <MultipleEffects/>
        <FetchData />
    </section>
  )
}
export default UseEffectMainComponent