import Head from "next/head"
import styles from '../components/aboutme.module.css'
import Layout from '../components/layout'
import classNames from "classnames"

export default function aboutMe() {
    return (
        <Layout page={"aboutme"}>
            <Head>
                <title>About Me</title>
            </Head>
            <div className="leftscrollpsy hide-on-small-only m3 l2 m2">
                <ul className="section table-of-contents" style={{ position: "fixed" }}>
                    <li><a href="#aboutmediv">Introduction</a></li>
                    <li><a href="#hobbiesdiv">Hobbies</a></li>
                    <li><a href="#experiencediv">Skills</a></li>
                </ul>
            </div>
            <div id="aboutmediv" className={classNames(styles.aboutmediv, "container valign-wrapper section scrollspy")}>
                <div className={classNames(styles.introdiv, "row")}>
                    <div className="col s12 m4">
                        <img className="responsive-img" src="./images/avatar_aymane.png" alt="AIT LAASRI Aymane" />
                    </div>
                    <div className="col s12 m8 center-align">
                        <h3>
                            My name is AIT LAASRI Aymane
                        </h3>
                        <p className="flow-text">
                            I'm currently a first year engineering student at <a style={{ color: "#09BC8A" }} href="
                                https://www.enset-media.ac.ma/" target="_blank">ENSET-M</a>, studying about Software
                            engineering and distributed
                            computing
                            systems
                        </p>
                    </div>
                </div>
            </div>
            <div id="hobbydiv" className={styles.hobbydiv}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#022B3A" fillOpacity="1"
                            d="M0,0L0,32L205.7,32L205.7,320L411.4,320L411.4,288L617.1,288L617.1,96L822.9,96L822.9,32L1028.6,32L1028.6,64L1234.3,64L1234.3,224L1440,224L1440,0L1234.3,0L1234.3,0L1028.6,0L1028.6,0L822.9,0L822.9,0L617.1,0L617.1,0L411.4,0L411.4,0L205.7,0L205.7,0L0,0L0,0Z">
                        </path>
                    </svg>
                </div>
                <div className="container valign-wrapper">
                    <div className="row">
                        <div className="valign-wrapper">
                            <div id="hobbiesdiv" className="col s12 center-align secion scrollspy">
                                <p className="flow-text" style={{ marginBottom: "80px" }}>
                                    I like to use my spare time to learn new stuff about web developpement.
                                    <br />
                                    But I also like to entertain my self, I do that by :
                                    <br />
                                </p>
                                <div className="col s12 m4">
                                    <i className="fas fa-gamepad fa-8x"></i>
                                    <div className={classNames(styles.customcardTitle, "valign-wrapper center-align")}>
                                        <h3>Playing video games</h3>
                                    </div>
                                    <p className="flow-text">
                                        I play all sort of games especially moba,FPS, and strategy.
                                    </p>
                                </div>
                                <div className={classNames(styles.customcard, "col s12 m4")}>
                                    <i className="fas fa-swimmer fa-8x"></i>
                                    <div className={classNames(styles.customcardTitle, "valign-wrapper")}>
                                        <h3 className="truncate">Swimming</h3>
                                    </div>
                                    <p className="flow-text">
                                        I like to swim in pools whatever season it may be, especially around summer time.
                                    </p>
                                </div>
                                <div className="col s12 m4">
                                    <i className="fas fa-puzzle-piece fa-8x"></i>
                                    <div className={classNames(styles.customcardTitle, "valign-wrapper")}>
                                        <h3>Solving Puzzles</h3>
                                    </div>
                                    <p className="flow-text">
                                        Solving puzzles and doing human benchmarks is my favorite way to waste some time as it
                                        keeps
                                        me entertained and my mind active.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path style={{ alignSelf: "flex-end" }} fill="#022B3A" fillOpacity="1"
                            d="M0,32L0,160L205.7,160L205.7,128L411.4,128L411.4,256L617.1,256L617.1,96L822.9,96L822.9,192L1028.6,192L1028.6,192L1234.3,192L1234.3,32L1440,32L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </div>
            <div id="experiencediv" className="container valign-wrapper section scrollspy">
                <div className="row">
                    <div className="valign-wrapper">
                        <div className="col s12 center-align">
                            <p className="flow-text">
                                Throughout my career I've worked with alot of frameworks, libraries and technologies such as :
                            </p>
                            <div className={classNames(styles.expCard, "col s12 m4")}>
                                <i className="fab fa-react fa-8x"></i>
                                <h3>React</h3>
                            </div>
                            <div className={classNames(styles.expCard, "col s12 m4")}>
                                <i className="fab fa-node fa-8x"></i>
                                <h3>NodeJs</h3>
                            </div>
                            <div className={classNames(styles.expCard, "col s12 m4")}>
                                <i className="fab fa-php fa-8x"></i>
                                <h3>PHP</h3>
                            </div>
                            <div className={classNames(styles.expCard, "col s12 m6")}>
                                <i className="fab fa-git-alt fa-8x"></i>
                                <h3>git</h3>
                            </div>
                            <div className={classNames(styles.expCard, "col s12 m6")}>
                                <i className="fab fa-js fa-8x"></i>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}