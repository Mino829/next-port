'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function WorkCard({ work, index }: { work: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={work.href} className="block group overflow-hidden rounded-2xl shadow-lg">
        <div className="relative w-full h-64">
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="bg-black text-white p-4 group-hover:bg-neutral-900 transition-colors duration-500">
          <h2 className="text-xl font-bold group-hover:text-pink-400 transition-colors">{work.title}</h2>
          <p className="text-sm opacity-70">{work.category}</p>
        </div>
      </Link>
    </motion.div>
  )
}
