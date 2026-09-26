'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FadeIn, AnimatedCounter } from '@/components/Dynamic'
export default function Academics(){
  return (
    <main className='bg-white'>
      <Navbar/>
      <FadeIn><section className='bg-[#1A0A2E] text-white py-12 px-6'><h1 className='font-black text-3xl max-w-7xl mx-auto'>Academics S1-S6 - <span className='text-[#FFEB3B]'><AnimatedCounter value={95} suffix='% Pass'/></span></h1></section></FadeIn>
      <FadeIn><section className='max-w-7xl mx-auto px-6 py-10'><h2 className='font-black text-xl text-[#4A148C]'>Our Teachers - 32 Experts</h2><div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'><div className='border rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=11' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Ssemakula</div><div className='text-[10px] text-gray-500'>Headteacher - MSc</div></div><div className='border rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=32' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Ms. Namatovu</div><div className='text-[10px] text-gray-500'>Deputy - English Lit</div></div><div className='border rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=15' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Isabirye</div><div className='text-[10px] text-gray-500'>HOD Sciences</div></div><div className='border rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition'><img src='https://i.pravatar.cc/100?img=26' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Ms. Nakato</div><div className='text-[10px] text-gray-500'>Matron - Boarding</div></div></div></section></FadeIn>
      <Footer/>
    </main>
  )
}
