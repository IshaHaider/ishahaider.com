"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {SKILLS} from "@/constants"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
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

    return () => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll(".card-animate")
        cards.forEach((card) => {
          observer.unobserve(card)
        })
      }
    }
  }, [])

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Technical Skills</h2>
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, index) => (
          <Card
            key={category.title}
            className="enhanced-card card-animate opacity-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center text-primary">
                {category.icon}
              </div>
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="relative skill-item"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={cn(
                          "transition-all duration-300 flex items-center gap-2",
                          hoveredSkill && hoveredSkill !== skill.name ? "blur-sm" : "",
                        )}
                      >
                        <span className="text-primary">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          hoveredSkill === skill.name
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent/50 text-primary/90",
                          "transition-all duration-300",
                          hoveredSkill && hoveredSkill !== skill.name ? "blur-sm" : "",
                        )}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-accent/30 mt-1.5 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-primary transition-all duration-500 skill-bar",
                          hoveredSkill === skill.name ? "opacity-100" : "opacity-70",
                          hoveredSkill && hoveredSkill !== skill.name ? "opacity-30" : "",
                        )}
                        style={{
                          width:
                            skill.level === "Expert"
                              ? "100%"
                              : skill.level === "Advanced"
                                ? "75%"
                                : skill.level === "Intermediate"
                                  ? "50%"
                                  : "25%",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
