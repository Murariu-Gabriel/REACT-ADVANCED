import "./App.css"

import {
  UseStateMainComponent,
  UseEffectMainComponent,
  ConditionalRenderingMainComponent,
  List,
  FormsMainComponent,
} from "./index"

function App() {
  return (
    <section>
      <UseStateMainComponent />
      <UseEffectMainComponent />
      <ConditionalRenderingMainComponent />
      <List/>
      <FormsMainComponent/>
    </section>
  )
}

export default App
