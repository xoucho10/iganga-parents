'use client'
import { useState } from 'react'
import { FadeIn, AnimatedCounter } from '@/components/Dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Alumni(){
  const [tier, setTier] = useState('silver')
  const [year, setYear] = useState('All')

  const alumni = [
    {name:'Eng. James Mukasa', year:'2005', level:'S6 PCM', job:'Civil Engineer - Iganga', amt:'150,000', tier:'gold', text:'Pen and book - we wrote our future.', verified:true},
    {name:'Dr. Sarah Namatovu', year:'2001', level:'S6 BCM', job:'Doctor - Mulago', amt:'50,000', tier:'silver', verified:true},
    {name:'Moses Isabirye', year:'2015', level:'S4', job:'Teacher', amt:'20,000', tier:'bronze', verified:true},
  ]

  const filtered = year==='All'? alumni : alumni.filter(a=>a.year===year)

  return (
    <main className='bg-white'>
      <Navbar/>
      <FadeIn><section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-10'>
          <h1 className='text-4xl font-black uppercase'>Alumni Wall Of Fame</h1>
          <p className='text-[13px] mt-2 opacity-80'>Click Bronze / Silver / Gold below and see LIVE how you will look after payment.</p>
        </div>
      </section></FadeIn>

      <FadeIn><section className='max-w-7xl mx-auto px-6 py-8'>
        <h2 className='font-black text-[#4A148C] text-center'>Choose Package - See Live Preview</h2>

        <div className='mt-6 grid md:grid-cols-3 gap-4'>
          <div onClick={()=>setTier('bronze')} className={tier==='bronze'? 'border-2 border-[#8E24AA] bg-[#FDF2FF] rounded-2xl p-5 cursor-pointer' : 'border-2 border-gray-200 bg-white rounded-2xl p-5 cursor-pointer'}>
            <span className='text-[10px] bg-gray-100 px-2 py-1 rounded-full font-bold'>BRONZE - 20K / Year</span>
            <div className='font-black mt-2 text-sm'>Name + Year + Class</div>
            <div className='mt-3 bg-white border rounded-xl p-3'>
              <div className='flex gap-2 items-center'><div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-black'>Y</div><div><div className='font-bold text-[12px]'>Your Name</div><div className='text-[10px] text-gray-500'>Class of 2015 - S4</div></div></div>
            </div>
            {tier==='bronze' && <div className='mt-2 text-[10px] bg-[#8E24AA] text-white px-2 py-1 rounded-full inline-block'>SELECTED - This is how Bronze looks</div>}
          </div>

          <div onClick={()=>setTier('silver')} className={tier==='silver'? 'border-2 border-[#8E24AA] bg-[#FDF2FF] rounded-2xl p-5 cursor-pointer shadow-lg' : 'border-2 border-gray-200 bg-white rounded-2xl p-5 cursor-pointer'}>
            <span className='text-[10px] bg-[#8E24AA] text-white px-2 py-1 rounded-full font-bold'>SILVER - 50K / Year - POPULAR</span>
            <div className='font-black mt-2 text-sm'>Name + Job + Location</div>
            <div className='mt-3 bg-white border rounded-xl p-3'>
              <div className='flex gap-2'><div className='w-10 h-10 bg-[#8E24AA] text-white rounded-full flex items-center justify-center font-black'>Y</div><div><div className='font-bold text-[12px]'>Your Name - SILVER</div><div className='text-[10px] text-gray-600'>Class of 2005 - Engineer - Iganga - 50K</div></div></div>
            </div>
            {tier==='silver' && <div className='mt-2 text-[10px] bg-[#8E24AA] text-white px-2 py-1 rounded-full inline-block'>SELECTED - This is how Silver looks</div>}
          </div>

          <div onClick={()=>setTier('gold')} className={tier==='gold'? 'border-2 border-[#FFC107] bg-[#FFFBEB] rounded-2xl p-5 cursor-pointer shadow-lg' : 'border-2 border-gray-200 bg-white rounded-2xl p-5 cursor-pointer'}>
            <span className='text-[10px] bg-[#FFC107] text-black px-2 py-1 rounded-full font-bold'>GOLD - 100K+ / Year</span>
            <div className='font-black mt-2 text-sm'>Photo + Story + Top Spot</div>
            <div className='mt-3 bg-white border-2 border-[#FFC107] rounded-xl p-3'>
              <div className='flex gap-3'><div className='w-12 h-12 bg-yellow-200 rounded-full'></div><div><div className='font-bold text-[12px]'>Your Name - GOLD - TOP</div><div className='text-[10px] text-gray-600'>Class of 2005 - Civil Engineer - 150K</div><div className='text-[10px] italic bg-yellow-50 p-1 rounded mt-1'>Your story here + Business ad</div></div></div>
            </div>
            {tier==='gold' && <div className='mt-2 text-[10px] bg-black text-white px-2 py-1 rounded-full inline-block'>SELECTED - This is how Gold looks</div>}
          </div>
        </div>

        <div className='mt-10 grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2'>
            <h3 className='font-black text-[#4A148C]'>Wall by Class Year</h3>
            <div className='mt-3 flex gap-2 flex-wrap'>
              <button onClick={()=>setYear('All')} className={year==='All'? 'bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold' : 'bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold'}>All</button>
              <button onClick={()=>setYear('2024')} className={year==='2024'? 'bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold' : 'bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold'}>2024</button>
              <button onClick={()=>setYear('2005')} className={year==='2005'? 'bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold' : 'bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold'}>2005</button>
              <button onClick={()=>setYear('2001')} className={year==='2001'? 'bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold' : 'bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold'}>2001</button>
              <button onClick={()=>setYear('2015')} className={year==='2015'? 'bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold' : 'bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold'}>2015</button>
            </div>

            <div className='mt-5 space-y-3'>
              {filtered.map((a,i)=>(
                <div key={i} className='bg-white border rounded-xl p-3 flex gap-3'>
                  <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-black'>{a.name[0]}</div>
                  <div className='flex-1'><div className='font-bold text-sm'>{a.name} - {a.tier.toUpperCase()}</div><div className='text-[11px] text-gray-600'>Class of {a.year} - {a.level} - {a.job} - {a.amt} UGX</div></div>
                  <div className='text-[9px] bg-green-50 px-2 py-1 rounded-full h-fit'>Verified</div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#1A0A2E] text-white rounded-2xl p-5'>
            <h3 className='font-black text-[#FFEB3B]'>Contribute & Be Listed Now</h3>
            <p className='text-[11px] opacity-80 mt-1'>Selected: {tier.toUpperCase()} - You will look like preview above</p>
            <div className='mt-4 space-y-2 text-[11px]'>
              <div className='bg-white/10 rounded-xl p-3'>MTN MoMo: 0772 000 000 - Ref: Name + Year</div>
              <div className='bg-white/10 rounded-xl p-3'>Airtel: 0752 000 000</div>
            </div>
            <div className='mt-4 bg-white rounded-xl p-3 text-black space-y-2'>
              <input placeholder='Full Name' className='w-full border rounded-lg px-3 py-2 text-[11px]'/>
              <input placeholder='Class Year e.g. 2005' className='w-full border rounded-lg px-3 py-2 text-[11px]'/>
              <input placeholder='Current Job' className='w-full border rounded-lg px-3 py-2 text-[11px]'/>
              <input placeholder='Phone / WhatsApp' className='w-full border rounded-lg px-3 py-2 text-[11px]'/>
              <button className='w-full bg-[#8E24AA] text-white py-2.5 rounded-full font-black text-[11px]'>I Have Paid - Add Me To Wall</button>
            </div>
          </div>
        </div>
      </section></FadeIn>

      <Footer/>
    </main>
  )
}

