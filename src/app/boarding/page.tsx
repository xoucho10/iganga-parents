import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Boarding(){
  return (
    <main className='bg-white'>
      <Navbar/>

      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6'>
          <div>
            <div className='inline-flex bg-white/15 border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest'>SAFE • FENCED • MATRON 24/7 • BALANCED DIET • PREP 7-10PM</div>
            <h1 className='mt-3 text-4xl md:text-5xl font-black uppercase leading-[0.9]'>Boarding &<br/>Day Life</h1>
            <p className='mt-3 text-white/85 text-[13px] leading-relaxed max-w-xl'>Safe, disciplined, God-fearing boarding for boys and girls. Fenced compound with askari day & night, matron in girls dorm, warden in boys. Balanced diet, supervised prep, spiritual guidance. Day scholars welcome with lunch program.</p>
            <div className='mt-4 flex gap-2'>
              <div className='bg-white text-[#8E24AA] px-3 py-1.5 rounded-full text-[11px] font-bold'>Boys Dorm</div>
              <div className='bg-[#FFC107] text-black px-3 py-1.5 rounded-full text-[11px] font-bold'>Girls Dorm - Matron</div>
              <div className='bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold'>Fenced</div>
            </div>
          </div>
          <div className='bg-white text-gray-800 rounded-2xl p-5'>
            <div className='font-black text-[#4A148C]'>Boarding Fees 2026</div>
            <div className='mt-3 grid grid-cols-2 gap-3'>
              <div className='bg-[#F3E5F5] rounded-xl p-3 text-center'><div className='text-[10px] text-gray-500'>BOARDING</div><div className='font-black text-lg'>1,200,000</div><div className='text-[9px]'>UGX per term</div><div className='text-[8px] mt-1'>Meals + Dorm + Prep</div></div>
              <div className='border rounded-xl p-3 text-center'><div className='text-[10px] text-gray-500'>DAY SCHOLAR</div><div className='font-black text-lg'>600,000</div><div className='text-[9px]'>UGX per term</div><div className='text-[8px] mt-1'>Lunch + Labs + Library</div></div>
            </div>
            <div className='mt-3 text-[10px] bg-yellow-50 border border-yellow-100 p-2 rounded-lg'>Fees include: Tuition, meals, dorm, prep supervision, labs, library, sports, medical first aid. Uniform & books separate. Bursaries available.</div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8'>

        <div className='md:col-span-2 space-y-8'>
          <div>
            <h2 className='text-2xl font-black text-[#4A148C]'>Our Boarding Facilities</h2>
            <div className='mt-4 grid md:grid-cols-2 gap-4'>
              <div className='border rounded-2xl p-4'><div className='font-bold text-sm'>🏠 Boys Dormitory</div><ul className='text-[11px] mt-2 space-y-1 text-gray-600'><li>• Spacious, well-ventilated, double-decker beds</li><li>• Warden lives in compound 24/7</li><li>• Lockers for each student</li><li>• Clean toilets & showers</li></ul></div>
              <div className='border rounded-2xl p-4'><div className='font-bold text-sm'>🏠 Girls Dormitory</div><ul className='text-[11px] mt-2 space-y-1 text-gray-600'><li>• Female matron 24/7, very strict</li><li>• Private, safe, fenced separate block</li><li>• Sanitary support, counseling</li><li>• Clean, inspected daily</li></ul></div>
              <div className='border rounded-2xl p-4'><div className='font-bold text-sm'>🍲 Dining & Diet</div><ul className='text-[11px] mt-2 space-y-1 text-gray-600'><li>• Breakfast: Porridge, bread, tea</li><li>• Lunch: Posho, rice, beans, greens</li><li>• Supper: Posho, beans, meat twice/week</li><li>• Balanced diet, safe water</li></ul></div>
              <div className='border rounded-2xl p-4'><div className='font-bold text-sm'>📚 Prep & Study</div><ul className='text-[11px] mt-2 space-y-1 text-gray-600'><li>• Morning prep 5am-6:30am (Cock)</li><li>• Night prep 7pm-10pm supervised</li><li>• Teachers on duty for consultation</li><li>• Weekend revision S4 & S6</li></ul></div>
            </div>
          </div>

          <div className='bg-[#1A0A2E] text-white rounded-2xl p-6'>
            <h3 className='font-black text-[#FFEB3B]'>Boarding Rules & Discipline</h3>
            <div className='mt-3 grid md:grid-cols-2 gap-4 text-[11px] opacity-90'>
              <ul className='space-y-1'><li>• No phones, no electronics in dorm</li><li>• Lights out 10:30pm, wake 5am</li><li>• Visiting days: Last Saturday of month</li><li>• Uniform must be clean, full time</li></ul>
              <ul className='space-y-1'><li>• Chapel every Sunday, prayers daily</li><li>• Respect matron, warden, teachers</li><li>• No bullying, zero tolerance</li><li>• Cock, Pen, Book - discipline first</li></ul>
            </div>
          </div>

          <div>
            <h3 className='font-black text-[#4A148C]'>Safety & Health</h3>
            <div className='mt-3 grid grid-cols-3 gap-3 text-[11px]'>
              <div className='bg-purple-50 rounded-xl p-3 text-center'><div className='font-bold'>Fenced</div><div className='text-[10px] text-gray-500'>Askari day & night</div></div>
              <div className='bg-green-50 rounded-xl p-3 text-center'><div className='font-bold'>Sick Bay</div><div className='text-[10px] text-gray-500'>Nurse + first aid</div></div>
              <div className='bg-blue-50 rounded-xl p-3 text-center'><div className='font-bold'>Counseling</div><div className='text-[10px] text-gray-500'>Guidance office</div></div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='bg-white border rounded-2xl p-5'>
            <h3 className='font-black text-[#4A148C]'>Day Scholars</h3>
            <p className='text-[11px] text-gray-600 mt-2 leading-relaxed'>Day scholars from Iganga Town report by 7:30am, leave after evening prep 5:30pm. Optional lunch 30,000 UGX per term. Can join boarding anytime if space available. Safe waiting shade, bicycle parking.</p>
            <div className='mt-3 bg-gray-50 rounded-xl p-3 text-[10px]'><b>Day routine:</b><br/>7:30am Assembly<br/>8am-4pm Lessons & practicals<br/>4-5:30pm Games<br/>Lunch at school dining</div>
          </div>

          <div className='bg-[#8E24AA] text-white rounded-2xl p-5'>
            <h3 className='font-bold text-[#FFEB3B] text-sm'>What to Bring - Boarding</h3>
            <ul className='text-[11px] mt-2 space-y-1 opacity-90'>
              <li>• Mattress, blanket, 2 bedsheets</li>
              <li>• Uniform, sports wear, casual for Sunday</li>
              <li>• Bucket, basin, plates, cup</li>
              <li>• Books, pens, Cock, Pen, Book spirit</li>
              <li>• NO phone - school phone for parents</li>
            </ul>
            <a href='/admissions' className='mt-4 inline-block bg-white text-[#8E24AA] px-4 py-2 rounded-full text-[11px] font-bold'>Apply Boarding →</a>
          </div>

          <div className='bg-[#FFFBEB] border border-yellow-100 rounded-2xl p-4'>
            <div className='font-bold text-sm'>Parent Testimony</div>
            <p className='text-[11px] italic mt-2'>My daughter is safe in girls dorm. Matron is like mother. Results improved from Div 3 to Div 1.</p>
            <div className='text-[10px] font-bold mt-1'>— Parent, S4 Boarding, 2024</div>
          </div>
        </div>

      </section>

      <Footer/>
    </main>
  )
}