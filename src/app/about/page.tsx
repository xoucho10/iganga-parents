import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About(){
  return (
    <main className='bg-white'>
      <Navbar/>
      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <h1 className='text-4xl md:text-5xl font-black uppercase'>About IPSS</h1>
          <p className='mt-2 text-white/80 text-[13px] max-w-2xl'>Cock • Pen • Book • Quality Education Is Our Tradition - Since 1995 in Iganga Town.</p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8'>
        <div>
          <h2 className='font-black text-[#4A148C] text-xl'>Full School Tour Video</h2>
          <div className='mt-4 bg-black rounded-2xl overflow-hidden border'>
            <div className='aspect-video flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white relative'>
              <div className='w-20 h-20 bg-[#FFEB3B] rounded-full flex items-center justify-center text-black text-3xl'>▶</div>
              <div className='absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded-full text-[10px]'>Paste YouTube iframe here: Replace div with iframe</div>
            </div>
          </div>
          <div className='mt-3 bg-yellow-50 border border-yellow-100 rounded-xl p-3 text-[11px]'><b>How to embed:</b> In YouTube, Share &gt; Embed &gt; Copy iframe &gt; paste inside this div. Example: &lt;iframe src="https://www.youtube.com/embed/YOUR_ID" className="w-full aspect-video" /&gt;</div>
        </div>
        <div>
          <h2 className='font-black text-[#4A148C] text-xl'>Our History & Tradition</h2>
          <p className='text-[12px] text-gray-600 mt-3 leading-relaxed'>Founded 1995 by parents of Iganga. Cock wakes early for morning prep 5am, Pen writes future through debate and MDD, Book is our academic tradition. From 50 students to 800+ S1-S6. UNEB centre, top in Iganga District 2023/2024.</p>
          <div className='mt-4 grid grid-cols-2 gap-3 text-[11px]'>
            <div className='bg-[#FDF2FF] p-3 rounded-xl border'><div className='font-bold'>Cock - Discipline</div><div className='text-[10px] text-gray-500'>Early prep, time keeping, assembly Mon</div></div>
            <div className='bg-[#FFFBEB] p-3 rounded-xl border'><div className='font-bold'>Pen - Talent</div><div className='text-[10px] text-gray-500'>MDD, debate, writers club</div></div>
            <div className='bg-green-50 p-3 rounded-xl border'><div className='font-bold'>Book - Academics</div><div className='text-[10px] text-gray-500'>Lab, library, evening prep</div></div>
            <div className='bg-blue-50 p-3 rounded-xl border'><div className='font-bold'>Tradition - Values</div><div className='text-[10px] text-gray-500'>God fearing, respect, hard work</div></div>
          </div>
        </div>
      </section>

      <section className='bg-[#1A0A2E] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <h2 className='font-black text-[#FFEB3B] text-xl'>Board of Directors - BOD</h2>
          <p className='text-[12px] opacity-70 mt-1'>Governors who ensure quality education is our tradition</p>
          <div className='mt-6 grid grid-cols-2 md:grid-cols-5 gap-4'>
            <div className='bg-white text-black rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=20' className='w-20 h-20 rounded-full mx-auto'/><div className='font-black text-[13px] mt-2'>Dr. Mugoya David</div><div className='text-[11px] text-[#8E24AA] font-bold'>Chairperson BOD</div><div className='text-[10px] text-gray-500 mt-1'>PhD Education - Founder member 1995</div></div>
            <div className='bg-white text-black rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=18' className='w-20 h-20 rounded-full mx-auto'/><div className='font-black text-[13px] mt-2'>Mrs. Babirye Sarah</div><div className='text-[11px] text-[#8E24AA] font-bold'>Vice Chair</div><div className='text-[10px] text-gray-500 mt-1'>Parent, Businesswoman Iganga</div></div>
            <div className='bg-white text-black rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=22' className='w-20 h-20 rounded-full mx-auto'/><div className='font-black text-[13px] mt-2'>Mr. Baliddawa James</div><div className='text-[11px] text-[#8E24AA] font-bold'>Founder / Treasurer</div><div className='text-[10px] text-gray-500 mt-1'>Director - Iganga Parents</div></div>
            <div className='bg-white text-black rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=11' className='w-20 h-20 rounded-full mx-auto'/><div className='font-black text-[13px] mt-2'>Mr. Ssemakula John</div><div className='text-[11px] text-gray-500 font-bold'>Secretary - Headteacher</div><div className='text-[10px] text-gray-500 mt-1'>MSc - Ex officio BOD</div></div>
            <div className='bg-[#FFEB3B] text-black rounded-2xl p-4 text-center'><div className='w-20 h-20 bg-black text-white rounded-full mx-auto flex items-center justify-center font-black'>BOD</div><div className='font-black text-[13px] mt-2'>4 More Members</div><div className='text-[11px] font-bold'>Parents Reps</div><div className='text-[10px] mt-1'>Elected parents, old students, DEO rep</div></div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
