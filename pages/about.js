import Head from "next/head";
import AboutDetail from "../components/AboutPage/AboutDetail";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function About(){
    return (
        <>
            <Head>
            <title>About - Wifibase Unlimited Co.</title>
            <meta name="description" content="Our services" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <AboutDetail />
            <Footer />
        </>
    )
}