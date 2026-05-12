import { getHomeNewsShowcaseRows } from "@/lib/data/qingdao-mock"
import HomePageClient from "./home-page-client"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function HomePage() {
  console.log("Home Page Rendered, News Rows Count:", getHomeNewsShowcaseRows(5)?.length)
  return <HomePageClient />
}
