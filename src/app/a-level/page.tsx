'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, SlideIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

export default function ALevel(){
  return (
    <main className='bg-white'>
      <Navbar/>
      {/* HERO */}
      <section className='relative w-full h-[380px] md:h-[460px] overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" className='absolute inset-0 w-full h-full object-cover' alt="A Level" />
        <div className='absolute inset-0 bg-gradient-to-r from-[#7C3AED]/90 via-[#9333EA]/70 to-black/60'></div>
        <div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white'>
          <FadeIn>
            <Float><div className='inline-flex bg-[#FDE047] text-black px-4 py-1.5 rounded-full text-[11px] font-black w-fit'>A LEVEL • S5 - S6 • UACE</div></Float>
            <h1 className='mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.95]'>A Level<br/><span className='text-[#FDE047]'>S5 - S6</span></h1>
            <p className='mt-3 max-w-xl text-white/90'>Specialise for university, college & career. Sciences or Arts - with focused teaching, past papers and career guidance.</p>
            <div className='mt-6 flex gap-3 flex-wrap'>
              <PopIn><Link href='/apply' className='inline-block bg-[#FDE047] text-black px-7 py-3 rounded-full font-black text-[12px]'>Apply for S5-S6 →</Link></PopIn>
              <PopIn delay={0.1}><Link href='/o-level' className='inline-block bg-white text-black px-7 py-3 rounded-full font-bold text-[12px]'>← Back: O Level</Link></PopIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMBINATIONS */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>A Level Combinations</h2>
          <p className='text-[13px] text-gray-500 mt-1'>3 principal subjects + General Paper + Subsidiary ICT. We help you choose based on UCE results & career dream.</p>
        </FadeIn>
        <div className='grid md:grid-cols-2 gap-6 mt-6'>
          <FadeIn delay={0.1}>
            <div className='bg-white border-2 border-purple-100 rounded-3xl p-6 h-full'>
              <p className='font-black text-[17px]'>🔬 Sciences</p>
              <Stagger className='mt-4 space-y-3 text-[13px]'>
                <StaggerItem><div className='bg-purple-50 p-4 rounded-2xl'><p className='font-black'>PCM - Physics, Chemistry, Mathematics</p><p className='text-gray-600 mt-1'>Engineering, Architecture, Computer Science, Physics, Survey, IT</p></div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-4 rounded-2xl'><p className='font-black'>PCB - Physics, Chemistry, Biology</p><p className='text-gray-600 mt-1'>Medicine, Nursing, Pharmacy, Dentistry, Lab Science, Veterinary</p></div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-4 rounded-2xl'><p className='font-black'>BCM - Biology, Chemistry, Mathematics</p><p className='text-gray-600 mt-1'>Agriculture, Food Science, Biotech, Environment, Nursing</p></div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-4 rounded-2xl'><p className='font-black'>PEM / MEG - Physics / Maths, Economics, Maths / Geography</p><p className='text-gray-600 mt-1'>Economics, Business, Statistics, Actuarial, Finance, IT</p></div></StaggerItem>
              </Stagger>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className='bg-white border-2 border-yellow-100 rounded-3xl p-6 h-full'>
              <p className='font-black text-[17px]'>📖 Arts</p>
              <Stagger className='mt-4 space-y-3 text-[13px]'>
                <StaggerItem><div className='bg-yellow-50 p-4 rounded-2xl'><p className='font-black'>HEG - History, Economics, Geography</p><p className='text-gray-600 mt-1'>Law, Education, Public Admin, Development, Journalism</p></div></StaggerItem>
                <StaggerItem><div className='bg-yellow-50 p-4 rounded-2xl'><p className='font-black'>HEL - History, Economics, Literature</p><p className='text-gray-600 mt-1'>Law, Literature, Media, Communication, Education</p></div></StaggerItem>
                <StaggerItem><div className='bg-yellow-50 p-4 rounded-2xl'><p className='font-black'>HED - History, Economics, Divinity / CRE</p><p className='text-gray-600 mt-1'>Theology, Education, Social Work, Counselling</p></div></StaggerItem>
                <StaggerItem><div className='bg-yellow-50 p-4 rounded-2xl'><p className='font-black'>BCA / BEC - Business, Computer, Arts / Business, Economics, Computer</p><p className='text-gray-600 mt-1'>Business Admin, Accounting, Marketing, ICT, Entrepreneurship</p></div></StaggerItem>
              </Stagger>
            </div>
          </FadeIn>
        </div>
        <Stagger className='bg-[#7C3AED] text-white rounded-3xl p-6 mt-6 grid md:grid-cols-3 gap-4'>
          <StaggerItem><div><p className='font-black'>How We Help You Choose</p><p className='text-[13px] text-white/80 mt-1'>UCE results + dream career + strengths = right combination.</p></div></StaggerItem>
          <StaggerItem><div><p className='font-black'>UACE Preparation</p><p className='text-[13px] text-white/80 mt-1'>Past papers, mock UNEB, holiday revision, one-on-one guidance for S6.</p></div></StaggerItem>
          <StaggerItem><div><p className='font-black'>After S6</p><p className='text-[13px] text-white/80 mt-1'>University & college application guidance, courses & career talks.</p></div></StaggerItem>
        </Stagger>
      </section>

      {/* JOINING S5 */}
      <section className='bg-gray-50 border-y'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6 items-center'>
          <SlideIn from='left'><div><h2 className='font-black text-2xl'>Joining S5? What You Need</h2><p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>UCE result slip, passport photos, interview. Bring your UCE results - we will guide you to the best combination for your career.</p><ul className='text-[13px] text-gray-600 mt-3 space-y-1'><li>• UCE results (at least passes in your chosen subjects)</li><li>• Passport photos</li><li>• Interview with Director of Studies</li></ul><PopIn><Link href='/apply' className='mt-5 inline-block bg-[#7C3AED] text-white px-7 py-3 rounded-full font-bold text-[12px]'>Apply for S5 Now →</Link></PopIn></div></SlideIn>
          <SlideIn from='right'><img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop" className='w-full h-[280px] object-cover rounded-3xl' alt="Graduates" /></SlideIn>
        </div>
      </section>
      <Footer/>
    </main>
  )
}