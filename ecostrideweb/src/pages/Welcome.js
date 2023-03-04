import logo from '../ecostridelogo.png';
import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className="App">
            <header className="App-header">
            <p>WELCOME TO</p>
            <img src={logo} className="App-logo" alt="logo" />
            
            <Link to="/home" style = "">
                <a href="#intro" class="btn">Get Started</a>
                {/* <button type="button">
                     work
               </button> */}
            </Link>
            </header>
        </div>
    )
}
export default Welcome;