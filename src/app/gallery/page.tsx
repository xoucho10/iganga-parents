'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Gallery(){
  const [cat, setCat] = useState("All")
  const items = [
    {cat:"Academics", title:"S6 Class 2024 - Lab Practical", year:"2024"},
    {cat:"Academics", title:"UNEB Center - S4 Exams", year:"2024"},
    {cat:"MDD", title:"MDD Team - District Champions", year:"2023"},
    {cat:"MDD", title:"Traditional Dance - Maganda", year:"2024"},
    {cat:"Sports", title:"Football - Cock vs Pen", year:"2024"},
    {cat:"Sports", title:"Netball Girls - Iganga District", year:"2024"},
    {cat:"Boarding", title:"Boys Dorm - Morning Prep 5am", year:"2024"},
    {cat:"Boarding", title:"Dining Hall - Lunch", year:"2024"},
    {cat:"Events", title:"Speech Day - Guest of Honor", year:"2023"},
    {cat:"Campus", title:"Main Gate - Iganga Town", year:"2024"},
    {cat:"Campus", title:"Science Lab - New Equipment", year:"2024"},
  ]
  const filtered = cat==="All"? items : items.filter(i=>i.cat===cat)

  return (
    <main className='bg-white'>
      <Navbar/>
      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <h1 className='text-4xl md:text-5xl font-black uppercase'>GALLERY</h1>
          <p className='mt-2 text-white/80 text-[13px] max-w-2xl'>Iganga Parents SS - Life at IPSS - Academics, MDD, Sports, Boarding, Events.</p>
          <div className='mt-4 flex gap-2 flex-wrap'>
            <button onClick={()=>setCat("All")} className={cat==="All"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>All</button>
            <button onClick={()=>setCat("Academics")} className={cat==="Academics"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>Academics</button>
            <button onClick={()=>setCat("MDD")} className={cat==="MDD"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>MDD</button>
            <button onClick={()=>setCat("Sports")} className={cat==="Sports"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>Sports</button>
            <button onClick={()=>setCat("Boarding")} className={cat==="Boarding"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>Boarding</button>
            <button onClick={()=>setCat("Events")} className={cat==="Events"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>Events</button>
            <button onClick={()=>setCat("Campus")} className={cat==="Campus"? "bg-[#FFEB3B] text-black px-4 py-1.5 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold"}>Campus</button>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10'>
        <h3 className='font-black text-[#4A148C]'>{filtered.length} Photos - {cat}</h3>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filtered.map((it,i)=>(
            <div key={i} className='bg-white border rounded-2xl overflow-hidden'>
              <div className='h-40 bg-gradient-to-br from-purple-100 to-yellow-50 flex items-center justify-center relative'>
                <div className='absolute top-2 left-2 bg-[#8E24AA] text-white text-[9px] px-2 py-1 rounded-full font-bold'>{it.cat}</div>
                <div className='absolute bottom-2 right-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded-full'>{it.year}</div>
              </div>
              <div className='p-3'><div className='font-bold text-[12px]'>{it.title}</div><div className='text-[10px] text-gray-500'>IPSS Iganga</div></div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}
