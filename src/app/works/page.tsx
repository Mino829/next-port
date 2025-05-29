'use client'
import Image from 'next/image'
import Link from 'next/link'

const works = [
  { title: "Get Wild VJ",image:"/works/IMG_3972.jpg", href: "#" },
  { title: "Fly With Me",image:"/works/IMG_3972.jpg",  href: "#" },
]

export default function WorksPage() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {works.map((work, idx) => (
        <Link key={idx} href={work.href} className="group">
          <div className="overflow-hidden">
            <Image
              src={work.image}
              alt={work.title}
              width={800}
              height={450}
              className="group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h2 className="text-xl mt-2">{work.title}</h2>
        </Link>
      ))}
    </div>
  )
}
