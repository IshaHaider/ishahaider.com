"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import {NAVIGATION_LINKS} from "@/constants"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 400 // Offset for header

      let currentSection = "home"
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    // Set initial active section based on URL hash
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setActiveSection(hash)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const yOffset = -100 
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })

    setActiveSection(id)
  }
  setIsMenuOpen(false) // Close mobile menu if open
}


  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-border/40">
      <div className="container flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks activeSection={activeSection} onClick={handleLinkClick} />
          <Button asChild className="ml-4 glow-border button-primary tracking-[0.2em]">
            <a 
                href="https://drive.google.com/file/d/1xTFP4-K_76ZlLLodTsZpOr3bgAyfHaty/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
            >
              Resume <span className="ml-2">↗</span>
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
            <nav className="container flex flex-col py-4">
              <NavLinks activeSection={activeSection} mobile onClick={handleLinkClick} />
              <Button asChild className="mt-4 glow-border button-primary tracking-[0.2em]">
                <a href="https://drive.google.com/file/d/1xTFP4-K_76ZlLLodTsZpOr3bgAyfHaty/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume <span className="ml-2">↗</span>
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLinks({
  mobile = false,
  activeSection,
  onClick,
}: {
  mobile?: boolean
  activeSection?: string
  onClick?: (id: string) => void
}) {
  

  return (
    <>
      {NAVIGATION_LINKS.map((link) => {
        const sectionId = link.href.substring(1) // Remove the #
        const isActive = activeSection === sectionId

        return (
          <button
            key={link.href}
            onClick={() => onClick?.(sectionId)}
            className={`relative transition-colors ${
              mobile ? "py-2" : ""
            } ${
              isActive
                ? "text-primary font-medium"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {link.label}
            {isActive && !mobile && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </button>
        )
      })}
    </>
  )
}
