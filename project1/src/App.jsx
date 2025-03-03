import { ProfileCard } from "./components/Card"
import Login from "./components/Login"
import Home from "./components/pages/Home"
import Register from "./components/Register"
import {Routes,Route} from 'react-router-dom'
function App() {
  

  return (
  <>
     <Routes>
        <Route path="/" element={Register}/>
     </Routes>

  </>
  )
}

export default App
