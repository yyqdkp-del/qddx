import Image from "next/image"
import { PageBanner } from "@/components/page-banner"
import { SectionTitle } from "@/components/section-title"
import { MapPin, Clock, Landmark } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "青岛道观 - 青岛市道教协会",
  description: "探访青岛著名道教宫观：崂山太清宫、上清宫、天后宫等千年古观。",
}

const TAIQING_DESC = [
  `崂山太清宫，又称下清宫，始建于西汉建元元年（公元前140年），距今已有两千多年的历史，是崂山历史最悠久、规模最大的道教宫观，素有\u201C天下第二丛林\u201D之美誉。`,
  `太清宫坐落在崂山南麓、面朝大海，三面环山，环境清幽，气候宜人。宫内古树参天，银杏、汉柏等千年古木遍布其间，与古朴的殿堂建筑交相辉映。`,
  `太清宫分三官殿、三清殿、三皇殿三大院落，各殿依山傍海而建，布局严谨，气势恢宏。宫内保存有大量珍贵的道教文物和碑刻题记。`,
  `太清宫是全真道龙门派的重要活动场所，历史上曾有张廉夫、丘处机等著名道士在此修炼。至今仍是崂山道教活动的中心，每年吸引大量道教信众和游客前来参观朝拜。`,
]

const SHANGQING_DESC = [
  `崂山上清宫位于崂山东南部的昆仑山腰，始建于宋代初年，元代大德年间重建，明万历年间再次修缮扩建，是崂山重要的道教宫观之一。`,
  `上清宫依山势而建，坐北朝南，宫内有三清殿、玉皇殿、三官殿、关帝庙等建筑，古朴雅致。宫前有古银杏树两棵，相传为宋代所植，至今仍枝繁叶茂。`,
  `上清宫环境幽美，四周青山环抱，古木参天，泉水潺潺，被誉为\u201C神仙之宅，灵异之府\u201D。宫内保存有多处珍贵的碑刻和道教文物。`,
  `明代文学家蒲松龄曾多次游览崂山上清宫，并以此为背景创作了《聊斋志异》中的多个故事，使上清宫的名声更加远播。`,
]

const TIANHOU_DESC = [
  `青岛天后宫始建于明成化三年（1467年），距今已有五百多年的历史，是青岛市区现存最古老的明清砖木结构建筑群，也是青岛城市文化的发祥地。`,
  `天后宫供奉海神妈祖（天后娘娘），是我国北方沿海地区典型的妈祖庙。明清时期，天后宫是青岛地区渔民和海上商人祈求航海平安的重要场所。`,
  `天后宫坐北朝南，现存建筑有戏楼、山门、前殿、后殿、东西配殿等，整体建筑布局严谨，风格古朴典雅。宫内保存有大量历史文物和民俗展品。`,
  `如今，天后宫已成为青岛民俗博物馆所在地，每年春节期间举办的天后宫庙会是青岛最具影响力的民俗文化活动之一，吸引数十万市民和游客参与。`,
]

const temples = [
  {
    id: "taiqing",
    name: "崂山太清宫",
    subtitle: "天下第二丛林",
    image: "/images/taiqing-palace.jpg",
    location: "青岛市崂山区崂山风景区内",
    founded: "西汉建元元年（公元前140年）",
    sect: "全真道龙门派",
    description: TAIQING_DESC,
  },
  {
    id: "shangqing",
    name: "崂山上清宫",
    subtitle: "神仙之宅 灵异之府",
    image: "/images/shangqing-palace.jpg",
    location: "青岛市崂山区崂山风景区内",
    founded: "宋代初年",
    sect: "全真道华山派",
    description: SHANGQING_DESC,
  },
  {
    id: "tianhou",
    name: "天后宫",
    subtitle: "青岛城市文化发祥地",
    image: "/images/tianhou-palace.jpg",
    location: "青岛市市南区太平路19号",
    founded: "明成化三年（1467年）",
    sect: "民间信仰",
    description: TIANHOU_DESC,
  },
]

export default function TemplesPage() {
  return (
    <>
      <PageBanner
        title="青岛道观"
        subtitle="探访千年道教圣地"
        image="/images/banner-2.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle title="道观导览" subtitle="TAOIST TEMPLES IN QINGDAO" />
          <p className="text-base leading-relaxed text-foreground/80">
            {`青岛道教历史悠久，道教宫观星罗棋布。崂山素有\u201C海上名山第一\u201D之美誉，自古便是道教圣地。全市现有道教活动场所十余处，其中崂山太清宫、上清宫等千年古观闻名遐迩，是中华道教文化的重要传承地。`}
          </p>
        </div>
      </section>

      {temples.map((temple, i) => (
        <section
          key={temple.id}
          id={temple.id}
          className={`py-16 md:py-20 ${i % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl font-bold tracking-wider text-foreground md:text-3xl">
                  {temple.name}
                </h2>
                <p className="mt-1 text-sm tracking-wider text-accent">{temple.subtitle}</p>

                <div className="my-4 flex items-center gap-2">
                  <span className="h-px w-8 bg-accent" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
                  <span className="h-px w-8 bg-accent" />
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-accent" />
                    <span>{temple.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} className="text-accent" />
                    <span>{"始建于"}{temple.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Landmark size={14} className="text-accent" />
                    <span>{temple.sect}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {temple.description.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-foreground/80">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
