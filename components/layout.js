import Head from 'next/head'
import Navbar from './navbar'
import Script from 'next/script'
import Footer from './footer'


const name = 'AIT LAASRI Aymane'
export const siteTitle = name + "'s Blog"

export default function Layout({ children }) {
    return (
        <div>
            <Head>

                <link rel="icon" hreef="/favicon.ico" />
                <meta
                    name="description"
                    content="ait laasri aymane's personnal blog that contains most of his work including his projects and articles"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            </Head>

            <Navbar />

            <main>{children}</main>

            <Footer />

            <Script src="https://kit.fontawesome.com/623a7f27de.js" strategy="lazyOnload" crossorigin="anonymous" />

        </div>
    )
}