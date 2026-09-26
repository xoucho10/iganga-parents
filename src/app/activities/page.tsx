import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Activities(){
  return (
    <main className='bg-white'>
      <Navbar/>

      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='inline-flex bg-white/15 border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest'>SPORTS • MDD • CLUBS • TALENT • DISCIPLINE</div>
          <h1 className='mt-3 text-4xl md:text-5xl font-black uppercase leading-[0.9]'>Activities &<br/>Clubs</h1>
          <p className='mt-3 text-white/85 text-[13px] max-w-2xl leading-relaxed'>At IPSS we develop the whole child - Cock wakes early for sports, Pen writes debate speeches, Book studies in clubs. Football, netball, volleyball, athletics, music dance drama, debate, scouts, Scripture Union, Science Club, Red Cross. Inter-house competitions every term.</p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-3 gap-6'>

          <div className='bg-white border rounded-2xl p-6 shadow-sm'>
            <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>⚽</div>
            <h3 className='font-black text-[#4A148C] mt-3'>Sports & Games</h3>
            <p className='text-[11px] text-gray-600 mt-2 leading-relaxed'>Physical education 4pm-5:30pm daily. Inter-house, inter-school, district competitions.</p>
            <ul className='text-[11px] mt-3 space-y-1.5 text-gray-700'>
              <li>- Football (Boys) - District champions 2023</li>
              <li>- Netball (Girls) - Top 3 Iganga 2024</li>
              <li>- Volleyball - Boys & Girls</li>
              <li>- Athletics - 100m, 400m, relay, long jump</li>
              <li>- Table Tennis, Chess</li>
            </ul>
            <div className='mt-3 bg-green-50 p-2 rounded-lg text-[10px]'>Training: Mon/Wed/Fri - Coach on ground</div>
          </div>

          <div className='bg-[#1A0A2E] text-white rounded-2xl p-6'>
            <div className='w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-black font-black'>♫</div>
            <h3 className='font-black text-[#FFEB3B] mt-3'>Music Dance & Drama - MDD</h3>
            <p className='text-[11px] mt-2 opacity-80 leading-relaxed'>MDD is our pride. Traditional, modern dance, drama, poetry. We represent Iganga District every year.</p>
            <ul className='text-[11px] mt-3 space-y-1.5 opacity-90'>
              <li>- Traditional dances: Maganda, Larakaraka</li>
              <li>- Modern dance & Drama</li>
              <li>- Poetry, storytelling</li>
              <li>- School choir - Sunday service</li>
              <li>- Instruments: Drums, tube fiddle</li>
            </ul>
            <div className='mt-3 bg-white/10 p-2 rounded-lg text-[10px]'>MDD practice: Tue/Thu 4pm, Saturday 9am</div>
          </div>

          <div className='bg-white border rounded-2xl p-6 shadow-sm'>
            <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>🎤</div>
            <h3 className='font-black text-[#4A148C] mt-3'>Debate & Leadership</h3>
            <p className='text-[11px] text-gray-600 mt-2 leading-relaxed'>Pen writes speeches. We train confident speakers, leaders, prefects.</p>
            <ul className='text-[11px] mt-3 space-y-1.5 text-gray-700'>
              <li>- Debate Club - Inter-school champions</li>
              <li>- Writers Club - School magazine Pen & Book</li>
              <li>- Prefects body - Head boy/girl elected</li>
              <li>- Public speaking every Monday assembly</li>
              <li>- Leadership training, patriotism</li>
            </ul>
            <div className='mt-3 bg-blue-50 p-2 rounded-lg text-[10px]'>Debate: Every Friday 4pm, Hall</div>
          </div>

          <div className='border rounded-2xl p-5'>
            <h3 className='font-bold text-sm'>Clubs at IPSS</h3>
            <div className='mt-3 grid grid-cols-2 gap-2 text-[11px]'>
              <div className='bg-purple-50 rounded-lg p-2.5'><div className='font-bold'>Science Club</div><div className='text-[10px] text-gray-500'>Innovations, experiments</div></div>
              <div className='bg-green-50 rounded-lg p-2.5'><div className='font-bold'>ICT Club</div><div className='text-[10px] text-gray-500'>Coding, computer skills</div></div>
              <div className='bg-yellow-50 rounded-lg p-2.5'><div className='font-bold'>Scouts</div><div className='text-[10px] text-gray-500'>Discipline, camping</div></div>
              <div className='bg-red-50 rounded-lg p-2.5'><div className='font-bold'>Red Cross</div><div className='text-[10px] text-gray-500'>First aid, community</div></div>
              <div className='bg-blue-50 rounded-lg p-2.5'><div className='font-bold'>Scripture Union</div><div className='text-[10px] text-gray-500'>Fellowship, prayer</div></div>
              <div className='bg-orange-50 rounded-lg p-2.5'><div className='font-bold'>Entrepreneurship</div><div className='text-[10px] text-gray-500'>Business skills</div></div>
            </div>
          </div>

          <div className='border rounded-2xl p-5 md:col-span-2'>
            <h3 className='font-bold text-sm text-[#4A148C]'>Weekly Activities Timetable</h3>
            <div className='mt-3 overflow-x-auto'>
              <table className='w-full text-[11px]'>
                <thead className='bg-gray-50 text-[10px] text-gray-500'><tr><th className='p-2 text-left'>DAY</th><th className='p-2'>4PM-5:30PM</th><th className='p-2'>EVENING</th></tr></thead>
                <tbody className='divide-y text-[11px]'>
                  <tr><td className='p-2 font-bold'>Monday</td><td className='p-2'>Games - Football, Netball</td><td className='p-2'>Debate prep</td></tr>
                  <tr><td className='p-2 font-bold'>Tuesday</td><td className='p-2'>MDD Practice</td><td className='p-2'>Science Club</td></tr>
                  <tr><td className='p-2 font-bold'>Wednesday</td><td className='p-2'>Games - Athletics</td><td className='p-2'>SU Fellowship</td></tr>
                  <tr><td className='p-2 font-bold'>Thursday</td><td className='p-2'>MDD + Clubs</td><td className='p-2'>ICT Club</td></tr>
                  <tr><td className='p-2 font-bold'>Friday</td><td className='p-2'>Debate Competition</td><td className='p-2'>General Cleaning</td></tr>
                  <tr><td className='p-2 font-bold'>Saturday</td><td className='p-2'>Inter-house / MDD 9am</td><td className='p-2'>Free / Visitation last Sat</td></tr>
                  <tr><td className='p-2 font-bold'>Sunday</td><td className='p-2'>Chapel 8am</td><td className='p-2'>Prep 2pm-5pm</td></tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 bg-[#FDF2FF] rounded-xl p-3 text-[11px]'><b>House System:</b> 4 Houses - Cock (Red), Pen (Blue), Book (Yellow), Tradition (Green). Points for academics, discipline, sports, MDD. Trophy each term.</div>
          </div>

        </div>
      </section>

      <Footer/>
    </main>
  )
}