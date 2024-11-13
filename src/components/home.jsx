import { useState } from "react"

const Home = () => {
  const [puppyName, setPuppyName] = useState(``)
  const [puppyBreed, setPuppyBreed] = useState(``)
  // const [puppyStatus, setPuppyStatus] = useState(``)
  const [puppyImage, setPuppyImage] = useState(``)
  // const [puppyTeamId, setPuppyTeamId] = useState(``)

  const submitform = async(event) => {
    event.preventDefault()
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players`, {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify ({
        name: puppyName,
        breed:puppyBreed,
        imageUrl: puppyImage
      })
    })
    const addedPuppy = await response.json()
    console.log(addedPuppy)
    setPuppyName(``)
    setPuppyBreed(``)
    // setPuppyStatus(``)
    setPuppyImage(``)
    // setPuppyTeamId(``)
  }

  return (
    <>
      <h2>Add Your Puppy Here !</h2>

      <section>
        <form onSubmit={submitform}>
          <input 
            type = "text" 
            placeholder="Puppy Name"
            onChange={(event) => {
              setPuppyName(event.target.value)
              console.log(event.target.value)
            }}
            value = {puppyName}
          />
          <input 
            type = "text" 
            placeholder="Puppy Breed"
            onChange={(event) => {
              setPuppyBreed(event.target.value)
              console.log(puppyBreed)
            }}
            value = {puppyBreed}
          />
           {/* <input 
            type = "text" 
            placeholder="Puppy Status"
            onChange={(event) => {
              setPuppyStatus(event.target.value)
              // console.log(puppyStatus)
            }}
            value = {puppyStatus}
          /> */}
          <input 
            type = "text" 
            placeholder="Puppy Image URL"
            onChange={(event) => {
              setPuppyImage(event.target.value)
              // console.log(puppyImage)
            }}
            value = {puppyImage}
          />
          {/* <input 
            type = "number" 
            placeholder="Team ID"
            onChange={(event) => {
              setPuppyTeamId(event.target.value)
              // console.log(puppyTeamId)
            }}
            value = {puppyTeamId}
          /> */}
          <button>Add</button>
        </form>
      </section>
    </>
  )
}

export default Home