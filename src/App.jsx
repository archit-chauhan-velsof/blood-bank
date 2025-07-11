import Login from "./components/login/Index"
import { BrowserRouter } from "react-router-dom"
import Register from "./components/register/Index"
import RoutesIndex from "./routes/Index"

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesIndex/>   
      </BrowserRouter>
    </>
  )
}

export default App
