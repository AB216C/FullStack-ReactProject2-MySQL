import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavigationPage from "./NavigationPage"

function IndividualCharacter() {

  const [characterdata, setCharacterData] = useState(null)
  const {charID} = useParams()
  const navigate = useNavigate()

  const handleEditCharacter=(id)=>{

    navigate("/character/edit/"+id)
    
  }

  useEffect(()=> {

    fetch(`http://127.0.0.1:5000/characters/${charID}`)
    // fetch('http://127.0.0.1:5000/characters/'+charID)
    .then((res)=>res.json())
    .then((data)=>setCharacterData(data))
    .catch((error)=>console.log("Unable to fetch URL", error))

  },[])


  return(
    <div>
      <NavigationPage/>
      <p>This is an individual Character page</p>


      {characterdata && 
      <ul>
        <li> <strong>ID:</strong> {characterdata.id}</li>
        <li> <strong>Name:</strong> {characterdata.name}</li>
        <li> <strong>Alias:</strong> {characterdata.alias}</li>
        <li>{characterdata.image_url && <img src={characterdata.image_url} />}</li>
        <li> <strong>Alignment:</strong> {characterdata.alignment}</li>
        <li> <strong>Powers:</strong> {characterdata.powers}</li>

        <button onClick={()=>handleEditCharacter(characterdata.id)} >Edit Character</button>
        <button>Delete Character</button>

        </ul>}
    </div>
  )
}

export default IndividualCharacter