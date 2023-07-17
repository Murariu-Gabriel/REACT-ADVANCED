import { useState, useTransition } from "react"

const React_18 = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/abstract-user-icon-3.jpg" alt="" style={{width: "50px"}}/>
          </div>
        )
      })
      setItems(newItems)
    })
  }

  return (
    <section>
      <h2>UseTransition</h2>
      <p>Use transition let s up update components without blocking the UI
        <br /> <br />
        In this example if we would not have used useTransition, every time we inserted a letter in the search input the component would freeze until the result would load.
      </p>

      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        "Loading..."
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem"
          }}
        >
          {items}
        </div>
      )}
    </section>
  )
}
export default React_18