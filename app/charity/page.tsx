import { PageBanner } from "@/components/page-banner"
import { DocListClient } from "@/components/content/doc-list-client"
import { charityCategories, charityList } from "@/lib/data/qingdao-mock"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "慈善公益 - 青岛市道教协会",
  description: "记录青岛市道教界参与赈灾助学、敬老环保等公益志愿服务实践。",
}

/** 慈善公益列表页（青岛市辖区公益活动） */
export default function CharityPage() {
  return (
    <>
      <PageBanner title="慈善公益" subtitle="济世利人 服务青岛" image="/images/banner-2.jpg" />
      <DocListClient categories={[...charityCategories]} items={charityList} segment="/charity" />
    </>
  )
}
