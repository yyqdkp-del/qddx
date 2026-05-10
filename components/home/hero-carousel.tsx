"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/banner-1.jpg",
    title: "弘道扬德 济世利人",
    subtitle: "青岛市道教协会欢迎您",
  },
  {
    image: "/images/banner-2.jpg",
    title: "崂山仙境 道法自然",
    subtitle: "探访千年道教圣地",
  },
  {
    image: "/images/banner-3.jpg",
    title: "传承经典 开拓创新",
    subtitle: "弘扬道教优秀传统文化",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[50vh] overflow-hidden md:h-[70vh] lg:h-[80vh]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-4">
          {/* Decorative top */}
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-accent md:w-20" />
            <span className="h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-12 bg-accent md:w-20" />
          </div>

          <h1 className="text-3xl font-bold tracking-[0.2em] text-primary-foreground drop-shadow-lg md:text-5xl lg:text-6xl">
            {slides[current].title}
          </h1>
          <p className="text-base tracking-wider text-primary-foreground/80 drop-shadow md:text-xl">
            {slides[current].subtitle}
          </p>

          {/* Decorative bottom */}
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-accent md:w-20" />
            <span className="h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-12 bg-accent md:w-20" />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30 bg-primary/30 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/60 md:left-8"
        aria-label="上一张"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30 bg-primary/30 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/60 md:right-8"
        aria-label="下一张"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`切换到第${i + 1}张`}
          />
        ))}
      </div>
    </section>
  )
}
