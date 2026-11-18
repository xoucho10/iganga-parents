'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [acadOpen, setAcadOpen] = useState(false)
  const [acadOpenMobile, setAcadOpenMobile] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href ? 'text-[#7C3AED]' : ''

  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-3'>
          <img src='/logo.png' alt='IPSS Logo' className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white object-contain border border-purple-100 shadow-sm'/>
          <div className='leading-tight'>
            <div className='font-black text-[14px] md:text-[15px] text-[#7C3AED] tracking-tight'>IGANGA PARENTS SS</div>
            <div className='text-[9px] md:text-[10px] text-gray-500 font-bold tracking-wide'>Quality Education Is Our Tradition</div>
          </div>
        </Link>

        {/* DESKTOP */}
        <div className='hidden md:flex items-center gap-5 text-[13px] font-bold'>
          <Link href='/' className={`hover:text-[#7C3AED] ${isActive('/')}`}>Home</Link>
          <Link href='/about' className={`hover:text-[#7C3AED] ${isActive('/about')}`}>About</Link>
          <div className='relative' onMouseEnter={()=>setAcadOpen(true)} onMouseLeave={()=>setAcadOpen(false)}>
            <button className='flex items-center gap-1 hover:text-[#7C3AED] py-3 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 cursor-pointer font-bold text-[13px]'>
              Academics <span className='text-[10px]'>{acadOpen ? '▲' : '▼'}</span>
            </button>
            {acadOpen && (
              <div className='absolute top-full left-0 w-[260px] bg-white border border-purple-100 rounded-2xl shadow-xl overflow-hidden py-2 z-50'>
                <Link href='/o-level' onClick={()=>setAcadOpen(false)} className='block px-4 py-3 hover:bg-purple-50'><p className='font-black text-[14px] text-[#7C3AED]'>O Level • S1 - S4</p><p className='text-[11px] text-gray-500 font-normal'>UCE • New Lower Secondary Curriculum</p></Link>
                <Link href='/a-level' onClick={()=>setAcadOpen(false)} className='block px-4 py-3 hover:bg-yellow-50'><p className='font-black text-[14px] text-gray-900'>A Level • S5 - S6</p><p className='text-[11px] text-gray-500 font-normal'>UACE • Sciences & Arts Combinations</p></Link>
                <Link href='/academics' onClick={()=>setAcadOpen(false)} className='block px-4 py-3 bg-gray-50 text-[12px] text-center text-[#7C3AED]'>View All Academics →</Link>
              </div>
            )}
          </div>
          <Link href='/boarding' className={`hover:text-[#7C3AED] ${isActive('/boarding')}`}>Boarding</Link>
          <Link href='/gallery' className={`hover:text-[#7C3AED] ${isActive('/gallery')}`}>Gallery</Link>
          <Link href='/alumni' className={`hover:text-[#7C3AED] ${isActive('/alumni')}`}>Alumni</Link>
          {/* NEWS - FIXED: NOW GOES TO /news PAGE, NOT #news */}
          <Link href='/news' className={`hover:text-[#7C3AED] flex items-center gap-1 ${isActive('/news')}`}>News <span className='bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded-full'>NEW</span></Link>
          <Link href='/contact' className={`hover:text-[#7C3AED] ${isActive('/contact')}`}>Contact</Link>
          <Link href='/apply' className='bg-[#9333EA] text-white px-5 py-2.5 rounded-full hover:bg-[#7C3AED]'>Apply Now</Link>
        </div>

        <button onClick={()=>setOpen(!open)} className='md:hidden text-2xl px-2 bg-transparent border-0 outline-none'>{open ? '✕' : '☰'}</button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className='md:hidden bg-white border-t px-4 py-3 flex flex-col gap-1 text-[14px] font-bold'>
          <Link href='/' onClick={()=>setOpen(false)} className='py-2'>Home</Link>
          <Link href='/about' onClick={()=>setOpen(false)} className='py-2'>About</Link>
          <button onClick={()=>setAcadOpenMobile(!acadOpenMobile)} className='flex justify-between py-2 text-left bg-transparent border-0 outline-none font-bold text-[14px]'>Academics <span>{acadOpenMobile ? '▲' : '▼'}</span></button>
          {acadOpenMobile && (
            <div className='ml-3 flex flex-col gap-1 bg-purple-50 rounded-xl p-3'>
              <Link href='/o-level' onClick={()=>{setOpen(false); setAcadOpenMobile(false)}} className='py-1 text-[#7C3AED]'>📚 O Level • S1 - S4 (UCE)</Link>
              <Link href='/a-level' onClick={()=>{setOpen(false); setAcadOpenMobile(false)}} className='py-1'>🎓 A Level • S5 - S6 (UACE)</Link>
              <Link href='/academics' onClick={()=>{setOpen(false); setAcadOpenMobile(false)}} className='py-1 text-[12px]'>View All Academics →</Link>
            </div>
          )}
          <Link href='/boarding' onClick={()=>setOpen(false)} className='py-2'>Boarding</Link>
          <Link href='/gallery' onClick={()=>setOpen(false)} className='py-2'>Gallery</Link>
          <Link href='/alumni' onClick={()=>setOpen(false)} className='py-2'>Alumni</Link>
          {/* NEWS - FIXED: NOW GOES TO /news PAGE, NOT #news */}
          <Link href='/news' onClick={()=>setOpen(false)} className='py-2 flex items-center gap-2'>News <span className='bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded-full'>NEW</span></Link>
          <Link href='/contact' onClick={()=>setOpen(false)} className='py-2'>Contact</Link>
          <Link href='/apply' onClick={()=>setOpen(false)} className='bg-[#9333EA] text-white px-5 py-2.5 rounded-full text-center mt-2'>Apply Now</Link>
        </div>
      )}
    </nav>
  )
}