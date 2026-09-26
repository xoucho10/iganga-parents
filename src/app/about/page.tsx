'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeIn } from '@/components/Dynamic'
import { motion } from 'framer-motion'
export default function About(){
  return (
    <main className='bg-white'>
      <Navbar/>
      <FadeIn><section className='bg-[#1A0A2E] text-white py-12 px-6 text-center'><motion.h1 initial={{scale:0.9}} animate={{scale:1}} className='font-black text-3xl'>About IPSS - Cock • Pen • Book</motion.h1><p className='text-[12px] opacity-70 mt-2'>Quality Education Is Our Tradition Since 1995</p></section></FadeIn>
      <FadeIn><section className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6'><div><h2 className='font-black text-xl text-[#4A148C]'>Our Story</h2><p className='text-[12px] text-gray-600 mt-2 leading-relaxed'>Founded 1995 by parents of Iganga. Started 45 students, now 800+. UNEB Centre, Top district. Motto explains our soul: Cock wakes at 5am for prep - discipline, Pen writes future - talent, Book is academics.</p><div className='mt-4 grid grid-cols-3 gap-2 text-[10px]'><div className='bg-purple-50 p-3 rounded-xl font-bold'>1995 - Founded</div><div className='bg-yellow-50 p-3 rounded-xl font-bold'>800+ Students Now</div><div className='bg-green-50 p-3 rounded-xl font-bold'>31 Years Tradition</div></div></div><div className='bg-black rounded-3xl aspect-video flex items-center justify-center border-2 border-yellow-200'><div className='w-14 h-14 bg-[#FFEB3B] rounded-full flex items-center justify-center animate-pulse'>▶</div></div></section></FadeIn>
      <FadeIn><section className='bg-[#FFFBEB] py-10 px-6'><h3 className='font-black text-center text-xl'>Board of Directors - Dynamic</h3><div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto'><div className='bg-white rounded-2xl p-4 text-center border hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=20' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Dr. Mugoya</div><div className='text-[10px] text-gray-500'>Chairperson BOD</div></div><div className='bg-white rounded-2xl p-4 text-center border hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=18' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mrs. Babirye</div><div className='text-[10px] text-gray-500'>Vice Chair</div></div><div className='bg-white rounded-2xl p-4 text-center border hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=22' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Baliddawa</div><div className='text-[10px] text-gray-500'>Founder Member</div></div><div className='bg-white rounded-2xl p-4 text-center border hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=12' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Isabirye</div><div className='text-[10px] text-gray-500'>Parent Rep</div></div></div></section></FadeIn>
      <Footer/>
    </main>
  )
}
