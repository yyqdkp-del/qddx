import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { ArrowRight } from "lucide-react"

export function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="协会简介" subtitle="ABOUT US" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-foreground/90">
              青岛市道教协会成立于1993年，是由青岛市道教界人士自愿组成的爱国宗教团体和非营利性社会组织，是青岛市道教界的代表组织。
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              协会以弘扬道教教义、传承道教文化、服务社会大众为宗旨，团结和引导全市道教界人士爱国爱教、遵纪守法，积极参与社会主义现代化建设，为构建和谐社会贡献力量。
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              {"青岛道教历史悠久，底蕴深厚。崂山素有\u201C海上名山第一\u201D之美誉，自古以来便是道教圣地。崂山太清宫、上清宫等道教宫观，承载着千年的道教文化传统，是中华优秀传统文化的重要组成部分。"}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              了解更多
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "1993", label: "协会成立" },
              { number: "30+", label: "年发展历程" },
              { number: "10+", label: "青岛道观" },
              { number: "1000+", label: "道教信众" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-3xl font-bold text-accent md:text-4xl">{stat.number}</span>
                <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
