const ProjectStructure = () => {
  return (
    <section>
      <h2>ProjectStructure: Named Exports</h2>

      <p>
        To name export a component all you have to do is write export in front
        of it na then in the selected folder at top: import {`{ Component }`}{" "}
        from "..folder/file"
        <br />
        With this type of importing you need to write the name of the component
        exactly how it is.
        <br />
        With this method we can make a big index file with all the imports and
        then export them destructured{" "} <br />
        {`import Home from './Home';`} <br /> 
        {`import About from './About'`} <br />

        {`export { Home, About };`} <br />

        And in wanted folder <br />
         import {`{ Home, About } from 'pathToFolder/Pages`}
      </p>
    </section>
  )
}
export default ProjectStructure