'use client'
import works from '@/data/works.json'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WorksPage() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {works.map((work, index) => (
        <Link href={work.link || '#'} key={index}>
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative">
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={800}
                height={500}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                <h2 className="text-lg font-semibold text-white">{work.title}</h2>
                <p className="text-sm text-white/70">{work.category}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
