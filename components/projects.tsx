"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Pause, Play, Youtube, Coffee } from "lucide-react"
import {PROJECTS} from "@/constants"

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)

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
      observer.observe(sectionRef.current.querySelector(".project-container") as Element)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const nextProject = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setPreviousIndex(currentIndex)
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Slightly longer than animation duration
  }, [currentIndex, isAnimating])

  const prevProject = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setPreviousIndex(currentIndex)
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Slightly longer than animation duration
  }, [currentIndex, isAnimating])

  // Auto-slide functionality
  useEffect(() => {
    const startSlideshow = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }

      slideIntervalRef.current = setInterval(() => {
        if (!isPaused && !isHovering && !isAnimating) {
          nextProject()
        }
      }, 5000) // Change slide every 5 seconds
    }

    startSlideshow()

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
    }
  }, [nextProject, isPaused, isHovering, isAnimating])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject()
      if (e.key === "ArrowLeft") prevProject()
      if (e.key === " ") setIsPaused((prev) => !prev) // Space bar to toggle pause
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextProject, prevProject])

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier

    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevProject()
      } else {
        nextProject()
      }
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return
    setIsDragging(true)
    setStartX(e.touches[0].clientX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnimating) return
    const x = e.touches[0].clientX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2

    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevProject()
      } else {
        nextProject()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const togglePause = () => {
    setIsPaused((prev) => !prev)
  }

  // Function to go directly to a specific slide
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setPreviousIndex(currentIndex)
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <h2 className="section-heading">Projects</h2>

      <div className="relative max-w-3xl mx-auto project-container opacity-0">
        {/* Carousel Navigation - Outside Container */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-accent/80 rounded-full z-10 backdrop-blur-sm"
          onClick={prevProject}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
          <span className="sr-only">Previous project</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-background/80 hover:bg-accent/80 rounded-full z-10 backdrop-blur-sm"
          onClick={nextProject}
          disabled={isAnimating}
        >
          <ChevronRight className="h-6 w-6 text-primary" />
          <span className="sr-only">Next project</span>
        </Button>

        {/* Pause/Play Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 bg-background/80 hover:bg-accent/80 rounded-full z-10 backdrop-blur-sm"
          onClick={togglePause}
        >
          {isPaused ? <Play className="h-5 w-5 text-primary" /> : <Pause className="h-5 w-5 text-primary" />}
          <span className="sr-only">{isPaused ? "Play slideshow" : "Pause slideshow"}</span>
        </Button>

        {/* Slideshow Container */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} relative w-full h-full`}>
            {/* Previous Slide (for animation) */}
            <div
              className={`absolute w-full ${
                isAnimating ? (direction === "right" ? "slide-out-left" : "slide-out-right") : "hidden"
              }`}
            >
              <ProjectCard project={PROJECTS[previousIndex]} />
            </div>

            {/* Current Slide */}
            <div
              className={`w-full ${isAnimating ? (direction === "right" ? "slide-in-right" : "slide-in-left") : ""}`}
            >
              <ProjectCard project={PROJECTS[currentIndex]} />
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-primary" : "bg-muted"
              }`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="enhanced-card hover:translate-y-0 transition-all duration-300 min-h-[400px] max-h-[500px]">
      <div className="md:flex ">
        {/* Content */}
        <div className="flex flex-col h-[400px] justify-center items-center text-center">
          <CardHeader>
            <CardTitle className="text-primary text-3xl">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              {project.tags.map((tag) => (
                <Badge key={tag} className="badge-glow text-base">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-md leading-relaxed text-foreground/90">
              {project.description}
            </CardDescription>
          </CardContent>

          <CardFooter className="flex gap-2">
            {project.githubUrl ? (
              <Button asChild variant="outline" size="sm" className="flex-1 button-outline w-[200px]">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            ) : null}
            {project.youtubeUrl ? (
              <Button asChild variant="outline" size="sm" className="flex-1 button-outline w-[200px]">
                <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> YouTube
                </a>
              </Button>
            ) : null}
            {!project.youtubeUrl && !project.githubUrl ? (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="flex-1 w-[200px] text-sm opacity-80 cursor-not-allowed"
              >
                <Coffee className="mr-2 h-6 w-6 animate-bounce text-amber-600" /> Still Brewing...
              </Button>
            ) : null}
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
