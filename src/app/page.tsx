import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home(){
  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO - NO LOGO HERE - LOGO IS IN HEADER/FOOTER ONLY */}
      <section className='relative bg-[#1A0A2E] text-white overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#8E24AA] via-[#1A0A2E] to-black'></div>
        <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFEB3B]/10 rounded-full blur-[100px]'></div>
        <div className='relative max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <div className='inline-flex bg-[#FFEB3B] text-black px-3 py-1 rounded-full text-[10px] font-black'>EST. 1995 - UNEB CENTRE - IGANGA</div>
            <h1 className='mt-4 text-5xl md:text-6xl font-black uppercase leading-[0.85]'>IGANGA<br/>PARENTS<br/><span className='text-[#FFEB3B]'>SS</span></h1>
            <div className='mt-4 flex gap-2 flex-wrap'>
              <div className='bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold'>🐓 Cock - Discipline</div>
              <div className='bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold'>🖊️ Pen - Talent</div>
              <div className='bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold'>📚 Book - Academics</div>
            </div>
            <p className='mt-4 text-white/70 text-[13px] max-w-md leading-relaxed'>Quality Education Is Our Tradition. Top O & A Level in Iganga District. Boarding & Day S1-S6. UNEB Centre. MDD Champions, Science Labs, Sports.</p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link href='/contact' className='bg-[#FFEB3B] text-black px-7 py-3 rounded-full font-black text-[12px]'>Apply S1-S6 Now - 2026</Link>
              <a href='#tour' className='bg-white text-black px-7 py-3 rounded-full font-bold text-[12px]'>▶ Watch Tour</a>
            </div>
            <div className='mt-6 grid grid-cols-4 gap-3'>
              <div className='bg-white/5 border border-white/10 rounded-xl p-3 text-center'><div className='font-black text-[#FFEB3B] text-xl'>800+</div><div className='text-[9px] opacity-70'>Students</div></div>
              <div className='bg-white/5 border border-white/10 rounded-xl p-3 text-center'><div className='font-black text-[#FFEB3B] text-xl'>32</div><div className='text-[9px] opacity-70'>Teachers</div></div>
              <div className='bg-white/5 border border-white/10 rounded-xl p-3 text-center'><div className='font-black text-[#FFEB3B] text-xl'>95%</div><div className='text-[9px] opacity-70'>UNEB Pass</div></div>
              <div className='bg-white/5 border border-white/10 rounded-xl p-3 text-center'><div className='font-black text-[#FFEB3B] text-xl'>31</div><div className='text-[9px] opacity-70'>Years</div></div>
            </div>
          </div>
          <div id='tour' className='bg-black rounded-3xl overflow-hidden border-2 border-[#FFEB3B]/20 shadow-2xl'>
            <div className='aspect-video bg-gradient-to-br from-[#8E24AA] to-black flex items-center justify-center relative'>
              <div className='w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center text-black text-2xl animate-pulse'>▶</div>
              <div className='absolute bottom-3 left-3 right-3 bg-black/70 px-3 py-2 rounded-full text-[10px] flex justify-between'><span>School Tour 2026</span><span className='text-[#FFEB3B]'>YouTube</span></div>
            </div>
            <div className='p-3 bg-[#1A0A2E] text-[10px] text-white/60'>Replace with YouTube iframe when ready</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className='max-w-7xl mx-auto px-6 py-14'>
        <h2 className='font-black text-[#4A148C] text-2xl md:text-3xl'>Why Parents Choose IPSS</h2>
        <p className='text-[12px] text-gray-500 mt-1'>More than staff - full experience</p>
        <div className='mt-6 grid md:grid-cols-4 gap-4'>
          <div className='bg-gradient-to-br from-[#8E24AA] to-[#4A148C] text-white rounded-3xl p-5'><div className='w-10 h-10 bg-[#FFEB3B] rounded-full flex items-center justify-center text-black'>📚</div><div className='font-black mt-4 text-[14px]'>UNEB Excellence</div><div className='text-[11px] opacity-80 mt-2'>Top in Iganga 2023/24. S4 Div1 67%, S6 2 Principals 89%. Evening prep with teachers till 10pm.</div></div>
          <div className='bg-white border-2 border-purple-100 rounded-3xl p-5'><div className='w-10 h-10 bg-[#F3E5F5] rounded-full flex items-center justify-center'>🏫</div><div className='font-black mt-4 text-[14px]'>Boarding Life</div><div className='text-[11px] text-gray-500 mt-2'>Boys & Girls dorms, matron 24/7, 5am prep, balanced diet, clinic, games 4pm daily.</div><Link href='/boarding' className='mt-3 inline-block text-[10px] font-bold text-[#8E24AA]'>Explore Boarding →</Link></div>
          <div className='bg-white border-2 border-yellow-100 rounded-3xl p-5'><div className='w-10 h-10 bg-[#FFFBEB] rounded-full flex items-center justify-center'>🎭</div><div className='font-black mt-4 text-[14px]'>MDD & Talent - Pen</div><div className='text-[11px] text-gray-500 mt-2'>Music Dance Drama District Champions, debate, writers club, scouts. Pen writes future.</div><Link href='/gallery' className='mt-3 inline-block text-[10px] font-bold text-yellow-700'>See MDD Videos →</Link></div>
          <div className='bg-white border-2 border-green-100 rounded-3xl p-5'><div className='w-10 h-10 bg-green-50 rounded-full flex items-center justify-center'>⚽</div><div className='font-black mt-4 text-[14px]'>Discipline - Cock</div><div className='text-[11px] text-gray-500 mt-2'>Cock wakes early - 5am morning prep, assembly Mon, uniform, God fearing. Quality tradition.</div><Link href='/about' className='mt-3 inline-block text-[10px] font-bold text-green-700'>Our Tradition →</Link></div>
        </div>
      </section>

      {/* ACADEMICS PREVIEW */}
      <section className='bg-[#FFFBEB] border-y border-yellow-100'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 items-center'>
          <div className='md:col-span-1'><h3 className='font-black text-xl'>Academics S1-S6</h3><p className='text-[12px] text-gray-600 mt-2 leading-relaxed'>O Level 8-10 subjects, A Level Arts & Sciences. 3 Science labs, Library, Computer lab 30 PCs, UNEB Centre.</p><div className='mt-4 grid grid-cols-2 gap-2 text-[10px]'><div className='bg-white p-2 rounded-xl border'>S1-S4: Math, Eng, Bio, Chem, Phy, Hist, Geo, CRE</div><div className='bg-white p-2 rounded-xl border'>S5-S6: PCM, PCB, HEG, HED, BCM, MEG</div></div><Link href='/academics' className='mt-4 inline-block bg-[#1A0A2E] text-white px-5 py-2 rounded-full text-[11px] font-bold'>View Subjects & Results</Link></div>
          <div className='md:col-span-2 grid grid-cols-3 gap-3'>
            <div className='bg-white rounded-2xl p-4 border text-center'><div className='text-[20px]'>🔬</div><div className='font-bold text-[12px] mt-2'>Science Labs</div><div className='text-[10px] text-gray-500 mt-1'>Physics, Chemistry, Biology - 40 microscopes, practicals daily</div></div>
            <div className='bg-white rounded-2xl p-4 border text-center'><div className='text-[20px]'>💻</div><div className='font-bold text-[12px] mt-2'>Computer Lab</div><div className='text-[10px] text-gray-500 mt-1'>30 PCs, ICT lessons, internet, UCE & UACE ICT</div></div>
            <div className='bg-white rounded-2xl p-4 border text-center'><div className='text-[20px]'>📖</div><div className='font-bold text-[12px] mt-2'>Library</div><div className='text-[10px] text-gray-500 mt-1'>2000+ books, prep space, past papers, research</div></div>
          </div>
        </div>
      </section>

      {/* TEACHERS - RESTORED */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='flex justify-between items-end'><h2 className='font-black text-[#4A148C] text-xl'>Our Teachers - Meet Some</h2><Link href='/academics' className='text-[11px] font-bold text-[#8E24AA]'>View All 32 →</Link></div>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='border rounded-2xl p-4 text-center hover:shadow-md transition'><img src='https://i.pravatar.cc/100?img=11' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Ssemakula</div><div className='text-[11px] text-gray-500'>Headteacher - MSc</div><div className='text-[10px] mt-1 bg-purple-50 rounded-full inline-block px-2 py-1'>12 yrs at IPSS</div></div>
          <div className='border rounded-2xl p-4 text-center hover:shadow-md transition'><img src='https://i.pravatar.cc/100?img=32' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Ms. Namatovu</div><div className='text-[11px] text-gray-500'>Deputy - HOD Arts</div><div className='text-[10px] mt-1 bg-purple-50 rounded-full inline-block px-2 py-1'>English, Lit</div></div>
          <div className='border rounded-2xl p-4 text-center hover:shadow-md transition'><img src='https://i.pravatar.cc/100?img=15' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Isabirye</div><div className='text-[11px] text-gray-500'>HOD Sciences</div><div className='text-[10px] mt-1 bg-green-50 rounded-full inline-block px-2 py-1'>Physics, Chem</div></div>
          <div className='border rounded-2xl p-4 text-center bg-[#FDF2FF]'><div className='text-[11px] font-bold text-[#8E24AA]'>+ 28 More Teachers</div><div className='text-[11px] mt-1'>See all teachers on Academics page with photos & subjects</div><Link href='/academics' className='mt-3 inline-block bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold'>View All Staff</Link></div>
        </div>
      </section>

      {/* BOD - RESTORED */}
      <section className='bg-[#FFFBEB] border-y border-yellow-100'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 items-center'>
          <div className='md:col-span-1'><h3 className='font-black text-xl'>Board of Directors</h3><p className='text-[12px] text-gray-600 mt-2'>IPSS is governed by experienced parents and educationists. Quality is our tradition since 1995.</p><Link href='/about' className='mt-3 inline-block bg-black text-white px-4 py-2 rounded-full text-[11px] font-bold'>Meet Full BOD</Link></div>
          <div className='md:col-span-2 grid grid-cols-3 gap-3'>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=20' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Dr. Mugoya</div><div className='text-[9px] text-gray-500'>Chairperson BOD</div></div>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=18' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Mrs. Babirye</div><div className='text-[9px] text-gray-500'>Vice Chair</div></div>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=22' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Mr. Baliddawa</div><div className='text-[9px] text-gray-500'>Founder</div></div>
          </div>
        </div>
      </section>

      {/* PARENTS & CHILDREN - RESTORED */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='flex justify-between items-end'><h3 className='font-black text-[#4A148C] text-xl'>Parents & Children Say</h3><Link href='/gallery' className='text-[11px] font-bold text-[#8E24AA]'>More Testimonials →</Link></div>
        <div className='mt-4 grid md:grid-cols-3 gap-4'>
          <div className='border rounded-2xl p-4 hover:shadow-md transition'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=33' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Mrs. Nalubega - Parent S2</div><div className='text-[10px] text-gray-500'>Iganga • ⭐⭐⭐⭐⭐</div></div></div><div className='text-[11px] italic mt-3 bg-gray-50 p-3 rounded-xl leading-relaxed'>"My daughter joined S1 boarding. She wakes at 5am for prep, her English improved. Cock really wakes early!"</div></div>
          <div className='border rounded-2xl p-4 hover:shadow-md transition'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=8' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Brian - S6 PCM - Head Boy</div><div className='text-[10px] text-gray-500'>Class of 2024 - 17 pts</div></div></div><div className='text-[11px] italic mt-3 bg-[#FDF2FF] p-3 rounded-xl leading-relaxed'>"Pen and book is our tradition. Teachers stay with us evening prep. I scored 17 points, now Makerere."</div></div>
          <div className='border rounded-2xl p-4 hover:shadow-md transition'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=5' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Aisha - S4 - Netball Captain</div><div className='text-[10px] text-gray-500'>Boarding</div></div></div><div className='text-[11px] italic mt-3 bg-green-50 p-3 rounded-xl leading-relaxed'>"Boarding is safe, food is good, we have games at 4pm and MDD. I love IPSS!"</div></div>
        </div>
      </section>

      {/* FINAL CTA - ADMISSION */}
      <section className='bg-[#1A0A2E] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
          <div><h3 className='font-black text-2xl'>Admission 2026 - S1-S6 Open</h3><p className='text-[12px] opacity-70 mt-2'>Interview Mon-Sat 8am-4pm. Requirements: PLE result slip, 2 passport photos. Boarding & Day.</p><div className='mt-4 flex gap-3'><Link href='/contact' className='bg-[#FFEB3B] text-black px-6 py-3 rounded-full font-black text-[12px]'>Apply via WhatsApp</Link><Link href='/boarding' className='bg-white/10 border border-white/20 px-6 py-3 rounded-full font-bold text-[12px]'>Boarding Info</Link></div></div>
          <div className='bg-white text-black rounded-3xl p-5 grid grid-cols-2 gap-3 text-[11px]'>
            <div className='bg-[#FFFBEB] p-3 rounded-xl'><div className='font-bold'>S1-S2</div><div className='text-[10px] text-gray-500 mt-1'>Day & Boarding available, 5am prep</div></div>
            <div className='bg-purple-50 p-3 rounded-xl'><div className='font-bold'>S3-S4 UCE</div><div className='text-[10px] text-gray-500 mt-1'>UNEB centre, labs, library</div></div>
            <div className='bg-green-50 p-3 rounded-xl'><div className='font-bold'>S5-S6 UACE</div><div className='text-[10px] text-gray-500 mt-1'>PCM, PCB, HEG, BCM, Arts</div></div>
            <div className='bg-blue-50 p-3 rounded-xl'><div className='font-bold'>Location</div><div className='text-[10px] text-gray-500 mt-1'>Iganga Town, Jinja Road, P.O Box 123</div></div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
