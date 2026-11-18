import Link from 'next/link'
import { getContent } from '@/data/siteContent'

export default function Footer(){
  const c = getContent()
  return (
    <footer className='bg-[#1A0A2E] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8'>
        <div>
          <div className='flex items-center gap-3'>
            <img src='/logo.png' alt='IPSS' className='w-14 h-14 rounded-full bg-white p-1 object-contain'/>
            <div>
              <div className='font-black text-[14px] leading-tight'>{c.schoolName || 'IGANGA PARENTS SS'}</div>
              <div className='text-[9px] opacity-60 tracking-widest'>{c.motto || 'Cock • Pen • Book'}</div>
            </div>
          </div>
          <div className='text-[11px] opacity-70 mt-3 leading-relaxed'>Quality Education Is Our Tradition. O & A Level in Iganga. Boarding & Day S1-S6.</div>
          <div className='mt-3 text-[10px] bg-white/10 inline-block px-3 py-1 rounded-full'>EST. {c.foundedYear || '1995'} • {c.founderName || 'Hajji Asuman Mpaata'}</div>
        </div>

        <div>
          <div className='font-bold text-[12px] text-[#FFEB3B]'>Quick Links</div>
          <div className='mt-3 space-y-2 text-[11px] opacity-80 flex flex-col'>
            <Link href='/about' className='hover:text-[#FFEB3B]'>About + Founder</Link>
            <details className='group'>
              <summary className='cursor-pointer hover:text-[#FFEB3B] list-none flex items-center justify-between'>
                <span>Academics - O & A Level</span>
                <span className='group-open:rotate-180 transition-transform'>▾</span>
              </summary>
              <div className='ml-3 mt-2 space-y-2 border-l border-white/20 pl-3 flex flex-col'>
                <Link href='/o-level' className='hover:text-[#FFEB3B]'>📘 O Level (S1 - S4)</Link>
                <Link href='/a-level' className='hover:text-[#FFEB3B]'>📗 A Level (S5 - S6)</Link>
              </div>
            </details>
            <Link href='/boarding' className='hover:text-[#FFEB3B]'>Boarding Life</Link>
            <Link href='/gallery' className='hover:text-[#FFEB3B]'>Gallery</Link>
            <Link href='/alumni' className='hover:text-[#FFEB3B]'>Alumni</Link>
          </div>
        </div>

        <div>
          <div className='font-bold text-[12px] text-[#FFEB3B]'>Parents & Children</div>
          <div className='mt-3 space-y-2 text-[11px] opacity-80 flex flex-col'>
            <Link href='/apply' className='hover:text-[#FFEB3B]'>Apply Now - S1 to S6</Link>
            <Link href='/academics' className='hover:text-[#FFEB3B]'>Fee Structure 2026</Link>
            <Link href='/about' className='hover:text-[#FFEB3B]'>Testimonials</Link>
            <a href={`https://wa.me/${c.whatsapp}`} target='_blank' className='hover:text-[#FFEB3B]'>💬 WhatsApp Us</a>
          </div>
        </div>

        <div>
          <div className='font-bold text-[12px] text-[#FFEB3B]'>Visit Us</div>
          <div className='mt-3 text-[11px] opacity-80 leading-relaxed'>
            {c.address || 'Iganga Town, Along Iganga-Jinja Road'}<br/>
            📞 {c.phone || 'Add phone in Cockpit'}<br/>
            ✉️ {c.email || 'Add email in Cockpit'}<br/>
            🕐 {c.officeHours || 'Mon - Fri: 8am - 5pm'}<br/>
            <a href={`https://wa.me/${c.whatsapp}`} target='_blank' className='inline-block mt-2 bg-[#25D366] text-white px-3 py-1.5 rounded-full font-bold'>💬 WhatsApp Instant Reply</a>
          </div>
        </div>
      </div>
      <div className='border-t border-white/10 py-4 text-center text-[10px] opacity-50 flex justify-center items-center gap-2'>
        <img src='/logo.png' alt='' className='w-5 h-5 rounded-full bg-white p-0.5'/> 
        © 2026 {c.schoolName || 'Iganga Parents Secondary School'} - {c.motto || 'Cock • Pen • Book'}
      </div>
    </footer>
  )
}