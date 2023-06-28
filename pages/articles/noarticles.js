import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../components/articles.module.css";
import classNames from "classnames";
import { useEffect } from "react";

const APIURL = `https://37c2-196-77-38-7.ngrok-free.app/api/v1/`;

export async function getStaticProps() {
  const getArticles = await fetch(`${APIURL}articles`);
  const articles = await getArticles.json();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    }, // will be passed to the page component as props
  };
}

export default function noarticles({ articles }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof document !== undefined) {
      var mediaElems = document.querySelectorAll(".materialboxed");
      var mediaInstances = M.Materialbox.init(mediaElems, {});
    }
    if (articles.length > 0) {
      router.push("/articles/page/1");
    }
  }, []); //equivalent of componentDidUpdate with hooks
  return (
    <Layout page={"articles"} style={{ height: "80vh" }}>
      <Head>
        <title>All Articles</title>
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
              Articles
            </a>
          </div>
        </div>
        <div id="toppagetitle" className={styles.toppagetitle}>
          <h2>
            Articles{" "}
            <span
              style={{
                float: "none",
                verticalAlign: "middle",
                fontSize: "1.2rem",
              }}
              className="new badge"
              data-badge-caption={0}
            ></span>
          </h2>
          <p className="flow-text">Here you can find all my articles</p>
        </div>
        <div id="articlesarea" className={styles.articlesarea}>
          <div className="row" style={{ marginBottom: 0 }}>
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">No articles found</span>
                  <p>
                    There are no articles to display. Please check back later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
