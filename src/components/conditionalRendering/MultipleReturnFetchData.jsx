import { useState, useEffect } from "react"

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturnFetchData = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                setIsError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        getUser()
    }, [])


    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>Looks like there is an error...</h2>
    }

  return (
    <section>
      <h2>Multiple Returns Fetch Data</h2>
      <p>
        Firstly one important thing to mention is that useEffect can t be used
        with async, that means we need to make a new function inside it that
        will handle our promise
      </p>

      <p> The trick here is that we hve 3 states, one for loading one for error and one for fetch data. Inside our fetching function we have a try catch block if we don t catch any errors we will load our data. No matter what our loading will display first until our fetching is done and after that if we don t get any error we will display our data.
      </p>

      <div>
        <img
          style={{ width: "150px", borderRadius: "25px" }}
          src={user.avatar_url}
          alt={user.name}
        />
        <h2>{user.name}</h2>
        <h4>works at {user.company}</h4>
        <p>{user.bio}</p>
      </div>
    </section>
  )
}

export default MultipleReturnFetchData
