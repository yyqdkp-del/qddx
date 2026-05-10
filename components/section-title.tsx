interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionTitle({ title, subtitle, className = "", light }: SectionTitleProps) {
  return (
    <div className={`mb-8 text-center md:mb-12 ${className}`}>
      <h2
        className={`text-2xl font-bold tracking-wider md:text-3xl ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-sm tracking-wide ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className={`h-px w-10 ${light ? "bg-accent" : "bg-accent"}`} />
        <span className={`h-2 w-2 rotate-45 ${light ? "bg-accent" : "bg-accent"}`} />
        <span className={`h-px w-10 ${light ? "bg-accent" : "bg-accent"}`} />
      </div>
    </div>
  )
}
