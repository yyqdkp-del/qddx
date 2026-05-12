import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { ArticleBody } from "@/components/content/article-body"
import { charityArticles } from "@/lib/data/qingdao-mock"
import { ArrowLeft } from "lucide-react"

interface CharityDetailPageProps {
  params: Promise<{ id: string }>
}

/** 慈善公益详情页 */
export default async function CharityDetailPage({ params }: CharityDetailPageProps) {
  const { id } = await params
  const doc = charityArticles[id]

  if (!doc) {
    return (
      <>
        <PageBanner title="慈善公益" image="/images/banner-2.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该活动报道不存在。</p>
            <Link href="/charity" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回慈善公益列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="慈善公益" image="/images/banner-2.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/charity" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回慈善公益列表
          </Link>

          <ArticleBody title={doc.title} date={doc.date} category={doc.category} paragraphs={doc.content} />
        </div>
      </section>
    </>
  )
}
