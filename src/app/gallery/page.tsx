'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

type Item = { cat: string, title: string, year: string, img: string, desc: string }

const items: Item[] = [
  // ACADEMICS
  { cat: "Academics", title: "S6 Class - Lab Practical", year: "2024", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", desc: "Science practicals - Biology, Chemistry & Physics" },
  { cat: "Academics", title: "Library & Revision", year: "2024", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop", desc: "Quiet study, textbooks, past papers & research" },
  { cat: "Academics", title: "Classroom Learning", year: "2024", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", desc: "S1-S6 lessons - O Level & A Level" },
  { cat: "Academics", title: "ICT & Computer Studies", year: "2024", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", desc: "Computer learning for modern life & work" },
  // MDD
  { cat: "MDD", title: "Music, Dance & Drama", year: "2024", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop", desc: "MDD - culture, confidence & talent" },
  { cat: "MDD", title: "Traditional Dance", year: "2024", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop", desc: "Traditional dance & cultural performances" },
  { cat: "MDD", title: "School Choir & Performance", year: "2023", img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop", desc: "Choir & stage performance at school events" },
  // SPORTS
  { cat: "Sports", title: "Football - Boys Team", year: "2026", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop", desc: "USSSA Nationals 2026 - Lira. Our boys represented Iganga." },
  { cat: "Sports", title: "Football Training", year: "2024", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop", desc: "Daily games & training on the school pitch" },
  { cat: "Sports", title: "Netball - Girls Team", year: "2024", img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop", desc: "Netball - teamwork, fitness & discipline" },
  { cat: "Sports", title: "Athletics", year: "2024", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop", desc: "Sprints, relays & athletics competitions" },
  // BOARDING
  { cat: "Boarding", title: "Boarding - Morning Prep", year: "2024", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop", desc: "Early morning prep - focused & supervised" },
  { cat: "Boarding", title: "Dining Hall - Lunch", year: "2024", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", desc: "Balanced diet - breakfast, lunch & supper" },
  { cat: "Boarding", title: "Dorm Life", year: "2024", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop", desc: "Separate dorms for boys & girls, resident matron / warden" },
  // EVENTS
  { cat: "Events", title: "Speech Day & Celebrations", year: "2023", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", desc: "Speech Day, 25 Years celebrations & prize giving" },
  { cat: "Events", title: "Graduation & Alumni", year: "2024", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", desc: "S6 leavers & alumni homecoming" },
  // CAMPUS
  { cat: "Campus", title: "School Campus - Iganga", year: "2024", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", desc: "Our campus - about 1.5km from Iganga Town Centre" },
  { cat: "Campus", title: "Science Lab", year: "2024", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", desc: "Science laboratories - Biology, Chemistry & Physics" },
  { cat: "Campus", title: "Sports Grounds", year: "2024", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop", desc: "Football pitch & sports grounds for boys & girls" },
]

const cats = ["All","Academics","MDD","Sports","Boarding","Events","Campus"]

export default function Gallery(){
  const [cat, setCat] = useState("All")
  const [selected, setSelected] = useState<Item | null>(null)
  const filtered = cat==="All" ? items : items.filter(i=>i.cat===cat)

  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO */}
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <Float><div className='inline-flex bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest w-fit'>LIFE AT IPSS • SINCE 1999</div></Float>
            <h1 className='mt-3 text-4xl md:text-5xl font-black uppercase leading-[0.95]'>Gallery</h1>
            <p className='mt-2 text-white/80 text-[13px] max-w-2xl leading-relaxed'>Iganga Parents SS - Life at IPSS. Academics, MDD, Sports, Boarding, Events & Campus. Click any photo to view it bigger.</p>
          </FadeIn>
          <Stagger className='mt-4 flex gap-2 flex-wrap'>
            {cats.map(c=>(
              <StaggerItem key={c}><button onClick={()=>setCat(c)} className={cat===c ? "bg-[#FDE047] text-black px-4 py-2 rounded-full text-[11px] font-bold" : "bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full text-[11px] font-bold hover:bg-white/25"}>{c} {c!=="All" && <span className='opacity-70'>({items.filter(i=>i.cat===c).length})</span>}</button></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GRID - RE-ANIMATES ON FILTER CHANGE */}
      <section className='max-w-7xl mx-auto px-6 py-10'>
        <FadeIn><div className='flex justify-between items-center'><h3 className='font-black text-[#7C3AED] text-[16px]'>{filtered.length} Photos - {cat}</h3><p className='text-[11px] text-gray-400'>Tap a photo to enlarge</p></div></FadeIn>
        <Stagger key={cat} className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filtered.map((it,i)=>(
            <StaggerItem key={i}>
              <button onClick={()=>setSelected(it)} className='bg-white border rounded-2xl overflow-hidden text-left hover:shadow-xl hover:-translate-y-1 transition group w-full'>
                <div className='h-44 relative overflow-hidden'>
                  <img src={it.img} alt={it.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                  <div className='absolute top-2 left-2 bg-[#7C3AED] text-white text-[9px] px-2 py-1 rounded-full font-bold'>{it.cat}</div>
                  <div className='absolute bottom-2 right-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded-full'>{it.year}</div>
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center'><span className='opacity-0 group-hover:opacity-100 bg-white text-black px-3 py-1.5 rounded-full text-[11px] font-bold'>View →</span></div>
                </div>
                <div className='p-3'><p className='font-bold text-[12px] leading-tight'>{it.title}</p><p className='text-[10px] text-gray-500 mt-1'>{it.desc}</p><p className='text-[10px] text-gray-400 mt-1'>IPSS • Iganga</p></div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* LIGHTBOX */}
      {selected && (
        <div className='fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4' onClick={()=>setSelected(null)}>
          <PopIn>
            <div className='bg-white rounded-3xl overflow-hidden max-w-3xl w-full' onClick={e=>e.stopPropagation()}>
              <img src={selected.img} alt={selected.title} className='w-full h-[300px] md:h-[420px] object-cover' />
              <div className='p-5'>
                <div className='flex justify-between items-start'><div><p className='text-[11px] font-bold text-[#7C3AED]'>{selected.cat} • {selected.year}</p><p className='font-black text-[18px] mt-1'>{selected.title}</p><p className='text-[13px] text-gray-600 mt-1'>{selected.desc}</p></div><button onClick={()=>setSelected(null)} className='bg-gray-100 w-9 h-9 rounded-full font-bold shrink-0'>✕</button></div>
                <div className='mt-4 flex gap-2'><Link href='/apply' className='bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-[12px] font-bold'>Join IPSS →</Link><button onClick={()=>setSelected(null)} className='bg-gray-100 px-5 py-2.5 rounded-full text-[12px] font-bold'>Close</button></div>
              </div>
            </div>
          </PopIn>
        </div>
      )}

      {/* VIDEO */}
      <section className='bg-gray-50 border-y'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn><h2 className='font-black text-2xl text-[#7C3AED]'>Video - Life At IPSS</h2><p className='text-[13px] text-gray-500 mt-1'>Replace this with your real school video (YouTube link) when you have it.</p></FadeIn>
          <Stagger className='mt-6 grid md:grid-cols-2 gap-4'>
            <StaggerItem><div className='bg-black rounded-3xl aspect-video flex flex-col items-center justify-center text-white p-6 text-center h-full'>
              <p className='text-4xl'>▶</p><p className='font-bold mt-2'>IPSS School Tour</p><p className='text-[12px] text-white/60 mt-1'>Campus, classrooms, dorms, sports - coming soon</p>
              <Link href='/contact' className='mt-4 inline-block bg-[#FDE047] text-black px-5 py-2 rounded-full text-[11px] font-bold'>Book A Visit Instead →</Link>
            </div></StaggerItem>
            <StaggerItem><div className='bg-black rounded-3xl aspect-video flex flex-col items-center justify-center text-white p-6 text-center h-full'>
              <p className='text-4xl'>🎭</p><p className='font-bold mt-2'>MDD & Sports Highlights</p><p className='text-[12px] text-white/60 mt-1'>Football, netball, MDD - highlights coming soon</p>
              <Link href='/contact' className='mt-4 inline-block bg-white text-black px-5 py-2 rounded-full text-[11px] font-bold'>Send Us Your Video</Link>
            </div></StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* SEND PHOTOS */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <div className='bg-[#7C3AED] text-white rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center'>
            <div><h3 className='font-black text-2xl'>Are You An IPSS Student, Parent Or Alumnus?</h3><p className='text-[13px] text-white/80 mt-2 leading-relaxed'>Send us your real photos - football team, MDD, Speech Day, S6 leavers, boarding life. We will add them here with your name & year.</p></div>
            <div className='flex flex-wrap gap-3 md:justify-end'><Link href='/contact' className='bg-[#FDE047] text-black px-6 py-3 rounded-full font-black text-[12px]'>Send Photos →</Link><Link href='/alumni' className='bg-white/15 border border-white/20 px-6 py-3 rounded-full font-bold text-[12px]'>Alumni Page</Link></div>
          </div>
        </FadeIn>
        <FadeIn><div className='text-center mt-8'><Link href='/' className='inline-block bg-gray-100 px-8 py-3.5 rounded-full font-bold text-[13px]'>Back to Home</Link></div></FadeIn>
      </section>

      <Footer/>
    </main>
  )
}