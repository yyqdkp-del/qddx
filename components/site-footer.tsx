import Link from "next/link"

/**
 * 友情链接：与省道协首页「友情链接」板块结构一致——标签前缀 + 横向链组（青岛市站填充本地/上级主管单位占位链接）。
 */
const friendLinks = [
  { label: "中央统战部", href: "https://www.zytzb.gov.cn" },
  { label: "国家宗教事务局", href: "https://www.sara.gov.cn" },
  { label: "山东省委统战部", href: "http://www.sdtzb.gov.cn/p1/index.html" },
  { label: "山东省民族宗教事务委员会", href: "http://mzw.shandong.gov.cn" },
  { label: "青岛市人民政府", href: "https://www.qingdao.gov.cn" },
  { label: "青岛统一战线", href: "https://www.qingdao.gov.cn/zjj/" },
  { label: "中国民族宗教网", href: "http://www.mzb.com.cn/html/report/1-1.htm" },
  { label: "中国宗教网", href: "https://www.chinareligion.cn/" },
  { label: "中国道教协会", href: "http://www.taoist.org.cn/loadData.do" },
  { label: "中国道教学院", href: "http://www.zgdjxy.org.cn" },
  { label: "山东省道教协会（参考建站）", href: "https://www.sdsdjxh.com/" },
  { label: "崂山风景区", href: "https://www.laoshan.cn" },
  { label: "青岛市图书馆", href: "https://www.qdlib.net" },
  { label: "道教文化频道（中国网示范链接）", href: "http://dao.china.com.cn" },
  { label: "道音文化（示范链接）", href: "https://www.daoisms.com.cn" },
]

/**
 * 页脚横向主导航顺序：与省道协 footer 首轮链接顺序一致。
 */
const footerPrimaryNav = [
  { label: "首页", href: "/" },
  { label: "协会概况", href: "/about" },
  { label: "新闻中心", href: "/news" },
  { label: "道教信仰", href: "/culture/knowledge" },
  { label: "政策法规", href: "/policies" },
  { label: "山东道观", href: "/temples" },
  { label: "道教文化", href: "/culture" },
  { label: "专题报道", href: "/news" },
  { label: "服务大厅", href: "/contact" },
]

export function SiteFooter() {
  return (
    <>
      <section aria-label="友情链接" className="border-y border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
            <span className="shrink-0 text-sm font-semibold tracking-wide text-primary">友情链接:</span>
            <nav className="flex min-w-0 flex-1 flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm">
              {friendLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-primary hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <footer className="border-t border-accent/25 bg-[#0f1a14] text-zinc-100">
        <div className="cloud-divider -mb-1 opacity-40" />

        <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
            <div className="min-w-0 flex-1 space-y-6">
              <ul className="flex flex-wrap justify-center gap-x-1 gap-y-2 border-b border-zinc-600/50 pb-4 text-[13px] lg:justify-start">
                {footerPrimaryNav.map((nav, index) => (
                  <li key={nav.href + nav.label} className="flex items-center whitespace-nowrap">
                    {index > 0 && (
                      <span className="mx-3 text-accent/40 select-none" aria-hidden>
                        |
                      </span>
                    )}
                    <Link
                      href={nav.href}
                      className="text-zinc-200 opacity-90 transition-all duration-300 hover:text-accent hover:opacity-100"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="text-center text-xs text-zinc-500 lg:text-left">技术支持：青岛市道教协会信息化建设（演示）</p>
            </div>

            <div className="flex shrink-0 flex-row flex-wrap justify-center gap-6 lg:flex-col xl:flex-row xl:justify-end">
              <div className="flex w-[120px] flex-col items-center gap-2 text-center text-xs text-zinc-400">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-zinc-600/60 bg-zinc-900/80 text-[10px] leading-tight text-zinc-500">
                  官网
                  <br />
                  二维码占位
                </div>
                <span className="text-zinc-300">青岛市道协官网</span>
              </div>
              <div className="flex w-[120px] flex-col items-center gap-2 text-center text-xs text-zinc-400">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-zinc-600/60 bg-zinc-900/80 text-[10px] leading-tight text-zinc-500">
                  公众号
                  <br />
                  二维码占位
                </div>
                <span className="text-zinc-300">青岛市道协公众号</span>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-700/60 pt-8 text-center text-xs leading-relaxed text-zinc-300 md:text-sm">
            <p className="text-sm font-semibold tracking-wide text-zinc-50">© 2026 青岛市道教协会 版权所有</p>
            <p className="mt-3">
              地址：山东省青岛市市南区太平路19号 <span className="text-zinc-600">|</span> 电话：0532-8286XXXX
            </p>
            <p className="mt-2">
              鲁ICP备XXXXXXX号 <span className="text-zinc-600">|</span> 鲁公网安备 XXXXXXX号
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
