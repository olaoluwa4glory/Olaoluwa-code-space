import About from "./components/About"
import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
// Function Based Component
function App() {
  return (
    <div>
      <About/>
      <FunctionalComponent/>
      {/* Passing a Props to a component */}
      <ClassComponent name = 'Oluwabukolami Abigail'/>
     
    </div>
  )
}

export default App

