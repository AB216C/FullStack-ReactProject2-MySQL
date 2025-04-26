import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ViewCharacters from './Components/ViewCharacters'
import HomePage from './Components/HomePage'
import EditCharacter from './Components/EditCharacter'
import IndividualCharacter from './Components/IndividualCharacter'
import CreateCharacter from './Components/CreateCharacter'
import NavigationPage from './Components/NavigationPage'

function App() {

  return (
    <div>
      <p>Welcome to the App page</p>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/characters" element={<ViewCharacters/>} ></Route>
        <Route path="/character/edit/:charID" element={<EditCharacter/>} ></Route>
        <Route path="/character/view/:charID" element={<IndividualCharacter/>} ></Route>
        <Route path="/character/create" element={<CreateCharacter/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
