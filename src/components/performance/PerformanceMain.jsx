import LowerState from "./lowerState/Index"
import LowerStateChallenge from "../performance/02-lower-state-challenge/index"
import FetchData from "./04-fetch-data"

const PerformanceMain = () => {
  return (
    <section>
      <LowerState />
      <LowerStateChallenge />
      <FetchData/>
    </section>
  )
}

export default PerformanceMain