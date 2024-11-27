import "../scss/navbar.css"
import { Link } from "react-router-dom";
import "../../public/picture/logo-social-graph.png"

export default function Navbar() {
    return (<>
    <nav className="navlayer">
        {/* <a href="/" className="logo-nav">Logo</a> */}
        <img className="logo-nav" src="../../public/picture/logo-social-graph.png" />
        <ul>
            <li>
            <a href="/">Database</a>
            {/* <Link to="/graph">Database</Link> */}
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
            <a href="/">Registration</a>
            </li>
        </ul>
    </nav>
    </>);
}