import { Button, Stack } from "@chakra-ui/react"
import Partners from "./Partners"
import Banner from "./Banner"
import QualityDetails from "./Quality"
import Features from "./Features"

export default function CompanyDetail() {
    return (
        <Stack>
            <Banner />
            <Partners />
            <QualityDetails />
            <Features />
        </Stack>
    )
}