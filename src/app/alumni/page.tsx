'use client'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, SlideIn, PopIn, Stagger, StaggerItem, Float } from '@/components/Dynamic'

type Alumnus = {
  fullName: string
  yearFrom: number
  yearTo: number
  level: string
  combination: string
  currentRole: string
  location: string
  story: string
  initials: string
  color: string
  tier: string
  photo?: string
  isTemplate?: boolean
}

// ============================================
// 💰 PAYMENT - PENDING
// ============================================
const PAYMENT_PENDING = true
const PAYMENT_AMOUNT = 'TO BE DECIDED'
const PAYMENT_MOMO = 'TO BE DECIDED'
// ============================================

// ============================================
// 🖼️ TEMPLATE - HOW ALUMNI WILL LOOK ON THE WALL
// These 3 are SAMPLES ONLY - clearly labelled TEMPLATE
// Delete / keep them - they do NOT count as real alumni
// ============================================
const TEMPLATE_ALUMNI: Alumnus[] = [
  {
    fullName: 'Sample Name - Standard',
    yearFrom: 2015, yearTo: 2018, level: 'S1 - S4', combination: 'O Level',
    currentRole: 'Teacher', location: 'Iganga',
    story: 'This is how a Standard card looks. Short story, name, years and job.',
    initials: 'SN', color: 'bg-purple-600', tier: 'Standard', isTemplate: true,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    fullName: 'Sample Name - Supporter',
    yearFrom: 2008, yearTo: 2013, level: 'S1 - S6', combination: 'PCM',
    currentRole: 'Civil Engineer', location: 'Kampala',
    story: 'This is how a Supporter card looks. Bigger, with full story featured, invite to reunions and mentor badge. Your real story will go here.',
    initials: 'SN', color: 'bg-blue-600', tier: 'Supporter', isTemplate: true,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    fullName: 'Sample Name - Gold Patron',
    yearFrom: 1999, yearTo: 2004, level: 'S1 - S6', combination: 'HEG',
    currentRole: 'Business Owner - Gold Patron', location: 'Jinja',
    story: 'This is how a Gold Patron looks. Gold border, TOP SPOT on the wall, photo, full story + business / mentor feature. Your business name can go here.',
    initials: 'SN', color: 'bg-yellow-500', tier: 'Gold Patron', isTemplate: true,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
]

// ============================================
// REAL ALUMNI - Add real confirmed people here only
// ============================================
const ALL_ALUMNI: Alumnus[] = []

const YEARS = Array.from({ length: 2026 - 1999 + 1 }, (_, i) => 1999 + i)

export default function Alumni(){
  const [search, setSearch] = useState('')
  const [fromYear, setFromYear] = useState<number | ''>('')
  const [toYear, setToYear] = useState<number | ''>('')
  const [level, setLevel] = useState('All')
  const [selected, setSelected] = useState<Alumnus | null>(null)
  const [payTier, setPayTier] = useState('Standard')
  const [view, setView] = useState<'grid'|'list'|'featured'>('grid')
  const [showTemplate, setShowTemplate] = useState(true)

  // FORM
  const [fullName, setFullName] = useState('')
  const [fFrom, setFFrom] = useState('')
  const [fTo, setFTo] = useState('')
  const [fLevel, setFLevel] = useState('S1 - S4 (O Level)')
  const [fCombination, setFCombination] = useState('')
  const [fRole, setFRole] = useState('')
  const [fLocation, setFLocation] = useState('')
  const [fPhone, setFPhone] = useState('')
  const [fStory, setFStory] = useState('')
  const [fPayChoice, setFPayChoice] = useState('I will pay later - when amount is decided')
  const [fPayMethod, setFPayMethod] = useState('MTN MoMo')

  const filtered = useMemo(()=>{
    return ALL_ALUMNI.filter(a=>{
      if(search && !a.fullName.toLowerCase().includes(search.toLowerCase()) && !a.currentRole.toLowerCase().includes(search.toLowerCase())) return false
      if(level !== 'All' && !a.level.includes(level)) return false
      if(fromYear !== '' && a.yearTo < fromYear) return false
      if(toYear !== '' && a.yearFrom > toYear) return false
      return true
    }).sort((a,b)=> b.yearTo - a.yearTo)
  }, [search, fromYear, toYear, level])

  const whatsappMsg = `Hello IPSS Alumni! I want to join the Alumni Wall.\n\nFull Name: ${fullName}\nYear From: ${fFrom}\nYear To: ${fTo}\nLevel: ${fLevel}\nCombination: ${fCombination}\nCurrent Job / Role: ${fRole}\nLocation: ${fLocation}\nPhone / WhatsApp: ${fPhone}\nMy Story: ${fStory}\n\n--- PAYMENT ---\nMembership Tier: ${payTier}\nPayment Choice: ${fPayChoice}\nPreferred Method: ${fPayMethod}\nPayment Status: ${PAYMENT_PENDING ? 'PENDING - Amount To Be Decided' : 'Amount: ' + PAYMENT_AMOUNT}`
  const whatsappLink = `https://wa.me/256000000000?text=${encodeURIComponent(whatsappMsg)}`

  const tiers = [
    { name: 'Standard', desc: 'Name + Photo + Year From-To + Job + Location on the Wall', badge: 'MOST POPULAR' },
    { name: 'Supporter', desc: 'Standard + Full Story featured + Invite to reunions + Mentor badge', badge: '' },
    { name: 'Gold Patron', desc: 'Supporter + TOP SPOT + Gold border + Business / Mentor feature', badge: 'TOP' },
  ]

  // RENDER ONE ALUMNI CARD - TEMPLATE FOR ALL TIERS
  const AlumniCard = ({ a }: { a: Alumnus }) => {
    const isGold = a.tier === 'Gold Patron'
    const isSupporter = a.tier === 'Supporter'
    return (
      <button onClick={()=>setSelected(a)} className={`text-left rounded-3xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1 w-full h-full ${isGold ? 'border-[3px] border-yellow-400 bg-[#FFFBEB] shadow-lg' : isSupporter ? 'border-2 border-blue-200 bg-blue-50/50' : 'border bg-white'}`}>
        <div className='relative h-[170px] bg-gray-100'>
          {a.photo ? <img src={a.photo} alt={a.fullName} className='w-full h-full object-cover' /> : <div className={`w-full h-full ${a.color} flex items-center justify-center text-white font-black text-4xl`}>{a.initials}</div>}
          {a.isTemplate && <span className='absolute top-2 left-2 bg-black text-white text-[9px] px-2 py-1 rounded-full font-bold'>TEMPLATE • SAMPLE - NOT REAL</span>}
          {isGold && <span className='absolute top-2 right-2 bg-yellow-400 text-black text-[9px] px-2 py-1 rounded-full font-black'>⭐ GOLD PATRON • TOP</span>}
          {isSupporter && <span className='absolute top-2 right-2 bg-blue-600 text-white text-[9px] px-2 py-1 rounded-full font-bold'>SUPPORTER</span>}
          <div className='absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2.5 py-1 rounded-full font-bold'>{a.yearFrom} - {a.yearTo} • {a.yearTo - a.yearFrom + 1} yrs at IPSS</div>
        </div>
        <div className='p-4'>
          <p className='font-black text-[15px] leading-tight'>{a.fullName}</p>
          <p className='text-[12px] text-gray-600 mt-1'>{a.currentRole} • {a.location}</p>
          <div className='mt-3 flex flex-wrap gap-1.5 text-[10px] font-bold'>
            <span className='bg-purple-100 text-[#7C3AED] px-2 py-1 rounded-full'>Year From: {a.yearFrom}</span>
            <span className='bg-purple-100 text-[#7C3AED] px-2 py-1 rounded-full'>Year To: {a.yearTo}</span>
            <span className='bg-yellow-100 px-2 py-1 rounded-full'>{a.level}</span>
            <span className='bg-green-100 px-2 py-1 rounded-full'>{a.combination}</span>
            <span className='bg-gray-100 px-2 py-1 rounded-full'>{a.tier}</span>
          </div>
          <p className='text-[12px] text-gray-600 mt-3 italic leading-relaxed line-clamp-3'>“{a.story}”</p>
          <p className='text-[11px] text-[#7C3AED] font-bold mt-3'>View Full Profile →</p>
        </div>
      </button>
    )
  }

  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO */}
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <div className='flex flex-wrap gap-2'><Float><span className='inline-flex bg-white/15 border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest'>ALUMNI • SINCE 1999</span></Float><span className='inline-flex bg-[#FDE047] text-black px-3 py-1.5 rounded-full text-[10px] font-black'>⏳ PAYMENT: PENDING</span></div>
            <h1 className='mt-3 text-4xl md:text-5xl font-black uppercase leading-[0.95]'>Alumni<br/>Wall Of Fame</h1>
            <p className='mt-3 text-white/85 text-[14px] max-w-2xl'>From 5 students in 1999 to graduates across Uganda and abroad. See the template below to know exactly how you will appear on the Wall.</p>
            <PopIn><button onClick={()=>document.getElementById('template')?.scrollIntoView({behavior:'smooth'})} className='mt-6 bg-[#FDE047] text-black px-7 py-3 rounded-full font-black text-[12px]'>See Template - How You Will Look →</button></PopIn>
          </FadeIn>
        </div>
      </section>

      {/* TEMPLATE SECTION */}
      <section id='template' className='bg-[#FFFBEB] border-b-2 border-yellow-300'>
        <div className='max-w-7xl mx-auto px-6 py-10'>
          <FadeIn>
            <div className='flex flex-wrap justify-between items-start gap-3'>
              <div><div className='flex gap-2 items-center flex-wrap'><h2 className='font-black text-2xl'>🖼️ Template - How Alumni Will Appear On The Wall</h2><span className='bg-black text-white text-[10px] px-2 py-1 rounded-full font-bold'>SAMPLE ONLY</span></div><p className='text-[13px] text-gray-600 mt-1'>This is the exact layout every alumnus gets. Choose your tier in the form below - your card will look like the matching sample.</p></div>
              <button onClick={()=>setShowTemplate(!showTemplate)} className='bg-gray-900 text-white px-4 py-2 rounded-full text-[12px] font-bold shrink-0'>{showTemplate ? 'Hide Template ▲' : 'Show Template ▼'}</button>
            </div>
          </FadeIn>

          {showTemplate && (
            <>
              <Stagger className='mt-5 flex gap-2 text-[12px] font-bold flex-wrap'>
                <StaggerItem><button onClick={()=>setView('grid')} className={view==='grid' ? 'bg-[#7C3AED] text-white px-4 py-2 rounded-full' : 'bg-white border px-4 py-2 rounded-full'}>▦ Grid View</button></StaggerItem>
                <StaggerItem><button onClick={()=>setView('list')} className={view==='list' ? 'bg-[#7C3AED] text-white px-4 py-2 rounded-full' : 'bg-white border px-4 py-2 rounded-full'}>☰ List View</button></StaggerItem>
                <StaggerItem><button onClick={()=>setView('featured')} className={view==='featured' ? 'bg-[#7C3AED] text-white px-4 py-2 rounded-full' : 'bg-white border px-4 py-2 rounded-full'}>⭐ Featured View</button></StaggerItem>
              </Stagger>

              {view==='grid' && (
                <Stagger key='grid' className='grid md:grid-cols-3 gap-4 mt-5'>
                  {TEMPLATE_ALUMNI.map((a,i)=><StaggerItem key={i}><AlumniCard a={a} /></StaggerItem>)}
                </Stagger>
              )}

              {view==='list' && (
                <Stagger key='list' className='space-y-3 mt-5'>
                  {TEMPLATE_ALUMNI.map((a,i)=>(
                    <StaggerItem key={i}>
                      <button onClick={()=>setSelected(a)} className='w-full bg-white border rounded-2xl p-3 flex gap-3 items-center text-left hover:shadow-lg'>
                        <img src={a.photo} className='w-16 h-16 rounded-full object-cover shrink-0' alt={a.fullName} />
                        <div className='flex-1 min-w-0'><p className='font-black text-[14px] truncate'>{a.fullName} <span className='text-[10px] bg-black text-white px-2 py-0.5 rounded-full ml-1'>TEMPLATE</span></p><p className='text-[12px] text-gray-600'>{a.currentRole} • {a.location} • {a.yearFrom} - {a.yearTo} • {a.level} • {a.combination}</p><p className='text-[11px] text-gray-500 italic truncate'>“{a.story}”</p></div>
                        <span className='bg-[#7C3AED] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shrink-0'>View →</span>
                      </button>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}

              {view==='featured' && (
                <FadeIn key='featured'>
                  <div className='mt-5 bg-white border-2 border-yellow-400 rounded-3xl overflow-hidden grid md:grid-cols-2'>
                    <img src={TEMPLATE_ALUMNI[2].photo} className='w-full h-[280px] md:h-full object-cover' alt='Gold Patron Template' />
                    <div className='p-6'><span className='bg-yellow-400 text-black text-[10px] px-2 py-1 rounded-full font-black'>⭐ FEATURED • GOLD PATRON • TEMPLATE</span><p className='font-black text-[22px] mt-3'>{TEMPLATE_ALUMNI[2].fullName}</p><p className='text-[13px] text-gray-600 mt-1'>{TEMPLATE_ALUMNI[2].currentRole} • {TEMPLATE_ALUMNI[2].location}</p><div className='mt-3 flex flex-wrap gap-2 text-[11px] font-bold'><span className='bg-purple-100 px-2 py-1 rounded-full'>Year From: {TEMPLATE_ALUMNI[2].yearFrom}</span><span className='bg-purple-100 px-2 py-1 rounded-full'>Year To: {TEMPLATE_ALUMNI[2].yearTo}</span><span className='bg-yellow-100 px-2 py-1 rounded-full'>{TEMPLATE_ALUMNI[2].level}</span><span className='bg-green-100 px-2 py-1 rounded-full'>{TEMPLATE_ALUMNI[2].combination}</span></div><p className='text-[13px] text-gray-600 mt-3 italic'>“{TEMPLATE_ALUMNI[2].story}”</p><p className='text-[11px] text-gray-400 mt-3'>Gold Patrons get this big Featured spot at the top of the Wall.</p></div>
                  </div>
                </FadeIn>
              )}

              <Stagger className='mt-5 bg-white border rounded-2xl p-4 grid md:grid-cols-4 gap-3 text-[12px]'>
                <StaggerItem><div><p className='font-black'>📸 Photo</p><p className='text-gray-600 mt-1'>Your photo or initials if no photo</p></div></StaggerItem>
                <StaggerItem><div><p className='font-black'>👤 Full Name</p><p className='text-gray-600 mt-1'>As you write it in the form</p></div></StaggerItem>
                <StaggerItem><div><p className='font-black'>📅 Year From - To</p><p className='text-gray-600 mt-1'>e.g. 2015 - 2018 + years at IPSS</p></div></StaggerItem>
                <StaggerItem><div><p className='font-black'>💼 Job + Story</p><p className='text-gray-600 mt-1'>Current role, location, level, combination & story</p></div></StaggerItem>
              </Stagger>
            </>
          )}
        </div>
      </section>

      {/* FILTER BY YEARS */}
      <section className='bg-[#FDF4FF] border-b border-purple-100 sticky top-[64px] z-40'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <FadeIn><p className='font-black text-[13px] text-[#7C3AED]'>🔍 Find Real Alumni By Years</p></FadeIn>
          <FadeIn delay={0.1}>
            <div className='mt-3 grid md:grid-cols-5 gap-3'>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search by Full Name or Job...' className='md:col-span-2 border rounded-full px-4 py-2.5 text-[13px] outline-none focus:border-[#7C3AED]' />
              <select value={fromYear} onChange={e=>setFromYear(e.target.value===''?'':Number(e.target.value))} className='border rounded-full px-4 py-2.5 text-[13px] bg-white outline-none'><option value=''>Year From - Any</option>{YEARS.map(y=><option key={y} value={y}>{y}</option>)}</select>
              <select value={toYear} onChange={e=>setToYear(e.target.value===''?'':Number(e.target.value))} className='border rounded-full px-4 py-2.5 text-[13px] bg-white outline-none'><option value=''>Year To - Any</option>{YEARS.map(y=><option key={y} value={y}>{y}</option>)}</select>
              <select value={level} onChange={e=>setLevel(e.target.value)} className='border rounded-full px-4 py-2.5 text-[13px] bg-white outline-none'><option>All</option><option>S1 - S4</option><option>S5 - S6</option><option>S1 - S6</option></select>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REAL WALL */}
      <section className='max-w-7xl mx-auto px-6 py-10'>
        <FadeIn><h3 className='font-black text-[18px]'>Real Alumni Wall <span className='text-[12px] font-normal text-gray-500'>({filtered.length} confirmed)</span></h3></FadeIn>
        {filtered.length === 0 ? (
          <PopIn><div className='text-center py-10 bg-gray-50 rounded-3xl border border-dashed mt-4'><p className='text-4xl'>🎓</p><p className='font-black mt-2'>No real alumni yet - be the first!</p><p className='text-[12px] text-gray-500 mt-1'>Template above shows how you will look. Fill the form below.</p></div></PopIn>
        ) : (
          <Stagger className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>{filtered.map((a,i)=><StaggerItem key={i}><AlumniCard a={a} /></StaggerItem>)}</Stagger>
        )}
      </section>

      {/* MODAL - FULL PROFILE TEMPLATE */}
      {selected && (
        <div className='fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 overflow-y-auto' onClick={()=>setSelected(null)}>
          <PopIn>
            <div className='bg-white rounded-3xl max-w-lg w-full overflow-hidden my-8' onClick={e=>e.stopPropagation()}>
              <div className='relative h-[220px]'><img src={selected.photo} className='w-full h-full object-cover' alt={selected.fullName} />{selected.isTemplate && <span className='absolute top-3 left-3 bg-black text-white text-[10px] px-2 py-1 rounded-full font-bold'>TEMPLATE • SAMPLE</span>}<button onClick={()=>setSelected(null)} className='absolute top-3 right-3 bg-white w-9 h-9 rounded-full font-bold'>✕</button></div>
              <div className='p-6'>
                <p className='font-black text-[20px]'>{selected.fullName}</p><p className='text-[13px] text-gray-500'>{selected.currentRole} • {selected.location} • {selected.tier}</p>
                <div className='mt-4 bg-purple-50 rounded-2xl p-4 text-[13px] space-y-1.5'><p><b>Full Name:</b> {selected.fullName}</p><p><b>Year From:</b> {selected.yearFrom} &nbsp; <b>Year To:</b> {selected.yearTo}</p><p><b>Years at IPSS:</b> {selected.yearTo - selected.yearFrom + 1} years</p><p><b>Level:</b> {selected.level} &nbsp; <b>Combination:</b> {selected.combination}</p><p><b>Current Role:</b> {selected.currentRole}</p><p><b>Location:</b> {selected.location}</p></div>
                <p className='text-[13px] text-gray-600 mt-4 italic'>“{selected.story}”</p>
                <button onClick={()=>setSelected(null)} className='mt-5 w-full bg-gray-900 text-white py-3 rounded-full font-bold text-[12px]'>Close</button>
              </div>
            </div>
          </PopIn>
        </div>
      )}

      {/* PAYMENT - PENDING */}
      <section className='bg-[#FFFBEB] border-y border-yellow-200'>
        <div className='max-w-7xl mx-auto px-6 py-10'>
          <FadeIn><div className='flex flex-wrap gap-3 items-center'><h2 className='font-black text-2xl'>Alumni Membership & Payment</h2><span className='bg-yellow-400 text-black px-3 py-1.5 rounded-full text-[11px] font-black'>⏳ PENDING - TO BE DECIDED</span></div><p className='text-[13px] text-gray-600 mt-2'>Do NOT send money yet. Choose your tier, join free now, pay later when school decides.</p></FadeIn>
          <Stagger className='grid md:grid-cols-3 gap-4 mt-6'>
            {tiers.map(t=>(
              <StaggerItem key={t.name}>
                <div onClick={()=>setPayTier(t.name)} className={payTier===t.name ? 'border-2 border-[#7C3AED] bg-white rounded-3xl p-5 cursor-pointer shadow-lg relative h-full' : 'border bg-white rounded-3xl p-5 cursor-pointer h-full'}>
                  {t.badge && <span className='absolute -top-2 left-4 bg-[#7C3AED] text-white text-[10px] px-2 py-1 rounded-full font-bold'>{t.badge}</span>}
                  <p className='font-black'>{t.name}</p><p className='text-[12px] text-gray-600 mt-1'>{t.desc}</p>
                  <div className='mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center'><p className='text-[10px] font-bold text-gray-500'>AMOUNT</p><p className='font-black'>{PAYMENT_PENDING ? '⏳ TO BE DECIDED' : PAYMENT_AMOUNT}</p></div>
                  {payTier===t.name && <p className='mt-3 text-[11px] bg-[#7C3AED] text-white px-3 py-1.5 rounded-full inline-block font-bold'>✓ SELECTED</p>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn><button disabled className='mt-4 bg-gray-300 text-gray-500 px-6 py-3 rounded-full font-bold text-[12px] cursor-not-allowed'>Pay Now - Disabled (Pending)</button></FadeIn>
        </div>
      </section>

      {/* JOIN FORM */}
      <section id='join' className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-2 gap-8'>
          <SlideIn from='left'><div><h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>Join The Alumni Wall</h2><p className='text-[13px] text-gray-600 mt-2'>Your card will look exactly like the Template above. Fill form → WhatsApp → School verifies → You appear on Wall.</p><div className='mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-[12px]'><p className='font-bold'>⏳ Payment: PENDING</p><p className='text-gray-600 mt-1'>Selected: <b>{payTier}</b> • Amount: <b>To Be Decided</b></p></div></div></SlideIn>
          <SlideIn from='right'>
            <div className='bg-white border-2 border-purple-100 rounded-3xl p-6'>
              <p className='font-black'>Alumni Registration Form</p>
              <div className='mt-4 space-y-3 text-[13px]'>
                <div><label className='font-bold text-[12px]'>Full Name *</label><input value={fullName} onChange={e=>setFullName(e.target.value)} placeholder='e.g. John Mukasa Balikowa' className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none' /></div>
                <div className='grid grid-cols-2 gap-3'>
                  <div><label className='font-bold text-[12px]'>Year From *</label><select value={fFrom} onChange={e=>setFFrom(e.target.value)} className='w-full border rounded-xl px-4 py-2.5 mt-1 bg-white outline-none'><option value=''>From</option>{YEARS.map(y=><option key={y}>{y}</option>)}</select></div>
                  <div><label className='font-bold text-[12px]'>Year To *</label><select value={fTo} onChange={e=>setFTo(e.target.value)} className='w-full border rounded-xl px-4 py-2.5 mt-1 bg-white outline-none'><option value=''>To</option>{YEARS.map(y=><option key={y}>{y}</option>)}</select></div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <div><label className='font-bold text-[12px]'>Level</label><select value={fLevel} onChange={e=>setFLevel(e.target.value)} className='w-full border rounded-xl px-4 py-2.5 mt-1 bg-white outline-none'><option>S1 - S4 (O Level)</option><option>S5 - S6 (A Level)</option><option>S1 - S6 (Both)</option></select></div>
                  <div><label className='font-bold text-[12px]'>Combination</label><input value={fCombination} onChange={e=>setFCombination(e.target.value)} placeholder='e.g. PCM, HEG' className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none' /></div>
                </div>
                <div><label className='font-bold text-[12px]'>Current Job / Role</label><input value={fRole} onChange={e=>setFRole(e.target.value)} placeholder='e.g. Teacher, Nurse, Engineer' className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none' /></div>
                <div className='grid grid-cols-2 gap-3'>
                  <div><label className='font-bold text-[12px]'>Location</label><input value={fLocation} onChange={e=>setFLocation(e.target.value)} placeholder='e.g. Iganga' className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none' /></div>
                  <div><label className='font-bold text-[12px]'>Phone / WhatsApp</label><input value={fPhone} onChange={e=>setFPhone(e.target.value)} placeholder='0772...' className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none' /></div>
                </div>
                <div><label className='font-bold text-[12px]'>My IPSS Story</label><textarea value={fStory} onChange={e=>setFStory(e.target.value)} placeholder='What did IPSS give you?' rows={3} className='w-full border rounded-xl px-4 py-2.5 mt-1 outline-none resize-none' /></div>
                <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-4'><p className='font-bold text-[12px]'>💰 Payment - ⏳ PENDING</p><p className='text-[11px] text-gray-600 mt-1'>Tier: <b>{payTier}</b> • Amount: <b>To Be Decided</b></p><div className='grid grid-cols-2 gap-2 mt-2'><select value={fPayChoice} onChange={e=>setFPayChoice(e.target.value)} className='border rounded-xl px-3 py-2.5 bg-white text-[12px]'><option>I will pay later - when amount is decided</option><option>I want to be notified when payment opens</option></select><select value={fPayMethod} onChange={e=>setFPayMethod(e.target.value)} className='border rounded-xl px-3 py-2.5 bg-white text-[12px]'><option>MTN MoMo</option><option>Airtel Money</option><option>Bank Transfer</option><option>Cash at School</option></select></div></div>
                <a href={whatsappLink} target='_blank' className='block text-center bg-[#25D366] text-white py-3.5 rounded-full font-black text-[13px]'>Send Via WhatsApp → Join Wall (Free For Now)</a>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      <Footer/>
    </main>
  )
}