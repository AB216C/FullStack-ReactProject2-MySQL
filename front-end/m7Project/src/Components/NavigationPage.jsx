import {Link} from 'react-router-dom'

function NavigationPage() {

  return(


    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/characters">View Characters</Link> </li>
      </ul>
    </nav>
  )
}

export default NavigationPage