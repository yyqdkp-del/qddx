import { PageBanner } from "@/components/page-banner"
import { SectionTitle } from "@/components/section-title"
import { Heart, Palette, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "道教文化 - 青岛市道教协会",
  description: "了解道教养生文化、道教艺术和经典文献，感受千年道教智慧。",
}

const healthCards = [
  {
    title: "导引术",
    desc: "通过肢体运动、呼吸吐纳来疏通经络、调和气血，是道教最具特色的养生功法。",
  },
  {
    title: "内丹术",
    desc: "以人体为炉鼎，以精气神为药物，通过修炼达到性命双修的至高境界。",
  },
  {
    title: "食疗养生",
    desc: "道教饮食养生强调清淡、素食、适量，注重食物的性味归经，因时因地制宜。",
  },
  {
    title: "静坐冥想",
    desc: "通过打坐、冥想等方式使心神安定、气机调畅，达到身心和谐的最佳状态。",
  },
]

const artCards = [
  {
    title: "宫观建筑",
    desc: `道教宫观建筑融合了中国传统建筑艺术和道教文化内涵，以其独特的布局、精美的装饰和深厚的文化底蕴闻名于世。崂山太清宫等古建筑群体现了道教\u201C天人合一\u201D的建筑理念。`,
  },
  {
    title: "道教音乐",
    desc: "道教音乐是中国传统音乐的重要组成部分，包括颂赞、步虚、偈子等多种形式。崂山道乐以其悠远古朴、空灵飘逸的特色，被列入国家级非物质文化遗产名录。",
  },
  {
    title: "书画艺术",
    desc: `道教对中国书画艺术产生了深远影响。道教思想中的\u201C虚实相生\u201D、\u201C气韵生动\u201D等美学理念，成为中国传统绘画和书法创作的重要指导思想和审美标准。`,
  },
  {
    title: "雕塑造像",
    desc: "道教雕塑造像是中国传统雕塑艺术的瑰宝。从庄严肃穆的三清尊像到栩栩如生的神仙群像，展现了极高的艺术水准和丰富的宗教文化内涵。",
  },
  {
    title: "道教服饰",
    desc: "道教服饰包括道冠、道袍、道鞋等，具有独特的文化象征意义。道服以素雅为主，体现了道教崇尚自然、淡泊名利的精神追求。",
  },
  {
    title: "法器法物",
    desc: "道教法器包括令牌、法剑、拂尘、如意等，既是宗教仪式的必备器物，也是精美的传统工艺品，承载着深厚的道教文化和民间信仰。",
  },
]

const scriptures = [
  {
    title: "《道德经》",
    author: "老子",
    desc: `道教最根本的经典，又名《老子五千文》，分上下两篇，共八十一章。全书以\u201C道\u201D和\u201C德\u201D为核心，阐述了宇宙万物的本源、自然规律和人生智慧，是中国哲学史上最重要的著作之一。`,
  },
  {
    title: "《南华真经》",
    author: "庄子",
    desc: `即《庄子》，是道教重要经典之一。全书以寓言、故事等形式，深入阐发了道家\u201C逍遥游\u201D、\u201C齐物论\u201D等核心思想，对中国文学和哲学产生了深远影响。`,
  },
  {
    title: "《太平经》",
    author: "于吉等",
    desc: `道教早期重要经典，又名《太平清领书》，是东汉道教太平道的主要经典。书中提出了\u201C太平\u201D社会理想和阴阳五行的宇宙观，对后世道教发展产生了重要影响。`,
  },
  {
    title: "《周易参同契》",
    author: "魏伯阳",
    desc: `道教丹经之祖，被誉为\u201C万古丹经王\u201D。全书以《周易》卦象阐述炼丹原理，将易学、黄老之学和炉火炼丹术融为一体，是道教内外丹学的开山之作。`,
  },
  {
    title: "《道藏》",
    author: "历代编纂",
    desc: "道教经典的总集，汇集了从先秦到明代的道教典籍，包括经、律、论、符、咒、科仪等各类文献，是研究道教历史和文化的最重要的文献宝库。",
  },
]

export default function CulturePage() {
  return (
    <>
      <PageBanner
        title="道教文化"
        subtitle="传承千年智慧 弘扬道教文化"
        image="/images/taoist-culture.jpg"
      />

      {/* Health */}
      <section id="health" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="养生之道" subtitle="HEALTH & WELLNESS" />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">道教养生哲学</h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/80">
                {`道教养生学是道教文化的重要组成部分，强调\u201C天人合一\u201D、\u201C道法自然\u201D的思想，追求身心和谐、延年益寿。道教养生包含了丰富的理论体系和实践方法，对中华传统养生文化产生了深远影响。`}
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                道教养生的核心理念包括：顺应自然、清静无为、形神兼养、动静结合。通过调节饮食起居、修炼气功导引、陶冶性情等方式，达到强身健体、延年益寿的目的。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {healthCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h4 className="mb-2 text-sm font-bold text-primary">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-card-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cloud-divider" />

      {/* Art */}
      <section id="art" className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="道教艺术" subtitle="TAOIST ART" />

          <div className="grid gap-6 md:grid-cols-3">
            {artCards.map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Palette size={20} />
                </div>
                <h3 className="mb-2 text-base font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scriptures */}
      <section id="scripture" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="经典文献" subtitle="SCRIPTURES & CLASSICS" />

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BookOpen size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">道教经典概览</h3>
            </div>

            <div className="space-y-6">
              {scriptures.map((scripture) => (
                <div
                  key={scripture.title}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-baseline gap-3">
                    <h4 className="text-base font-bold text-primary">{scripture.title}</h4>
                    <span className="text-xs text-accent">{"\u2014"} {scripture.author}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground/80">
                    {scripture.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xl font-bold leading-relaxed tracking-wider text-primary-foreground md:text-2xl">
            道可道，非常道
          </p>
          <p className="mt-2 text-xl font-bold leading-relaxed tracking-wider text-primary-foreground md:text-2xl">
            名可名，非常名
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mt-4 text-sm tracking-wider text-primary-foreground/70">
            {"\u2014"} 《道德经》第一章
          </p>
        </div>
      </section>
    </>
  )
}
