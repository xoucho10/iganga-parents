'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { FadeIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

const NEWS = [
  {
    id: "admission-2026", tag: "Admission", date: "Nov 18, 2026",
    title: "Admission 2026 Open - S1 to S6, Day & Boarding",
    desc: "Interviews Monday to Saturday. Come with PLE / UCE result slip and passport photos. Flexible payment plans available.",
    body: "Admission for 2026 is now open for S1 to S6, Day & Boarding. Interviews are Monday to Saturday, 8am - 4pm. Come with your PLE / UCE result slip and 2 passport photos. We have flexible payment plans - talk to us on WhatsApp or visit the school office in Iganga Town, 1.5km from Town Centre along Jinja Road.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop", isNew: true,
  },
  {
    id: "candidates-revision", tag: "Academics", date: "Nov 10, 2026",
    title: "S4 & S6 Candidates In Final Revision",
    desc: "Our candidates are in intensive revision, supervised prep and past-paper practice ahead of UNEB. We wish them the best.",
    body: "Our S4 and S6 candidates are in final revision - supervised evening prep, past-paper practice, remedial lessons and guidance from teachers. We wish all our candidates success in UNEB. Parents, please continue to support and pray for them.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop", isNew: true,
  },
  {
    id: "usssa-2026", tag: "Sports", date: "Oct 28, 2026",
    title: "IPSS Competes At National Level - USSSA 2026",
    desc: "Football, netball and athletics. Our teams continue to represent Iganga at national level.",
    body: "Iganga Parents continues to compete in USSSA competitions - football, netball and athletics. Our teams have represented Iganga at national level, including the USSSA National Boys Football Championship. We are proud of our players, coaches and supporters.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop", isNew: false,
  },
  {
    id: "boarding-life", tag: "School Life", date: "Oct 15, 2026",
    title: "Boarding Life: Safe, Disciplined & Caring",
    desc: "Separate dorms, resident matron & warden, balanced diet, supervised prep and daily games. Boarding places available for 2026.",
    body: "Boarding at IPSS is safe, disciplined and caring. Separate boys & girls dorms, caring matrons, balanced meals, school clinic, clean water, supervised evening prep and daily games. Boarding places are available for 2026 - apply early.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=900&auto=format&fit=crop", isNew: false,
  },
]

export default function NewsPage(){
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<typeof NEWS[0] | null>(null)
  const filtered = filter === 'All' ? NEWS : NEWS.filter(n => n.tag === filter)

  return (
    <main className='bg-white'>
      <Navbar/>
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <Float><span className='inline-block bg-[#FDE047] text-black px-3 py-1.5 rounded-full text-[11px] font-black'>📰 IPSS NEWS</span></Float>
            <h1 className='font-black text-4xl md:text-5xl mt-4'>All News</h1>
            <p className='text-white/85 text-[14px] mt-2'>Every story from Iganga Parents - in one place. Click any story to read it in full.</p>
          </FadeIn>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10'>
        <Stagger className='flex flex-wrap gap-2'>
          {['All','Admission','Academics','Sports','School Life'].map(t => (
            <StaggerItem key={t}><button onClick={()=>setFilter(t)} className={filter===t ? 'bg-[#7C3AED] text-white px-4 py-2 rounded-full text-[12px] font-bold' : 'bg-white border px-4 py-2 rounded-full text-[12px] font-bold'}>{t}</button></StaggerItem>
          ))}
        </Stagger>

        <Stagger key={filter} className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {filtered.map(n => (
            <StaggerItem key={n.id}>
              <button onClick={()=>setSelected(n)} className='bg-white border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition text-left w-full h-full'>
                <div className='relative h-[180px]'>
                  <img src={n.img} className='w-full h-full object-cover' alt={n.title} />
                  <span className='absolute top-3 left-3 bg-white text-black text-[10px] px-2.5 py-1 rounded-full font-bold'>{n.tag}</span>
                  {n.isNew && <span className='absolute top-3 right-3 bg-red-600 text-white text-[10px] px-2.5 py-1 rounded-full font-black'>NEW</span>}
                  <span className='absolute bottom-3 left-3 bg-black/70 text-white text-[10px] px-2.5 py-1 rounded-full'>{n.date}</span>
                </div>
                <div className='p-4'>
                  <p className='font-black text-[15px] leading-tight'>{n.title}</p>
                  <p className='text-[12px] text-gray-600 mt-2 line-clamp-3'>{n.desc}</p>
                  <p className='text-[12px] font-bold text-[#7C3AED] mt-3'>Read Full News →</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
        {filtered.length === 0 && <FadeIn><p className='text-center py-10 text-gray-500'>No news in this category yet.</p></FadeIn>}
      </section>

      {selected && (
        <div className='fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4' onClick={()=>setSelected(null)}>
          <PopIn>
            <div className='bg-white rounded-3xl max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto' onClick={e=>e.stopPropagation()}>
              <div className='relative h-[220px]'><img src={selected.img} className='w-full h-full object-cover' alt={selected.title} /><button onClick={()=>setSelected(null)} className='absolute top-3 right-3 bg-white w-9 h-9 rounded-full font-bold'>✕</button></div>
              <div className='p-6'>
                <span className='bg-purple-100 text-[#7C3AED] text-[11px] px-2 py-1 rounded-full font-bold'>{selected.tag} • {selected.date}</span>
                <p className='font-black text-[20px] mt-3 leading-tight'>{selected.title}</p>
                <p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>{selected.body}</p>
                <div className='mt-5 flex gap-2'><Link href='/apply' className='flex-1 text-center bg-[#FDE047] text-black py-3 rounded-full font-black text-[12px]'>Apply Now →</Link><button onClick={()=>setSelected(null)} className='flex-1 bg-gray-100 py-3 rounded-full font-bold text-[12px]'>Close</button></div>
              </div>
            </div>
          </PopIn>
        </div>
      )}
      <Footer/>
    </main>
  )
}