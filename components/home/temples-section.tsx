import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/section-title"
import { MapPin, ArrowRight } from "lucide-react"

const temples = [
  {
    name: "崂山太清宫",
    image: "/images/taiqing-palace.jpg",
    location: "青岛市崂山区崂山风景区",
    desc: "始建于西汉建元元年（公元前140年），距今已有两千多年历史，是崂山规模最大、历史最久的道教宫观。",
    href: "/temples#taiqing",
  },
  {
    name: "崂山上清宫",
    image: "/images/shangqing-palace.jpg",
    location: "青岛市崂山区崂山风景区",
    desc: "位于崂山东南部，宋代始建，元代重修。宫内古树参天，环境清幽，是崂山重要的道教活动场所。",
    href: "/temples#shangqing",
  },
  {
    name: "天后宫",
    image: "/images/tianhou-palace.jpg",
    location: "青岛市市南区太平路19号",
    desc: "始建于明成化三年（1467年），是青岛市区现存最古老的明清砖木结构建筑群，也是青岛城市文化的发祥地。",
    href: "/temples#tianhou",
  },
]

export function TemplesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="青岛道观" subtitle="TAOIST TEMPLES" />

        <div className="grid gap-6 md:grid-cols-3">
          {temples.map((temple) => (
            <Link
              key={temple.name}
              href={temple.href}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-bold tracking-wider text-primary-foreground drop-shadow">
                  {temple.name}
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  <span>{temple.location}</span>
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-card-foreground/80">
                  {temple.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:text-accent">
                  了解详情 <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
