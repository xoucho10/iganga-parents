'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeIn } from '@/components/Dynamic'
import { motion } from 'framer-motion'
import { useState } from 'react'
export default function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <main className='bg-white'>
      <Navbar/>
      <FadeIn><section className='bg-[#FFFBEB] py-12 px-6'><div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'><div><h1 className='font-black text-3xl'>Apply S1-S6 2026</h1><p className='text-[12px] text-gray-600 mt-2'>Dynamic WhatsApp form - instant reply</p><div className='mt-4 bg-white p-4 rounded-2xl border'><div className='text-[11px] font-bold'>📞 0700 000 000 / 0772 000 000</div><div className='text-[11px] mt-1'>📍 Iganga Town, Jinja Road</div></div></div><motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className='bg-white rounded-3xl p-6 border shadow-lg'><input className='w-full border rounded-full px-4 py-3 text-[12px] mb-3' placeholder='Parent Name'/><input className='w-full border rounded-full px-4 py-3 text-[12px] mb-3' placeholder='Student Name + Class S1-S6'/><input className='w-full border rounded-full px-4 py-3 text-[12px] mb-3' placeholder='WhatsApp Number'/><button onClick={()=>setSent(true)} className='w-full bg-[#8E24AA] text-white py-3 rounded-full font-black text-[12px] hover:bg-[#4A148C] transition'>{sent? '✓ Sent! Check WhatsApp' : 'Send via WhatsApp - Dynamic'}</button>{sent && <div className='mt-3 text-[11px] text-green-600 bg-green-50 p-3 rounded-xl animate-pulse'>We received! We will reply on WhatsApp in 5 mins.</div>}</motion.div></div></section></FadeIn>
      <Footer/>
    </main>
  )
}
