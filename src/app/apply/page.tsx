'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { FadeIn, PopIn } from '@/components/Dynamic'

export default function Contact(){
  // STUDENT
  const [studentName, setStudentName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('Female')
  const [classApplying, setClassApplying] = useState('S1')
  const [combination, setCombination] = useState('')
  const [prevSchool, setPrevSchool] = useState('')
  const [lastClass, setLastClass] = useState('')
  const [lastResults, setLastResults] = useState('')
  const [boarding, setBoarding] = useState('Boarding')
  const [district, setDistrict] = useState('')
  const [village, setVillage] = useState('')

  // PARENT / GUARDIAN
  const [parentName, setParentName] = useState('')
  const [relationship, setRelationship] = useState('Father')
  const [parentPhone, setParentPhone] = useState('')
  const [parentPhone2, setParentPhone2] = useState('')
  const [parentOccupation, setParentOccupation] = useState('')

  // OTHER
  const [medical, setMedical] = useState('')
  const [allergies, setAllergies] = useState('')
  const [religion, setReligion] = useState('Muslim')
  const [sports, setSports] = useState('')
  const [howHeard, setHowHeard] = useState('WhatsApp / Friend')
  const [message, setMessage] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  const whatsappMsg = `Hello IPSS! I want to APPLY for Admission 2026.\n\n` +
  `--- STUDENT ---\n` +
  `Full Name: ${studentName}\n` +
  `Date of Birth: ${dob}\n` +
  `Gender: ${gender}\n` +
  `Class Applying For: ${classApplying}\n` +
  `Combination (if S5-S6): ${combination || '-'}\n` +
  `Previous School: ${prevSchool}\n` +
  `Last Class: ${lastClass}\n` +
  `Last Results (PLE / UCE): ${lastResults}\n` +
  `Boarding / Day: ${boarding}\n` +
  `District: ${district}\n` +
  `Village / Residence: ${village}\n\n` +
  `--- PARENT / GUARDIAN ---\n` +
  `Parent Name: ${parentName}\n` +
  `Relationship: ${relationship}\n` +
  `Phone / WhatsApp: ${parentPhone}\n` +
  `Alt Phone: ${parentPhone2 || '-'}\n` +
  `Occupation: ${parentOccupation || '-'}\n\n` +
  `--- OTHER ---\n` +
  `Religion: ${religion}\n` +
  `Medical / Chronic Illness: ${medical || 'None'}\n` +
  `Allergies: ${allergies || 'None'}\n` +
  `Sports / Talent: ${sports || '-'}\n` +
  `How did you hear about IPSS: ${howHeard}\n` +
  `Message: ${message || '-'}`

  // REPLACE with real school WhatsApp number, e.g. 256772123456
  const whatsappLink = `https://wa.me/256000000000?text=${encodeURIComponent(whatsappMsg)}`

  const handleSend = () => {
    if(!studentName || !parentName || !parentPhone || !prevSchool || !district){
      setError('Please fill: Student Name, Parent Name, Parent Phone, Previous School & District')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if(!agree){
      setError('Please tick: I confirm the information is true')
      return
    }
    setError('')
    window.open(whatsappLink, '_blank')
  }

  const inputCls = 'w-full border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-[#7C3AED] bg-white'
  const labelCls = 'font-bold text-[12px] block mb-1'

  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO - FadeIn wraps the WHOLE grid, not inside it */}
      <section className='bg-[#7C3AED] text-white'>
        <FadeIn>
          <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <span className='inline-flex bg-[#FDE047] text-black px-3 py-1.5 rounded-full text-[11px] font-black'>ADMISSION 2026 • S1 - S6 OPEN</span>
              <h1 className='font-black text-4xl md:text-5xl mt-4 leading-[0.95]'>Apply<br/>S1 - S6 2026</h1>
              <p className='text-white/85 text-[14px] mt-3 leading-relaxed'>Fill this form - it opens WhatsApp with everything pre-filled. No papers lost, no long queue. Interviews Monday to Saturday.</p>
              <div className='mt-5 space-y-2 text-[13px]'>
                <p>📍 Iganga Town, Jinja Road - 1.5km from Town Centre</p>
                <p>🕐 Interviews: Mon - Sat, 8am - 4pm</p>
                <p>📄 Bring: PLE / UCE result slip + 2 passport photos</p>
                <p>💰 Flexible payment plans - ask us on WhatsApp</p>
              </div>
              <div className='mt-5 flex flex-wrap gap-2 text-[11px] font-bold'>
                <span className='bg-white/15 border border-white/20 px-3 py-1.5 rounded-full'>Boarding & Day</span>
                <span className='bg-white/15 border border-white/20 px-3 py-1.5 rounded-full'>O & A Level</span>
                <span className='bg-white/15 border border-white/20 px-3 py-1.5 rounded-full'>UNEB Centre</span>
              </div>
            </div>

            {/* WHAT YOU NEED - untouched */}
            <div className='bg-white text-gray-800 rounded-3xl p-6'>
              <p className='font-black text-[16px]'>Before You Apply - Checklist</p>
              <ul className='text-[13px] text-gray-600 mt-3 space-y-2'>
                <li>✅ Student full name (as on birth certificate / results)</li>
                <li>✅ Date of birth & gender</li>
                <li>✅ Class you want: S1, S2, S3, S4, S5 or S6</li>
                <li>✅ Previous school + last results</li>
                <li>✅ Parent / Guardian name + WhatsApp number</li>
                <li>✅ Boarding or Day?</li>
                <li>✅ Any medical / allergy info - so we can care for your child</li>
              </ul>
              <p className='text-[12px] bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-4'>After you send on WhatsApp, the school will reply with: interview date, fees structure & what to bring.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FORM - FadeIn wraps WHOLE section, grid inside untouched */}
      <section className='max-w-7xl mx-auto px-6 py-10'>
        <FadeIn>
          <div className='grid lg:grid-cols-3 gap-6'>
            {/* LEFT - STEPS - exactly as before */}
            <div className='space-y-4'>
              <div className='bg-purple-50 rounded-3xl p-5'><p className='font-black'>How Admission Works</p><ol className='text-[13px] text-gray-600 mt-2 space-y-2'><li><b>1.</b> Fill form & send on WhatsApp</li><li><b>2.</b> School replies with interview date</li><li><b>3.</b> Come for interview with results + photos</li><li><b>4.</b> Get admission letter & fees</li><li><b>5.</b> Report to school - Welcome to IPSS!</li></ol></div>
              <div className='bg-[#111827] text-white rounded-3xl p-5'><p className='font-black text-[#FDE047]'>Need Help?</p><p className='text-[13px] text-white/80 mt-1'>Stuck on the form? Come to the school office in Iganga Town, or send us a WhatsApp - we will help you fill it.</p><Link href='/about' className='inline-block mt-3 bg-white text-black px-4 py-2 rounded-full text-[12px] font-bold'>About IPSS →</Link></div>
              <div className='bg-green-50 border border-green-200 rounded-3xl p-5'><p className='font-black'>S5-S6 Combinations</p><p className='text-[12px] text-gray-600 mt-1'>Sciences: PCM, PCB, BCM • Arts: HEG, HEL, HED, BCA & more. If you are not sure, write “Not sure yet” - we will guide you.</p></div>
            </div>

            {/* RIGHT - FORM - exactly as before, no wrapper inside */}
            <div className='lg:col-span-2 bg-white border rounded-3xl p-6 shadow-lg'>
              <p className='font-black text-[18px]'>Application Form 2026</p>
              <p className='text-[12px] text-gray-500 mt-1'>Fields marked * are required. Your info is only used for admission.</p>

              {error && <p className='mt-4 bg-red-50 border border-red-200 text-red-700 text-[12px] p-3 rounded-xl font-bold'>{error}</p>}

              <p className='font-black text-[14px] mt-6 bg-purple-50 px-3 py-2 rounded-xl'>👩‍🎓 1. Student Details</p>
              <div className='grid md:grid-cols-2 gap-3 mt-3'>
                <div><label className={labelCls}>Student Full Name *</label><input value={studentName} onChange={e=>setStudentName(e.target.value)} placeholder='e.g. Aisha Namukasa Balikowa' className={inputCls} /></div>
                <div><label className={labelCls}>Date of Birth *</label><input type='date' value={dob} onChange={e=>setDob(e.target.value)} className={inputCls} /></div>
                <div><label className={labelCls}>Gender *</label><select value={gender} onChange={e=>setGender(e.target.value)} className={inputCls}><option>Female</option><option>Male</option></select></div>
                <div><label className={labelCls}>Religion</label><select value={religion} onChange={e=>setReligion(e.target.value)} className={inputCls}><option>Muslim</option><option>Christian - Catholic</option><option>Christian - Anglican</option><option>Christian - Pentecostal</option><option>Other</option></select></div>
                <div><label className={labelCls}>Class Applying For *</label><select value={classApplying} onChange={e=>setClassApplying(e.target.value)} className={inputCls}><option>S1</option><option>S2</option><option>S3</option><option>S4</option><option>S5</option><option>S6</option></select></div>
                <div><label className={labelCls}>Combination (S5-S6 only)</label><input value={combination} onChange={e=>setCombination(e.target.value)} placeholder='e.g. PCM, HEG, Not sure yet' className={inputCls} /></div>
                <div><label className={labelCls}>Boarding / Day *</label><select value={boarding} onChange={e=>setBoarding(e.target.value)} className={inputCls}><option>Boarding</option><option>Day</option><option>Not sure yet</option></select></div>
                <div><label className={labelCls}>Sports / Talent</label><input value={sports} onChange={e=>setSports(e.target.value)} placeholder='e.g. Football, Netball, MDD, Debate' className={inputCls} /></div>
              </div>

              <p className='font-black text-[14px] mt-6 bg-yellow-50 px-3 py-2 rounded-xl'>🏫 2. Previous School & Results</p>
              <div className='grid md:grid-cols-2 gap-3 mt-3'>
                <div><label className={labelCls}>Previous School *</label><input value={prevSchool} onChange={e=>setPrevSchool(e.target.value)} placeholder='e.g. Iganga Primary School' className={inputCls} /></div>
                <div><label className={labelCls}>Last Class Completed</label><input value={lastClass} onChange={e=>setLastClass(e.target.value)} placeholder='e.g. P7, S3, S4' className={inputCls} /></div>
                <div className='md:col-span-2'><label className={labelCls}>Last Results (PLE / UCE)</label><input value={lastResults} onChange={e=>setLastResults(e.target.value)} placeholder='e.g. PLE Div 2 - 12 aggregates, UCE Div 1, or “Results not yet out”' className={inputCls} /></div>
              </div>

              <p className='font-black text-[14px] mt-6 bg-green-50 px-3 py-2 rounded-xl'>🏠 3. Home / Residence</p>
              <div className='grid md:grid-cols-2 gap-3 mt-3'>
                <div><label className={labelCls}>District *</label><input value={district} onChange={e=>setDistrict(e.target.value)} placeholder='e.g. Iganga, Jinja, Kamuli' className={inputCls} /></div>
                <div><label className={labelCls}>Village / Town / Residence</label><input value={village} onChange={e=>setVillage(e.target.value)} placeholder='e.g. Iganga Town, Nakalama' className={inputCls} /></div>
              </div>

              <p className='font-black text-[14px] mt-6 bg-blue-50 px-3 py-2 rounded-xl'>👨‍👩‍👧 4. Parent / Guardian</p>
              <div className='grid md:grid-cols-2 gap-3 mt-3'>
                <div><label className={labelCls}>Parent / Guardian Full Name *</label><input value={parentName} onChange={e=>setParentName(e.target.value)} placeholder='e.g. Hajji Asuman Mpaata' className={inputCls} /></div>
                <div><label className={labelCls}>Relationship to Student</label><select value={relationship} onChange={e=>setRelationship(e.target.value)} className={inputCls}><option>Father</option><option>Mother</option><option>Guardian</option><option>Uncle / Aunt</option><option>Other</option></select></div>
                <div><label className={labelCls}>Phone / WhatsApp *</label><input value={parentPhone} onChange={e=>setParentPhone(e.target.value)} placeholder='e.g. 0772 123 456' className={inputCls} /></div>
                <div><label className={labelCls}>Alt Phone (Optional)</label><input value={parentPhone2} onChange={e=>setParentPhone2(e.target.value)} placeholder='e.g. 0700 123 456' className={inputCls} /></div>
                <div className='md:col-span-2'><label className={labelCls}>Parent Occupation</label><input value={parentOccupation} onChange={e=>setParentOccupation(e.target.value)} placeholder='e.g. Teacher, Business, Farmer' className={inputCls} /></div>
              </div>

              <p className='font-black text-[14px] mt-6 bg-red-50 px-3 py-2 rounded-xl'>🏥 5. Health & Other Info</p>
              <div className='grid md:grid-cols-2 gap-3 mt-3'>
                <div><label className={labelCls}>Medical / Chronic Illness</label><input value={medical} onChange={e=>setMedical(e.target.value)} placeholder='e.g. Asthma, Sickle cell, None' className={inputCls} /></div>
                <div><label className={labelCls}>Allergies</label><input value={allergies} onChange={e=>setAllergies(e.target.value)} placeholder='e.g. Beans, Dust, None' className={inputCls} /></div>
                <div><label className={labelCls}>How did you hear about IPSS?</label><select value={howHeard} onChange={e=>setHowHeard(e.target.value)} className={inputCls}><option>WhatsApp / Friend</option><option>Parent / Alumni</option><option>Radio</option><option>Church / Mosque</option><option>Visited School</option><option>Facebook / TikTok</option><option>Other</option></select></div>
                <div><label className={labelCls}>Any Message?</label><input value={message} onChange={e=>setMessage(e.target.value)} placeholder='e.g. I want boarding, I need fees plan' className={inputCls} /></div>
              </div>

              <div className='mt-6 bg-gray-50 border rounded-2xl p-4 text-[12px]'>
                <p className='font-bold'>Preview - What school will receive:</p>
                <p className='text-gray-600 mt-1'>{studentName || '[Student Name]'} • {classApplying} • {boarding} • {prevSchool || '[Previous School]'} • Parent: {parentName || '[Parent]'} • {parentPhone || '[Phone]'}</p>
              </div>

              <label className='flex gap-2 items-start mt-4 text-[12px] text-gray-600 cursor-pointer'>
                <input type='checkbox' checked={agree} onChange={e=>setAgree(e.target.checked)} className='mt-1 w-4 h-4' />
                <span>I confirm the information above is true. I understand the school will contact me on WhatsApp for interview & fees.</span>
              </label>

              <PopIn><button onClick={handleSend} className='w-full mt-4 bg-[#25D366] text-white py-4 rounded-full font-black text-[14px] hover:scale-[1.01] transition'>Send Application Via WhatsApp →</button></PopIn>
              <p className='text-[11px] text-gray-400 text-center mt-2'>Replace 256000000000 in code with real school WhatsApp number before going live.</p>

              <div className='mt-4 grid grid-cols-2 gap-3 text-center text-[12px] font-bold'>
                <Link href='/boarding' className='bg-purple-50 py-3 rounded-full'>Boarding Info →</Link>
                <Link href='/academics' className='bg-yellow-50 py-3 rounded-full'>Academics →</Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer/>
    </main>
  )
}