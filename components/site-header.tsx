"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, Search, X } from "lucide-react"

/**
 * 主导航：青岛市道教协会网站信息架构（频道与本地宫观入口）。
 */
type NavDropdownItem = { label: string; href: string }
type NavMainItem =
  | { label: string; href: string; matchPrefix?: boolean; children?: undefined }
  | { label: string; href: string; matchPrefix?: boolean; children: NavDropdownItem[] }

const mainNavigation: NavMainItem[] = [
  { label: "首页", href: "/" },
  {
    label: "协会概况",
    href: "/about",
    children: [
      { label: "协会简介", href: "/about" },
      { label: "领导班子", href: "/about#leaders" },
      { label: "协会章程", href: "/about#charter" },
      { label: "历史沿革", href: "/about#history" },
      { label: "各级协会", href: "/about#district-branches" },
    ],
  },
  {
    label: "新闻中心",
    href: "/news",
    matchPrefix: true,
    children: [
      { label: "信息要闻", href: "/news" },
      { label: "地方动态", href: "/news" },
      { label: "公益慈善", href: "/charity" },
      { label: "公告倡议", href: "/news" },
    ],
  },
  {
    label: "道教信仰",
    href: "/culture/knowledge",
    matchPrefix: true,
    children: [
      { label: "教理教义", href: "/culture/knowledge" },
      { label: "经文典籍", href: "/culture/classics" },
      { label: "神仙信仰", href: "/culture/knowledge" },
    ],
  },
  {
    label: "政策法规",
    href: "/policies",
    matchPrefix: true,
    children: [
      { label: "法律法规", href: "/policies" },
      { label: "政府规章", href: "/policies" },
      { label: "中道协制度", href: "/policies" },
    ],
  },
  {
    label: "道教宫观",
    href: "/temples",
    matchPrefix: true,
    children: [
      { label: "宫观风采一览", href: "/temples" },
      { label: "崂山太清宫", href: "/temples/taiqing" },
      { label: "崂山上清宫", href: "/temples/shangqing" },
      { label: "崂山太平宫", href: "/temples/taiping" },
    ],
  },
  {
    label: "道教文化",
    href: "/culture",
    matchPrefix: true,
    children: [
      { label: "阐玄论道", href: "/culture/classics" },
      { label: "玄门仙踪", href: "/culture/knowledge" },
      { label: "道在养生", href: "/culture#health" },
      { label: "道教艺苑", href: "/culture#art" },
      { label: "斋醮科仪", href: "/culture/knowledge/k2" },
      { label: "仙话传奇", href: "/culture/classics" },
    ],
  },
  {
    label: "专题报道",
    href: "/news",
    matchPrefix: true,
    children: [
      { label: "2017丁酉年传戒", href: "/news" },
      { label: "全真寻脉", href: "/culture/classics" },
      { label: "道教中国化", href: "/culture/knowledge/k1" },
      { label: "2016崂山论道", href: "/temples/taiqing" },
    ],
  },
  {
    label: "服务大厅",
    href: "/contact",
    matchPrefix: true,
    children: [
      { label: "文件下载", href: "/policies" },
      { label: "信息查询", href: "/contact" },
    ],
  },
]

/** 判断主导航某项是否激活（含下拉子路由匹配） */
function isNavActive(item: NavMainItem, pathname: string): boolean {
  if (item.href === "/" && pathname === "/") return true
  const prefix = item.matchPrefix ?? false
  const selfMatch = prefix ? pathname.startsWith(item.href) && item.href !== "/" : pathname === item.href
  if (selfMatch) return true
  if (item.children) {
    return item.children.some((c) => {
      if (c.href.startsWith("#")) return false
      if (c.href.includes("#")) return pathname === c.href.split("#")[0]
      return pathname === c.href || pathname.startsWith(c.href + "/")
    })
  }
  return false
}

/** 下拉子项链接 */
function NavDropdownLink({ item }: { item: NavDropdownItem }) {
  return (
    <Link href={item.href} className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-muted hover:text-primary">
      {item.label}
    </Link>
  )
}

/** 顶部工具条：日期、属地、站内搜索 */
function HeaderToolbar() {
  const d = new Date()
  const dateStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
  const weekStr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][d.getDay()]

  return (
    <div className="border-b border-primary-foreground/10 bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-90">
          <span className="whitespace-nowrap">{dateStr}</span>
          <span className="hidden text-muted-foreground sm:inline" aria-hidden>
            |
          </span>
          <span className="hidden text-muted-foreground sm:inline">{weekStr}</span>
          <span className="text-muted-foreground" aria-hidden>
            |
          </span>
          <span className="font-medium tracking-wide text-primary">青岛</span>
        </div>
        {/* 关键字检索（静态站点不提交跳转） */}
        <form
          role="search"
          className="flex min-w-[200px] max-w-xs flex-1 items-center gap-2 sm:flex-initial md:max-w-md"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            name="keyword"
            type="search"
            placeholder="请输入关键字"
            aria-label="站内搜索关键字"
            className="flex-1 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-card-foreground shadow-sm outline-none ring-ring placeholder:text-muted-foreground focus-visible:ring-2"
          />
          <button
            type="submit"
            className="rounded-md border border-accent/50 bg-accent/15 p-1.5 text-accent-foreground transition-colors hover:bg-accent/25"
            aria-label="搜索"
          >
            <Search size={16} aria-hidden />
          </button>
        </form>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  /** 移动端某一级菜单是否展开子项 */
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    setMobileOpen(false)
    setExpanded(null)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <HeaderToolbar />
      {/* 品牌与主导航行（保留原站绿底配色类名体系） */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
          <Link href="/" className="flex items-center gap-3">
            <TaoistLogo />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-wider lg:text-xl">青岛市道教协会</span>
              <span className="hidden text-[10px] tracking-[0.3em] opacity-70 sm:block">青岛市道教协会门户网站</span>
            </div>
          </Link>

          {/* 桌面导航：带子菜单的 hover 下拉层 */}
          <nav className="hidden items-stretch lg:flex lg:justify-end xl:gap-0.5">
            <ul className="flex flex-wrap justify-end xl:flex-nowrap">
              {mainNavigation.map((item) => {
                const active = isNavActive(item, pathname)
                if (!item.children) {
                  return (
                    <li key={item.label} className="relative">
                      <Link
                        href={item.href}
                        className={`relative flex items-center whitespace-nowrap px-2 py-2 text-[13px] font-medium tracking-wide transition-colors hover:text-accent xl:px-2.5 ${
                          active ? "text-accent" : "text-primary-foreground"
                        }`}
                      >
                        {item.label}
                        {active && <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />}
                      </Link>
                    </li>
                  )
                }

                return (
                  <li key={item.label} className="group relative">
                    <div className="flex items-center gap-0.5">
                      <Link
                        href={item.href}
                        className={`relative flex items-center whitespace-nowrap px-2 py-2 text-[13px] font-medium tracking-wide transition-colors hover:text-accent xl:px-2.5 ${
                          active ? "text-accent" : "text-primary-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown className={`h-4 w-4 shrink-0 opacity-70 transition-transform group-hover:rotate-180`} aria-hidden />
                    </div>
                    {active && <span className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />}
                    <div className="invisible absolute left-0 top-full z-40 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="min-w-[200px] rounded-md border border-border bg-card p-2 text-left text-card-foreground shadow-lg">
                        {item.children.map((child) => (
                          <div key={child.label}>
                            <NavDropdownLink item={child} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端抽屉式导航：逐项展开次级菜单 */}
        {mobileOpen && (
          <nav className="max-h-[80vh] overflow-y-auto border-t border-primary-foreground/10 lg:hidden">
            <ul className="pb-3">
              {mainNavigation.map((item) =>
                item.children ? (
                  <li key={item.label} className="border-b border-primary-foreground/5">
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className={`flex w-full items-center justify-between px-6 py-3 text-left text-sm ${
                        expanded === item.label ? "bg-primary-foreground/10 text-accent" : "text-primary-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} aria-hidden />
                    </button>
                    {expanded === item.label && (
                      <div className="bg-primary/90 px-4 pb-3 pt-1 text-primary-foreground">
                        <Link href={item.href} className="mb-2 block py-2 text-xs font-medium underline-offset-4 hover:text-accent" onClick={() => setMobileOpen(false)}>
                          进入「{item.label}」频道
                        </Link>
                        {item.children.map((child) => (
                          <div key={child.label} className="border-b border-primary-foreground/5 last:border-0">
                            <Link href={child.href} className="block py-2 pl-4 text-xs hover:text-accent" onClick={() => setMobileOpen(false)}>
                              {child.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-6 py-3 text-sm transition-colors hover:bg-primary-foreground/5 ${
                        isNavActive(item, pathname) ? "text-accent" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

function TaoistLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 lg:h-12 lg:w-12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke="#C9A96E" strokeWidth="2" />
      <path d="M24 2C24 2 24 24 24 24C24 24 13 24 13 13C13 6 18 2 24 2Z" fill="#C9A96E" />
      <path d="M24 46C24 46 24 24 24 24C24 24 35 24 35 35C35 42 30 46 24 46Z" fill="#C9A96E" />
      <circle cx="19" cy="30" r="3" fill="#C9A96E" />
      <circle cx="29" cy="18" r="3" fill="#F5F0E8" />
    </svg>
  )
}
