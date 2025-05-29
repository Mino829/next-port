// app/layout.tsx
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'PERIMETRON風ポートフォリオ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white">
        <nav className="flex gap-14 px-8 py-4 border-b border-white/20 text-xl tracking-wide">
          <Link href="/" className="hover:text-pink-400 transition">Home</Link>
          <Link href="/works" className="hover:text-pink-400 transition">Works</Link>
          <Link href="/about" className="hover:text-pink-400 transition">About</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
