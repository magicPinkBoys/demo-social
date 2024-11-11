import "../scss/navbar.css"

export default function Navbar() {
    return (<>
    <nav className="navlayer">
        <a href="/" className="logo-nav">Logo</a>
        <ul>
            <li>
            <a href="/">Database</a>
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