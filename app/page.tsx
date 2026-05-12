"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Download,
  HeartHandshake,
  Library,
  Newspaper,
  Scale,
  Search,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { HeroCarousel, heroCarouselSlides } from "@/components/home/hero-carousel"
import {
  newsList,
  newsArticles,
  policyList,
  templeEntries,
  classicList,
  homeFeatures,
} from "@/lib/data/qingdao-mock"
import type { HomeFeatureIconId, NewsListItem } from "@/lib/data/qingdao-mock"

/** 首页：信息动态、协会三块、崂山宫观与道教文化、青岛揽胜画报墙等版块。 */

const associationIntroBrief =
  "青岛市道教协会成立于1993年，是在青岛市民政局注册、由市民族宗教事务部门业务主管的全市性道教团体。协会团结带领青岛市道教界人士和信教群众，坚持我国宗教中国化方向，依法开展教务活动，服务青岛市经济社会发展大局，传承优秀传统文化，积极开展公益慈善事业。"

/** 新闻右侧 Tab */
const NEWS_TABS = [
  { title: "信息要闻", predicate: (c: string) => c === "协会动态" || c === "文化交流" },
  { title: "地方动态", predicate: (c: string) => c === "宗教活动" },
  { title: "公益慈善", predicate: (c: string) => c === "公益慈善" },
  { title: "公告倡议", predicate: (c: string) => c === "通知公告" },
]

/** 首页新闻区兜底：与崂山文化节、慈善募捐相关，保证各 Tab 不致空白 */
const HOME_NEWS_FALLBACK: NewsListItem[] = [
  {
    id: "1",
    title: "青岛市道教协会成功举办崂山文化节开幕式",
    date: "2025-04-18",
    category: "协会动态",
    excerpt: "",
  },
  {
    id: "2",
    title: "崂山太清宫开展春季慈善公益募捐活动",
    date: "2025-03-22",
    category: "公益慈善",
    excerpt: "",
  },
]

/** Lucide 图标与数据中的 icon 字段对应 */
const HOME_FEATURE_ICONS: Record<HomeFeatureIconId, LucideIcon> = {
  newspaper: Newspaper,
  download: Download,
  search: Search,
  scale: Scale,
  "heart-handshake": HeartHandshake,
  library: Library,
}

/** 双列腰栏横幅 */
function TwinBannerStripe({ href, ariaLabel }: { href: string; ariaLabel: string }) {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-6">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          href={href}
          aria-label={ariaLabel}
          className="group block overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[21/9] bg-gradient-to-br from-muted to-secondary transition-opacity group-hover:opacity-95" />
            <div className="aspect-[21/9] bg-gradient-to-bl from-secondary to-muted transition-opacity group-hover:opacity-95" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [newsTabIndex, setNewsTabIndex] = useState(0)
  const [carouselCaptionIndex, setCarouselCaptionIndex] = useState(0)

  /** 统一新闻数据源：优先 newsList；为空时由 newsArticles 生成列表项 */
  const mergedNewsFeed = useMemo(() => {
    if (newsList.length > 0) return newsList
    return Object.entries(newsArticles).map(([id, article]) => ({
      id,
      title: article.title,
      date: article.date,
      category: article.category,
      excerpt: article.content[0]?.slice(0, 160) ?? "",
    }))
  }, [newsList, newsArticles])

  /** 要闻 Tab 对应的列表条目；当前 Tab 无匹配时再套兜底稿 */
  const tabbedNews = useMemo(() => {
    const predicate = NEWS_TABS[newsTabIndex]?.predicate ?? (() => true)
    const primary = mergedNewsFeed.filter((n) => predicate(n.category)).slice(0, 8)
    if (primary.length > 0) return primary
    return HOME_NEWS_FALLBACK.filter((n) => predicate(n.category)).slice(0, 8)
  }, [newsTabIndex, mergedNewsFeed])

  const templeMain = templeEntries[0]
  const templeSide = templeEntries.slice(1)

  const musicBoxes = [
    { title: "道乐｜崂山道乐", href: "/culture#art", image: "/images/banner-1.jpg" },
    { title: "道乐｜太平宫科仪音乐", href: "/culture#art", image: "/images/banner-2.jpg" },
    { title: "道乐｜上清宫松风梵呗", href: "/culture#art", image: "/images/banner-3.jpg" },
    { title: "道乐｜前海放生科仪配乐", href: "/culture#art", image: "/images/taiqing-palace.jpg" },
  ]

  /** 玄门仙踪：崂山与全真道脉人物导读 */
  const immortalTraces = [
    { title: "上清宗师｜魏华存", href: "/culture/classics/cl2" },
    { title: "纯阳真人｜吕洞宾", href: "/culture/knowledge/k1" },
    { title: "龙门祖师｜丘处机", href: "/culture/classics/cl1" },
    { title: "华盖真人｜刘若拙", href: "/culture/knowledge" },
    { title: "神仙宗伯｜王远知", href: "/culture/classics" },
    { title: "岳地神仙｜张志纯", href: "/culture/knowledge/k3" },
    { title: "海岳真人｜孙玄清", href: "/culture/knowledge/k4" },
    { title: "清和真人｜尹志平", href: "/culture/classics/cl3" },
  ]

  const paintingSlides = classicList.slice(0, 5)

  /** 青岛揽胜：画报墙 */
  const wonderlandSlides = [
    { label: "崂山·太平宫瞰海", img: "/images/banner-2.jpg" },
    { label: "崂山·太清宫俯瞰", img: "/images/taiqing-palace.jpg" },
    { label: "市南·前海妈祖晨雾", img: "/images/tianhou-palace.jpg" },
    { label: "崂山·八仙墩云潮", img: "/images/shangqing-palace.jpg" },
    { label: "即墨·鳌山卫海岸线霞光", img: "/images/banner-1.jpg" },
    { label: "崂山·八水河峡谷栈道", img: "/images/banner-3.jpg" },
    { label: "市南·栈桥前海暮色", img: "/images/banner-2.jpg" },
    { label: "崂山·明霞洞远眺", img: "/images/taiqing-palace.jpg" },
    { label: "市北·馆陶路历史街区", img: "/images/banner-3.jpg" },
  ]

  return (
    <>
      {/* 动态新闻：左侧轮播 + 右侧要闻 Tab */}
      <section className="bg-background py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* 左侧：轮播大图 */}
            <div className="space-y-3 lg:col-span-5">
              <HeroCarousel embedded onSlideChange={(i) => setCarouselCaptionIndex(i)} />
              <div className="flex flex-col gap-2 rounded-md border border-border bg-card px-4 py-3 text-xs text-muted-foreground shadow-sm md:flex-row md:items-center md:justify-between">
                <span className="line-clamp-2 font-medium text-card-foreground">
                  {heroCarouselSlides[carouselCaptionIndex]?.subtitle ?? heroCarouselSlides[0]?.subtitle}
                </span>
                <span className="shrink-0 text-[11px] text-accent">{heroCarouselSlides[carouselCaptionIndex]?.title ?? ""}</span>
              </div>
            </div>

            {/* 右侧：Tab + 滚动列表 */}
            <div className="rounded-lg border border-border bg-card shadow-sm lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {NEWS_TABS.map((tab, index) => (
                    <button
                      key={tab.title}
                      type="button"
                      onClick={() => setNewsTabIndex(index)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                        newsTabIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
                <Link href="/news" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent">
                  <span>更多</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <ul className="divide-y divide-border">
                {tabbedNews.length === 0 ? (
                  <li className="px-4 py-8 text-center text-sm text-muted-foreground">
                    暂无该分类动态，请前往
                    <Link href="/news" className="mx-1 font-medium text-primary underline-offset-2 hover:text-accent hover:underline">
                      新闻中心
                    </Link>
                    浏览全部。
                  </li>
                ) : (
                  tabbedNews.map((item) => (
                    <li key={item.id}>
                      <Link href={`/news/${item.id}`} className="flex flex-wrap items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60">
                        <span className="min-w-0 flex-1 text-sm text-card-foreground line-clamp-2">{item.title}</span>
                        <time className="shrink-0 text-xs text-muted-foreground">{item.date}</time>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/news" ariaLabel="前往新闻中心" />

      {/* 协会概况三列：简介 / 规章制度 / 服务大厅 */}
      <section className="bg-muted/30 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-3">
          {/* box-1 协会简介 */}
          <article className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-bold text-card-foreground">
                <span className="text-primary">协会</span>简介
              </h3>
              <Link href="/about" className="text-xs font-medium text-primary hover:text-accent">
                更多 →
              </Link>
            </div>
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md border border-border">
              <Image src="/images/banner-1.jpg" alt="青岛市道教协会会务掠影" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{associationIntroBrief}</p>
          </article>

          {/* box-2 规章制度 */}
          <article className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-bold text-card-foreground">
                <span className="text-primary">规章</span>制度
              </h3>
              <Link href="/policies" className="text-xs font-medium text-primary hover:text-accent">
                更多 →
              </Link>
            </div>
            <ul className="max-h-[320px] space-y-2 overflow-auto pr-1 text-sm">
              {policyList.map((policy) => (
                <li key={policy.id}>
                  <Link href={`/policies/${policy.id}`} className="flex gap-2 text-muted-foreground transition-colors hover:text-primary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span className="line-clamp-2">{policy.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          {/* box-3 服务大厅：引导至下方六大入口 */}
          <article className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-bold text-card-foreground">
                <span className="text-primary">服务</span>大厅
              </h3>
              <Link href="/contact" className="text-xs font-medium text-primary hover:text-accent">
                更多 →
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              新闻发布、制度下载、办事查询、法规学习、慈善公示与文化导读均已集中在下方六大入口，绿底金边样式与全站统一，点击卡片即可进入对应频道。
            </p>
            <Link
              href="#home-features"
              className="mt-4 inline-flex items-center gap-2 rounded-md border-2 border-accent/60 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 hover:text-accent"
            >
              前往六大入口
              <span aria-hidden>↓</span>
            </Link>
          </article>
        </div>

        {/* 六大功能入口：数据驱动，避免空白占位 */}
        <div id="home-features" className="mx-auto mt-10 max-w-7xl scroll-mt-24 px-4">
          <div className="mb-6 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-lg font-bold text-foreground md:text-xl">
              <span className="text-primary">服务</span>与资讯入口
            </h2>
            <p className="max-w-xl text-xs text-muted-foreground md:text-sm">青岛市道教协会门户网站核心服务一览，图标与说明均与站内路由绑定。</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((feature) => {
              const Icon = HOME_FEATURE_ICONS[feature.icon]
              return (
                <Link
                  key={feature.title}
                  href={feature.link}
                  className="group flex flex-col rounded-lg border-2 border-accent/35 bg-card p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
                >
                  <div
                    className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    aria-hidden
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-card-foreground">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent bg-accent/15 px-4 py-2 text-sm font-semibold text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    进入频道
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/policies" ariaLabel="前往政策法规频道" />

      {/* 崂山宫观 + 道教音乐 */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold text-foreground">
                  <span className="text-primary">崂山</span>宫观
                </h3>
                <Link href="/temples" className="text-xs font-medium text-primary hover:text-accent">
                  更多 →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-5">
                <Link href="/temples" className="relative block aspect-square overflow-hidden rounded-lg border border-border bg-muted md:col-span-2">
                  <Image src="/images/banner-2.jpg" alt="青岛市道教宫观分布导览图" fill className="object-cover" sizes="(min-width: 768px) 240px, 100vw" />
                </Link>
                <div className="flex flex-col gap-4 md:col-span-3">
                  {/* 站内宫观关键词检索 */}
                  <form role="search" className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input placeholder="请输入关键词搜索" className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm outline-none ring-ring focus-visible:ring-2" />
                    <button type="submit" className="rounded-md border border-accent/40 bg-accent/15 px-3 text-accent-foreground transition-colors hover:bg-accent/25">
                      搜索
                    </button>
                  </form>
                  {templeMain && (
                    <Link href={`/temples/${templeMain.id}`} className="flex gap-3 rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                        <Image src={templeMain.image} alt={templeMain.name} fill className="object-cover" sizes="128px" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-card-foreground">{templeMain.name}</h4>
                        <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{templeMain.description[0]}</p>
                      </div>
                    </Link>
                  )}
                  <div className="grid gap-2 sm:grid-cols-2">
                    {templeSide.map((tp) => (
                      <Link key={tp.id} href={`/temples/${tp.id}`} className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span className="line-clamp-2">{tp.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold text-foreground">
                  <span className="text-primary">道教</span>音乐
                </h3>
                <Link href="/culture#art" className="text-xs font-medium text-primary hover:text-accent">
                  更多 →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {musicBoxes.map((m) => (
                  <Link key={m.title} href={m.href} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image src={m.image} alt={m.title} fill className="object-cover opacity-95 transition-opacity group-hover:opacity-80" sizes="(min-width: 1024px) 240px, 50vw" />
                    </div>
                    <div className="px-3 py-2 text-xs font-semibold text-card-foreground">{m.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/charity" ariaLabel="前往公益慈善一览" />

      {/* 玄门仙踪 + 道教书画 */}
      <section className="bg-muted/30 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold text-foreground">
                  <span className="text-primary">玄门</span>仙踪
                </h3>
                <Link href="/culture/knowledge" className="text-xs font-medium text-primary hover:text-accent">
                  更多 →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-2">
                {immortalTraces.map((trace) => (
                  <Link key={trace.href} href={trace.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span className="line-clamp-1">{trace.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold text-foreground">
                  <span className="text-primary">道教</span>书画
                </h3>
                <Link href="/culture/classics" className="text-xs font-medium text-primary hover:text-accent">
                  更多 →
                </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {paintingSlides.map((paint) => (
                  <Link
                    key={paint.id}
                    href={`/culture/classics/${paint.id}`}
                    className="group w-[200px] shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/5] bg-muted">
                      <Image src="/images/taoist-culture.jpg" alt={paint.title} fill className="object-cover opacity-95 transition-opacity group-hover:opacity-85" sizes="200px" />
                    </div>
                    <div className="line-clamp-2 px-3 py-2 text-[11px] text-card-foreground">{paint.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/culture" ariaLabel="前往道教文化总览" />

      {/* 青岛揽胜画报墙 */}
      <section className="bg-background pb-12 pt-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-lg font-bold text-foreground">
              <span className="text-primary">青岛</span>揽胜
            </h3>
            <span className="text-xs text-muted-foreground opacity-75">崂山与市域人文风光集锦</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {wonderlandSlides.map((slide) => (
              <figure key={slide.label} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image src={slide.img} alt={slide.label} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <figcaption className="px-3 py-2 text-center text-[11px] text-muted-foreground">{slide.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
