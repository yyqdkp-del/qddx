import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { ArticleBody } from "@/components/content/article-body"
import { classicArticles } from "@/lib/data/qingdao-mock"
import { ArrowLeft } from "lucide-react"

interface ClassicDetailProps {
  params: Promise<{ id: string }>
}

/** 道教经典导读详情页 */
export default async function CultureClassicDetailPage({ params }: ClassicDetailProps) {
  const { id } = await params
  const doc = classicArticles[id]

  if (!doc) {
    return (
      <>
        <PageBanner title="经典导读" image="/images/taoist-culture.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该导读条目不存在。</p>
            <Link href="/culture/classics" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回经典导读列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="经典导读" image="/images/taoist-culture.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/culture/classics" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回经典导读列表
          </Link>

          <ArticleBody title={doc.title} date={doc.date} category={doc.category} paragraphs={doc.content} />
        </div>
      </section>
    </>
  )
}
