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
      {/* 友情链接区：结构与省道协「友情链接」一栏相同（独立于深色版权条之上） */}
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
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="cloud-divider -mb-1" />

        <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12">
          {/* 底部结构与省道协 footer：左侧为主导航复述 + B-1/B-2 法务与地址；右侧为双二维码占位 */}
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
            <div className="min-w-0 flex-1 space-y-6">
              {/* 复述主导航 */}
              <ul className="flex flex-wrap gap-x-1 gap-y-2 border-b border-primary-foreground/10 pb-4 text-[13px]">
                {footerPrimaryNav.map((nav, index) => (
                  <li key={nav.href + nav.label} className="flex items-center whitespace-nowrap">
                    {index > 0 && (
                      <span className="mx-3 text-accent/35 select-none" aria-hidden>
                        |
                      </span>
                    )}
                    <Link href={nav.href} className="opacity-85 transition-opacity hover:opacity-100 hover:text-accent">
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-xs leading-relaxed opacity-85 md:text-sm">
                {/* B-1：版权与许可一行（对应省道协 .B-1） */}
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4">
                  <span>
                    <b className="text-primary-foreground">版权所有：</b>
                    <Link href="/" className="underline-offset-4 hover:text-accent hover:underline">
                      青岛市道教协会
                    </Link>
                  </span>
                  <span>
                    <b className="text-primary-foreground">备案号：</b>
                    <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow noopener noreferrer" className="underline-offset-4 hover:text-accent hover:underline">
                      鲁ICP备XXXXXXXX号
                    </a>
                  </span>
                  <span className="whitespace-normal">
                    <b className="text-primary-foreground">互联网宗教信息服务许可证编号：</b>
                    <span className="whitespace-nowrap opacity-95">鲁(示例)XXXXXXX</span>
                  </span>
                </div>

                {/* B-2：联系信息（对应省道协 .B-2.B-1） */}
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                  <span>
                    <b className="text-primary-foreground">地址：</b>
                    青岛市市南区太平路19号（天后宫内 · 联系地址示意）
                  </span>
                  <span>
                    <b className="text-primary-foreground">电话：</b>
                    <a href="tel:053282877666" className="underline-offset-4 hover:text-accent hover:underline">
                      0532-82877666
                    </a>
                  </span>
                  <span>
                    <b className="text-primary-foreground">邮箱：</b>
                    <a href="mailto:qddjxh@163.com" className="underline-offset-4 hover:text-accent hover:underline">
                      qddjxh@163.com
                    </a>
                  </span>
                </div>

                {/* 技术支持行（对标省道协最下行 .B-1） */}
                <div>
                  <span className="opacity-70">
                    <b className="text-primary-foreground opacity-95">技术支持：</b>
                    <span className="text-primary-foreground/80">青岛市道教协会信息化建设（占位）</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 右侧二维码：官网 / 公众号 双列 */}
            <div className="flex shrink-0 flex-row flex-wrap justify-center gap-6 lg:flex-col xl:flex-row xl:justify-end">
              <div className="flex w-[120px] flex-col items-center gap-2 text-center text-xs opacity-85">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-[10px] leading-tight text-primary-foreground/60">
                  官网
                  <br />
                  二维码占位
                </div>
                <span>青岛市道协官网</span>
              </div>
              <div className="flex w-[120px] flex-col items-center gap-2 text-center text-xs opacity-85">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-[10px] leading-tight text-primary-foreground/60">
                  公众号
                  <br />
                  二维码占位
                </div>
                <span>青岛市道协公众号</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
