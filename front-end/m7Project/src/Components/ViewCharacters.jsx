import { useEffect, useState } from "react"
import NavigationPage from "./NavigationPage"
import { useNavigate } from "react-router-dom"

function ViewCharacters(){

  const navigate = useNavigate()

  const [characters, setCharacters]= useState([])

  const handleDetails =(id)=> {
    navigate("/character/view/"+id)
  }

  const handleCreateCharacter =()=> {
    navigate("/character/create")
  }

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/characters')
    .then((res)=>res.json())
    .then((data)=>setCharacters(data))
    .catch((error)=>console.log("Unable to fetch URL",error))
  },[])

  return(
    <div>
      <NavigationPage/>

      {
        characters&& characters.map((character)=>
          <ul key={character.id} >
            <li>{character.name}</li>
            <button onClick={()=>handleDetails(character.id)} >Get Details </button>
          </ul>
        )
      }

      <button onClick={()=>handleCreateCharacter()} >Create a Character</button>

    </div>
  )
}

export default ViewCharacters