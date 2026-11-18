'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { defaultContent, getContent, saveContent } from '@/data/siteContent'

const PASSWORD = "IPSS2026"

const TABS = ['Dashboard','Home','About','Academics','Boarding','Gallery','News','Alumni','Contact','Apply','Settings']

export default function Cockpit(){
  const [unlocked, setUnlocked] = useState(false)
  const [pass, setPass] = useState('')
  const [tab, setTab] = useState('Dashboard')
  const [data, setData] = useState<any>(defaultContent)
  const [savedMsg, setSavedMsg] = useState('')

  useEffect(()=>{ setData(getContent()) },[])

  const set = (key: string, value: string) => setData((d:any)=>({...d, [key]: value}))

  const doSave = () => {
    saveContent(data)
    setSavedMsg('✅ Saved! Go to site and refresh to see changes.')
    setTimeout(()=>setSavedMsg(''), 3000)
  }

  if(!unlocked) return (
    <main className='min-h-screen bg-[#111827] flex items-center justify-center px-6'>
      <div className='bg-white rounded-3xl p-6 w-full max-w-sm text-center shadow-2xl'>
        <p className='text-4xl'>✈️</p>
        <p className='font-black text-2xl mt-2'>IPSS Cockpit</p>
        <p className='text-[12px] text-gray-500 mt-1'>Admin Only - Controls Whole Website</p>
        <input type='password' value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter' && pass===PASSWORD) setUnlocked(true) }} placeholder='Enter password' className='w-full border rounded-xl px-4 py-3 mt-4 text-[13px] outline-none focus:border-[#7C3AED]' />
        <button onClick={()=>{ if(pass===PASSWORD) setUnlocked(true); else alert('Wrong password') }} className='w-full mt-3 bg-[#7C3AED] text-white py-3 rounded-full font-black text-[13px]'>Unlock Cockpit →</button>
        <p className='text-[11px] text-gray-400 mt-3'>Do not share this link + password with students.</p>
      </div>
    </main>
  )

  const input = 'w-full border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-[#7C3AED] bg-white'
  const label = 'font-bold text-[12px] block mb-1 mt-4'
  const sectionTitle = 'font-black text-[16px] mt-2'

  return (
    <main className='bg-gray-50 min-h-screen pb-20'>
      <header className='bg-[#7C3AED] text-white px-6 py-4 sticky top-0 z-10 flex flex-wrap gap-3 justify-between items-center'>
        <div>
          <p className='font-black text-[16px]'>✈️ IPSS Cockpit</p>
          <p className='text-[11px] text-white/70'>Edit whole website A-Z • No code needed</p>
        </div>
        <div className='flex gap-2'>
          <Link href='/' target='_blank' className='bg-white text-black px-4 py-2 rounded-full font-bold text-[12px]'>👁️ View Site</Link>
          <button onClick={doSave} className='bg-[#FDE047] text-black px-5 py-2 rounded-full font-black text-[12px]'>💾 Save All Changes</button>
          <button onClick={()=>setUnlocked(false)} className='bg-white/20 px-4 py-2 rounded-full font-bold text-[12px]'>Lock 🔒</button>
        </div>
      </header>

      {savedMsg && <p className='max-w-5xl mx-auto px-6 mt-4 bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl text-[13px] font-bold'>{savedMsg}</p>}

      <div className='max-w-5xl mx-auto px-6 py-6'>
        <div className='flex flex-wrap gap-2'>
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)} className={`px-4 py-2 rounded-full text-[12px] font-bold ${tab===t ? 'bg-[#7C3AED] text-white' : 'bg-white border'}`}>{t}</button>
          ))}
        </div>

        <div className='bg-white rounded-3xl p-6 mt-4 shadow'>

          {tab==='Dashboard' && (
            <div>
              <p className={sectionTitle}>Welcome to Cockpit 👋</p>
              <p className='text-[13px] text-gray-600 mt-2'>This controls the whole website. Change text here → Click <b>Save All Changes</b> → Refresh the site to see it.</p>
              <div className='grid md:grid-cols-3 gap-3 mt-4 text-[12px]'>
                <div className='bg-purple-50 p-4 rounded-2xl'><b>1. Edit</b><br/>Pick a tab above, change text</div>
                <div className='bg-yellow-50 p-4 rounded-2xl'><b>2. Save</b><br/>Click Save All Changes (top right)</div>
                <div className='bg-green-50 p-4 rounded-2xl'><b>3. Check</b><br/>Click View Site, refresh page</div>
              </div>
              <div className='mt-4 bg-red-50 border border-red-100 p-4 rounded-2xl text-[12px]'><b>⚠️ Important:</b> For now, edits save on THIS phone/laptop only. Next step we connect online database so everyone sees changes. Do not clear browser data.</div>
            </div>
          )}

          {tab==='Home' && (
            <div>
              <p className={sectionTitle}>Home Page</p>
              <label className={label}>Hero Badge</label><input value={data.homeHeroBadge} onChange={e=>set('homeHeroBadge', e.target.value)} className={input} />
              <label className={label}>Hero Title</label><input value={data.homeHeroTitle} onChange={e=>set('homeHeroTitle', e.target.value)} className={input} />
              <label className={label}>Hero Subtitle</label><input value={data.homeHeroSubtitle} onChange={e=>set('homeHeroSubtitle', e.target.value)} className={input} />
              <label className={label}>About Short Text (Home)</label><textarea value={data.homeAboutText} onChange={e=>set('homeAboutText', e.target.value)} rows={3} className={input} />
            </div>
          )}

          {tab==='About' && (
            <div>
              <p className={sectionTitle}>About Page</p>
              <label className={label}>About Title</label><input value={data.aboutTitle} onChange={e=>set('aboutTitle', e.target.value)} className={input} />
              <label className={label}>Our Story</label><textarea value={data.aboutStory} onChange={e=>set('aboutStory', e.target.value)} rows={4} className={input} />
              <label className={label}>Founder Name</label><input value={data.founderName} onChange={e=>set('founderName', e.target.value)} className={input} />
              <label className={label}>Founder Title</label><input value={data.founderTitle} onChange={e=>set('founderTitle', e.target.value)} className={input} />
              <label className={label}>Founded Year</label><input value={data.foundedYear} onChange={e=>set('foundedYear', e.target.value)} className={input} />
            </div>
          )}

          {tab==='Academics' && (
            <div>
              <p className={sectionTitle}>Academics Page</p>
              <label className={label}>Academics Title</label><input value={data.academicsTitle} onChange={e=>set('academicsTitle', e.target.value)} className={input} />
              <label className={label}>Subtitle</label><input value={data.academicsSubtitle} onChange={e=>set('academicsSubtitle', e.target.value)} className={input} />
              <label className={label}>O Level Text</label><textarea value={data.oLevelText} onChange={e=>set('oLevelText', e.target.value)} rows={2} className={input} />
              <label className={label}>A Level Text</label><textarea value={data.aLevelText} onChange={e=>set('aLevelText', e.target.value)} rows={2} className={input} />
              <label className={label}>Science Combinations</label><input value={data.scienceCombos} onChange={e=>set('scienceCombos', e.target.value)} className={input} />
              <label className={label}>Arts Combinations</label><input value={data.artsCombos} onChange={e=>set('artsCombos', e.target.value)} className={input} />
            </div>
          )}

          {tab==='Boarding' && (
            <div>
              <p className={sectionTitle}>Boarding Page</p>
              <label className={label}>Boarding Title</label><input value={data.boardingTitle} onChange={e=>set('boardingTitle', e.target.value)} className={input} />
              <label className={label}>Boarding Text</label><textarea value={data.boardingText} onChange={e=>set('boardingText', e.target.value)} rows={3} className={input} />
              <label className={label}>Boarding Fees Note</label><input value={data.boardingFeesNote} onChange={e=>set('boardingFeesNote', e.target.value)} className={input} />
            </div>
          )}

          {tab==='Gallery' && (
            <div>
              <p className={sectionTitle}>Gallery Page</p>
              <label className={label}>Gallery Title</label><input value={data.galleryTitle} onChange={e=>set('galleryTitle', e.target.value)} className={input} />
              <label className={label}>Gallery Subtitle</label><input value={data.gallerySubtitle} onChange={e=>set('gallerySubtitle', e.target.value)} className={input} />
              <p className='text-[12px] text-gray-500 mt-3'>Photos: For now, to change photos you still send me the new photo links. In Step 2 we add Upload Photo button here.</p>
            </div>
          )}

          {tab==='News' && (
            <div>
              <p className={sectionTitle}>News Page - Edit 3 Main News</p>
              <label className={label}>News 1 - Title</label><input value={data.news1Title} onChange={e=>set('news1Title', e.target.value)} className={input} />
              <label className={label}>News 1 - Text</label><textarea value={data.news1Text} onChange={e=>set('news1Text', e.target.value)} rows={2} className={input} />
              <label className={label}>News 1 - Date</label><input value={data.news1Date} onChange={e=>set('news1Date', e.target.value)} className={input} />
              <label className={label}>News 2 - Title</label><input value={data.news2Title} onChange={e=>set('news2Title', e.target.value)} className={input} />
              <label className={label}>News 2 - Text</label><textarea value={data.news2Text} onChange={e=>set('news2Text', e.target.value)} rows={2} className={input} />
              <label className={label}>News 2 - Date</label><input value={data.news2Date} onChange={e=>set('news2Date', e.target.value)} className={input} />
              <label className={label}>News 3 - Title</label><input value={data.news3Title} onChange={e=>set('news3Title', e.target.value)} className={input} />
              <label className={label}>News 3 - Text</label><textarea value={data.news3Text} onChange={e=>set('news3Text', e.target.value)} rows={2} className={input} />
              <label className={label}>News 3 - Date</label><input value={data.news3Date} onChange={e=>set('news3Date', e.target.value)} className={input} />
            </div>
          )}

          {tab==='Alumni' && (
            <div>
              <p className={sectionTitle}>Alumni Page</p>
              <label className={label}>Alumni Title</label><input value={data.alumniTitle} onChange={e=>set('alumniTitle', e.target.value)} className={input} />
              <label className={label}>Alumni Text</label><textarea value={data.alumniText} onChange={e=>set('alumniText', e.target.value)} rows={3} className={input} />
            </div>
          )}

          {tab==='Contact' && (
            <div>
              <p className={sectionTitle}>Contact Page</p>
              <label className={label}>Contact Title</label><input value={data.contactTitle} onChange={e=>set('contactTitle', e.target.value)} className={input} />
              <label className={label}>Contact Subtitle</label><textarea value={data.contactSubtitle} onChange={e=>set('contactSubtitle', e.target.value)} rows={2} className={input} />
              <label className={label}>Phone</label><input value={data.phone} onChange={e=>set('phone', e.target.value)} className={input} />
              <label className={label}>WhatsApp Number (start with 256, no +)</label><input value={data.whatsapp} onChange={e=>set('whatsapp', e.target.value)} className={input} />
              <label className={label}>Email</label><input value={data.email} onChange={e=>set('email', e.target.value)} className={input} />
              <label className={label}>Address</label><input value={data.address} onChange={e=>set('address', e.target.value)} className={input} />
              <label className={label}>Office Hours</label><input value={data.officeHours} onChange={e=>set('officeHours', e.target.value)} className={input} />
            </div>
          )}

          {tab==='Apply' && (
            <div>
              <p className={sectionTitle}>Apply Page</p>
              <label className={label}>Apply Title</label><input value={data.applyTitle} onChange={e=>set('applyTitle', e.target.value)} className={input} />
              <label className={label}>Apply Subtitle</label><textarea value={data.applySubtitle} onChange={e=>set('applySubtitle', e.target.value)} rows={2} className={input} />
              <label className={label}>Admission Badge</label><input value={data.admissionOpen} onChange={e=>set('admissionOpen', e.target.value)} className={input} />
              <p className='text-[12px] text-gray-500 mt-3'>To close admission, change badge to e.g. "ADMISSION CLOSED - Contact Us"</p>
            </div>
          )}

          {tab==='Settings' && (
            <div>
              <p className={sectionTitle}>Whole Website Settings</p>
              <label className={label}>School Name</label><input value={data.schoolName} onChange={e=>set('schoolName', e.target.value)} className={input} />
              <label className={label}>Motto</label><input value={data.motto} onChange={e=>set('motto', e.target.value)} className={input} />
              <label className={label}>Fees Note (shows everywhere)</label><input value={data.feesNote} onChange={e=>set('feesNote', e.target.value)} className={input} />
              <button onClick={()=>{ if(confirm('Reset everything to default?')){ localStorage.removeItem('ipss-cockpit-v1'); setData(defaultContent); alert('Reset done') } }} className='mt-6 bg-red-50 text-red-600 px-4 py-2 rounded-full text-[12px] font-bold'>Reset All To Default</button>
            </div>
          )}

          <button onClick={doSave} className='w-full mt-6 bg-[#25D366] text-white py-3.5 rounded-full font-black text-[13px]'>💾 Save Changes</button>
        </div>
      </div>
    </main>
  )
}