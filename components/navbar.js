export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-sidenav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#welcome-section">About Me</a></li>
                        <li><a href="#projects-section">My Projects</a></li>
                        <li><a href="#articles">My Articles</a></li>
                        <li style={{ float: 'right' }}><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-sidenav">
                <li><a href="#welcome-section">About Me</a></li>
                <li><a href="#projects-section">My Projects</a></li>
                <li><a href="#articles">My Articles</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    )
}