import { useState } from "react"

const ShortCircuit = () => {
    const [truthy, setTruthy] = useState("string")
    const [falsy, setFalsy] = useState(0)

  return (
    <section>
      <h2>Short Circuit</h2>
      <p>Here we use || operator</p>
      <p>
        First value in short circuit is truthy{" "}
        <strong>{truthy || falsy}</strong>
        <br />
        First value in short circuit is false <strong>{falsy || truthy}</strong>
        <br />
        <br />
        So here we can see that no matter the order it will return the truthy
        value
        <br />
        <br />
      </p>
      <p>Here we use && operator</p>
      <p>
        First value in short circuit is truthy{" "}
        <strong>{truthy && falsy}</strong>
        <br />
        First value in short circuit is false <strong>{falsy && truthy}</strong>
        <br />
        <br />
        So here we can see that no matter the order it will return the falsy
        value
        <br />
        <br />
      </p>

      <p>
        Here OR will return the hello world value if falsy <br />
        If truthy it will return the state value{" "}
      </p>
      <h4>Falsy OR : {falsy || "hello world"}</h4>
      <h4 style={{ margin: "none" }}>Truthy OR : {truthy || "hello world"}</h4>

      <p>
        Here and will return the hello world value if truthy <br />
        If falsy it will return the state value{" "}
      </p>
      <h4>Falsy AND : {falsy && "hello world"}</h4>
      <h4>Truthy AND : {truthy && "hello world"}</h4>

      <p>
        So on short AND returns truthy value if it is truthy <br />
        And && returns falsy value if is falsy
      </p>
    </section>
  )
}
export default ShortCircuit