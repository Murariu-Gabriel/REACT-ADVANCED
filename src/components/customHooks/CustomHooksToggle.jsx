import useToggle from "./useToggle"

const CustomHooksToggle = () => {
    const {show, toggle} = useToggle(false)
  return (
    <section>
        <h3>{show ? "True, toggle" : "False, toggle"}</h3>
       <button onClick={toggle}>click</button>
    </section>
  )
}
export default CustomHooksToggle