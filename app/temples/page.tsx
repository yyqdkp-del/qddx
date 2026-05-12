import Link from "next/link"
import Image from "next/image"
import { PageBanner } from "@/components/page-banner"
import { SectionTitle } from "@/components/section-title"
import { templeEntries } from "@/lib/data/qingdao-mock"
import { MapPin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "宫观风采 - 青岛市道教协会",
  description: "展示青岛市辖区内代表性道教活动场所：崂山太清宫、崂山上清宫、崂山太平宫与天后宫妈祖文化地标。",
}

/** 宫观风采列表页：沿用首页三张卡片同款栅格卡片样式（扩展为四字宫观） */
export default function TemplesPage() {
  return (
    <>
      <PageBanner title="宫观风采" subtitle="探访青岛市道教活动场所" image="/images/banner-2.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle title="青岛市宫观一览" subtitle="TAOIST TEMPLES IN QINGDAO" />
          <p className="text-base leading-relaxed text-foreground/80">
            青岛市依山傍海，崂山是著名的道教名山。全市依法登记的道教活动场所分布在崂山风景区与老城区岸线一带。下列为青岛市辖区内具有代表性的道教文化传承节点（本站示意数据）。
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {templeEntries.map((temple) => (
              <Link
                key={temple.id}
                href={`/temples/${temple.id}`}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h2 className="absolute bottom-3 left-4 text-lg font-bold tracking-wider text-primary-foreground drop-shadow">{temple.name}</h2>
                </div>
                <div className="p-4">
                  <p className="mb-2 text-xs font-medium tracking-wide text-accent">{temple.subtitle}</p>
                  <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={12} aria-hidden />
                    <span>{temple.location}</span>
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-card-foreground/80">{temple.description[0]}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:text-accent">
                    查看详细介绍 <ArrowRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
