import Image from "next/image"
import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { getTempleById } from "@/lib/data/qingdao-mock"
import { ArrowLeft, Clock, Landmark, MapPin } from "lucide-react"
import type { Metadata } from "next"

interface TempleDetailPageProps {
  params: Promise<{ id: string }>
}

/** 宫观风采详情页：内容与列表页同款信息层次，单列图文排版 */
export async function generateMetadata({ params }: TempleDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const temple = getTempleById(id)
  const excerpt = temple?.description[0]?.slice(0, 110)
  return {
    title: temple ? `${temple.name} - 青岛市道教协会` : "宫观详情 - 青岛市道教协会",
    description: excerpt ?? "青岛市崂山道教宫观风貌介绍。",
  }
}

export default async function TempleDetailPage({ params }: TempleDetailPageProps) {
  const { id } = await params
  const temple = getTempleById(id)

  if (!temple) {
    return (
      <>
        <PageBanner title="宫观风采" image="/images/banner-2.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">未查询到青岛市辖区内的这座宫观信息。</p>
            <Link href="/temples" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} aria-hidden />
              返回宫观一览
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title={temple.name} subtitle={temple.subtitle} image="/images/banner-2.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/temples" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} aria-hidden />
            返回宫观一览
          </Link>

          <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image src={temple.image} alt={temple.name} fill className="object-cover" sizes="(min-width: 1024px) 896px, 100vw" />
          </div>

          <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" aria-hidden />
              {temple.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-accent" aria-hidden />
              {temple.founded}
            </span>
            <span className="flex items-center gap-2">
              <Landmark size={14} className="text-accent" aria-hidden />
              {temple.sect}
            </span>
          </div>

          <div className="flex items-center gap-2" aria-hidden>
            <span className="h-px w-8 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-8 bg-accent" />
          </div>

          <div className="mt-6 space-y-4">
            {temple.description.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-foreground/80">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
