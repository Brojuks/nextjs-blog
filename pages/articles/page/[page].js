import Layout from "../../../components/layout"
import Head from "next/head"
import Link from "next/link"
import styles from "../../../components/articles.module.css"
import classNames from "classnames"
import Date from "../../../components/date"
import { useEffect } from 'react'

const APIURL = `http://localhost:8080/api/v1/`

export async function getStaticPaths() {
    const articlesRes = await fetch(`${APIURL}articles`)
    const articlesData = await articlesRes.json()
    const pagesArray = Array(Math.ceil(articlesData.length / 6)).fill().map((currElement, index) => index + 1)
    const paths = pagesArray.map((page) => ({
        params: { page: page.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const getArticles = await fetch(`${APIURL}articles`)
    const articles = await getArticles.json()
    const pageNum = params.page

    if (!articles) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            articles,
            pageNum
        }, // will be passed to the page component as props
    }
}

export default function articles({ articles, pageNum }) {
    useEffect(() => {
        if (typeof document !== undefined) {
            var mediaElems = document.querySelectorAll('.materialboxed');
            var mediaInstances = M.Materialbox.init(mediaElems, {});
        }
    }, [pageNum])//equivalent of componentDidUpdate with hooks
    return (
        <Layout page={"articles"}>
            <Head>
                <title>All Articles</title>
            </Head>
            <div id="maincontainer" className={classNames(styles.maincontainer, "container")}>
                <div className={classNames(styles.navbar, "nav-wrapper")}>
                    <div className={classNames(styles.flexAlignCenter, "col s12")}>
                        <Link href="/"><a className={classNames(styles.flexAlignCenter, "breadcrumb")}><i className="fas fa-home"></i>Home</a></Link>
                        <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>Articles</a>
                    </div>
                </div>
                <div id="toppagetitle" className={styles.toppagetitle}>
                    <h2>
                        Articles <span style={{ float: "none", verticalAlign: "middle", fontSize: "1.2rem" }} className="new badge" data-badge-caption={articles.length}>+</span>
                    </h2>
                    <p className="flow-text">
                        Here you can find all my articles
                    </p>
                </div>
                <ul className="pagination">
                    {
                        pageNum != 1 ?
                            <li className="btn"><Link href={`/articles/page/${pageNum - 1}`}><a><i className="material-icons">chevron_left</i></a></Link></li>
                            : <li className="disabled"><a><i className="material-icons">chevron_left</i></a></li>
                    }
                    {
                        articles.length > 6 ?
                            articles.slice(0, Math.ceil(articles.length / 6)).map((currElement, index) => (
                                ((index + 1) != pageNum) ?
                                    (<li key={index + 2} className="btn"><Link href={`/articles/page/${index + 1}`}><a>{index + 1}</a></Link></li>)
                                    : (<li key={index + 2} className="btn active"><a>{index + 1}</a></li>)
                            ))
                            : <li className="btn active"><a>1</a></li>
                    }
                    {
                        articles.length > 6 && pageNum != Math.ceil(articles.length / 6) ?
                            <li className="btn"><Link href={`/articles/page/${parseInt(pageNum) + 1}`}><a><i className="material-icons">chevron_right</i></a></Link></li>
                            : <li className="disabled"><a><i className="material-icons">chevron_right</i></a></li>
                    }
                </ul>
                <div id="articlesarea" className={styles.articlesarea}>
                    {
                        articles.slice((pageNum * 6 - 6), pageNum * 6).map(({ title, image, id, content, User, createdAt }) => (
                            <div id={id} key={id} className="col s12 m7">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img className="hoverable responsive-img materialboxed"
                                            data-caption={title}
                                            src={"http://localhost:8080/" + image.split('public')[1]} />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <div className={classNames(styles.userthreadinfo, "valign-wrapper")}>
                                                <img src="/images/profile.png" />
                                                <a>{User.username}</a>
                                            </div>
                                            <Link href={`/articles/${id}`}>
                                                <a>
                                                    <h3>{title}</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: "<p>" + content + "</p>" }}>
                                                    </div>
                                                </a>
                                            </Link>
                                            <hr />
                                            <div className={classNames(styles.threadinfo)}>
                                                <span><Date datestring={createdAt} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ul className="pagination" style={{ marginBottom: "0px" }}>
                    {
                        pageNum != 1 ?
                            <li className="btn"><Link href={`/articles/page/${pageNum - 1}`}><a><i className="material-icons">chevron_left</i></a></Link></li>
                            : <li className="disabled"><a><i className="material-icons">chevron_left</i></a></li>
                    }
                    {
                        articles.length > 6 ?
                            articles.slice(0, Math.ceil(articles.length / 6)).map((currElement, index) => (
                                ((index + 1) != pageNum) ?
                                    (<li key={index + 2} className="btn"><Link href={`/articles/page/${index + 1}`}><a>{index + 1}</a></Link></li>)
                                    : (<li key={index + 2} className="btn active"><a>{index + 1}</a></li>)
                            ))
                            : <li className="btn active"><a>1</a></li>
                    }
                    {
                        articles.length > 6 && pageNum != Math.ceil(articles.length / 6) ?
                            <li className="btn"><Link href={`/articles/page/${parseInt(pageNum) + 1}`}><a><i className="material-icons">chevron_right</i></a></Link></li>
                            : <li className="disabled"><a><i className="material-icons">chevron_right</i></a></li>
                    }
                </ul>
            </div>
        </Layout >
    )
}