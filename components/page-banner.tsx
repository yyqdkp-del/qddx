import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative flex h-48 items-center justify-center overflow-hidden md:h-64">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center text-primary-foreground">
        <h1 className="text-3xl font-bold tracking-wider md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-sm tracking-wide opacity-80 md:text-base">{subtitle}</p>
        )}
        {/* Decorative line */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-accent" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-8 bg-accent" />
        </div>
      </div>
    </section>
  )
}
