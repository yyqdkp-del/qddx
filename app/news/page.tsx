import { PageBanner } from "@/components/page-banner"
import { NewsListClient } from "@/components/news/news-list-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "新闻动态 - 青岛市道教协会",
  description: "了解青岛市道教协会最新动态、宗教活动、文化交流和公益慈善新闻。",
}

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="新闻动态"
        subtitle="了解协会最新资讯"
        image="/images/banner-2.jpg"
      />
      <NewsListClient />
    </>
  )
}
