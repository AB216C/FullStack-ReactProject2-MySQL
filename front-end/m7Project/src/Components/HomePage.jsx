/*
## Tools used to run front end
  cd m7Project
  npm install
  npm run dev
  npm install 
  npm install react-router-dom axios
  npm install react-bootstrap bootstrap 
*/

import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationPage from "./NavigationPage"
function HomePage() {


  return(

    <div className="bg-info text-center px-5 py-5">
      <NavigationPage/>

      <h1 className="fw-bolder my-5 fs-1">Welcome to the world of famous Marvel Characters. </h1>
      <p className="fw-bolder my-5 fs-1">Take your time and explore </p>
    </div>
  )
}

export default HomePage