import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <section id = "nav">
        <Link to={`/`}>Home</Link>
        <Link to={`/allpuppies`}>All Puppy List</Link>
      </section>
    </>
  )
}

export default Navbar