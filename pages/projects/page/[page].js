import Layout from "../../../components/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../components/articles.module.css";
import classNames from "classnames";
import Date from "../../../components/date";
import { useEffect } from "react";

const APIURL = `http://localhost:8080/api/v1/`;

export async function getStaticPaths() {
  const projectsRes = await fetch(`${APIURL}projects`);
  const projectsData = await projectsRes.json();
  const pagesArray = Array(Math.ceil(projectsData.length / 6))
    .fill()
    .map((currElement, index) => index + 1);
  const paths = pagesArray.map((page) => ({
    params: { page: page.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const getProjects = await fetch(`${APIURL}projects`);
  const projects = await getProjects.json();
  const pageNum = params.page;

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
      pageNum,
    }, // will be passed to the page component as props
  };
}

export default function projects({ projects, pageNum }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      var mediaElems = document.querySelectorAll(".materialboxed");
      var mediaInstances = M.Materialbox.init(mediaElems, {});
    }
  }, [pageNum]); //equivalent of componentDidUpdate with hooks
  return (
    <Layout page={"projects"}>
      <Head>
        <title>All Projects</title>
      </Head>
      <div
        id="maincontainer"
        className={classNames(styles.maincontainer, "container")}
      >
        <div className={classNames(styles.navbar, "nav-wrapper")}>
          <div className={classNames(styles.flexAlignCenter, "col s12")}>
            <Link href="/">
              <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>
                <i className="fas fa-home"></i>Home
              </a>
            </Link>
            <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>
              Projects
            </a>
          </div>
        </div>
        <div id="toppagetitle" className={styles.toppagetitle}>
          <h2>
            Projects{" "}
            <span
              style={{
                float: "none",
                verticalAlign: "middle",
                fontSize: "1.2rem",
              }}
              className="new badge"
              data-badge-caption={projects.length}
            ></span>
          </h2>
          <p className="flow-text">Here you can find all my projects</p>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal" style={{ color: "white" }}>
            <div className="card-stacked">
              <div className="card-content">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <i className="fas fa-info-circle"></i>
                  <p>
                    Please check out my{" "}
                    <a
                      href="https://github.com/aitlaasri-aymane/"
                      style={{ color: "#06BC89" }}
                    >
                      github
                    </a>{" "}
                    for more projects, since this page is still under
                    construction and will be updated soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="pagination">
          {pageNum != 1 ? (
            <li className="btn">
              <Link href={`/projects/page/${pageNum - 1}`}>
                <a>
                  <i className="material-icons">chevron_left</i>
                </a>
              </Link>
            </li>
          ) : (
            <li className="disabled">
              <a>
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
          )}
          {projects.length > 6 ? (
            projects
              .slice(0, Math.ceil(projects.length / 6))
              .map((currElement, index) =>
                index + 1 != pageNum ? (
                  <li key={index + 2} className="btn">
                    <Link href={`/projects/page/${index + 1}`}>
                      <a>{index + 1}</a>
                    </Link>
                  </li>
                ) : (
                  <li key={index + 2} className="btn active">
                    <a>{index + 1}</a>
                  </li>
                )
              )
          ) : (
            <li className="btn active">
              <a>1</a>
            </li>
          )}
          {projects.length > 6 && pageNum != Math.ceil(projects.length / 6) ? (
            <li className="btn">
              <Link href={`/projects/page/${parseInt(pageNum) + 1}`}>
                <a>
                  <i className="material-icons">chevron_right</i>
                </a>
              </Link>
            </li>
          ) : (
            <li className="disabled">
              <a>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          )}
        </ul>
        <div id="articlesarea" className={styles.articlesarea}>
          {projects
            .slice(pageNum * 6 - 6, pageNum * 6)
            .map(({ title, image, id, content, User, createdAt }) => (
              <div id={id} key={id} className="col s12 m7">
                <div className="card horizontal">
                  <div className="card-image">
                    <img
                      className="hoverable responsive-img materialboxed"
                      data-caption={title}
                      src={"http://localhost:8080" + image.split("public")[1]}
                    />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <div
                        className={classNames(
                          styles.userthreadinfo,
                          "valign-wrapper"
                        )}
                      >
                        <img src="/images/profile.png" />
                        <a>{User.username}</a>
                      </div>
                      <Link href={`/projects/${id}`}>
                        <a>
                          <h3>{title}</h3>
                        </a>
                      </Link>
                      <hr />
                      <div className={classNames(styles.threadinfo)}>
                        <span>
                          <Date datestring={createdAt} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <ul className="pagination" style={{ marginBottom: "0px" }}>
          {pageNum != 1 ? (
            <li className="btn">
              <Link href={`/projects/page/${pageNum - 1}`}>
                <a>
                  <i className="material-icons">chevron_left</i>
                </a>
              </Link>
            </li>
          ) : (
            <li className="disabled">
              <a>
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
          )}
          {projects.length > 6 ? (
            projects
              .slice(0, Math.ceil(projects.length / 6))
              .map((currElement, index) =>
                index + 1 != pageNum ? (
                  <li key={index + 2} className="btn">
                    <Link href={`/projects/page/${index + 1}`}>
                      <a>{index + 1}</a>
                    </Link>
                  </li>
                ) : (
                  <li key={index + 2} className="btn active">
                    <a>{index + 1}</a>
                  </li>
                )
              )
          ) : (
            <li className="btn active">
              <a>1</a>
            </li>
          )}
          {projects.length > 6 && pageNum != Math.ceil(projects.length / 6) ? (
            <li className="btn">
              <Link href={`/projects/page/${parseInt(pageNum) + 1}`}>
                <a>
                  <i className="material-icons">chevron_right</i>
                </a>
              </Link>
            </li>
          ) : (
            <li className="disabled">
              <a>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  );
}
