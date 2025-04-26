import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ViewCharacters from './Components/ViewCharacters'
import HomePage from './Components/HomePage'
import EditCharacter from './Components/EditCharacter'
import IndividualCharacter from './Components/IndividualCharacter'
import CreateCharacter from './Components/CreateCharacter'
import NotFound from './Components/NotFound'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/characters" element={<ViewCharacters/>} ></Route>
        <Route path="/character/edit/:charID" element={<EditCharacter/>} ></Route>
        <Route path="/character/view/:charID" element={<IndividualCharacter/>} ></Route>
        <Route path="/character/create" element={<CreateCharacter/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
