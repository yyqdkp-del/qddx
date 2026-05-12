import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { ArticleBody } from "@/components/content/article-body"
import { knowledgeArticles } from "@/lib/data/qingdao-mock"
import { ArrowLeft } from "lucide-react"

interface KnowledgeDetailProps {
  params: Promise<{ id: string }>
}

/** 道教常识详情页 */
export default async function KnowledgeDetailPage({ params }: KnowledgeDetailProps) {
  const { id } = await params
  const doc = knowledgeArticles[id]

  if (!doc) {
    return (
      <>
        <PageBanner title="道教常识" image="/images/taoist-culture.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该文章不存在。</p>
            <Link href="/culture/knowledge" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回道教常识列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="道教常识" image="/images/taoist-culture.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/culture/knowledge" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回道教常识列表
          </Link>

          <ArticleBody title={doc.title} date={doc.date} category={doc.category} paragraphs={doc.content} />
        </div>
      </section>
    </>
  )
}
