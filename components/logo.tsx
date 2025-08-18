import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="h-10 w-10 rounded border-2 border-primary flex items-center justify-center glow-border group-hover:border-primary/80 transition-all duration-300">
        <span className="font-mono font-bold text-xl text-primary group-hover:scale-110 transition-transform duration-300">
          IH
        </span>
      </div>
    </Link>
  )
}
