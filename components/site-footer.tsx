import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const footerNav = [
  {
    title: "关于协会",
    links: [
      { label: "协会简介", href: "/about" },
      { label: "领导班子", href: "/about#leaders" },
      { label: "协会章程", href: "/about#charter" },
      { label: "历史沿革", href: "/about#history" },
    ],
  },
  {
    title: "道教文化",
    links: [
      { label: "养生之道", href: "/culture#health" },
      { label: "道教艺术", href: "/culture#art" },
      { label: "经典文献", href: "/culture#scripture" },
    ],
  },
  {
    title: "道观导览",
    links: [
      { label: "崂山太清宫", href: "/temples#taiqing" },
      { label: "崂山上清宫", href: "/temples#shangqing" },
      { label: "天后宫", href: "/temples#tianhou" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Cloud divider */}
      <div className="cloud-divider -mb-1" />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">青岛市道教协会</h3>
            <p className="text-sm leading-relaxed opacity-80">
              弘道扬德，济世利人。致力于弘扬道教优秀传统文化，促进青岛市道教事业健康有序发展。
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>山东省青岛市市南区太平路19号</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>0532-82877666</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>qddjxh@163.com</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-accent">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-primary-foreground/10 pt-8 text-xs opacity-60 md:flex-row md:justify-between">
          <p>Copyright 2024 青岛市道教协会 版权所有</p>
          <p>鲁ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}
