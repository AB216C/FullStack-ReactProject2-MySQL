
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateCharacter() {

  const [name,setName]=useState("")
  const [alias,setAlias]=useState("")
  const [alignment, setAlignment]=useState("")
  const [image_url, setImage_url]=useState("")
  const [powers, setPowers] =useState("")
  const [validation,setValidation]=useState(false)
  const navigate = useNavigate()

  const handleSubmit=(event)=>{

    event.preventDefault();

    const characterData = {name, alias, alignment, powers,image_url}

      fetch('http://127.0.0.1:5000/characters', {

        method: "POST",

        headers: {"Content-type":"application/json"},
  
        body: JSON.stringify(characterData)

      })

      .then((response)=> {
        alert(`${characterData.name} created succesfully`)
        navigate("/characters")

      }
      )

      .catch((error)=>console.log("Unable to create character", error))
  
  }

  return(
    <div>
      <p>This is Create Character Page</p>

      <form onSubmit={handleSubmit} >

        <div>
          <label htmlFor="name">Name: </label>
          <input  className="form-control" type="text" id="name" name="name" value={name} onMouseDown={()=>setValidation(true)} onChange={event=>setName(event.target.value)}required />
          {name.length===0&&validation && <span> Please, Enter Character's name</span>}
        </div>

        <div>
          <label htmlFor="alias"> Alias: </label>
          <input  className="form-control" type="text" id="alias" name="alias" value={alias} onChange={event=>setAlias(event.target.value)}required />
        </div>

        <div>
          <label htmlFor="name">Alignment: </label>
          <input  className="form-control" type="text" id="alignment" value={alignment} onMouseDown={()=>setValidation(true)} onChange={event=>setAlignment(event.target.value)}required />
          {alignment.length===0&&validation && <span> Make sure you choose "villain" or "hero"</span>}
        </div>

        <div>
          <label htmlFor="name">Powers: </label>
          <input  className="form-control" type="text" id="powers" value={powers} onMouseDown={()=>setValidation(true)} onChange={event=>setPowers(event.target.value)}required />
          {powers.length===0&&validation && <span> Please, Enter Character's powers</span>}
        </div>

        <div>
          <label htmlFor="name">Image_url: </label>
          <input  className="form-control" type="text" id="image_url" value={image_url} onMouseDown={()=>setValidation(true)} onChange={event=>setImage_url(event.target.value)}required />
          {image_url.length===0&&validation && <span> Please insert image URL of your choice</span>}
        </div>

        <button type="submit" >CREATE</button>

      </form>

    </div>
  )
}

export default CreateCharacter



