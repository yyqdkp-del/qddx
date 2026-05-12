import Link from "next/link"

/** 友情链接：上级与业务主管单位公开网站入口 */
const friendLinks = [
  { label: "中国道教协会", href: "http://www.taoist.org.cn" },
  { label: "山东省道教协会", href: "https://www.sdsdjxh.com/" },
  { label: "青岛市民宗局", href: "https://tyzx.qingdao.gov.cn/mzzj_80/" },
  { label: "崂山风景名胜区官网", href: "https://www.laoshan.cn" },
]

/** 页脚横向主导航 */
const footerPrimaryNav = [
  { label: "首页", href: "/" },
  { label: "协会概况", href: "/about" },
  { label: "新闻中心", href: "/news" },
  { label: "道教信仰", href: "/culture/knowledge" },
  { label: "政策法规", href: "/policies" },
  { label: "道教宫观", href: "/temples" },
  { label: "道教文化", href: "/culture" },
  { label: "专题报道", href: "/news" },
  { label: "服务大厅", href: "/contact" },
]

export function SiteFooter() {
  return (
    <>
      {/* 友情链接区 */}
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
          {/* 底部：主导航复述 + 法务与地址；右侧为官网与公众号二维码位 */}
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
                {/* 版权与许可 */}
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
                      鲁ICP备2025145678号
                    </a>
                  </span>
                  <span className="whitespace-normal">
                    <b className="text-primary-foreground">互联网宗教信息服务许可证编号：</b>
                    <span className="whitespace-nowrap opacity-95">鲁（青）网宗备字0001号</span>
                  </span>
                </div>

                {/* 联系信息 */}
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                  <span>
                    <b className="text-primary-foreground">地址：</b>
                    青岛市市南区太平路19号（青岛市道教协会办公联络地址）
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

                <div>
                  <span className="opacity-70">
                    <b className="text-primary-foreground opacity-95">技术支持：</b>
                    <span className="text-primary-foreground/80">青岛市道教协会信息化工作小组</span>
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
                  二维码上线后张贴
                </div>
                <span>青岛市道协官网</span>
              </div>
              <div className="flex w-[120px] flex-col items-center gap-2 text-center text-xs opacity-85">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 text-[10px] leading-tight text-primary-foreground/60">
                  公众号
                  <br />
                  二维码上线后张贴
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
