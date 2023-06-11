import { useEffect, useState } from "react"
import GithubUser from "./GithubUser"

const url = "https://api.github.com/users"

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchedData()
  }, [])

  console.log(users)
  return (
    <section className="data-container">
      <h2>Fetching Data by Fetching github users</h2>
      <ul className="fetched-Users">
      {users.map((user) => {
        const {login} = user

        return <GithubUser {...user} key={login} />
      })}
      </ul>
    </section>
  )
}

export default FetchData
