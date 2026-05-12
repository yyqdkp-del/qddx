import { PageBanner } from "@/components/page-banner"
import { DocListClient } from "@/components/content/doc-list-client"
import { classicCategories, classicList } from "@/lib/data/qingdao-mock"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "经典导读 - 青岛市道教协会",
  description: "青岛市道教协会整理的经典学习与崂山文献提要，用于公益讲座与交流。",
}

/** 道教文化 — 经典导读列表 */
export default function CultureClassicsPage() {
  return (
    <>
      <PageBanner title="经典导读" subtitle="经典润心 明道笃行" image="/images/taoist-culture.jpg" />
      <DocListClient categories={[...classicCategories]} items={classicList} segment="/culture/classics" />
    </>
  )
}
