import Link from "next/link"

export default function Navbar({ page }) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-sidenav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {page == "home" ? <li className="active"><Link href="/"><a>Home</a></Link></li> : <li><Link href="/"><a>Home</a></Link></li>}
                        {page == "aboutme" ? <li className="active"><Link href="/aboutme"><a>About Me</a></Link></li> : <li><Link href="/aboutme"><a>About Me</a></Link></li>}
                        {page == "projects" ? <li className="active"><a>My Projects</a></li> : <li><a>My Projects</a></li>}
                        {page == "articles" ? <li className="active"><a>My Articles</a></li> : <li><a>My Articles</a></li>}
                        {page == "contact" ? <li className="active" style={{ float: 'right' }}><a>Contact Me</a></li> : <li style={{ float: 'right' }}><a>Contact Me</a></li>}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav no-autoinit" id="mobile-sidenav">
                <li style={{ backgroundColor: "#FE4A49" }}><a style={{ width: "100%", display: "flex", justifyContent: "center" }} className="sidenav-close"><i className="fas fa-times fa-2x"></i> Close</a></li>
                {page == "home" ? <li className="active"><Link href="/"><a className="sidenav-close">Home</a></Link></li> : <li><Link href="/"><a className="sidenav-close">Home</a></Link></li>}
                {page == "aboutme" ? <li className="active"><Link href="/aboutme"><a className="sidenav-close">About Me</a></Link></li> : <li><Link href="/aboutme"><a className="sidenav-close">About Me</a></Link></li>}
                {page == "projects" ? <li className="active"><a className="sidenav-close">My Projects</a></li> : <li><a className="sidenav-close">My Projects</a></li>}
                {page == "articles" ? <li className="active"><a className="sidenav-close">My Articles</a></li> : <li><a className="sidenav-close">My Articles</a></li>}
                {page == "contact" ? <li className="active"><a className="sidenav-close">Contact Me</a></li> : <li><a className="sidenav-close">Contact Me</a></li>}
            </ul>
        </div>
    )
}