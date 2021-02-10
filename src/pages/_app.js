import '../../styles/globals.scss'
import Header from '../containers/Header';

function MyApp({Component, pageProps}) {
    return <>
        <Header/>
        <Component {...pageProps} />
    </>
}

export default MyApp
