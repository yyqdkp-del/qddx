import { PageBanner } from "@/components/page-banner"
import { SectionTitle } from "@/components/section-title"
import { districtBranches } from "@/lib/data/qingdao-mock"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "协会概况 - 青岛市道教协会",
  description: "了解青岛市道教协会的简介、领导班子、协会章程和历史沿革。",
}

/** 领导班子（示例职务分工，以主管机关核定为准） */
const leaders = [
  { name: "赵明一", title: "会长", desc: "主持青岛市道教协会全面工作，兼任崂山太清宫主要教务协调。" },
  { name: "钱守真", title: "副会长", desc: "分管崂山上清宫片区法务示范与教职人员教育。" },
  { name: "孙崇德", title: "副会长", desc: "分管全市宫观规范化建设、安全防火督导。" },
  { name: "周济民", title: "秘书长", desc: "负责协会秘书处日常运转及与市、区有关部门联络。" },
]

const timeline = [
  { year: "1993", event: "青岛市道教协会正式成立，首届会员大会在崂山太清宫召开" },
  { year: "1998", event: "协会组织修缮崂山太清宫主要殿堂，恢复道教传统法事活动" },
  { year: "2003", event: "成功举办首届崂山道教文化节，在国内外产生广泛影响" },
  { year: "2008", event: "协会获评青岛市宗教界先进集体称号，青岛市道教公益慈善事业蓬勃发展" },
  { year: "2013", event: "协会成立二十周年庆典暨道教文化研讨会在青岛举行" },
  { year: "2018", event: "积极推进道教中国化，开展道教教义现代阐释工作" },
  { year: "2023", event: "协会成立三十周年，全面推进新时代道教事业高质量发展" },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="协会概况"
        subtitle="了解青岛市道教协会"
        image="/images/banner-1.jpg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle title="协会简介" subtitle="走进青岛市道教协会" />
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              青岛市道教协会成立于1993年，是在青岛市民政局登记注册、青岛市民族宗教事务局为业务主管单位的全市性道教团体。协会通讯联络地址：青岛市市南区太平路19号；主要法务活动分布于崂山太清宫、上清宫、太平宫等场所。
            </p>
            <p>
              {"协会以邓小平理论、\u201C三个代表\u201D重要思想、科学发展观和习近平新时代中国特色社会主义思想为指导，遵守宪法、法律、法规和规章，践行社会主义核心价值观，维护祖国统一、民族团结、社会和谐。"}
            </p>
            <p>
              协会的宗旨是：团结、带领全市道教界人士和信教群众，在党和政府的领导下，遵守宪法、法律、法规和政策，弘扬道教教义，传承道教文化，兴办道教事业，服务经济社会发展，促进道教与社会主义社会相适应。
            </p>
            <p>
              协会积极开展道教学术研究、文化交流、人才培养和公益慈善等活动，努力推动青岛市道教事业健康传承、创新发展，为建设开放、现代、活力、时尚的国际大都市贡献道教界的智慧和力量。
            </p>
          </div>
        </div>
      </section>

      <div className="cloud-divider" />

      {/* Leaders */}
      <section id="leaders" className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="领导班子" subtitle="会务与教务分工" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{leader.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charter */}
      <section id="charter" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle title="协会章程" subtitle="章程摘要" />
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-4 text-center text-lg font-bold text-card-foreground">
              青岛市道教协会章程（摘要）
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-card-foreground/80">
              <div>
                <h4 className="mb-2 font-semibold text-primary">第一章 总则</h4>
                <p>第一条：本会名称为青岛市道教协会；对外联系文件中可使用规范汉语全称，必要时附汉语拼音译名。</p>
                <p>
                  第二条：本会是青岛市道教界的爱国宗教团体和非营利性社会组织。
                </p>
                <p>
                  第三条：本会的宗旨是团结带领全市道教界人士和信教群众，弘扬道教教义，传承道教文化，兴办道教事业。
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary">第二章 业务范围</h4>
                <p>
                  协助政府贯彻落实宗教信仰自由政策；维护道教界合法权益；组织开展道教教务活动；开展道教文化学术研究；培养道教人才；开展社会公益慈善活动；开展对外友好交流。
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary">第三章 会员</h4>
                <p>
                  凡青岛市道教教职人员、道教信教群众、有关道教方面的社会知名人士，拥护本会章程，均可申请加入本会。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cloud-divider" />

      <section id="district-branches" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="各级协会" subtitle="青岛市辖区区市联络片区分工" />
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            根据青岛市行政区划，协会在市南区、市北区、李沧区、崂山区、城阳区、西海岸新区、即墨区、胶州市、平度市、莱西市设立工作联络说明，便于宫观、信众与秘书处对口沟通（以下为网站展示用职能分工说明）。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {districtBranches.map((d) => (
              <article
                key={d.name}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="border-b border-border pb-2 text-base font-bold text-primary">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-card-foreground/85">{d.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="cloud-divider" />

      {/* History Timeline */}
      <section id="history" className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle title="历史沿革" subtitle="大事记略" />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-accent/40 md:left-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-accent">
                      <div className="h-2 w-2 rounded-full bg-card" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className={`rounded-lg border border-border bg-card p-4 shadow-sm ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-lg font-bold text-accent">{item.year}</span>
                      <p className="mt-1 text-sm leading-relaxed text-card-foreground/80">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
