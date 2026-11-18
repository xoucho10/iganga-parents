'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, SlideIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

export default function Boarding(){
  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO */}
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
          <FadeIn>
            <Float><div className='inline-flex bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest w-fit'>SAFE • FENCED • MATRON 24/7 • BALANCED DIET • SUPERVISED PREP</div></Float>
            <h1 className='mt-4 text-4xl md:text-5xl font-black uppercase leading-[0.95]'>Boarding &<br/>Day Life</h1>
            <p className='mt-3 text-white/85 text-[14px] leading-relaxed max-w-xl'>Safe, disciplined, God-fearing boarding for boys and girls in Iganga. A fenced compound with guards day & night, resident matron in the girls dorm and warden in the boys dorm, balanced diet, supervised prep and spiritual guidance. Day scholars are welcome too - with lunch at school.</p>
            <Stagger className='mt-4 flex flex-wrap gap-2'>
              <StaggerItem><span className='inline-block bg-white text-[#7C3AED] px-3 py-1.5 rounded-full text-[11px] font-bold'>Boys Dorm - Warden</span></StaggerItem>
              <StaggerItem><span className='inline-block bg-[#FDE047] text-black px-3 py-1.5 rounded-full text-[11px] font-bold'>Girls Dorm - Matron</span></StaggerItem>
              <StaggerItem><span className='inline-block bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold'>Fenced & Guarded</span></StaggerItem>
            </Stagger>
            <div className='mt-6 flex flex-wrap gap-3'>
              <PopIn><Link href='/apply' className='inline-block bg-[#FDE047] text-black px-6 py-3 rounded-full font-black text-[12px]'>Apply for Boarding →</Link></PopIn>
              <PopIn delay={0.1}><a href='#fees' className='inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-full font-bold text-[12px]'>See Fees ↓</a></PopIn>
            </div>
          </FadeIn>
          {/* FEES - NO FAKE NUMBERS */}
          <PopIn delay={0.2}>
            <div id='fees' className='bg-white text-gray-800 rounded-3xl p-6 shadow-xl'>
              <p className='font-black text-[#7C3AED] text-[16px]'>Boarding Fees 2026</p>
              <p className='text-[12px] text-gray-500 mt-1'>Fees depend on class (S1-S6) and Day / Boarding. Contact us for the exact current fees structure.</p>
              <div className='mt-4 grid grid-cols-2 gap-3'>
                <div className='bg-purple-50 rounded-2xl p-4 text-center'><p className='text-[10px] text-gray-500'>BOARDING</p><p className='font-black text-[16px] mt-1'>Contact Us</p><p className='text-[10px] text-gray-500'>Meals + Dorm + Prep</p></div>
                <div className='border rounded-2xl p-4 text-center'><p className='text-[10px] text-gray-500'>DAY SCHOLAR</p><p className='font-black text-[16px] mt-1'>Contact Us</p><p className='text-[10px] text-gray-500'>Lunch + Labs + Library</p></div>
              </div>
              <div className='mt-3 text-[11px] bg-yellow-50 border border-yellow-100 p-3 rounded-xl'>Boarding fees typically include: Tuition, meals, dorm, prep supervision, labs, library, sports, medical first aid. Uniform & books separate. Ask us about payment plans & bursaries.</div>
              <Link href='/apply' className='mt-4 block text-center bg-[#7C3AED] text-white py-3 rounded-full font-bold text-[12px]'>Get 2026 Fees On WhatsApp →</Link>
            </div>
          </PopIn>
        </div>
      </section>

      {/* WHY BOARDING */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn><h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>Why Families Choose Boarding At IPSS</h2></FadeIn>
        <Stagger className='grid md:grid-cols-4 gap-4 mt-6'>
          <StaggerItem><div className='bg-purple-50 rounded-2xl p-5 h-full'><p className='text-2xl'>⏰</p><p className='font-bold mt-2'>More Time To Study</p><p className='text-[12px] text-gray-600 mt-1'>Morning prep, supervised evening prep, weekend revision for S4 & S6. No travel time wasted.</p></div></StaggerItem>
          <StaggerItem><div className='bg-yellow-50 rounded-2xl p-5 h-full'><p className='text-2xl'>🙏</p><p className='font-bold mt-2'>Discipline & Character</p><p className='text-[12px] text-gray-600 mt-1'>Structured routine, respect, cleanliness, leadership through prefects & dorm duties.</p></div></StaggerItem>
          <StaggerItem><div className='bg-green-50 rounded-2xl p-5 h-full'><p className='text-2xl'>🤝</p><p className='font-bold mt-2'>Friends For Life</p><p className='text-[12px] text-gray-600 mt-1'>Living, studying and playing together builds teamwork, confidence and lasting friendships.</p></div></StaggerItem>
          <StaggerItem><div className='bg-blue-50 rounded-2xl p-5 h-full'><p className='text-2xl'>🏠</p><p className='font-bold mt-2'>Safe, Caring Home</p><p className='text-[12px] text-gray-600 mt-1'>Resident matron/warden, guards, sick bay and guidance - your child is looked after.</p></div></StaggerItem>
        </Stagger>
      </section>

      {/* FACILITIES + SAFETY STANDARDS */}
      <section className='bg-gray-50 border-y'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-8'>
            <div>
              <FadeIn><h2 className='text-2xl font-black text-[#7C3AED]'>Our Boarding Facilities</h2></FadeIn>
              <Stagger className='mt-4 grid md:grid-cols-2 gap-4'>
                <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-bold text-[14px]'>🏠 Boys Dormitory</p><ul className='text-[12px] mt-2 space-y-1 text-gray-600'><li>• Spacious, well-ventilated, separate metallic beds - no bed-sharing</li><li>• Resident warden lives in compound 24/7</li><li>• Lockers / boxes for each student</li><li>• Clean toilets & showers, inspected daily</li></ul></div></StaggerItem>
                <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-bold text-[14px]'>🏠 Girls Dormitory</p><ul className='text-[12px] mt-2 space-y-1 text-gray-600'><li>• Female matron resident 24/7</li><li>• Private, safe, fenced separate block</li><li>• Sanitary support & counselling</li><li>• Clean, inspected daily</li></ul></div></StaggerItem>
                <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-bold text-[14px]'>🍲 Dining & Diet</p><ul className='text-[12px] mt-2 space-y-1 text-gray-600'><li>• Breakfast: Porridge / bread / tea</li><li>• Lunch: Posho, rice, beans, greens</li><li>• Supper: Posho, beans, meat / fish on set days</li><li>• Balanced diet, safe drinking water, medically checked cooks</li></ul></div></StaggerItem>
                <StaggerItem><div className='bg-white border rounded-2xl p-5 h-full'><p className='font-bold text-[14px]'>📚 Prep & Study</p><ul className='text-[12px] mt-2 space-y-1 text-gray-600'><li>• Morning prep - early, quiet, focused</li><li>• Night prep supervised by teachers on duty</li><li>• Teachers available for consultation</li><li>• Weekend revision for S4 & S6 candidates</li></ul></div></StaggerItem>
              </Stagger>
            </div>

            {/* MINISTRY STANDARDS */}
            <FadeIn>
              <div className='bg-white border rounded-3xl p-6'>
                <h3 className='font-black text-[17px]'>✅ Safety - Following Ministry of Education Guidelines</h3>
                <p className='text-[12px] text-gray-500 mt-1'>Uganda Ministry of Education & Sports - Guidelines for Operating Boarding Sections (2024)</p>
                <Stagger className='grid md:grid-cols-2 gap-3 mt-4 text-[12px] text-gray-600'>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>🔥 <b>Fire safety:</b> Extinguishers in dorm blocks, smoke detectors, emergency exit per room, regular fire drills at least once a term</div></StaggerItem>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>🛏️ <b>Separate dorms:</b> Boys & girls in separate dorms, arranged by class. Each learner gets a separate bed - no sharing</div></StaggerItem>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>👩‍🏫 <b>Resident staff:</b> Matron / warden matched to learners’ sex, aged 30+, medically examined every 6 months, resident at school</div></StaggerItem>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>🛡️ <b>Security:</b> Fenced compound, controlled entry, visitors book, guards on 24-hour surveillance</div></StaggerItem>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>🏥 <b>Health:</b> Sick bay with separate space for boys & girls, full-time health worker, basic drugs, first aid</div></StaggerItem>
                  <StaggerItem><div className='bg-purple-50 p-3 rounded-xl h-full'>🧹 <b>Hygiene:</b> Termly fumigation, clean water, safe toilets (1:40 ratio), cooks medically checked every 6 months</div></StaggerItem>
                </Stagger>
                <p className='text-[11px] text-gray-400 mt-3'>Sources: Ministry of Education & Sports, Guidelines for Operating Boarding Sections 2024; Parliament statement Oct 2026.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className='bg-[#111827] text-white rounded-3xl p-6'>
                <h3 className='font-black text-[#FDE047]'>Boarding Rules & Discipline</h3>
                <div className='mt-3 grid md:grid-cols-2 gap-4 text-[12px] opacity-90'>
                  <ul className='space-y-1'><li>• No phones / electronics in dorm - school phone for parents</li><li>• Lights out after evening prep, wake-up early for prep</li><li>• Visiting days: As per school calendar - confirm with office</li><li>• Uniform must be clean, full time</li></ul>
                  <ul className='space-y-1'><li>• Prayers / devotion daily, service on Sunday</li><li>• Respect matron, warden, teachers & prefects</li><li>• No bullying - zero tolerance, report to matron / teacher</li><li>• Discipline first: time, respect & hard work</li></ul>
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn><h3 className='font-black text-[#7C3AED]'>A Typical Boarding Day</h3></FadeIn>
              <Stagger className='mt-3 space-y-2 text-[13px]'>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>5:00am - Wake</b><span className='text-gray-600'>Wake-up, wash, clean dorm, morning prep</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>7:00am - Breakfast</b><span className='text-gray-600'>Breakfast in dining, assembly & devotion</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>8:00am - Lessons</b><span className='text-gray-600'>Lessons, practicals, library & projects</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>1:00pm - Lunch</b><span className='text-gray-600'>Lunch, rest, afternoon lessons</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>4:00pm - Games</b><span className='text-gray-600'>Football, netball, athletics, clubs, MDD, debate</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>6:00pm - Supper</b><span className='text-gray-600'>Supper, wash-up, free time</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>7:00pm - Prep</b><span className='text-gray-600'>Supervised evening prep, revision, consultation</span></div></StaggerItem>
                <StaggerItem><div className='flex gap-3 bg-white border p-3 rounded-xl'><b className='w-[110px] shrink-0'>10:30pm - Lights Out</b><span className='text-gray-600'>Lights out, matron / warden on duty</span></div></StaggerItem>
              </Stagger>
              <p className='text-[11px] text-gray-400 mt-2'>Times are a guide - exact bell times are on the school timetable.</p>
            </div>

            <FadeIn>
              <div>
                <h3 className='font-black text-[#7C3AED]'>Weekends In Boarding</h3>
                <p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>Saturday: Morning cleaning, classes / revision for candidates, games & matches, washing, church / mosque preparation. Sunday: Worship, rest, letter writing, calling parents, extra revision, sports & MDD practice. Visiting days are on the school calendar - parents must sign in at the gate.</p>
              </div>
            </FadeIn>
          </div>

          {/* SIDEBAR */}
          <SlideIn from='right'>
            <div className='space-y-4'>
              <FadeIn><div className='bg-white border rounded-2xl p-5'>
                <h3 className='font-black text-[#7C3AED]'>Day Scholars</h3>
                <p className='text-[12px] text-gray-600 mt-2 leading-relaxed'>Day scholars from Iganga Town report by 7:30am, leave after evening prep. Can join lunch program at school. Can join boarding anytime if space available. Safe waiting area, bicycle parking.</p>
                <div className='mt-3 bg-gray-50 rounded-xl p-3 text-[11px]'><b>Day routine:</b><br/>7:30am Assembly<br/>8am-4pm Lessons & practicals<br/>4-5:30pm Games<br/>Lunch at school dining</div>
                <Link href='/apply' className='mt-3 inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-[11px] font-bold'>Apply as Day Scholar →</Link>
              </div></FadeIn>

              <FadeIn><div className='bg-[#7C3AED] text-white rounded-2xl p-5'>
                <h3 className='font-bold text-[#FDE047] text-[14px]'>What To Bring - Boarding</h3>
                <ul className='text-[12px] mt-2 space-y-1 opacity-90'>
                  <li>• Mattress, blanket, 2 bedsheets, pillow</li>
                  <li>• Uniform, sports wear, Sunday clothes</li>
                  <li>• Bucket, basin, plates, cup, spoon</li>
                  <li>• Books, pens, geometry set, calculator (if needed)</li>
                  <li>• Toiletries, towel, washing soap</li>
                  <li>• NO phone - school phone for parents</li>
                </ul>
                <Link href='/apply' className='mt-4 inline-block bg-white text-[#7C3AED] px-4 py-2 rounded-full text-[11px] font-bold'>Apply Boarding →</Link>
              </div></FadeIn>

              <FadeIn><div className='bg-[#FFFBEB] border border-yellow-100 rounded-2xl p-5'>
                <p className='font-bold text-[14px]'>🛡️ Child Protection & Safeguarding</p>
                <p className='text-[12px] text-gray-600 mt-2 leading-relaxed'>Every learner has a right to be safe. If your child feels unsafe, bullied or unwell, they can report to: Matron / Warden, Class Teacher, Guidance & Counselling Office, or Head Teacher. Parents can also call the school directly. Reports are handled confidentially and quickly.</p>
              </div></FadeIn>

              <FadeIn><div className='bg-green-50 border border-green-100 rounded-2xl p-5'>
                <p className='font-bold text-[14px]'>🏥 Health In Boarding</p>
                <ul className='text-[12px] text-gray-600 mt-2 space-y-1'><li>• Sick bay & first aid at school</li><li>• Parents informed if child is ill</li><li>• Referral to Iganga hospital if needed</li><li>• Tell us allergies / chronic illness at admission</li><li>• Regular health & hygiene talks</li></ul>
              </div></FadeIn>

              <FadeIn><div className='bg-white border rounded-2xl p-5'>
                <p className='font-bold text-[14px]'>❓ Boarding FAQ</p>
                <div className='text-[12px] text-gray-600 mt-2 space-y-3'>
                  <p><b>Can I visit my child?</b><br/>Yes - on visiting days in the school calendar. Sign in at the gate.</p>
                  <p><b>Can my child call home?</b><br/>Yes - via the school phone on set days / times.</p>
                  <p><b>Can I switch Day → Boarding?</b><br/>Yes, if space is available. Talk to the office.</p>
                  <p><b>What if my child is homesick?</b><br/>Matron, warden & counsellors support new boarders - most settle in the first 2 weeks.</p>
                </div>
              </div></FadeIn>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* BOARDING vs DAY */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn><h2 className='font-black text-2xl text-[#7C3AED]'>Boarding vs Day - Which Is Better?</h2></FadeIn>
        <Stagger className='grid md:grid-cols-2 gap-4 mt-6 text-[13px]'>
          <StaggerItem><div className='border rounded-3xl p-6 h-full'><p className='font-black text-[16px]'>🏠 Boarding Is Best If…</p><ul className='text-gray-600 mt-2 space-y-1'><li>• You live far from Iganga Town</li><li>• You want more prep time & focus</li><li>• You want full discipline & routine</li><li>• You want to join sports / MDD fully</li></ul></div></StaggerItem>
          <StaggerItem><div className='border rounded-3xl p-6 h-full'><p className='font-black text-[16px]'>🚶 Day Is Best If…</p><ul className='text-gray-600 mt-2 space-y-1'><li>• You live near Iganga Town</li><li>• You still want lunch + full lessons + games</li></ul></div></StaggerItem>
        </Stagger>
        <FadeIn><div className='text-center mt-8'>
          <Link href='/apply' className='inline-block bg-[#7C3AED] text-white px-8 py-3.5 rounded-full font-bold text-[13px]'>Apply Boarding / Day - S1 to S6</Link>
          <Link href='/about' className='inline-block ml-3 bg-gray-100 px-8 py-3.5 rounded-full font-bold text-[13px]'>About IPSS</Link>
        </div></FadeIn>
      </section>

      <Footer/>
    </main>
  )
}