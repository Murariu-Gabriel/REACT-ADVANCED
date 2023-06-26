import { useState } from "react"

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

   const handleSubmit = (e) => {
     e.preventDefault()
     console.log(user)
   }

  return (
    <section>
      <h2> Second user challenge</h2>

      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <p>Very interesting, so we make a useState for users in which we pass an object with values that represent our input names. We have the handleChange function this function updates dynamically our object with the data introduced in our inputs. What it does is: Makes a new copy of our old user and then using [e.target.name]: e.target.value. All inputs use the same function so it means that every time it s called the name of the input is going to decide which key in the object gets a new value. </p>
    </section>
  )
}
export default MultipleInputs

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
