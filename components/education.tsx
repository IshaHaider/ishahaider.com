"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Award, Globe, BookOpen, Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {EDUCATIONS} from "@/constants"


export function Education() {
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

  return (
    <section id="education" className="section relative">
      <div className="circuit-pattern"></div>
      <h2 className="section-heading">Education</h2>
      <div className="space-y-6" ref={sectionRef}>
        {EDUCATIONS.map((education, eduIndex) => {
          return (
            <Card key={education.id} className="enhanced-card card-animate opacity-0 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {education.degree}
                    </CardTitle>
                    <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <span>{education.institution}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{education.location}</span>
                      <span className="hidden md:inline">•</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                    {education.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="terminal">
                  <p className="terminal-text mt-2">{education.description}</p>
                </div>
                <div className="pt-4 space-y-6 border-t border-border/50 animate-fadeIn">
                    <Tabs defaultValue="courses" className="w-full">
                      <TabsList className="grid grid-cols-3 bg-accent/50">
                        <TabsTrigger
                          value="courses"
                          className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-md"
                        >
                          <BookOpen className="h-5 w-5" />
                          <span className="hidden sm:inline">Courses</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="awards"
                          className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-md"
                        >
                          <Award className="h-5 w-5" />
                          <span className="hidden sm:inline">Awards</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="experiences"
                          className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-md"
                        >
                          <Globe className="h-5 w-5" />
                          <span className="hidden sm:inline">Experiences</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="courses" className="pt-4">
                        <h4 className="text-md font-medium mb-3 flex items-center gap-2 text-primary">
                          <BookOpen className="h-4 w-4" />
                          Relevant Courses:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {education.courses.map((course, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Badge className="badge-edu w-fit text-sm">{course}</Badge>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="awards" className="pt-4">
                        <h4 className="text-md font-medium mb-3 flex items-center gap-2 text-primary">
                          <Award className="h-4 w-4" />
                          Honors & Awards:
                        </h4>
                        <div className="code-block">
                          {education.awards.map((honor, index) => (
                            <div key={index} className="mb-2">
                              <span className="code-line">
                                <span className="code-keyword">const</span> achievement{index + 1} ={" "}
                                <span className="code-string">"{honor}"</span>;
                              </span>
                            </div>
                          ))}
                          <span className="code-line code-comment">
                            // Achievements unlocked: {education.awards.length}
                          </span>
                        </div>
                      </TabsContent>

                      <TabsContent value="experiences" className="pt-4">
                        <h4 className="text-md font-medium mb-3 flex items-center gap-2 text-primary">
                          <Globe className="h-4 w-4" />
                          Experiences:
                        </h4>
                        <div className="space-y-4">
                          {education.experiences.map((exp, index) => (
                            <div key={index} className="border-l-2 border-primary pl-4">
                              <h5 className="font-medium text-primary">{exp.program}</h5>
                              <p className="text-md text-primary/80">
                                {exp.location} • {exp.period}
                              </p>
                              <p className="text-base mt-1">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
