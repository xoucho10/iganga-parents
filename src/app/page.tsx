import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <main className='bg-white'>
      <Navbar/>

      <section className='relative bg-[#1A0A2E] text-white overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#8E24AA]/80 to-black/60'></div>
        <div className='relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <div className='inline-flex bg-[#FFEB3B] text-black px-3 py-1 rounded-full text-[10px] font-black'>QUALITY EDUCATION IS OUR TRADITION - COCK • PEN • BOOK</div>
            <h1 className='mt-4 text-5xl md:text-6xl font-black uppercase leading-[0.85]'>IGANGA<br/>PARENTS<br/><span className='text-[#FFEB3B]'>SS</span></h1>
            <p className='mt-4 text-white/80 text-[13px] max-w-md'>Top O & A Level in Iganga District. UNEB Centre. Boarding & Day S1-S6. MDD Champions, Sports, Science Lab. Admission 2026 ongoing.</p>
            <div className='mt-6 flex gap-3'>
              <a href='/contact' className='bg-[#FFEB3B] text-black px-6 py-3 rounded-full font-black text-[12px]'>Apply S1-S6 Now</a>
              <a href='#tour' className='bg-white/15 border border-white/20 px-6 py-3 rounded-full font-bold text-[12px]'>▶ Watch Tour</a>
            </div>
          </div>
          <div id='tour' className='bg-black rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl'>
            <div className='aspect-video bg-gradient-to-br from-purple-900 to-yellow-900 flex items-center justify-center relative'>
              <div className='absolute inset-0 flex items-center justify-center'><div className='w-16 h-16 bg-[#FFEB3B] rounded-full flex items-center justify-center text-black text-2xl'>▶</div></div>
              <div className='absolute bottom-3 left-3 bg-black/70 px-3 py-1 rounded-full text-[10px]'>School Tour Video - 2:30 min - Replace with YouTube / MP4</div>
            </div>
            <div className='p-3 bg-[#1A0A2E] text-[11px]'><b>How to add video:</b> Upload to YouTube as unlisted, copy embed link and replace this div with iframe. Or put file in /public/videos/ipss-tour.mp4</div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-12'>
        <h2 className='font-black text-[#4A148C] text-xl'>Our Teachers - Meet Some</h2>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=11' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Ssemakula</div><div className='text-[11px] text-gray-500'>Headteacher - MSc</div><div className='text-[10px] mt-1 bg-purple-50 rounded-full inline-block px-2 py-1'>12 yrs at IPSS</div></div>
          <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=32' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Ms. Namatovu</div><div className='text-[11px] text-gray-500'>Deputy - HOD Arts</div><div className='text-[10px] mt-1 bg-purple-50 rounded-full inline-block px-2 py-1'>English, Lit</div></div>
          <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=15' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[13px] mt-2'>Mr. Isabirye</div><div className='text-[11px] text-gray-500'>HOD Sciences</div><div className='text-[10px] mt-1 bg-green-50 rounded-full inline-block px-2 py-1'>Physics, Chem</div></div>
          <div className='border rounded-2xl p-4 text-center bg-[#FDF2FF]'><div className='text-[11px] font-bold text-[#8E24AA]'>+ 28 More Teachers</div><div className='text-[11px] mt-1'>See all teachers on Academics page with photos & subjects</div><a href='/academics' className='mt-3 inline-block bg-[#8E24AA] text-white px-4 py-1.5 rounded-full text-[11px] font-bold'>View All Staff</a></div>
        </div>
      </section>

      <section className='bg-[#FFFBEB] border-y border-yellow-100'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6'>
          <div className='md:col-span-1'><h3 className='font-black text-xl'>Board of Directors</h3><p className='text-[12px] text-gray-600 mt-2'>IPSS is governed by experienced parents and educationists. Quality is our tradition.</p><a href='/about' className='mt-3 inline-block bg-black text-white px-4 py-2 rounded-full text-[11px] font-bold'>Meet Full BOD</a></div>
          <div className='md:col-span-2 grid grid-cols-3 gap-3'>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=20' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Dr. Mugoya</div><div className='text-[9px] text-gray-500'>Chairperson BOD</div></div>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=18' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Mrs. Babirye</div><div className='text-[9px] text-gray-500'>Vice Chair</div></div>
            <div className='bg-white rounded-xl p-3 text-center border'><img src='https://i.pravatar.cc/100?img=22' className='w-12 h-12 rounded-full mx-auto'/><div className='font-bold text-[11px] mt-2'>Mr. Baliddawa</div><div className='text-[9px] text-gray-500'>Founder</div></div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-12'>
        <h3 className='font-black text-[#4A148C] text-xl'>Parents & Children Say</h3>
        <div className='mt-4 grid md:grid-cols-3 gap-4'>
          <div className='border rounded-2xl p-4'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=33' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Mrs. Nalubega - Parent S2</div><div className='text-[10px] text-gray-500'>Iganga</div></div></div><div className='text-[11px] italic mt-3 bg-gray-50 p-3 rounded-xl'>"My daughter joined S1 boarding. She wakes at 5am for prep, her English improved. Cock really wakes early!"</div></div>
          <div className='border rounded-2xl p-4'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=8' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Brian - S6 PCM - Head Boy</div><div className='text-[10px] text-gray-500'>Class of 2024</div></div></div><div className='text-[11px] italic mt-3 bg-[#FDF2FF] p-3 rounded-xl'>"Pen and book is our tradition. Teachers stay with us evening prep. I scored 17 points."</div></div>
          <div className='border rounded-2xl p-4'><div className='flex gap-3'><img src='https://i.pravatar.cc/100?img=5' className='w-10 h-10 rounded-full'/><div><div className='font-bold text-[12px]'>Aisha - S4 - Netball Captain</div><div className='text-[10px] text-gray-500'>Boarding</div></div></div><div className='text-[11px] italic mt-3 bg-green-50 p-3 rounded-xl'>"Boarding is safe, food is good, we have games at 4pm and MDD. I love IPSS!"</div></div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
