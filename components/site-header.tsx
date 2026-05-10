"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "首页", href: "/" },
  { label: "协会概况", href: "/about" },
  { label: "新闻动态", href: "/news" },
  { label: "青岛道观", href: "/temples" },
  { label: "道教文化", href: "/culture" },
  { label: "联系我们", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs tracking-wide opacity-80">
          <span>弘道扬德 &nbsp; 济世利人</span>
          <span>欢迎访问青岛市道教协会官方网站</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <TaoistLogo />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-wider lg:text-xl">
              青岛市道教协会
            </span>
            <span className="hidden text-[10px] tracking-[0.3em] opacity-70 sm:block">
              QINGDAO TAOIST ASSOCIATION
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-primary-foreground/5 px-6 py-3 text-sm transition-colors ${
                  active
                    ? "bg-primary-foreground/10 text-accent"
                    : "text-primary-foreground hover:bg-primary-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

function TaoistLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10 lg:h-12 lg:w-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="22" stroke="#C9A96E" strokeWidth="2" />
      <path
        d="M24 2C24 2 24 24 24 24C24 24 13 24 13 13C13 6 18 2 24 2Z"
        fill="#C9A96E"
      />
      <path
        d="M24 46C24 46 24 24 24 24C24 24 35 24 35 35C35 42 30 46 24 46Z"
        fill="#C9A96E"
      />
      <circle cx="19" cy="30" r="3" fill="#C9A96E" />
      <circle cx="29" cy="18" r="3" fill="#F5F0E8" />
    </svg>
  )
}
