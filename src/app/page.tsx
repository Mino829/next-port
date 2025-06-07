'use client'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <motion.main
    className="h-screen flex flex-col items-center justify-center text-center"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1.5}}
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
        Mino 
      </h1>
      <p className="mt-4 text-lg text-gray-300">映像作家　/　VJ　/　技術演出</p>
      <h2>経歴</h2>
      <li>芝浦工業大学</li>
    </motion.main>
  )
}