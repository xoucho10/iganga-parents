export default function Footer(){
  return (
    <footer className='bg-[#1A0A2E] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8'>
        <div>
          <div className='flex items-center gap-3'>
            <img src='/logo.png' alt='IPSS' className='w-14 h-14 rounded-full bg-white p-1 object-contain'/>
            <div><div className='font-black text-[14px]'>IGANGA PARENTS SS</div><div className='text-[9px] opacity-60 tracking-widest'>Cock • Pen • Book</div></div>
          </div>
          <div className='text-[11px] opacity-70 mt-3 leading-relaxed'>Quality Education Is Our Tradition. Top O & A Level in Iganga. Boarding & Day S1-S6. UNEB Centre since 1995.</div>
          <div className='mt-3 text-[10px] bg-white/10 inline-block px-3 py-1 rounded-full'>UNEB Centre 2026 • EST. 1995</div>
        </div>
        <div><div className='font-bold text-[12px] text-[#FFEB3B]'>Quick Links</div><div className='mt-3 space-y-2 text-[11px] opacity-80'><div>About + BOD</div><div>All Teachers</div><div>Boarding</div><div>Gallery - Parents & Children</div></div></div>
        <div><div className='font-bold text-[12px] text-[#FFEB3B]'>Parents & Children</div><div className='mt-3 space-y-2 text-[11px] opacity-80'><div>Fee Structure 2026</div><div>Tour Video</div><div>Testimonials</div><div>WhatsApp 0700 000 000</div></div></div>
        <div><div className='font-bold text-[12px] text-[#FFEB3B]'>Visit Us</div><div className='mt-3 text-[11px] opacity-80 leading-relaxed'>Iganga Town, Along Iganga-Jinja Road<br/>P.O Box 123 Iganga<br/>📞 0700 000 000 / 0772 000 000<br/>💬 WhatsApp instant reply</div></div>
      </div>
      <div className='border-t border-white/10 py-4 text-center text-[10px] opacity-50 flex justify-center items-center gap-2'><img src='/logo.png' className='w-5 h-5 rounded-full bg-white p-0.5'/> © 2026 Iganga Parents Secondary School - Cock • Pen • Book</div>
    </footer>
  )
}
