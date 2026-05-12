import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { ArticleBody } from "@/components/content/article-body"
import { newsArticles } from "@/lib/data/qingdao-mock"
import { ArrowLeft } from "lucide-react"

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
}

/** 新闻动态详情页 */
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const news = newsArticles[id]

  if (!news) {
    return (
      <>
        <PageBanner title="新闻详情" image="/images/banner-2.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该新闻不存在或已被删除。</p>
            <Link href="/news" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回新闻列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="新闻详情" image="/images/banner-2.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/news" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回新闻列表
          </Link>

          <ArticleBody title={news.title} date={news.date} category={news.category} paragraphs={news.content} />
        </div>
      </section>
    </>
  )
}
