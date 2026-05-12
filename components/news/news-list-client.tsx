"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import { newsCategories, newsList } from "@/lib/data/qingdao-mock"

/** 新闻动态客户端列表：数据来自本站新闻资料库 */
export function NewsListClient() {
  const categories = [...newsCategories]
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "全部")

  const filtered = activeCategory === "全部" ? newsList : newsList.filter((n) => n.category === activeCategory)

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
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

        <div className="space-y-4">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md sm:flex-row"
            >
              <div className="flex shrink-0 flex-row items-center gap-3 sm:flex-col sm:items-center sm:justify-center sm:gap-1 sm:rounded-md sm:bg-primary sm:px-4 sm:py-3 sm:text-primary-foreground">
                <span className="hidden text-2xl font-bold leading-tight sm:block">{item.date.split("-")[2]}</span>
                <span className="hidden text-xs opacity-80 sm:block">
                  {item.date.split("-")[0]}.{item.date.split("-")[1]}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground sm:hidden">
                  <Calendar size={12} aria-hidden />
                  {item.date}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-sm bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                      <Tag size={10} aria-hidden />
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                  </div>
                  <ArrowRight size={18} className="mt-4 hidden shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:block" aria-hidden />
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
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
