import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Landing Page</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Welcome to the landig page!</h1>
      <p className={utilStyles.headingXl}>
        Read{' '}
        <Link href="./posts/first-post">
          This post!
        </Link>
      </p>
    </div>
  )
}
