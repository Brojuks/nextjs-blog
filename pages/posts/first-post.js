import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I'm an engineering student!</p>
                <p>
                    This is a sample website that I created to learn NextJs!
                </p>
                <h2>
                    <Link href="/">
                        &lt;&lt; Back to Home
                    </Link>
                </h2>
            </section>
        </Layout>
    )
}