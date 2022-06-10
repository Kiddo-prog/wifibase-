import Head from "next/head";
import AboutDetail from "../components/AboutPage/AboutDetail";


export default function About(){
    return (
        <>
            <Head>
            <title>About - Wifibase Unlimited Co.</title>
            <meta name="description" content="Our services" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <AboutDetail />
        </>
    )
}