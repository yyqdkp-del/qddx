import { PageBanner } from "@/components/page-banner"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "联系我们 - 青岛市道教协会",
  description: "联系青岛市道教协会，了解地址、电话等联系方式，或通过留言表单联系我们。",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "地址",
    details: ["青岛市市南区太平路19号", "（天后宫院内 · 协会联系地址示意）"],
  },
  {
    icon: Phone,
    title: "电话",
    details: ["办公室：0532-82877666", "传真：0532-82877667"],
  },
  {
    icon: Mail,
    title: "邮箱",
    details: ["qddjxh@163.com", "邮编：266001"],
  },
  {
    icon: Clock,
    title: "办公时间",
    details: ["周一至周五 8:30 - 17:00", "法定节假日休息"],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="联系我们"
        subtitle="欢迎来函来访"
        image="/images/banner-3.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="联系方式" subtitle="CONTACT US" />

          {/* Contact Info Cards */}
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-card-foreground">{item.title}</h3>
                  {item.details.map((d, i) => (
                    <p key={i} className="text-xs leading-relaxed text-muted-foreground">
                      {d}
                    </p>
                  ))}
                </div>
              )
            })}
          </div>

          {/* Map and Form */}
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Map placeholder */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">交通指引</h3>
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=120.3105%2C36.0547%2C120.3265%2C36.0647&layer=mapnik&marker=36.0597%2C120.3185"
                  className="h-full w-full border-0"
                  title="青岛市道教协会位置地图"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">公交线路：</span>
                  乘坐6路、26路、202路、214路、223路、228路、231路、304路、312路、316路等公交车至天后宫站下车。
                </p>
                <p>
                  <span className="font-medium text-foreground">地铁线路：</span>
                  乘坐地铁3号线至人民会堂站下车，步行约10分钟即到。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">在线留言</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
