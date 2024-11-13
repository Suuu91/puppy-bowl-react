import { useEffect, useState } from "react"
import { useParams, useNavigate} from "react-router-dom"


const SinglePuppy = () => {
  const [selectedPuppy, setSelectedPuppy] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getSelectedPuppy = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players/${id}`);
      const singlePuppyInfo = await response.json();
      setSelectedPuppy(singlePuppyInfo.data.player);
    } 

    getSelectedPuppy()
  }, [])
  
  console.log(selectedPuppy)

  const deletePuppy = () => {
    const response = fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${selectedPuppy.id}`, {
      method: "delete",
      headers: {
        "Content-Type":"application/json"
      }
    })
    navigate("/")
  }

  return (
    <>
      <img 
        src = {selectedPuppy.imageUrl} 
        alt = {`photo of ${selectedPuppy.name}`}
        width = "300"
        height = "450"
      />
      
      <h1>{`Name: ${selectedPuppy.name}`}</h1>
      <h1>{`Breed: ${selectedPuppy.breed}`}</h1>
      <h1>{`Status: ${selectedPuppy.status}`}</h1>

      <button onClick = {deletePuppy}>
        Delete Puppy
      </button>

      <button onClick = {() => {navigate (`/allpuppies`)}}>
        Back to All Puppies
      </button>
    </>
  )
}

export default SinglePuppy