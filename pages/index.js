import Head from "next/head";
import Link from "next/link";
import styles from "../components/index.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import Date from "../components/date";
import classNames from "classnames";

const APIURL = `https://37c2-196-77-38-7.ngrok-free.app/api/v1/`;

export async function getStaticProps() {
  const articlesRes = await fetch(`${APIURL}articles/lastsix`);
  const articlesData = await articlesRes.json();
  const projectsRes = await fetch(`${APIURL}projects/lastsix`);
  const ProjectsData = await projectsRes.json();

  if (!articlesData || !ProjectsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ProjectsData,
      articlesData,
    }, // will be passed to the page component as props
  };
}

export default function Home({ articlesData, ProjectsData }) {
  return (
    <Layout page={"home"}>
      <Head>
        <title>Welcome to my Blog!</title>
      </Head>
      {/* <div className="leftscrollpsy hide-on-small-only m3 l2 m2">
        <ul className="section table-of-contents" style={{ position: "fixed", zIndex: "2" }}>
          <li><a href="#welcome-section">Introduction</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#articles-section">Articles</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div> */}
      <div id="welcome-section" className="section scrollspy">
        <div className={classNames(styles.welcomeSection)}>
          <h1 className={styles.Welcomeh1}>Hey I'm Ait Laasri Aymane</h1>
          <h2 className={styles.Welcomeh2}>a full stack web developer</h2>
        </div>
      </div>
      <div id="projects" className={styles.projectsSection}>
        <svg
          className={styles.topPrjctsBorder}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#022B3A"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,117.3C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h1 className={styles.projectsh1}>These are some of my projects</h1>
        <div
          id="projects-section"
          className={classNames(utilStyles.container, "section scrollspy")}
        >
          {ProjectsData.length > 0 ? (
            ProjectsData.map(({ title, image, id }) => (
              <Link key={id} href={`/projects/${id}`}>
                <div
                  style={{
                    cursor: "pointer",
                    maxWidth: "576px",
                    textAlign: "center",
                  }}
                  className="card"
                >
                  <img
                    src={"./images/" + image.split("projects/")[1]}
                    alt="Blog"
                  />
                  <a
                    href="#"
                    className={styles.ProjectTitle}
                    style={{ padding: "0 1rem 0 1rem" }}
                  >
                    <span className="hidden">&lt;</span>
                    {title}
                    <span className="hidden">/&gt; </span>
                  </a>
                </div>
              </Link>
            ))
          ) : (
            <div className="card">
              <div>
                <div
                  className={utilStyles.cardHor}
                  style={{ alignItems: "center" }}
                >
                  <div className={utilStyles.txtcontainer}>
                    <div style={{ textAlign: "center", fontSize: "xx-large" }}>
                      <div style={{ margin: "1rem" }}>No Projects Yet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link href="/projects/noprojects">
          <a className={utilStyles.showallBtn}>
            Show All Projects
            <i className="fas fa-chevron-right"></i>
          </a>
        </Link>

        <div id="articles" className="section scrollspy"></div>
        <h1 className={styles.projectsh1}>These are my recent Articles</h1>
        <div
          id="articles-section"
          className={classNames(utilStyles.container, "section scrollspy")}
        >
          {articlesData.length > 0 ? (
            articlesData.map(
              ({ title, content, image, User, createdAt, id }) => (
                <div key={id} className="card">
                  <Link href={`/articles/${id}`}>
                    <div
                      style={{ cursor: "pointer" }}
                      className={utilStyles.cardHor}
                    >
                      <img
                        src={
                          "https://37c2-196-77-38-7.ngrok-free.app/" +
                          image.split("public")[1]
                        }
                        alt="Blog"
                      />
                      <div className={utilStyles.txtcontainer}>
                        <div style={{ textAlign: "center" }}>
                          <a>
                            <span className="hidden">&lt;</span>
                            {title}
                            <span className="hidden">/&gt; </span>
                          </a>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: "<p>" + content + "</p>",
                          }}
                        ></div>
                      </div>
                    </div>
                  </Link>
                  <hr />
                  <div
                    className={utilStyles.container}
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className={utilStyles.cardUserinfo}>
                      <img
                        src="https://www.sonaayush.com/assets/assets/images/user/users.png"
                        alt="Avatar"
                      />
                      <div className={utilStyles.userinfoContainer}>
                        <a>{User.username}</a>
                      </div>
                    </div>
                    <div className={utilStyles.cardDatenview}>
                      <div className={utilStyles.userinfoContainer}>
                        <Date datestring={createdAt} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="card">
              <div>
                <div
                  className={utilStyles.cardHor}
                  style={{ alignItems: "center" }}
                >
                  <div className={utilStyles.txtcontainer}>
                    <div style={{ textAlign: "center", fontSize: "xx-large" }}>
                      <div style={{ margin: "1rem" }}>No Articles Yet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link href="/articles/noarticles">
          <a className={utilStyles.showallBtn}>
            Show All Articles
            <i className="fas fa-chevron-right"></i>
          </a>
        </Link>

        <svg
          className={styles.bottomPrjctsBorder}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#022B3A"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,112C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        id="contact"
        className={classNames(styles.contact, "section scrollspy")}
      >
        <h1>Let's work together...</h1>
        <h2>You can contact me using one of the platforms below!</h2>
        <div className={utilStyles.container}>
          <a href="https://github.com/aitlaasri-aymane" target="_blank">
            <i className="fab fa-github-square"></i>GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aymaneaitlaasri/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>LinkedIn
          </a>
          <span id="contact-mail" className={styles.contactMail}>
            <a href="mailto: aymaneaitlaasri@gmail.com" target="_blank">
              <i className="fas fa-at"></i>
              Send a mail
            </a>
            <span className={styles.tooltipMail}>
              aymaneaitlaasri@gmail.com
            </span>
          </span>
          <span id="contact-phone" className={styles.contactPhone}>
            <a href="tel:+212674537617" target="_blank">
              <i className="fas fa-phone-square"></i>
              Call me
            </a>
            <span className={styles.tooltipPhone}>+212 674-537617</span>
          </span>
        </div>
      </div>
    </Layout>
  );
}
