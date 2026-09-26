'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedCounter({ value, suffix }: { value: number, suffix: string }){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let start=0; const end=value; const step=end/100
    const t=setInterval(()=>{ start+=step; if(start>=end){setCount(end); clearInterval(t)} else setCount(Math.floor(start))},20)
    return ()=>clearInterval(t)
  },[value])
  return <span>{count}{suffix}</span>
}
export function FadeIn({ children, delay=0 }: { children: React.ReactNode, delay?: number }){
  return <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay, duration:0.6}}>{children}</motion.div>
}
