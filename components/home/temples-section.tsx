import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/section-title"
import { MapPin, ArrowRight } from "lucide-react"
import { templeEntries, featuredTempleIds } from "@/lib/data/qingdao-mock"
import type { TempleEntry } from "@/lib/data/qingdao-mock"

/** 首页宫观风采：崂山太清宫、上清宫、太平宫三张卡片入口 */
export function TemplesSection() {
  const temples: TempleEntry[] = featuredTempleIds
    .map((id) => templeEntries.find((t) => t.id === id))
    .filter((t): t is TempleEntry => Boolean(t))

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="宫观风采" subtitle="崂山太清宫 · 上清宫 · 太平宫" />

        <div className="grid gap-6 md:grid-cols-3">
          {temples.map((temple) => (
            <Link key={temple.id} href={`/temples/${temple.id}`} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={temple.image} alt={temple.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-bold tracking-wider text-primary-foreground drop-shadow">{temple.name}</h3>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} aria-hidden />
                  <span>{temple.location}</span>
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-card-foreground/80">{temple.description[0]}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:text-accent">
                  了解详情 <ArrowRight size={12} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
