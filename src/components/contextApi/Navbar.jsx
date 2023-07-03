import { useState } from "react"
import NavLinks from "./NavLinks"

const Navbar = () => {
const [user, setUser] = useState({name: "Daniel"})
const logout = () => {
    setUser(null)
}

  return (
    <nav>
        <NavLinks user={user} logout={logout}  />
    </nav>
    )
}
export default Navbar