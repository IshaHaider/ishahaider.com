"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Headphones, Book, Puzzle, Utensils, Laptop, ArrowDown, Gamepad2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {HERO, FAVOURITES} from "@/constants"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-section")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".card-animate")
      cards.forEach((card) => {
        observer.observe(card)
      })
    }

    if (containerRef.current) {
      const children = containerRef.current.children
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i])
      }
    }

    return () => {
      if (containerRef.current) {
        const children = containerRef.current.children
        for (let i = 0; i < children.length; i++) {
          observer.unobserve(children[i])
        }
      }

      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll(".card-animate")
        cards.forEach((card) => {
          observer.unobserve(card)
        })
      }
    }
  }, [])

  return (
    <section
      id="home"
      className="py-20 md:py-32  items-center justify-center text-center relative lg:min-h-screen"
    >
      <div ref={containerRef} className="flex md:flex-row flex-col items-center">
        <div className="stagger-children">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pixel-text tracking-wider">{HERO[0].name}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-primary">{HERO[0].greet}</p>
          <div className="max-w-2xl mb-10 text-center">
            <p className="text-lg leading-relaxed">
              {HERO[0].description}
            </p>
          </div>
        </div>
        <div className="sm:pt-8 md:pl-8 md:pt-0">
            <h2 className="section-heading">My Current Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-left mb-10 max-w-[600px]">
              {FAVOURITES.map((item, index) => (
                <FavoriteCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  link={item.link}
                  delay={item.delay}
                />
              ))}
            </div>
        </div>
      </div>
      <div className="pt-10">
        <Button asChild className="button-primary glow-border">
            <a href="#skills">
              Discover More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
        </Button>
      </div>
      
    </section>
  )
}



interface FavoriteCardProps {
  icon: React.ReactNode
  title: string
  content: string
  link: string
  delay: number
}

function FavoriteCard({ icon, title, content, link, delay }: FavoriteCardProps) {
  return (
    <Card className="enhanced-card card-animate" style={{ animationDelay: `${delay * 0.1}s` }}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="h-8 w-8 rounded-full bg-accent/50 flex items-center justify-center text-primary">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <a
          href={link}
          className="text-primary/90 hover:text-primary transition-colors animated-underline"
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      </CardContent>
    </Card>
  )
}
