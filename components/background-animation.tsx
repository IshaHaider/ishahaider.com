"use client"

import { useEffect, useRef } from "react"

export function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create dots
    const dotCount = 15
    const dots: HTMLDivElement[] = []

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div")
      dot.className = "dot"

      // Random size
      const size = Math.random() * 10 + 5
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`

      // Random position
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`

      // Random animation duration and delay
      const duration = Math.random() * 10 + 10
      const delay = Math.random() * 5
      dot.style.animationDuration = `${duration}s`
      dot.style.animationDelay = `${delay}s`

      // Random opacity
      dot.style.opacity = `${Math.random() * 0.5 + 0.1}`

      container.appendChild(dot)
      dots.push(dot)
    }

    // Add circuit pattern
    const circuitPattern = document.createElement("div")
    circuitPattern.className = "circuit-pattern"
    container.appendChild(circuitPattern)

    // Add binary code elements
    const addBinaryElement = () => {
      const binary = document.createElement("div")
      binary.className = "binary-code"
      binary.style.position = "absolute"
      binary.style.color = "hsla(var(--primary), 0.1)"
      binary.style.fontSize = `${Math.random() * 10 + 8}px`
      binary.style.fontFamily = "var(--font-space-mono)"
      binary.style.left = `${Math.random() * 100}%`
      binary.style.top = `${Math.random() * 100}%`
      binary.style.opacity = "0"
      binary.style.transform = "scale(0)"
      binary.style.transition = "opacity 0.5s, transform 0.5s"

      // Generate random binary string
      let binaryString = ""
      for (let i = 0; i < 8; i++) {
        binaryString += Math.round(Math.random())
      }
      binary.textContent = binaryString

      container.appendChild(binary)

      // Animate in
      setTimeout(() => {
        binary.style.opacity = "1"
        binary.style.transform = "scale(1)"
      }, 100)

      // Remove after some time
      setTimeout(
        () => {
          if (container.contains(binary)) {
            binary.style.opacity = "0"
            binary.style.transform = "scale(0)"
            setTimeout(() => {
              if (container.contains(binary)) {
                container.removeChild(binary)
              }
            }, 500)
          }
        },
        Math.random() * 5000 + 3000,
      )
    }

    // Add binary elements periodically
    const binaryInterval = setInterval(addBinaryElement, 1000)

    return () => {
      clearInterval(binaryInterval)
      dots.forEach((dot) => {
        if (container.contains(dot)) {
          container.removeChild(dot)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="animated-bg" />
}
