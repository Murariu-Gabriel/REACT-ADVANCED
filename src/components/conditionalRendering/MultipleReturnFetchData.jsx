import { useState, useEffect } from "react"

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturnFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const resp = await fetch(url)
        console.log(resp)

        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const user = await resp.json()
        setUser(user)
      } catch (error) {}
      setIsLoading(false)
      //usual way of fetching data
      // try {
      //     const response = await fetch(url)
      //     const data = await response.json()
      //     console.log(data)
      //     setUser(data)
      // } catch (error) {
      //     setIsError(true)
      //     console.log(error)
      // }
      // setIsLoading(false)
    }
    getUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Looks like there is an error...</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <section>
      <h2>Multiple Returns Fetch Data</h2>
      <p>
        Firstly one important thing to mention is that useEffect can t be used
        with async, that means we need to make a new function inside it that
        will handle our promise
      </p>

      <p>
        {" "}
        The trick here is that we hve 3 states, one for loading one for error
        and one for fetch data. Inside our fetching function we have a try catch
        block if we don t catch any errors we will load our data. No matter what
        our loading will display first until our fetching is done and after that
        if we don t get any error we will display our data.
      </p>

      <div>
        <img
          style={{ width: "150px", borderRadius: "25px" }}
          src={avatar_url}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>works at {company}</h4>
        <p>{bio}</p>
      </div>

      <p>
        Another thing to keep in mind is that our fetch does not check for
        errors in the range of 400 or 500 if we don t check for it this
        component will be stuck on loading. The promise will resolve because it
        gets a response meaning id does not see the errors
      </p>

      <p>
        And another important thing is that when you have multiple condition you
        must must must destructure state values above the return that uses them
        not before the other returns because it will return null and error
      </p>

      <p>Fetch is not meant to be used in the dependency array of the useEffect, don't do that it will trigger an infinite loop</p>

      <h2>Hook rules</h2>
      
      <p>It is very important to keep in mind that hooks can't be called conditionally. The position of hooks are mainly at the top of your component</p>
    </section>
  )
}

export default MultipleReturnFetchData
