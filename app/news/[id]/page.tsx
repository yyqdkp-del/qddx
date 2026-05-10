import Link from "next/link"
import { PageBanner } from "@/components/page-banner"
import { Calendar, Tag, ArrowLeft } from "lucide-react"

const allNews: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "1": {
    title: "青岛市道教协会召开2024年度工作总结会议",
    date: "2024-12-15",
    category: "协会动态",
    content: [
      "12月15日，青岛市道教协会在崂山太清宫召开2024年度工作总结会议。会议由协会秘书长陈道长主持，全体理事及各宫观负责人出席了会议。",
      "会上，协会会长张道长作了年度工作报告，全面回顾了2024年协会在弘扬道教文化、加强宫观管理、开展公益慈善、推动教职人员培训等方面取得的工作成果。",
      "会议还对来年的工作进行了部署，明确了2025年协会工作的总体思路和重点任务，强调要继续坚持道教中国化方向，积极服务社会，为构建和谐社会作出更大贡献。",
      "与会人员围绕工作报告进行了热烈讨论，纷纷表示将在新的一年里更加努力工作，为青岛道教事业的健康发展贡献力量。",
    ],
  },
  "2": {
    title: "崂山太清宫举行冬至祈福法会",
    date: "2024-12-21",
    category: "宗教活动",
    content: [
      "冬至时节，崂山太清宫隆重举行祈福法会，祈愿国泰民安、风调雨顺。本次法会由太清宫住持张道长主法，众多道众和信众参与了此次盛会。",
      "法会依照道教传统仪轨，在三清殿前设立法坛，道众身着道袍，诵经礼拜，场面庄严肃穆。法会持续两个小时，期间道众诵读了《太上感应篇》《三官经》等道教经典。",
      "冬至是中国传统二十四节气之一，在道教中具有重要的宗教意义。道教认为冬至是阳气初生之时，举行祈福法会可以顺应天道、祈求福泽。",
      "来自青岛各区市的信众约五百余人参加了本次法会，共同祈愿社会和谐、家庭幸福、身体健康。",
    ],
  },
  "3": {
    title: "道教养生文化讲座在青岛市图书馆成功举办",
    date: "2024-12-10",
    category: "文化交流",
    content: [
      "12月10日，由青岛市道教协会主办的\u201C道教养生智慧\u201D公益文化讲座在青岛市图书馆成功举办。讲座邀请了崂山太清宫资深道长担任主讲。",
      "讲座围绕道教养生的核心理念、传统功法、饮食调养等方面展开，深入浅出地讲解了道教养生的实用方法和健康理念。",
      "现场座无虚席，约两百余名市民聆听了讲座。讲座结束后，主讲道长还与听众进行了互动交流，解答了大家关心的养生问题。",
      "本次讲座是青岛市道教协会\u201C道教文化进社区\u201D系列活动之一，旨在让更多市民了解和受益于道教养生智慧。",
    ],
  },
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = allNews[id]

  if (!news) {
    return (
      <>
        <PageBanner title="新闻详情" image="/images/banner-2.jpg" />
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">该新闻不存在或已被删除。</p>
            <Link href="/news" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
              <ArrowLeft size={16} />
              返回新闻列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="新闻详情" image="/images/banner-2.jpg" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/news"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            返回新闻列表
          </Link>

          <article className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <h1 className="text-xl font-bold leading-relaxed text-card-foreground md:text-2xl">
              {news.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {news.date}
              </span>
              <span className="flex items-center gap-1">
                <Tag size={12} />
                {news.category}
              </span>
            </div>

            <div className="my-4 flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
              <span className="h-px w-8 bg-accent" />
            </div>

            <div className="space-y-4">
              {news.content.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-card-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
