'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// COUNT UP - SLOWER, SOFT LANDING
export function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }){
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(()=>{
    if(!inView) return
    const controls = animate(0, value, {
      duration: 3.2, // was 2 - now slower
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  },[inView, value])

  return (
    <span ref={ref} className='tabular-nums inline-block'>
      {display.toLocaleString()}{suffix}
    </span>
  )
}

// FADE IN - SLOWER, SOFTER
export function FadeIn({ children, delay=0, y=28 }: { children: React.ReactNode, delay?: number, y?: number }){
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} // was 0.7
    >
      {children}
    </motion.div>
  )
}

// SLIDE FROM LEFT / RIGHT - SLOWER
export function SlideIn({ children, delay=0, from='left' }: { children: React.ReactNode, delay?: number, from?: 'left' | 'right' }){
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} // was 0.7
    >
      {children}
    </motion.div>
  )
}

// POP IN - SLOWER, LESS BOUNCY
export function PopIn({ children, delay=0 }: { children: React.ReactNode, delay?: number }){
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 20, duration: 0.9 }} // softer spring
      whileHover={{ scale: 1.02 }} // was 1.04 - gentler
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// STAGGER - SLOWER GAP BETWEEN CARDS
export function Stagger({ children, className='' }: { children: React.ReactNode, className?: string }){
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.22 } } }} // was 0.1 - slower
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className='' }: { children: React.ReactNode, className?: string }){
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } // was 0.55
      }}
    >
      {children}
    </motion.div>
  )
}

// FLOAT - SLOWER UP/DOWN
export function Float({ children, className='' }: { children: React.ReactNode, className?: string }){
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} // was 3s
    >
      {children}
    </motion.div>
  )
}