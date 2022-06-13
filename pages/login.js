import Head from "next/head";
import LoginPage from "../components/Loginpage/login";
import Header from "../components/Header/Header";

export default function Login(){
    return (
        <>
            <Head>
            <title>Sign in - Wifibase Networks Co.</title>
            <meta name="description" content="Our services" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LoginPage />
        </>
    )
}