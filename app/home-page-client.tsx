"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HeroCarousel, heroCarouselSlides } from "@/components/home/hero-carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { templeEntries, classicList, policyList } from "@/lib/data/qingdao-mock"
import type { HomeShowcaseRow } from "@/lib/data/qingdao-mock"

export type HomePageShowcaseProps = {
  newsRows: HomeShowcaseRow[]
  policyRows: HomeShowcaseRow[]
  charityRows: HomeShowcaseRow[]
  cultureRows: HomeShowcaseRow[]
}

function ShowcaseTabList({ rows }: { rows: HomeShowcaseRow[] }) {
  if (!rows || rows.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-muted-foreground/30 py-8 text-center text-sm text-muted-foreground">
        暂无相关数据
      </div>
    )
  }
  const data = rows.slice(0, 5)
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-md border border-border">
      {data.map((item) => (
        <li key={item.id} className="border-b border-border last:border-b-0">
          <div className="flex flex-wrap items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60">
            <Link href={item.href} className="min-w-0 flex-1 text-sm font-medium text-card-foreground line-clamp-2 hover:text-primary">
              {item.title}
            </Link>
            <time className="shrink-0 text-xs tabular-nums text-muted-foreground" dateTime={item.date}>
              {item.date}
            </time>
          </div>
        </li>
      ))}
    </ul>
  )
}

const associationIntroBrief =
  "青岛市道教协会成立于1993年，是在青岛市民政局注册、由市民族宗教事务部门业务主管的全市性道教团体。协会团结带领青岛市道教界人士和信教群众，坚持我国宗教中国化方向，依法开展教务活动，服务青岛市经济社会发展大局，传承优秀传统文化，积极开展公益慈善事业。"

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

export default function HomePageClient({
  newsRows,
  policyRows,
  charityRows,
  cultureRows,
}: HomePageShowcaseProps) {
  const [carouselCaptionIndex, setCarouselCaptionIndex] = useState(0)
  const [showcaseTab, setShowcaseTab] = useState<"news" | "policy" | "charity" | "culture">("news")

  const showcaseMoreHref =
    showcaseTab === "news"
      ? "/news"
      : showcaseTab === "policy"
        ? "/policies"
        : showcaseTab === "charity"
          ? "/charity"
          : "/culture"

  const templeMain = templeEntries[0]
  const templeSide = templeEntries.slice(1)

  /** 道教音乐：占位入口（版型对标省道协 district.right 四宫卡片） */
  const musicBoxes = [
    { title: "道乐｜崂山道乐", href: "/culture#art", image: "/images/banner-1.jpg" },
    { title: "道乐｜太平宫仪轨音乐", href: "/culture#art", image: "/images/banner-2.jpg" },
    { title: "道乐｜胶东道乐", href: "/culture#art", image: "/images/banner-3.jpg" },
    { title: "道乐｜沿海放生科仪配乐", href: "/culture#art", image: "/images/taiqing-palace.jpg" },
  ]

  /** 玄门仙踪：名著人名占位链（结构与省道协 txt link 行列一致） */
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

  /** 齐鲁仙界：画报墙（占位图 + 与城市标签一致的结构字段） */
  const wonderlandSlides = [
    { label: "崂山·太平瞰海", img: "/images/banner-2.jpg" },
    { label: "崂山·太清俯瞰", img: "/images/taiqing-palace.jpg" },
    { label: "青岛市南·妈祖晨雾", img: "/images/tianhou-palace.jpg" },
    { label: "崂山·八仙墩云潮", img: "/images/shangqing-palace.jpg" },
    { label: "即墨·海岸线霞光（示意）", img: "/images/banner-1.jpg" },
    { label: "崂山·明道观遗址径（示意）", img: "/images/banner-3.jpg" },
    { label: "青岛·前海栈桥暮色（示意）", img: "/images/banner-2.jpg" },
    { label: "崂山·明道岩眺望（示意）", img: "/images/taiqing-palace.jpg" },
    { label: "市北·老城巷陌（示意）", img: "/images/banner-3.jpg" },
  ]

  return (
    <>
      {/* ① 首页「动态新闻」整块：左侧轮播 + 右侧要闻 Tab（结构与省道协 .News .out 双栏对齐） */}
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

            <div className="rounded-lg border border-border bg-card shadow-sm lg:col-span-7">
              <Tabs
                defaultValue="news"
                onValueChange={(v) => setShowcaseTab(v as "news" | "policy" | "charity" | "culture")}
                className="w-full gap-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
                  <TabsList className="h-auto min-h-9 w-full flex-wrap justify-start gap-1 bg-secondary/80 p-1 sm:w-auto sm:flex-1 data-[orientation=horizontal]:justify-start">
                    <TabsTrigger
                      value="news"
                      className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm md:text-sm"
                    >
                      新闻动态
                    </TabsTrigger>
                    <TabsTrigger
                      value="policy"
                      className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm md:text-sm"
                    >
                      政策法规
                    </TabsTrigger>
                    <TabsTrigger
                      value="charity"
                      className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm md:text-sm"
                    >
                      慈善公益
                    </TabsTrigger>
                    <TabsTrigger
                      value="culture"
                      className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm md:text-sm"
                    >
                      道教文化
                    </TabsTrigger>
                  </TabsList>
                  <Link href={showcaseMoreHref} className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:text-accent">
                    <span>更多</span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                <TabsContent value="news" className="m-0 min-h-[12rem] px-3 py-3 focus-visible:outline-none sm:px-4 sm:py-4">
                  <ShowcaseTabList rows={newsRows} />
                </TabsContent>
                <TabsContent value="policy" className="m-0 min-h-[12rem] px-3 py-3 focus-visible:outline-none sm:px-4 sm:py-4">
                  <ShowcaseTabList rows={policyRows} />
                </TabsContent>
                <TabsContent value="charity" className="m-0 min-h-[12rem] px-3 py-3 focus-visible:outline-none sm:px-4 sm:py-4">
                  <ShowcaseTabList rows={charityRows} />
                </TabsContent>
                <TabsContent value="culture" className="m-0 min-h-[12rem] px-3 py-3 focus-visible:outline-none sm:px-4 sm:py-4">
                  <ShowcaseTabList rows={cultureRows} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/news" ariaLabel="横幅推广占位图（示意）跳转新闻中心" />

      {/* ② 协会概况三列：简介 / 规章制度 / 服务大厅（结构与省道协 .ABOUT 三宫格对齐） */}
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
              <Image src="/images/banner-1.jpg" alt="青岛市道教协会掠影示意" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
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
              {!policyList || policyList.length === 0 ? (
                <li className="py-6 text-center text-muted-foreground">暂无相关数据</li>
              ) : (
                policyList.map((policy) => (
                  <li key={policy.id}>
                    <Link href={`/policies/${policy.id}`} className="flex gap-2 text-muted-foreground transition-colors hover:text-primary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span className="line-clamp-2">{policy.title}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </article>

          {/* box-3 服务大厅 */}
          <article className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-bold text-card-foreground">
                <span className="text-primary">服务</span>大厅
              </h3>
              <Link href="/contact" className="text-xs font-medium text-primary hover:text-accent">
                更多 →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/policies"
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-secondary/40 transition-all hover:border-accent/50 hover:shadow-md"
              >
                <div className="aspect-[16/11] bg-muted transition-colors group-hover:bg-muted/80" />
                <div className="flex flex-1 flex-col justify-center px-4 py-3">
                  <h4 className="text-sm font-bold text-card-foreground">文件下载</h4>
                  <p className="mt-1 text-[11px] text-muted-foreground">文件下载</p>
                </div>
              </Link>
              <Link
                href="/contact"
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-secondary/40 transition-all hover:border-accent/50 hover:shadow-md"
              >
                <div className="aspect-[16/11] bg-muted transition-colors group-hover:bg-muted/80" />
                <div className="flex flex-1 flex-col justify-center px-4 py-3">
                  <h4 className="text-sm font-bold text-card-foreground">信息查询</h4>
                  <p className="mt-1 text-[11px] text-muted-foreground">信息查询</p>
                </div>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <TwinBannerStripe href="/policies" ariaLabel="腰栏横幅占位跳转政策法规频道" />

      {/* ③ 山东道观 + 道教音乐（结构与省道协 .district 左右两栏对齐；左侧标题保留「山东道观」字面以符合 1:1 栏目口径） */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold text-foreground">
                  <span className="text-primary">山东</span>道观
                </h3>
                <Link href="/temples" className="text-xs font-medium text-primary hover:text-accent">
                  更多 →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-5">
                <Link href="/temples" className="relative block aspect-square overflow-hidden rounded-lg border border-border bg-muted md:col-span-2">
                  <Image src="/images/banner-2.jpg" alt="青岛道教宫观电子地图占位" fill className="object-cover" sizes="(min-width: 768px) 240px, 100vw" />
                </Link>
                <div className="flex flex-col gap-4 md:col-span-3">
                  {/* 占位搜索条：外观对标省道协搜索框 */}
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

      <TwinBannerStripe href="/charity" ariaLabel="腰栏横幅占位跳转公益慈善一览" />

      {/* ④ 玄门仙踪 + 道教书画（结构与省道协 .district-1 对应） */}
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
                {paintingSlides.length === 0 ? (
                  <div className="w-full rounded-md border border-dashed border-muted-foreground/30 py-8 text-center text-sm text-muted-foreground">
                    暂无相关数据
                  </div>
                ) : (
                  paintingSlides.map((paint) => (
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
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TwinBannerStripe href="/culture" ariaLabel="腰栏横幅占位跳转道教文化总览" />

      {/* ⑤ 齐鲁仙界：标题字面与省道协一致；展示青岛风景占位图组 */}
      <section className="bg-background pb-12 pt-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-lg font-bold text-foreground">
              <span className="text-primary">齐鲁</span>仙界
            </h3>
            <span className="text-xs text-muted-foreground opacity-75">画报墙（占位示意）</span>
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
