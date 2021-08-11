export default function Footer({ page }) {
    return (
        <footer>
            {(page === "articles" || page === "projects") ? <div style={{ background: "#011F2E", height: "100%", position: "absolute" }} className="container"></div> : null}
            <svg id="mainfooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path id="mainfoot" fill="#011F2E" fillOpacity="1"
                    d="M0,32L180,192L360,256L540,96L720,224L900,192L1080,288L1260,256L1440,32L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z">
                </path>
            </svg>
            <h3>&copy; Created by : AIT LAASRI Aymane for <a href="https://github.com/khalidafla/jamstack-blog" target="_blank"><i
                className="fab fa-github fa-2x"></i></a></h3>
        </footer>
    )
}