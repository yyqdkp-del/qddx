import {
  getHomeNewsShowcaseRows,
  getHomePolicyShowcaseRows,
  getHomeCharityShowcaseRows,
  getHomeCultureShowcaseRows,
} from "@/lib/data/qingdao-mock"
import HomePageClient from "./home-page-client"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function HomePage() {
  const newsRows = getHomeNewsShowcaseRows(5) || []
  const policyRows = getHomePolicyShowcaseRows(5) || []
  const charityRows = getHomeCharityShowcaseRows(5) || []
  const cultureRows = getHomeCultureShowcaseRows(5) || []

  console.log("Home Page Rendered, News Rows Count:", newsRows.length)

  return (
    <HomePageClient
      newsRows={newsRows}
      policyRows={policyRows}
      charityRows={charityRows}
      cultureRows={cultureRows}
    />
  )
}
