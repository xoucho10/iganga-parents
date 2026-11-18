'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

export default function OLevel(){
  return (
    <main className='bg-white'>
      <Navbar/>
      {/* HERO */}
      <section className='relative w-full h-[380px] md:h-[460px] overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop" className='absolute inset-0 w-full h-full object-cover' alt="O Level" />
        <div className='absolute inset-0 bg-gradient-to-r from-[#7C3AED]/90 via-[#9333EA]/70 to-black/60'></div>
        <div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white'>
          <FadeIn>
            <Float><div className='inline-flex bg-[#FDE047] text-black px-4 py-1.5 rounded-full text-[11px] font-black w-fit'>O LEVEL • S1 - S4 • UCE</div></Float>
            <h1 className='mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.95]'>O Level<br/><span className='text-[#FDE047]'>S1 - S4</span></h1>
            <p className='mt-3 max-w-xl text-white/90'>Strong foundation. Competence-based learning, practicals, projects and discipline - preparing you for UCE and for A Level.</p>
            <div className='mt-6 flex gap-3 flex-wrap'>
              <PopIn><Link href='/apply' className='inline-block bg-[#FDE047] text-black px-7 py-3 rounded-full font-black text-[12px]'>Apply for S1-S4 →</Link></PopIn>
              <PopIn delay={0.1}><Link href='/a-level' className='inline-block bg-white text-black px-7 py-3 rounded-full font-bold text-[12px]'>Next: A Level →</Link></PopIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>O Level Curriculum</h2>
          <p className='text-[13px] text-gray-500 mt-1'>New Lower Secondary Curriculum (UNEB / UCE) - learning by doing.</p>
        </FadeIn>
        <div className='grid md:grid-cols-2 gap-6 mt-6'>
          <FadeIn delay={0.1}>
            <div className='bg-white border rounded-3xl p-6 h-full'>
              <p className='font-black text-[16px]'>✅ Core Subjects - All Learners</p>
              <Stagger className='mt-4 space-y-2 text-[13px]'>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>English Language</b> - Reading, writing, speaking & literature</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>Mathematics</b> - Numbers, algebra, geometry & statistics</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>Biology</b> - Life, plants, animals, human body + practicals</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>Chemistry</b> - Matter, reactions + lab work</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>Physics</b> - Forces, electricity, light, energy + practicals</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>Geography</b> - Physical, human & map work</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>History & Political Education</b> - Uganda, East Africa & world</div></StaggerItem>
                <StaggerItem><div className='bg-purple-50 p-3 rounded-xl'><b>CRE / IRE</b> - Faith, morals & values (by learner’s faith)</div></StaggerItem>
              </Stagger>
            </div>
          </FadeIn>
          <div className='space-y-4'>
            <FadeIn delay={0.2}>
              <div className='bg-white border rounded-3xl p-6'>
                <p className='font-black text-[16px]'>🎯 Electives & Practical Subjects</p>
                <Stagger className='grid grid-cols-2 gap-2 mt-3 text-[12px] font-bold'>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Agriculture</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Commerce / Entrepreneurship</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>ICT / Computer Studies</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Art & Design</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Literature in English</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Kiswahili</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Physical Education</span></StaggerItem>
                  <StaggerItem><span className='block bg-yellow-50 p-2.5 rounded-lg'>Local Language</span></StaggerItem>
                </Stagger>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className='bg-[#111827] text-white rounded-3xl p-6'>
                <p className='font-black'>How O Level Is Assessed</p>
                <ul className='text-[13px] text-white/80 mt-2 space-y-1'><li>• Continuous assessment - class work, projects & practicals</li><li>• End-of-term exams & holiday work</li><li>• UCE (UNEB) at end of S4</li><li>• Guidance on A Level combination after S4</li></ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className='bg-green-50 border border-green-100 rounded-3xl p-6'>
                <p className='font-black'>Joining S1? What You Need</p>
                <p className='text-[13px] text-gray-600 mt-1'>PLE result slip, passport photos, interview. Placement based on PLE + interview.</p>
                <PopIn><Link href='/apply' className='mt-3 inline-block bg-[#7C3AED] text-white px-5 py-2 rounded-full text-[12px] font-bold'>Apply for S1 →</Link></PopIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* A DAY IN O LEVEL */}
      <section className='bg-gray-50 border-y'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn><h2 className='font-black text-2xl text-[#7C3AED]'>Life In O Level</h2></FadeIn>
          <Stagger className='grid md:grid-cols-4 gap-4 mt-6 text-[12px]'>
            <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-black text-[14px]'>🌅 Morning</p><p className='text-gray-600 mt-2'>Early prep, assembly, devotion, lessons.</p></div></StaggerItem>
            <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-black text-[14px]'>🔬 Practicals</p><p className='text-gray-600 mt-2'>Science labs, ICT, projects & group work.</p></div></StaggerItem>
            <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-black text-[14px]'>⚽ Games & Clubs</p><p className='text-gray-600 mt-2'>Football, netball, MDD, debate, scouts.</p></div></StaggerItem>
            <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-black text-[14px]'>🌙 Evening Prep</p><p className='text-gray-600 mt-2'>Supervised revision with teachers.</p></div></StaggerItem>
          </Stagger>
          <FadeIn><div className='text-center mt-8'><Link href='/a-level' className='inline-block bg-[#7C3AED] text-white px-8 py-3 rounded-full font-bold text-[13px]'>Continue to A Level →</Link></div></FadeIn>
        </div>
      </section>
      <Footer/>
    </main>
  )
}