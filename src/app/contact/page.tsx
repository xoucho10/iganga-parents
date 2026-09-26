'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact(){
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")

  const sendWA = ()=>{
    const text = `Hello IPSS - Inquiry%0AName: ${name}%0APhone: ${phone}%0AMessage: ${msg}`
    window.open(`https://wa.me/256700000000?text=${text}`, "_blank")
  }

  return (
    <main className='bg-white'>
      <Navbar/>
      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8'>
          <div>
            <h1 className='text-4xl md:text-5xl font-black uppercase'>Contact IPSS</h1>
            <p className='mt-3 text-white/80 text-[13px]'>Iganga Parents SS - Admissions S1-S6 - Boarding & Day - Iganga Town.</p>
            <div className='mt-5 space-y-2 text-[12px]'>
              <div>📍 Iganga Town, P.O Box 123, Iganga</div>
              <div>📞 0700 000 000 / 0772 000 000</div>
              <div>💬 WhatsApp: 0700 000 000</div>
              <div>✉️ igangaparentsss@gmail.com</div>
            </div>
          </div>
          <div className='bg-white text-black rounded-2xl p-5'>
            <h3 className='font-black text-[#4A148C]'>Quick Contact</h3>
            <div className='mt-4 space-y-3'>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder='Your Name' className='w-full border rounded-xl px-4 py-2.5 text-[12px]'/>
              <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Phone / WhatsApp' className='w-full border rounded-xl px-4 py-2.5 text-[12px]'/>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder='Message - e.g. S1 admission...' className='w-full border rounded-xl px-4 py-2.5 text-[12px] h-24'></textarea>
              <button onClick={sendWA} className='w-full bg-[#8E24AA] text-white py-3 rounded-full font-black text-[12px]'>Send on WhatsApp</button>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2'>
          <h3 className='font-black text-[#4A148C]'>Visit Us - Map</h3>
          <div className='mt-3 bg-gray-100 rounded-2xl h-[320px] flex items-center justify-center border'><div className='text-center'><div className='font-bold text-sm'>IPSS - Iganga Town</div><div className='text-[11px] text-gray-500'>Along Iganga-Jinja highway - 5 mins from Taxi Park</div></div></div>
        </div>
        <div className='space-y-4'>
          <div className='bg-[#1A0A2E] text-white rounded-2xl p-5'>
            <h3 className='font-black text-[#FFEB3B]'>Fee Structure 2026</h3>
            <div className='mt-3 space-y-2 text-[11px]'>
              <div className='flex justify-between bg-white/10 p-2 rounded-lg'><span>Day S1-S4</span><span className='font-bold'>450K</span></div>
              <div className='flex justify-between bg-white/10 p-2 rounded-lg'><span>Boarding S1-S4</span><span className='font-bold'>950K</span></div>
              <div className='flex justify-between bg-[#FFEB3B] text-black p-2 rounded-lg font-bold'><span>Boarding S5-S6</span><span>1,050K</span></div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
