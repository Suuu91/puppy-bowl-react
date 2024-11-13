import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const GetAllPuppies = () => {
  const [allPuppy, setAllPuppy] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getAllPuppies = async() => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`)
      const allPuppyInfo = await response.json()
      setAllPuppy(allPuppyInfo.data.players)
      console.log(allPuppy)
    }
    getAllPuppies()
  },[])
  
  return (
    <>
      <section id="mainsection">
      {
        allPuppy.map((singlepuppy) => {
          return (
            <section 
              id="info"
              onClick = {()=> {navigate (`/allpuppies/${singlepuppy.id}`)}}
              key = {singlepuppy.id}
            >
              <img 
                src = {singlepuppy.imageUrl}
                alt = {`photo of ${singlepuppy.name}`}
                height="400"
                width="300"
              />
              <ul>{singlepuppy.name}</ul>
            </section>
          )
        })
      }
      </section>
    </>
  )
}

export default GetAllPuppies