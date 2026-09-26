'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-purple-100'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='w-9 h-9 bg-[#8E24AA] rounded-full flex items-center justify-center text-white font-black text-[11px]'>IPSS</div>
          <div className='leading-tight'>
            <div className='font-black text-[13px] text-[#4A148C]'>IGANGA PARENTS SS</div>
            <div className='text-[9px] text-gray-500'>Cock • Pen • Book</div>
          </div>
        </Link>

        <div className='hidden md:flex gap-5 text-[12px] font-bold items-center'>
          <Link href='/' className='hover:text-[#8E24AA]'>Home</Link>
          <Link href='/about' className='hover:text-[#8E24AA]'>About</Link>
          <Link href='/academics' className='hover:text-[#8E24AA]'>Academics</Link>
          <Link href='/boarding' className='hover:text-[#8E24AA]'>Boarding</Link>
          <Link href='/gallery' className='hover:text-[#8E24AA]'>Gallery</Link>
          <Link href='/alumni' className='hover:text-[#8E24AA]'>Alumni</Link>
          <Link href='/contact' className='bg-[#8E24AA] text-white px-5 py-2 rounded-full'>Apply 2026</Link>
        </div>

        <button onClick={()=>setOpen(!open)} className='md:hidden w-9 h-9 bg-[#1A0A2E] text-white rounded-full flex items-center justify-center'>{open? '✕' : '☰'}</button>
      </div>

      {open && (
        <div className='md:hidden bg-[#1A0A2E] text-white px-4 pb-6 pt-2 space-y-1'>
          <Link onClick={()=>setOpen(false)} href='/' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Home</Link>
          <Link onClick={()=>setOpen(false)} href='/about' className='block py-3 border-b border-white/10 text-[13px] font-bold'>About + BOD + Tour Video</Link>
          <Link onClick={()=>setOpen(false)} href='/academics' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Academics + All Teachers</Link>
          <Link onClick={()=>setOpen(false)} href='/boarding' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Boarding - Children Life</Link>
          <Link onClick={()=>setOpen(false)} href='/gallery' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Gallery + Parents & Children</Link>
          <Link onClick={()=>setOpen(false)} href='/alumni' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Alumni Wall - Revenue</Link>
          <Link onClick={()=>setOpen(false)} href='/contact' className='block mt-4 bg-[#FFEB3B] text-black text-center py-3 rounded-full font-black text-[13px]'>Apply S1-S6 2026</Link>
          <div className='pt-4 text-[10px] opacity-60'>📍 Iganga Town - 📞 0700 000 000 - WhatsApp instant</div>
        </div>
      )}
    </nav>
  )
}
