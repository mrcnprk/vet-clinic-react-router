import Navigation from '../components/Navigation'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const Header = () => {
    return (
        <header className="pageHeader">
            <section className="logo">
                <Link to="/"><img src={logo} alt="logo" className="brand"/></Link>
            </section>
            <nav className="pageNav">
                {<Navigation/>}
            </nav>
      </header>
     );
}

export default Header;