import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ServiceDetail from "../components/ServicePage/ServiceDetail";


export default function Service(){
    return (
        <>
            <Head>
            <title>Services - Wifibase Unlimited Co.</title>
            <meta name="description" content="Our services" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <ServiceDetail />
            <Footer />
        </>
    )
}