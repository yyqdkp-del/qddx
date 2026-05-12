import { PageBanner } from "@/components/page-banner"
import { DocListClient } from "@/components/content/doc-list-client"
import { policyCategories, policyList } from "@/lib/data/qingdao-mock"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "政策法规 - 青岛市道教协会",
  description: "集中展示适用于青岛市道教界的法规政策学习与协会规章制度摘要。",
}

/** 政策法规列表页 */
export default function PoliciesPage() {
  return (
    <>
      <PageBanner title="政策法规" subtitle="学法懂法守法 依法治教办教" image="/images/banner-3.jpg" />
      <DocListClient categories={[...policyCategories]} items={policyList} segment="/policies" />
    </>
  )
}
