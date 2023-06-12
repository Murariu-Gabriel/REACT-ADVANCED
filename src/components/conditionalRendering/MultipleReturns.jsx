import { useEffect, useState } from "react"

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true)

    // Plain JavaScript multiple return example
    const simpleMultipleReturns = (name) => {
        if(name){
            return `Hello ${name}`
        }

        return `Hello there`
    }

    const nameResponse = simpleMultipleReturns("Daniel")
    // console.log(nameResponse)

    const emptyValueResponse = simpleMultipleReturns()
    // console.log(emptyValueResponse)


    // React example

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
        }, 3000)
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    
    return (
        <section>
            <h2>Multiple Returns</h2>

            <p>Starting with plain JavaScript multiple returns are found inside a function. We can have return inside conditions. For example we can return inside an if statement but not provide an else, instead we set up the function return to return the logic of the else <br />
            On another note if your function does not have a value in your explicit return or no return it will return undefined by default. <br />
            Implicit returns are found in arrow functions. Simply the arrow function returns without the need of writing return BUT that happens only in the case of one liners and it also the returned value needs strictly to be a value or value result of some logic else it won't work. You also can t store variables in it no'r use em. If you want to do variable logic you will need to use curly brackets and explicit return inside
            </p>
        </section>
    )
}

export default MultipleReturns