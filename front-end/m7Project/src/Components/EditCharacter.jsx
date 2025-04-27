
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditCharacter() {

  const [name,setName]=useState("")
  const [alias,setAlias]=useState("")
  const [alignment, setAlignment]=useState("")
  const [image_url, setImage_url]=useState("")
  const [powers, setPowers] =useState("")
  const [validation,setValidation]=useState(false)
  const navigate = useNavigate()

  const {charID} = useParams()
  console.log(charID)

  const handleBackButton=()=> {
    navigate("/characters")
  }

  useEffect(()=> {

    fetch(`http://127.0.0.1:5000/characters/${charID}`)
    .then((response)=>response.json())
    .then((data)=>{
      setName(data.name)
      setAlias(data.alias)
      setAlignment(data.alignment)
      setPowers(data.powers)
      setImage_url(data.image_url)
    })
    .catch((error)=>console.log("unable to fetch URL", error))

  },[])

  const handleSubmit=(event)=>{

    event.preventDefault();

    const characterData = {name, alias, alignment, powers,image_url}

      fetch('http://127.0.0.1:5000/characters/'+charID, {

        method: "PUT",

        headers: {"Content-type":"application/json"},
  
        body: JSON.stringify(characterData)

      })
      .then((response)=> {
        alert(`${characterData.name} updated successfully`)
        navigate("/characters")
      })

      .catch((error)=>console.log("Unable to edit character", error))
  
  }

  return(
    <div>

    <h1 className="bg-dark text-light px-2 py-5">UPDATE THE CHARACTER OF YOUR CHOICE</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name">Name: </Form.Label>
        <Form.Control  className="form-control" type="text" id="name" name="name" value={name} onMouseDown={()=>setValidation(true)} onChange={event=>setName(event.target.value)}required />
        {name.length===0&&validation && <span> Please, Enter Character's name</span>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="alias"> Alias: </Form.Label>
        <Form.Control  className="form-control" type="text" id="alias" name="alias" value={alias} onChange={event=>setAlias(event.target.value)}required />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="name">Alignment: </Form.Label>
        <Form.Control  className="form-control" type="text" id="alignment" value={alignment} onMouseDown={()=>setValidation(true)} onChange={event=>setAlignment(event.target.value)}required />
        {alignment.length===0&&validation && <span> Make sure you choose "villain" or "hero"</span>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="name">Powers: </Form.Label>
        <Form.Control  className="form-control" type="text" id="powers" value={powers} onMouseDown={()=>setValidation(true)} onChange={event=>setPowers(event.target.value)}required />
        {powers.length===0&&validation && <span> Please, Enter Character's powers</span>}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="name">Image_url: </Form.Label>
        <Form.Control  className="form-control" type="text" id="image_url" value={image_url} onMouseDown={()=>setValidation(true)} onChange={event=>setImage_url(event.target.value)}required />
        {image_url.length===0&&validation && <span> Please insert image URL of your choice</span>}
      </Form.Group>

      <Button type="submit" className="btn btn-dark px-4 my-4 py-2 fs-3" >UPDATE</Button>

    </Form>

    <Button onClick={()=>handleBackButton()} className="btn btn-info my-4 py-3 px-3 fw-bold fs-3" >Back-to-Characters</Button>

    </div>
  )
}

export default EditCharacter