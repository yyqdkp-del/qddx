import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "青岛市道教协会召开2024年度工作总结会议",
    date: "2024-12-15",
    category: "协会动态",
    excerpt: "12月15日，青岛市道教协会在崂山太清宫召开2024年度工作总结会议，回顾全年工作成果，部署来年工作重点。",
  },
  {
    id: 2,
    title: "崂山太清宫举行冬至祈福法会",
    date: "2024-12-21",
    category: "宗教活动",
    excerpt: "冬至时节，崂山太清宫隆重举行祈福法会，祈愿国泰民安、风调雨顺。众多道众和信众参与了此次法会。",
  },
  {
    id: 3,
    title: "道教养生文化讲座在青岛市图书馆成功举办",
    date: "2024-12-10",
    category: "文化交流",
    excerpt: "由青岛市道教协会主办的道教养生文化讲座在市图书馆成功举办，吸引了众多市民前来聆听学习。",
  },
  {
    id: 4,
    title: "青岛市道教界积极参与慈善公益活动",
    date: "2024-11-28",
    category: "公益慈善",
    excerpt: "青岛市道教协会组织道教界人士赴社区开展慈善公益活动，为困难群众送去关爱与温暖。",
  },
]

export function NewsSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="新闻动态" subtitle="LATEST NEWS" />

        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
            >
              <div className="flex shrink-0 flex-col items-center rounded-md bg-primary px-3 py-2 text-primary-foreground">
                <span className="text-lg font-bold leading-tight">
                  {item.date.split("-")[2]}
                </span>
                <span className="text-[10px] opacity-80">
                  {item.date.split("-")[0]}/{item.date.split("-")[1]}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded-sm bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                  {item.category}
                </span>
                <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            查看更多新闻
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
