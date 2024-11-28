import "../scss/navbar.css"

export default function Navbar() {
    return (<>
    <nav className="navlayer">
        <a href="/" className="">
        <img className="logo-nav" src="/picture/logo-social-graph.png" />
        </a>
        
        <ul>
            <li>
            <a href="/graph">Database</a>
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