import Head from "next/head";
import Header from "../components/Header/Header";
import PricingBanner from "../components/Pricingpage/Banner";
import PricingList from "../components/Pricingpage/List";


export default function Pricing(){
    return (
        <>
            <Head>
            <title>Pricing - Wifibase Unlimited Co.</title>
            <meta name="description" content="Our services" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Header />
                <PricingBanner />
                <PricingList />
            </>
        </>
    )
}