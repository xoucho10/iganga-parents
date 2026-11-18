'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { FadeIn, PopIn } from '@/components/Dynamic'

export default function Contact(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState('Admission')
  const [msg, setMsg] = useState('')

  // REPLACE with real school WhatsApp
  const wa = `https://wa.me/256000000000?text=${encodeURIComponent(`Hello IPSS! My name is ${name}. Phone: ${phone}. Topic: ${topic}. Message: ${msg}`)}`
  const input = 'w-full border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-[#7C3AED]'

  return (
    <main className='bg-white'>
      <Navbar/>
      {/* HERO - FadeIn wraps whole content, not inside */}
      <section className='bg-[#7C3AED] text-white'>
        <FadeIn>
          <div className='max-w-7xl mx-auto px-6 py-12'>
            <span className='inline-block bg-[#FDE047] text-black px-3 py-1.5 rounded-full text-[11px] font-black'>CONTACT US</span>
            <h1 className='font-black text-4xl md:text-5xl mt-4'>Talk To Us</h1>
            <p className='text-white/85 text-[14px] mt-2 max-w-xl'>Questions about admission, fees, boarding, visiting? Send us a message - we reply on WhatsApp.</p>
          </div>
        </FadeIn>
      </section>

      {/* MAIN - FadeIn wraps WHOLE grid, grid inside untouched */}
      <section className='max-w-7xl mx-auto px-6 py-10'>
        <FadeIn>
          <div className='grid md:grid-cols-3 gap-6'>
            {/* LEFT - exactly as before */}
            <div className='space-y-4'>
              <div className='bg-purple-50 rounded-3xl p-5'><p className='font-black'>📍 Address</p><p className='text-[13px] text-gray-600 mt-1'>Iganga Parents Secondary School<br/>Iganga Municipality, Iganga District<br/>Jinja Road, Uganda - 1.5km from Town Centre</p></div>
              <div className='bg-yellow-50 rounded-3xl p-5'><p className='font-black'>🕐 Office Hours</p><p className='text-[13px] text-gray-600 mt-1'>Mon - Sat: 8:00am - 4:00pm<br/>Interviews & Admissions<br/>Visitation as per school calendar</p></div>
              <div className='bg-green-50 rounded-3xl p-5'><p className='font-black'>📞 WhatsApp / Phone</p><p className='text-[13px] text-gray-600 mt-1'>Use the form → it opens WhatsApp.<br/>Add real school number in code before going live.</p><Link href='/apply' className='inline-block mt-3 bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-[12px] font-bold'>Apply Now →</Link></div>
            </div>

            {/* RIGHT FORM - exactly as before, no wrapper inside */}
            <div className='md:col-span-2 bg-white border rounded-3xl p-6 shadow-lg'>
              <p className='font-black text-[18px]'>Send Us A Message</p>
              <div className='grid md:grid-cols-2 gap-3 mt-4'>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder='Your Full Name *' className={input} />
                <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Phone / WhatsApp *' className={input} />
                <select value={topic} onChange={e=>setTopic(e.target.value)} className={input}><option>Admission</option><option>Fees</option><option>Boarding</option><option>Visiting / Tour</option><option>Alumni</option><option>Other</option></select>
                <input placeholder='Student Class (if admission) e.g. S1' className={input} />
                <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder='Your message...' rows={4} className={`${input} md:col-span-2 resize-none`} />
              </div>
              <PopIn><a href={wa} target='_blank' className='block text-center mt-4 bg-[#25D366] text-white py-3.5 rounded-full font-black text-[13px]'>Send Via WhatsApp →</a></PopIn>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* MAP - FadeIn wraps whole map, not inside */}
      <section className='max-w-7xl mx-auto px-6 pb-12'>
        <FadeIn>
          <div className='rounded-3xl overflow-hidden border shadow-lg'>
            <iframe title="IPSS Map" src="https://www.google.com/maps?q=Iganga%20Parents%20Secondary%20School%2C%20Iganga%2C%20Uganda&output=embed" className='w-full h-[380px] border-0' loading="lazy" />
          </div>
        </FadeIn>
        <p className='text-center text-[11px] text-gray-400 mt-3'>This is an illustration map - use Google Maps for exact directions.</p>
      </section>
      <Footer/>
    </main>
  )
}