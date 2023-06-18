import { useState } from "react"

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  const toggle = () => {
    if(showAlert){
     setShowAlert(false)
     return
      // console.log("true");
    }

    setShowAlert(true)
    // console.log("false")
  }

  return (
    <section>
      <h2>Toggle Challenge</h2>
      {showAlert && <HelloUser />}
      <button
        // onClick={toggle}
        onClick={() => {setShowAlert(!showAlert)}}
      >
        Show Alert
      </button>
    </section>
  )
}

const HelloUser = () => {
  return <h2>Hello user</h2>
}

export default ToggleChallenge