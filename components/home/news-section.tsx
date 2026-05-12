import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { ArrowRight } from "lucide-react"
import { getHomeNewsSectionItems } from "@/lib/data/qingdao-mock"

export function NewsSection() {
  const newsItems = getHomeNewsSectionItems(4)

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="新闻动态" subtitle="会务与宫观活动资讯" />

        <div className="grid gap-6 md:grid-cols-2">
          {!newsItems || newsItems.length === 0 ? (
            <div className="col-span-full rounded-md border border-dashed border-muted-foreground/30 py-8 text-center text-sm text-muted-foreground md:col-span-2">
              暂无相关数据
            </div>
          ) : (
            newsItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex shrink-0 flex-col items-center rounded-md bg-primary px-3 py-2 text-primary-foreground">
                  <span className="text-lg font-bold leading-tight">{item.date.split("-")[2]}</span>
                  <span className="text-[10px] opacity-80">
                    {item.date.split("-")[0]}/{item.date.split("-")[1]}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-sm bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-foreground">{item.category}</span>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-card-foreground">
                    <Link href={`/news/${item.id}`} className="line-clamp-2 transition-colors duration-300 hover:text-primary">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.excerpt}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
          >
            查看更多新闻
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
