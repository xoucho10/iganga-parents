'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

function FadeIn({ children, delay=0 }: { children: React.ReactNode, delay?: number }){
  return <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay, duration:0.6}}>{children}</motion.div>
}

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop", label: "Classroom Learning" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop", label: "Our Learners" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop", label: "Campus Life" },
  { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop", label: "Sports & Games" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop", label: "Library & Study" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=900&auto=format&fit=crop", label: "MDD & Culture" },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop", label: "School Compound" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop", label: "Aiming Higher" },
]

// NEWS - NO LINKS TO OTHER PAGES ANYMORE
// Clicking opens the News itself, not Contact / Academics / Gallery
const NEWS = [
  {
    id: "admission-2026",
    tag: "Admission",
    date: "Nov 18, 2026",
    title: "Admission 2026 Open - S1 to S6, Day & Boarding",
    desc: "Interviews Monday to Saturday. Come with PLE / UCE result slip and passport photos. Flexible payment plans available.",
    body: "Admission for 2026 is now open for S1 to S6, Day & Boarding. Interviews are Monday to Saturday, 8am - 4pm. Come with your PLE / UCE result slip and 2 passport photos. We have flexible payment plans - talk to us on WhatsApp or visit the school office in Iganga Town, 1.5km from Town Centre along Jinja Road.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "candidates-revision",
    tag: "Academics",
    date: "Nov 10, 2026",
    title: "S4 & S6 Candidates In Final Revision",
    desc: "Our candidates are in intensive revision, supervised prep and past-paper practice ahead of UNEB. We wish them the best.",
    body: "Our S4 and S6 candidates are in final revision - supervised evening prep, past-paper practice, remedial lessons and guidance from teachers. We wish all our candidates success in UNEB. Parents, please continue to support and pray for them.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "usssa-2026",
    tag: "Sports",
    date: "Oct 28, 2026",
    title: "IPSS Competes At National Level - USSSA 2026",
    desc: "Football, netball and athletics. Our teams continue to represent Iganga at national level.",
    body: "Iganga Parents continues to compete in USSSA competitions - football, netball and athletics. Our teams have represented Iganga at national level, including the USSSA National Boys Football Championship. We are proud of our players, coaches and supporters.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: "boarding-life",
    tag: "School Life",
    date: "Oct 15, 2026",
    title: "Boarding Life: Safe, Disciplined & Caring",
    desc: "Separate dorms, resident matron & warden, balanced diet, supervised prep and daily games. Boarding places available for 2026.",
    body: "Boarding at IPSS is safe, disciplined and caring. Separate boys & girls dorms, caring matrons, balanced meals, school clinic, clean water, supervised evening prep and daily games. Boarding places are available for 2026 - apply early.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=900&auto=format&fit=crop",
    isNew: false,
  },
]

export default function Home(){
  const [selectedNews, setSelectedNews] = useState<typeof NEWS[0] | null>(null)

  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO */}
      <section className='relative w-full h-[540px] md:h-[640px] overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop" alt="Iganga Parents Secondary School" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#7C3AED]/90 via-[#9333EA]/70 to-black/60'></div>
        <div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white'>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
            <div className='inline-flex bg-[#FDE047] text-black px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider'>IGANGA • SINCE 1999 • UNEB CENTRE</div>
            <h1 className='mt-5 text-5xl md:text-7xl font-black uppercase leading-[0.9]'>IGANGA<br/>PARENTS<br/><span className='text-[#FDE047]'>SECONDARY SCHOOL</span></h1>
            <p className='mt-4 text-[#FDE047] font-bold text-[14px] tracking-wide'>“Quality Education Is Our Tradition”</p>
            <p className='mt-3 text-white/90 text-[15px] md:text-lg max-w-xl leading-relaxed'>A private, mixed, day & boarding school in the heart of Iganga Municipality. From only 5 students in 1999 to one of Busoga’s most trusted schools - S1 to S6, O & A Level.</p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Link href='/apply' className='bg-[#FDE047] text-black px-8 py-3.5 rounded-full font-black text-[13px] hover:scale-105 transition'>Apply S1-S6 Now - 2026</Link>
              <a href='#about' className='bg-white text-black px-8 py-3.5 rounded-full font-bold text-[13px]'>Our Story →</a>
            </div>
            <div className='mt-7 flex flex-wrap gap-2 text-[11px] font-bold'>
              <span className='bg-white/15 border border-white/25 px-3 py-1.5 rounded-full'>Boarding & Day</span>
              <span className='bg-white/15 border border-white/25 px-3 py-1.5 rounded-full'>O & A Level</span>
              <span className='bg-white/15 border border-white/25 px-3 py-1.5 rounded-full'>1.5km from Iganga Town Centre</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className='bg-[#FDE047]'>
        <div className='max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[12px] font-bold'>
          <div>🏫 Private • Mixed School</div>
          <div>📍 Iganga Municipality</div>
          <div>🎓 S1 - S6 • UNEB Centre</div>
          <div>⭐ Regional Academic Supermarket</div>
        </div>
      </section>

      {/* 📰 NEWS - FIXED: ALL LINKS GO TO NEWS ONLY */}
      <section id='news' className='max-w-7xl mx-auto px-6 py-14 scroll-mt-20'>
        <FadeIn>
          <div className='flex justify-between items-end gap-4'>
            <div>
              <p className='text-[#9333EA] font-black tracking-widest text-[12px]'>📰 IPSS NEWS & UPDATES</p>
              <h2 className='font-black text-2xl md:text-3xl text-gray-900 mt-2'>Latest News From Iganga Parents</h2>
              <p className='text-[13px] text-gray-500 mt-1'>Admissions, exams, sports, events & school life - stay updated.</p>
            </div>
            <Link href='/news' className='text-[12px] font-bold text-[#9333EA] shrink-0'>All News →</Link>
          </div>
        </FadeIn>

        <div className='mt-6 grid md:grid-cols-4 gap-4'>
          {NEWS.map((n, i) => (
            <FadeIn key={n.id} delay={i * 0.08}>
              <button onClick={()=>setSelectedNews(n)} className='block bg-white border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition h-full text-left w-full'>
                <div className='relative h-[170px]'>
                  <img src={n.img} alt={n.title} className='w-full h-full object-cover' />
                  <span className='absolute top-3 left-3 bg-white text-black text-[10px] px-2.5 py-1 rounded-full font-bold'>{n.tag}</span>
                  {n.isNew && <span className='absolute top-3 right-3 bg-red-600 text-white text-[10px] px-2.5 py-1 rounded-full font-black animate-pulse'>NEW</span>}
                  <span className='absolute bottom-3 left-3 bg-black/70 text-white text-[10px] px-2.5 py-1 rounded-full'>{n.date}</span>
                </div>
                <div className='p-4'>
                  <p className='font-black text-[14px] leading-tight'>{n.title}</p>
                  <p className='text-[12px] text-gray-600 mt-2 leading-relaxed line-clamp-3'>{n.desc}</p>
                  <p className='text-[12px] font-bold text-[#7C3AED] mt-3'>Read Full News →</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        <div className='mt-5 bg-[#7C3AED] text-white rounded-full px-5 py-3 flex gap-3 items-center overflow-hidden'>
          <span className='bg-[#FDE047] text-black text-[10px] px-2.5 py-1 rounded-full font-black shrink-0'>LIVE</span>
          <p className='text-[12px] font-bold truncate'>Admission 2026 Open • S1-S6 Day & Boarding • Interviews Mon-Sat • Visit Us In Iganga Town</p>
        </div>
      </section>

      {/* NEWS MODAL - OPENS NEWS, NOT OTHER PAGE */}
      {selectedNews && (
        <div className='fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4' onClick={()=>setSelectedNews(null)}>
          <div className='bg-white rounded-3xl max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto' onClick={e=>e.stopPropagation()}>
            <div className='relative h-[220px]'>
              <img src={selectedNews.img} className='w-full h-full object-cover' alt={selectedNews.title} />
              <button onClick={()=>setSelectedNews(null)} className='absolute top-3 right-3 bg-white w-9 h-9 rounded-full font-bold'>✕</button>
              <span className='absolute bottom-3 left-3 bg-black/70 text-white text-[11px] px-3 py-1 rounded-full'>{selectedNews.date} • {selectedNews.tag}</span>
            </div>
            <div className='p-6'>
              <p className='font-black text-[20px] leading-tight'>{selectedNews.title}</p>
              <p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>{selectedNews.body}</p>
              <div className='mt-5 flex gap-2'>
                <Link href='/news' className='flex-1 text-center bg-[#7C3AED] text-white py-3 rounded-full font-bold text-[12px]'>All News →</Link>
                <button onClick={()=>setSelectedNews(null)} className='flex-1 bg-gray-100 py-3 rounded-full font-bold text-[12px]'>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT / OUR STORY */}
      <section id='about' className='max-w-7xl mx-auto px-6 py-14'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <FadeIn>
            <p className='text-[#9333EA] font-black tracking-widest text-[12px]'>OUR STORY SINCE 1999</p>
            <h2 className='font-black text-3xl md:text-4xl text-gray-900 mt-2 leading-tight'>Started With 5 Students. Now A Torch Of Education In Busoga.</h2>
            <p className='text-gray-600 text-[14px] leading-relaxed mt-4'>Iganga Parents Secondary School was established in 1999 by celebrated educationists of the Mpaata family, led by Hajji Asuman Mpaata, with a mission to provide quality and affordable education to the community.</p>
            <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>We started with just five students and a handful of committed teachers. Today we have grown into a school synonymous with academic excellence, well-groomed and disciplined students, and alumni who are defending their performance in workplaces across Uganda and beyond.</p>
            <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>Our motto - <b>Quality Education Is Our Tradition</b> - reminds both students and teachers to work tirelessly so that everyone who passes through Iganga Parents becomes a man or woman of valour.</p>
            <div className='grid grid-cols-2 gap-3 mt-6'>
              <div className='bg-purple-50 rounded-2xl p-4'><p className='font-black text-[13px]'>Our Vision</p><p className='text-[12px] text-gray-600 mt-1'>To be a centre of academic excellence and good character in Busoga and Uganda.</p></div>
              <div className='bg-yellow-50 rounded-2xl p-4'><p className='font-black text-[13px]'>Our Mission</p><p className='text-[12px] text-gray-600 mt-1'>To provide quality, affordable education in a safe, caring and disciplined environment.</p></div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className='grid grid-cols-2 gap-3'>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" className='w-full h-[220px] object-cover rounded-2xl' alt="Learning" />
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" className='w-full h-[220px] object-cover rounded-2xl mt-6' alt="Students" />
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop" className='w-full h-[220px] object-cover rounded-2xl' alt="Campus" />
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop" className='w-full h-[220px] object-cover rounded-2xl mt-6' alt="Sports" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className='max-w-7xl mx-auto px-6 pb-14'>
        <FadeIn><h2 className='font-black text-[#7C3AED] text-2xl md:text-3xl'>Why Parents Choose IPSS</h2><p className='text-[13px] text-gray-500 mt-1'>More than a school - a second home for your child.</p></FadeIn>
        <div className='mt-6 grid md:grid-cols-4 gap-4'>
          <FadeIn delay={0.1}><div className='bg-gradient-to-br from-[#A855F7] to-[#7C3AED] text-white rounded-3xl p-5 h-full'><div className='w-11 h-11 bg-[#FDE047] rounded-full flex items-center justify-center text-xl'>📚</div><div className='font-black mt-4 text-[15px]'>Academic Excellence</div><div className='text-[12px] opacity-90 mt-2 leading-relaxed'>Consistent UNEB results, evening prep, remedial lessons and close follow-up from S1 to S6. Many alumni now in top universities & colleges in Uganda and abroad.</div></div></FadeIn>
          <FadeIn delay={0.2}><div className='bg-white border-2 border-purple-100 rounded-3xl p-5 h-full'><div className='w-11 h-11 bg-purple-100 rounded-full flex items-center justify-center text-xl'>🏫</div><div className='font-black mt-4 text-[15px]'>Safe Boarding Life</div><div className='text-[12px] text-gray-500 mt-2 leading-relaxed'>Separate boys & girls dorms, caring matrons, balanced meals, school clinic, clean water and daily games.</div><Link href='/boarding' className='mt-3 inline-block text-[11px] font-bold text-[#9333EA]'>Explore Boarding →</Link></div></FadeIn>
          <FadeIn delay={0.3}><div className='bg-white border-2 border-yellow-100 rounded-3xl p-5 h-full'><div className='w-11 h-11 bg-yellow-100 rounded-full flex items-center justify-center text-xl'>🎭</div><div className='font-black mt-4 text-[15px]'>Talents & Co-Curricular</div><div className='text-[12px] text-gray-500 mt-2 leading-relaxed'>Football, netball, athletics, Music Dance & Drama, debate, writers club and scouts - dozens of accolades over the years.</div><Link href='/gallery' className='mt-3 inline-block text-[11px] font-bold text-yellow-700'>See Activities →</Link></div></FadeIn>
          <FadeIn delay={0.4}><div className='bg-white border-2 border-green-100 rounded-3xl p-5 h-full'><div className='w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-xl'>🙏</div><div className='font-black mt-4 text-[15px]'>Discipline & Values</div><div className='text-[12px] text-gray-500 mt-2 leading-relaxed'>Early morning prep, assembly, smart uniform, respect and God-fearing values. Discipline is our culture.</div><Link href='/about' className='mt-3 inline-block text-[11px] font-bold text-green-700'>Our Tradition →</Link></div></FadeIn>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className='bg-[#FDF4FF] border-y border-purple-100'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn><div className='flex justify-between items-end'><div><h2 className='font-black text-[#7C3AED] text-2xl md:text-3xl'>Life At Iganga Parents</h2><p className='text-[13px] text-gray-500 mt-1'>Class, sports, culture and friendship - this is IPSS.</p></div><Link href='/gallery' className='text-[12px] font-bold text-[#9333EA] shrink-0'>View Full Gallery →</Link></div></FadeIn>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-6'>
            {GALLERY.map((g,i)=>(
              <FadeIn key={i} delay={i*0.05}><div className='relative rounded-2xl overflow-hidden h-[180px] md:h-[200px] group'><img src={g.src} alt={g.label} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' /><div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3'><p className='text-white text-[12px] font-bold'>{g.label}</p></div></div></FadeIn>
            ))}
          </div>
          <p className='text-center text-[11px] text-gray-400 mt-4'>Replace these photos with your real school photos in /public/images when ready - same sizes will fit perfectly.</p>
        </div>
      </section>

      {/* ACADEMICS + FACILITIES PHOTOS */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <FadeIn><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop" className='w-full h-[380px] object-cover rounded-3xl shadow-xl' alt="Academics" /></FadeIn>
          <FadeIn delay={0.2}>
            <h3 className='font-black text-2xl md:text-3xl'>Academics S1 - S6 • O & A Level</h3>
            <p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>We offer the full Uganda curriculum under UNEB - O Level (S1-S4) and A Level (S5-S6) in both Arts and Sciences, supported by a well-stocked library, science laboratories, classroom blocks and sports grounds.</p>
            <div className='mt-4 space-y-2 text-[12px]'>
              <div className='bg-purple-50 p-3 rounded-xl'><b>S1 - S4 (UCE):</b> Mathematics, English, Biology, Chemistry, Physics, Geography, History, CRE/IRE, Agriculture, Commerce, ICT & more</div>
              <div className='bg-yellow-50 p-3 rounded-xl'><b>S5 - S6 (UACE):</b> Sciences - PCM, PCB, BCM • Arts - HEG, HEL, HED, BCA & more</div>
              <div className='bg-green-50 p-3 rounded-xl'><b>Facilities:</b> Science labs, Library, Computer lab, Classroom blocks, Sports grounds for boys & girls</div>
            </div>
            <Link href='/academics' className='mt-5 inline-block bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-[12px] font-bold'>View Subjects & Combinations</Link>
          </FadeIn>
        </div>
      </section>

      {/* SPORTS */}
      <section className='bg-[#111827] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
          <FadeIn><div><p className='text-[#FDE047] font-black text-[12px] tracking-widest'>SPORTS • USSSA 2026</p><h3 className='font-black text-2xl md:text-3xl mt-2'>We Compete At National Level</h3><p className='text-[13px] text-white/80 mt-3 leading-relaxed'>Iganga Parents competes in USSSA competitions - football, netball and athletics. Our teams have represented Iganga at national level, including the USSSA National Boys Football Championship.</p><ul className='text-[13px] mt-4 space-y-2'><li>⚽ Football - Boys & Girls</li><li>🏐 Netball</li><li>🏃 Athletics</li><li>🎭 MDD, Debate & Scouts</li></ul><Link href='/gallery' className='mt-5 inline-block bg-[#FDE047] text-black px-6 py-2.5 rounded-full text-[12px] font-black'>See Sports Gallery</Link></div></FadeIn>
          <FadeIn delay={0.2}><img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop" className='w-full h-[320px] object-cover rounded-3xl' alt="Sports" /></FadeIn>
        </div>
      </section>

      {/* A DAY + BOARDING */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn><h2 className='font-black text-[#7C3AED] text-2xl'>A Day At Iganga Parents</h2><p className='text-[13px] text-gray-500 mt-1'>Structured, balanced and full of life.</p></FadeIn>
        <div className='mt-6 grid md:grid-cols-4 gap-4 text-[12px]'>
          <div className='bg-purple-50 rounded-2xl p-5'><p className='font-black text-[14px]'>🌅 Morning</p><p className='text-gray-600 mt-2 leading-relaxed'>Early prep, assembly, devotion and lessons. Students start the day focused and ready.</p></div>
          <div className='bg-yellow-50 rounded-2xl p-5'><p className='font-black text-[14px]'>📖 Class Time</p><p className='text-gray-600 mt-2 leading-relaxed'>Interactive lessons, practicals, library time and group work with caring teachers.</p></div>
          <div className='bg-green-50 rounded-2xl p-5'><p className='font-black text-[14px]'>⚽ Games & Clubs</p><p className='text-gray-600 mt-2 leading-relaxed'>Football, netball, MDD, debate, scouts and clubs every afternoon.</p></div>
          <div className='bg-blue-50 rounded-2xl p-5'><p className='font-black text-[14px]'>🌙 Evening Prep</p><p className='text-gray-600 mt-2 leading-relaxed'>Supervised evening prep, revision and guidance from teachers and prefects.</p></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='max-w-7xl mx-auto px-6 pb-12'>
        <FadeIn><h3 className='font-black text-[#7C3AED] text-2xl'>Parents & Students Say</h3></FadeIn>
        <div className='mt-4 grid md:grid-cols-3 gap-4'>
          <FadeIn delay={0.1}><div className='border rounded-2xl p-4'><div className='font-bold text-[12px]'>Mrs. Nalubega - Parent, Iganga • ⭐⭐⭐⭐⭐</div><div className='text-[12px] italic mt-3 bg-gray-50 p-3 rounded-xl'>"My daughter joined S1 boarding. She is now confident, disciplined and her English has improved so much!"</div></div></FadeIn>
          <FadeIn delay={0.2}><div className='border rounded-2xl p-4'><div className='font-bold text-[12px]'>Brian - S6 Student • Head Boy</div><div className='text-[12px] italic mt-3 bg-purple-50 p-3 rounded-xl'>"Teachers stay with us during evening prep and guide us. I feel well prepared for UNEB."</div></div></FadeIn>
          <FadeIn delay={0.3}><div className='border rounded-2xl p-4'><div className='font-bold text-[12px]'>Aisha - S4 Student • Netball Captain</div><div className='text-[12px] italic mt-3 bg-green-50 p-3 rounded-xl'>"Boarding is safe, food is good, we have games and MDD. I love IPSS!"</div></div></FadeIn>
        </div>
      </section>

      {/* ADMISSION */}
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
          <FadeIn><div><h3 className='font-black text-3xl'>Admission 2026 - S1 to S6 Open</h3><p className='text-[13px] opacity-80 mt-2 leading-relaxed'>Interviews Monday to Saturday. Come with PLE / UCE result slip and passport photos. Talk to us about flexible payment plans.</p><div className='mt-5 flex gap-3 flex-wrap'><Link href='/apply' className='bg-[#FDE047] text-black px-6 py-3 rounded-full font-black text-[12px]'>Apply via WhatsApp</Link><Link href='/boarding' className='bg-white/10 border border-white/20 px-6 py-3 rounded-full font-bold text-[12px]'>Boarding Info</Link></div></div></FadeIn>
          <FadeIn delay={0.2}><div className='bg-white text-black rounded-3xl p-5 grid grid-cols-2 gap-3 text-[12px]'>
            <div className='bg-yellow-50 p-3 rounded-xl'><div className='font-bold'>S1 - S2</div><div className='text-[11px] text-gray-500 mt-1'>Day & Boarding available</div></div>
            <div className='bg-purple-50 p-3 rounded-xl'><div className='font-bold'>S3 - S4 UCE</div><div className='text-[11px] text-gray-500 mt-1'>UNEB centre</div></div>
            <div className='bg-green-50 p-3 rounded-xl'><div className='font-bold'>S5 - S6 UACE</div><div className='text-[11px] text-gray-500 mt-1'>Sciences & Arts</div></div>
            <div className='bg-blue-50 p-3 rounded-xl'><div className='font-bold'>Location</div><div className='text-[11px] text-gray-500 mt-1'>1.5km from Iganga Town Centre</div></div>
          </div></FadeIn>
        </div>
      </section>

      {/* MAP AT BOTTOM */}
      <section className='bg-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn><h2 className='font-black text-[#7C3AED] text-2xl md:text-3xl'>Find Us In Iganga</h2><p className='text-[13px] text-gray-500 mt-1'>About 1.5km from the centre of Iganga Municipality, Iganga District - along Jinja Road. Easy to reach by boda, taxi or private car.</p></FadeIn>
          <div className='grid md:grid-cols-3 gap-4 mt-6'>
            <div className='bg-purple-50 rounded-2xl p-5'><p className='font-black'>📍 Address</p><p className='text-[13px] text-gray-600 mt-2'>Iganga Parents Secondary School<br/>Iganga Municipality, Iganga District<br/>Jinja Road, Uganda</p><Link href='https://www.google.com/maps/search/?api=1&query=Iganga+Parents+Secondary+School+Iganga+Uganda' target='_blank' className='inline-block mt-3 bg-[#7C3AED] text-white px-5 py-2 rounded-full text-[12px] font-bold'>Open in Google Maps →</Link></div>
            <div className='bg-yellow-50 rounded-2xl p-5'><p className='font-black'>🕐 Visiting Hours</p><p className='text-[13px] text-gray-600 mt-2'>Mon - Sat: 8:00am - 4:00pm<br/>Interviews & Admissions<br/>Visitation days as per school calendar</p></div>
            <div className='bg-green-50 rounded-2xl p-5'><p className='font-black'>📞 Contact</p><p className='text-[13px] text-gray-600 mt-2'>Visit the school office or<br/>use the Contact page to<br/>reach us on WhatsApp & phone.</p><Link href='/contact' className='inline-block mt-3 bg-black text-white px-5 py-2 rounded-full text-[12px] font-bold'>Contact Us</Link></div>
          </div>
          <div className='mt-4 rounded-3xl overflow-hidden border shadow-lg'>
            <iframe title="Iganga Parents Secondary School Map" src="https://www.google.com/maps?q=Iganga%20Parents%20Secondary%20School%2C%20Iganga%2C%20Uganda&output=embed" className='w-full h-[380px] md:h-[450px] border-0' loading="lazy" />
          </div>
          <p className='text-center text-[11px] text-gray-400 mt-3'>This is an illustration map - use Google Maps for exact directions.</p>
        </div>
      </section>

      <Footer/>
    </main>
  )
}