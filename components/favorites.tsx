// "use client"

// import type React from "react"

// import { useEffect, useRef } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Headphones, Book, Puzzle, Utensils, Laptop, Gamepad2 } from "lucide-react"

// export function Favorites() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in-section")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       const cards = sectionRef.current.querySelectorAll(".card-animate")
//       cards.forEach((card) => {
//         observer.observe(card)
//       })
//     }

//     return () => {
//       if (sectionRef.current) {
//         const cards = sectionRef.current.querySelectorAll(".card-animate")
//         cards.forEach((card) => {
//           observer.unobserve(card)
//         })
//       }
//     }
//   }, [])

//   return (
    
//   )
// }

// interface FavoriteCardProps {
//   icon: React.ReactNode
//   title: string
//   content: string
//   link: string
//   delay: number
// }

// function FavoriteCard({ icon, title, content, link, delay }: FavoriteCardProps) {
//   return (
//     <Card className="enhanced-card card-animate opacity-0" style={{ animationDelay: `${delay * 0.1}s` }}>
//       <CardHeader className="flex flex-row items-center gap-4 pb-2">
//         <div className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center text-primary">{icon}</div>
//         <CardTitle className="text-lg">{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <a
//           href={link}
//           className="text-primary/90 hover:text-primary transition-colors animated-underline"
//           target={link.startsWith("http") ? "_blank" : undefined}
//           rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
//         >
//           {content}
//         </a>
//       </CardContent>
//     </Card>
//   )
// }
