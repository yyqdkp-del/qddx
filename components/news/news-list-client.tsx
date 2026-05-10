"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Tag, ArrowRight } from "lucide-react"

const categories = ["全部", "协会动态", "宗教活动", "文化交流", "公益慈善", "通知公告"]

const allNews = [
  {
    id: 1,
    title: "青岛市道教协会召开2024年度工作总结会议",
    date: "2024-12-15",
    category: "协会动态",
    excerpt: "12月15日，青岛市道教协会在崂山太清宫召开2024年度工作总结会议，回顾全年工作成果，部署来年工作重点。会议由秘书长主持，全体理事出席。",
  },
  {
    id: 2,
    title: "崂山太清宫举行冬至祈福法会",
    date: "2024-12-21",
    category: "宗教活动",
    excerpt: "冬至时节，崂山太清宫隆重举行祈福法会，祈愿国泰民安、风调雨顺。众多道众和信众参与了此次法会，场面庄严肃穆。",
  },
  {
    id: 3,
    title: "道教养生文化讲座在青岛市图书馆成功举办",
    date: "2024-12-10",
    category: "文化交流",
    excerpt: "由青岛市道教协会主办的道教养生文化讲座在市图书馆成功举办，吸引了众多市民前来聆听学习，共同感受道教养生智慧。",
  },
  {
    id: 4,
    title: "青岛市道教界积极参与慈善公益活动",
    date: "2024-11-28",
    category: "公益慈善",
    excerpt: "青岛市道教协会组织道教界人士赴社区开展慈善公益活动，为困难群众送去关爱与温暖，践行道教济世利人精神。",
  },
  {
    id: 5,
    title: "关于做好秋冬季宫观安全防火工作的通知",
    date: "2024-11-20",
    category: "通知公告",
    excerpt: "为确保全市各道教活动场所秋冬季消防安全，现将有关防火工作要求通知如下，请各宫观认真贯彻落实。",
  },
  {
    id: 6,
    title: "青岛市道教协会代表团赴武当山参访交流",
    date: "2024-11-15",
    category: "文化交流",
    excerpt: "青岛市道教协会组织代表团赴湖北武当山参访交流，与武当山道教协会就道教文化传承与发展进行了深入探讨。",
  },
  {
    id: 7,
    title: "崂山上清宫举行九九重阳祈福法会",
    date: "2024-10-11",
    category: "宗教活动",
    excerpt: "重阳节来临之际，崂山上清宫隆重举行九九重阳祈福法会，弘扬尊老敬老传统美德，祈福健康长寿。",
  },
  {
    id: 8,
    title: "青岛市道教协会开展教职人员培训活动",
    date: "2024-10-05",
    category: "协会动态",
    excerpt: "为提高全市道教教职人员综合素质，青岛市道教协会在太清宫举办为期三天的教职人员培训班。",
  },
  {
    id: 9,
    title: "天后宫举办妈祖文化节活动",
    date: "2024-09-23",
    category: "宗教活动",
    excerpt: "青岛天后宫隆重举办妈祖文化节系列活动，通过祭祀典礼、文化展览等形式，传承弘扬妈祖文化。",
  },
  {
    id: 10,
    title: "协会组织向贫困山区学生捐赠学习用品",
    date: "2024-09-15",
    category: "公益慈善",
    excerpt: "青岛市道教协会发起爱心助学活动，组织向贫困山区学生捐赠书包、文具等学习用品，助力教育公平。",
  },
]

export function NewsListClient() {
  const [activeCategory, setActiveCategory] = useState("全部")

  const filtered =
    activeCategory === "全部"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory)

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-card-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md sm:flex-row"
            >
              {/* Date block */}
              <div className="flex shrink-0 flex-row items-center gap-3 sm:flex-col sm:items-center sm:justify-center sm:gap-1 sm:rounded-md sm:bg-primary sm:px-4 sm:py-3 sm:text-primary-foreground">
                <span className="hidden text-2xl font-bold leading-tight sm:block">
                  {item.date.split("-")[2]}
                </span>
                <span className="hidden text-xs opacity-80 sm:block">
                  {item.date.split("-")[0]}.{item.date.split("-")[1]}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground sm:hidden">
                  <Calendar size={12} />
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-sm bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                      <Tag size={10} />
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-4 hidden shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:block"
                  />
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            <p>暂无相关新闻</p>
          </div>
        )}
      </div>
    </section>
  )
}
