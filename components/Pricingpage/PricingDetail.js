import PricingBanner from "./Banner"
import PricingList from "./List"
import { JoinUsToday } from "../AboutPage/AboutSection"

export default function PricingDetail() {
    return(
        <>
            <PricingBanner />
            <PricingList />
            <JoinUsToday />
        </>
    )
}