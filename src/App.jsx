import { Route, Routes } from "react-router-dom"

import GetAllPuppies from "./components/allpuppies.jsx"
import Navbar from "./components/navbar.jsx"
import Home from "./components/home.jsx"
import SinglePuppy from "./components/singlepuppy.jsx"

const App = () => {

  return (
    <>
      <h1>Puppy Bowl</h1>

      <Navbar />

      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/allpuppies" element = {<GetAllPuppies />}/>
        <Route path = "/allpuppies/:id" element = {<SinglePuppy />}/>
      </Routes>
    </>
  )
}

export default App
