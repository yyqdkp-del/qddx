import { PageBanner } from "@/components/page-banner"
import { DocListClient } from "@/components/content/doc-list-client"
import { knowledgeCategories, knowledgeList } from "@/lib/data/qingdao-mock"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "道教常识 - 青岛市道教协会",
  description: "面向市民读者的道教基本知识普及与青岛本地化场景提示。",
}

/** 道教文化 — 道教常识列表 */
export default function CultureKnowledgePage() {
  return (
    <>
      <PageBanner title="道教常识" subtitle="青岛市道教协会 文化普及" image="/images/taoist-culture.jpg" />
      <DocListClient categories={[...knowledgeCategories]} items={knowledgeList} segment="/culture/knowledge" />
    </>
  )
}
