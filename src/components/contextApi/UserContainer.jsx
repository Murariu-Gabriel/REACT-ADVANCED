const UserContainer = ({user, logout}) => {

  return (
    <>
      {user ? (
        <div className="user-container">
            <p>Hello {user.name}</p>
           <button onClick={logout}> Log out</button>
        </div>
       ) 
      :  <p>Please log in</p>

      }
    </>
  )
}
export default UserContainer