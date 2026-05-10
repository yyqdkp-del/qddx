import { HeroCarousel } from "@/components/home/hero-carousel"
import { IntroSection } from "@/components/home/intro-section"
import { NewsSection } from "@/components/home/news-section"
import { TemplesSection } from "@/components/home/temples-section"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <div className="cloud-divider" />
      <NewsSection />
      <TemplesSection />

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold tracking-wider text-primary-foreground md:text-3xl">
            道法自然 上善若水
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {"道教以\u201C道\u201D为最高信仰，追求自然和谐、清静无为、济世利人。青岛市道教协会诚邀您一同探索道教智慧，感受传统文化的深厚魅力。"}
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
        </div>
      </section>
    </>
  )
}
