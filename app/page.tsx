import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackgroundAnimation } from "@/components/background-animation"
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] relative overflow-hidden">
      <BackgroundAnimation />
      <NavBar />
      {/* Add padding-top to account for fixed header */}
      <div className="container px-4 mx-auto pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  )
}
