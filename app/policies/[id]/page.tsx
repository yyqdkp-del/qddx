import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { ArticleBody } from "@/components/content/article-body"
import { policyArticles } from "@/lib/data/qingdao-mock"
import { ArrowLeft } from "lucide-react"

interface PolicyDetailPageProps {
  params: Promise<{ id: string }>
}

/** 政策法规详情页 */
export default async function PolicyDetailPage({ params }: PolicyDetailPageProps) {
  const { id } = await params
  const doc = policyArticles[id]

  if (!doc) {
    return (
      <>
        <PageBanner title="政策法规" image="/images/banner-3.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该文档不存在或已下架。</p>
            <Link href="/policies" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回政策法规列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="政策法规" image="/images/banner-3.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/policies" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回政策法规列表
          </Link>

          <ArticleBody title={doc.title} date={doc.date} category={doc.category} paragraphs={doc.content} />
        </div>
      </section>
    </>
  )
}
