import ErrorExample from "./ErrorExample"
import InfiniteStateLoop from "./InfiniteStateLoop"
import SetFunctionGotcha from "./SetFunctionGotcha"
import UseStateBasics from "./UseStateBasics"
import UseStateWithArray from "./UseStateWithArray"
import UseStateWithObject from "./UseStateWithObject"


const UseStateMainComponent = () => {
  return (
    <section>
        <ErrorExample />
        <InfiniteStateLoop/>
        <SetFunctionGotcha/>
        <UseStateBasics/>
        <UseStateWithArray/>
        <UseStateWithObject/>
    </section>
  )
}
export default UseStateMainComponent