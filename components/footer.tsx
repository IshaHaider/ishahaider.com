export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:gap-2 text-center">
        <p className="text-sm text-muted-foreground">© {currentYear} Isha Haider. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
      </div>
    </footer>
  )
}
