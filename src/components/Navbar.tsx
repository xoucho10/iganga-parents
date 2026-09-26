'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-3'>
          <img src='/logo.png' alt='IPSS Logo' className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white object-contain border border-purple-100 shadow-sm'/>
          <div className='leading-tight'>
            <div className='font-black text-[14px] md:text-[15px] text-[#4A148C] tracking-tight'>IGANGA PARENTS SS</div>
            <div className='text-[9px] md:text-[10px] text-gray-500 font-bold tracking-widest'>Cock • Pen • Book</div>
          </div>
        </Link>

        <div className='hidden md:flex gap-5 text-[12px] font-bold items-center'>
          <Link href='/' className='hover:text-[#8E24AA]'>Home</Link>
          <Link href='/about' className='hover:text-[#8E24AA]'>About</Link>
          <Link href='/academics' className='hover:text-[#8E24AA]'>Academics</Link>
          <Link href='/boarding' className='hover:text-[#8E24AA]'>Boarding</Link>
          <Link href='/gallery' className='hover:text-[#8E24AA]'>Gallery</Link>
          <Link href='/alumni' className='hover:text-[#8E24AA]'>Alumni</Link>
          <Link href='/contact' className='bg-[#8E24AA] text-white px-5 py-2.5 rounded-full hover:bg-[#4A148C]'>Apply 2026</Link>
        </div>

        <button onClick={()=>setOpen(!open)} className='md:hidden w-10 h-10 bg-[#1A0A2E] text-white rounded-full flex items-center justify-center text-[18px]'>{open? '✕' : '☰'}</button>
      </div>

      {open && (
        <div className='md:hidden bg-[#1A0A2E] text-white px-4 pb-6 pt-2'>
          <div className='flex items-center gap-3 py-3 border-b border-white/10'>
            <img src='/logo.png' className='w-10 h-10 rounded-full bg-white p-0.5'/>
            <div><div className='font-black text-[13px]'>IGANGA PARENTS SS</div><div className='text-[9px] opacity-60'>Quality Education Is Our Tradition</div></div>
          </div>
          <Link onClick={()=>setOpen(false)} href='/' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Home</Link>
          <Link onClick={()=>setOpen(false)} href='/about' className='block py-3 border-b border-white/10 text-[13px] font-bold'>About + BOD + Tour</Link>
          <Link onClick={()=>setOpen(false)} href='/academics' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Academics + Teachers</Link>
          <Link onClick={()=>setOpen(false)} href='/boarding' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Boarding</Link>
          <Link onClick={()=>setOpen(false)} href='/gallery' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Gallery</Link>
          <Link onClick={()=>setOpen(false)} href='/alumni' className='block py-3 border-b border-white/10 text-[13px] font-bold'>Alumni Wall</Link>
          <Link onClick={()=>setOpen(false)} href='/contact' className='block mt-4 bg-[#FFEB3B] text-black text-center py-3 rounded-full font-black text-[13px]'>Apply S1-S6 2026</Link>
        </div>
      )}
    </nav>
  )
}
