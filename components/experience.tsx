"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import {EXPERIENCES} from "@/constants"

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<number[]>([])
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
      cards.forEach((card, index) => {
        // Add staggered animation delay
        ;(card as HTMLElement).style.animationDelay = `${index * 0.15}s`
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

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => (
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    ))
  }

  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>

      <div className="relative pl-8 md:pl-12" ref={sectionRef}>
        {/* Timeline (hidden on mobile) */}
        <div className="hidden md:block absolute left-3 md:left-5 top-0 h-full w-0.5 bg-primary/40" />

        <div className="space-y-8" ref={sectionRef}>
          {EXPERIENCES.map((experience) => {
            const isExpanded = expandedIds.includes(experience.id)

            return (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="timeline-item">
                  <span className="timeline-date">
                  </span>
                  <div className="timeline-dot" />
                </div>

              <Card key={experience.id} onClick={() => toggleExpand(experience.id)} className="enhanced-card card-animate opacity-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <CardHeader className="md:pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div className="flex items-start gap-3">
                      <div className="hidden md:flex h-10 w-10 rounded-full bg-accent/50 items-center justify-center text-primary">
                        <div className="h-full w-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white bg-gray-800">
                        {experience.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-primary">{experience.company}</CardTitle>
                        <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                          <span>{experience.title}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{experience.location}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:pl-6">
                  <p>{experience.description}</p>

                  {/* Skills - Always visible */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-primary/90">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} className="badge-glow">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-primary/80 hover:text-primary hover:bg-primary/10"
                    onClick={() => toggleExpand(experience.id)}
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Desciption</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Show Desciption</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="pt-2 space-y-4 border-t border-border/50 animate-fadeIn">
                      <div>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              </div>
            )
          })}
        </div>
        </div>
    </section>
  )
}
