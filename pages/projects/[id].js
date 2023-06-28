import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { DateNoTimeStamp } from "../../components/date";
import { FullDate } from "../../components/date";
import styles from "../../components/article.module.css";
import classNames from "classnames";
import { useEffect } from "react";

const APIURL = `https://37c2-196-77-38-7.ngrok-free.app/api/v1/`;

export async function getStaticPaths() {
  const projectsRes = await fetch(`${APIURL}projects`);
  const projectsData = await projectsRes.json();
  const paths = projectsData.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const getProject = await fetch(`${APIURL}projects/${params.id}`);
  const project = await getProject.json();
  const allProjects = await fetch(`${APIURL}projects`);
  const projects = await allProjects.json();
  const projectIndex = projects.findIndex(
    (element) => element.id == project.id
  );
  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      projectIndex,
    }, // will be passed to the page component as props
  };
}

export default function projectThread({ project, projectIndex }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      var mediaElems = document.querySelectorAll(".materialboxed");
      var mediaInstances = M.Materialbox.init(mediaElems, {});
    }
  }, []); //equivalent of componentDidUpdate with hooks
  return (
    <Layout page={"projects"}>
      <Head>
        <title>{project.title}</title>
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
            <Link
              href={`/projects/page/${Math.ceil((projectIndex + 1) / 6)}#${
                project.id
              }`}
            >
              <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>
                Projects
              </a>
            </Link>
            <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>
              {project.title}
            </a>
          </div>
        </div>
        <div id="toppageimgtitle" className={styles.toppageimgtitle}>
          <img
            className="responsive-img materialboxed"
            data-caption={project.title}
            src={
              "https://37c2-196-77-38-7.ngrok-free.app/" +
              project.image.split("public")[1]
            }
            alt={project.title}
          />
          <div className={styles.centertxtimg}>
            <h2>{project.title}</h2>
            <p className="flow-text">
              Published by <a href="#">{project.User.username}</a> on{" "}
              <DateNoTimeStamp datestring={project.createdAt} />
            </p>
          </div>
        </div>
        <div className={styles.articlethreadcontent}>
          <div
            className={classNames(
              styles.articlethreaduserinfo,
              "valign-wrapper"
            )}
          >
            <div className="valign-wrapper">
              <img src="/images/profile.png" />
              <a href="#">{project.User.username}</a>
            </div>
          </div>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: project.content,
            }}
          ></div>
          <hr style={{ visibility: "hidden" }} />
          <hr />
          <div className={styles.threadtagsarea}>
            <p>Last edit on : </p>
            <span>
              <FullDate datestring={project.updatedAt} />
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
