const ErrorExample = () => {

    let count = 0

    const error = () => {
        count++

        console.log(count)
    }

    // Here is an other option for the function, we use callback to call it directly in the button eventListener, that might or not be useful because we might need to reuse functions sometimes

    // <button onClick={() => {
    //     console.log(count)
    //     count ++
    // }}>Increase count</button>

 
    return (
    <section>
        <h2>Example of why we need state</h2>

        <p>Here we have a button and a count variable, the button has an event listener which increments on click count. At the same time we are displaying through jsx our count variable. The cath here is that our count variable is updating, we can see that in the console but on our screen it doesn't. That happens because we don't trigger any reRender nor change through DOM anything. </p>

        <p>
        {count}
        </p>

        <button onClick={error}>Increase count</button>

    </section>
  )
}
export default ErrorExample