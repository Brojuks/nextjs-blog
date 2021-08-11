import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { DateNoTimeStamp } from '../../components/date'
import { FullDate } from '../../components/date'
import styles from "../../components/article.module.css"
import classNames from 'classnames'
import { useEffect } from 'react'

const APIURL = `http://localhost:8080/api/v1/`

export async function getStaticPaths() {
    const articlesRes = await fetch(`${APIURL}articles`)
    const articlesData = await articlesRes.json()
    const paths = articlesData.map((article, index) => ({
        params: {
            id: article.id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const getArticle = await fetch(`${APIURL}articles/${params.id}`)
    const article = await getArticle.json()
    const allArticle = await fetch(`${APIURL}articles`)
    const articles = await allArticle.json()
    const articleIndex = articles.findIndex(element => element.id == article.id)
    if (!article) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            article,
            articleIndex
        }, // will be passed to the page component as props
    }
}

export default function articleThread({ article, articleIndex }) {
    useEffect(() => {
        if (typeof document !== undefined) {
            var mediaElems = document.querySelectorAll('.materialboxed');
            var mediaInstances = M.Materialbox.init(mediaElems, {});
        }
    }, [])//equivalent of componentDidUpdate with hooks
    return (
        <Layout page={"articles"}>
            <Head>
                <title>{article.title}</title>
            </Head>
            <div id="maincontainer" className={classNames(styles.maincontainer, "container")}>
                <div className={classNames(styles.navbar, "nav-wrapper")}>
                    <div className={classNames(styles.flexAlignCenter, "col s12")}>
                        <Link href="/"><a className={classNames(styles.flexAlignCenter, "breadcrumb")}><i className="fas fa-home"></i>Home</a></Link>
                        <Link href={`/articles/page/${Math.ceil((articleIndex + 1) / 6)}#${article.id}`}><a className={classNames(styles.flexAlignCenter, "breadcrumb")}>Articles</a></Link>
                        <a className={classNames(styles.flexAlignCenter, "breadcrumb")}>{article.title}</a>
                    </div>
                </div>
                <div id="toppageimgtitle" className={styles.toppageimgtitle}>
                    <img className="responsive-img materialboxed" data-caption={article.title}
                        src={"http://localhost:8080/" + article.image.split('public')[1]} alt={article.title} />
                    <div className={styles.centertxtimg}>
                        <h2>
                            {article.title}
                        </h2>
                        <p className="flow-text">
                            Published by <a href="#">{article.User.username}</a> on <DateNoTimeStamp datestring={article.createdAt} />
                        </p>
                    </div>
                </div>
                <div className={styles.articlethreadcontent}>
                    <div className={classNames(styles.articlethreaduserinfo, "valign-wrapper")}>
                        <div className="valign-wrapper">
                            <img src="/images/profile.png" />
                            <a href="#">{article.User.username}</a>
                        </div>
                    </div>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: '<p class="flow-text">' + article.content + "</p>" }}>
                    </div>
                    <hr style={{ visibility: "hidden" }} />
                    <hr />
                    <div className={styles.threadtagsarea}>
                        <p>Last edit on : </p>
                        <span><FullDate datestring={article.updatedAt} /></span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}