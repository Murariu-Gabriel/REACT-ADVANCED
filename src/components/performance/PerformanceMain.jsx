import LowerState from "./lowerState/Index"
import LowerStateChallenge from "../performance/02-lower-state-challenge/index"
import FetchData from "./04-fetch-data"
import React_18 from "./useTransitionAndSuspenseAPI/react_18"

const PerformanceMain = () => {
  return (
    <section>
      <LowerState />
      <LowerStateChallenge />
      <FetchData />
      <React_18 />
    </section>
  )
}

export default PerformanceMain