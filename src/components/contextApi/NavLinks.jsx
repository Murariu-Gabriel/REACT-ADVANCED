import UserContainer from "./UserContainer"

const NavLinks = ({user, logout}) => {
   
  return (
    <div className="context-api-div">
      <ul className="context-api-nav">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}
export default NavLinks