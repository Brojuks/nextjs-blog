import '../styles/global.css'
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (typeof document !== undefined) {
            const M = require('materialize-css/dist/js/materialize.min.js')
            M.AutoInit();
        }
    }, [])
    return <Component {...pageProps} />
}