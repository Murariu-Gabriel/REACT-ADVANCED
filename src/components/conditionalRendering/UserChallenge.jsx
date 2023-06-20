import { useState } from "react"

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: "Daniel",
      age: 25,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <section>
      <h2>User challenge</h2>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button onClick={logout} >Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button onClick={login} >Login</button>
        </div>
      )}
    </section>
  )
}
export default UserChallenge
