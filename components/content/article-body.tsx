import { Calendar, Tag } from "lucide-react"

/** 通用文章详情排版：与新闻详情页保持同款卡片与分割线样式（返回链接由各页面自行放置） */
export type ArticleBodyProps = {
  title: string
  date?: string
  category?: string
  paragraphs: string[]
}

export function ArticleBody({ title, date, category, paragraphs }: ArticleBodyProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
      <h1 className="text-xl font-bold leading-relaxed text-card-foreground md:text-2xl">{title}</h1>

      {(date || category) && (
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {date && (
            <span className="flex items-center gap-1">
              <Calendar size={12} aria-hidden />
              {date}
            </span>
          )}
          {category && (
            <span className="flex items-center gap-1">
              <Tag size={12} aria-hidden />
              {category}
            </span>
          )}
        </div>
      )}

      <div className="my-4 flex items-center gap-2" aria-hidden>
        <span className="h-px w-8 bg-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px w-8 bg-accent" />
      </div>

      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-card-foreground/80">
            {p}
          </p>
        ))}
      </div>
    </article>
  )
}
