'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FadeIn, PopIn, AnimatedCounter } from '@/components/Dynamic'

export default function About(){
  return (
    <main className='bg-white'>
      <Navbar/>

      {/* HERO */}
      <section className='relative w-full h-[400px] md:h-[500px] overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop" alt="Iganga Parents Secondary School" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#7C3AED]/90 via-[#9333EA]/70 to-black/60'></div>
        <div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white'>
          <FadeIn>
            <div className='inline-flex bg-[#FDE047] text-black px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider w-fit'>ABOUT US • SINCE 1999 • IGANGA</div>
            <h1 className='mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.95]'>About Iganga<br/>Parents <span className='text-[#FDE047]'>SS</span></h1>
            <p className='mt-3 text-white/90 text-[15px] max-w-xl leading-relaxed'>Quality Education Is Our Tradition. From 5 students in 1999 to a trusted school in Busoga - where academics, discipline and character meet.</p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link href='/apply' className='inline-block bg-[#FDE047] text-black px-7 py-3 rounded-full font-black text-[12px]'>Apply S1-S6 →</Link>
              <a href='#story' className='inline-block bg-white text-black px-7 py-3 rounded-full font-bold text-[12px]'>Read Our Story</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className='bg-[#FDE047]'>
        <div className='max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[12px] font-bold'>
          <div>📍 1.5km from Iganga Town Centre</div>
          <div>🎓 S1 - S6 • O & A Level • UNEB</div>
          <div>🏫 Private • Mixed • Day & Boarding</div>
          <div>⭐ Founded 1999 • <AnimatedCounter value={25} suffix='+ ' />Years</div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id='story' className='max-w-7xl mx-auto px-6 py-14'>
        <FadeIn>
          <div className='grid md:grid-cols-2 gap-10 items-start'>
            <div>
              <p className='text-[#9333EA] font-black tracking-widest text-[12px]'>OUR STORY SINCE 1999</p>
              <h2 className='font-black text-3xl md:text-4xl mt-2 leading-tight'>Teaching Children What Counts In Life.</h2>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-4'>Iganga Parents Secondary School is a private, mixed, day and boarding school located about 1.5km from the centre of Iganga Municipality, Iganga District.</p>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>It was established in 1999 by celebrated educationists of the Mpaata family, led by Hajji Asuman Mpaata as head teacher, with the mission of providing quality and affordable education to the community.</p>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>As the saying goes: <i>“Teaching kids to count is fine, but teaching kids what counts is best.”</i> We started from a low ebb with just five students and a handful of committed and determined teachers in 1999 - to teach students what counts in life.</p>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>Today, the school has become synonymous with academic excellence - consistently producing excellent results, backed by well-groomed and disciplined students who have defended their performance up to their workplaces across the country.</p>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>Our growth has been steady and purposeful: a well-stocked library, science laboratories, classroom blocks and sports grounds for both boys and girls - built to give every learner a real chance to succeed.</p>
              <p className='text-gray-600 text-[14px] leading-relaxed mt-3'>Many in Busoga now describe Iganga Parents as the <b>Regional Academic Supermarket</b> - a school where academics, sports, talent and character meet under one roof.</p>
              <p className='text-[11px] text-gray-400 mt-4'>Source: Watchdog Uganda - “25 Years On: With Only Five Students in 1999, Iganga Parents SS Continues to Hold the Education Torch in Busoga”</p>
              <div className='flex flex-wrap gap-2 mt-4'>
                <span className='inline-block bg-purple-100 text-[#7C3AED] px-3 py-1.5 rounded-full text-[11px] font-bold'>Quality</span>
                <span className='inline-block bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-[11px] font-bold'>Affordable</span>
                <span className='inline-block bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-[11px] font-bold'>Disciplined</span>
                <span className='inline-block bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-[11px] font-bold'>Community-Founded</span>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-3'>
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" className='w-full h-[200px] object-cover rounded-2xl' alt="Learning" />
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" className='w-full h-[200px] object-cover rounded-2xl mt-6' alt="Students" />
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" className='w-full h-[200px] object-cover rounded-2xl' alt="Campus" />
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" className='w-full h-[200px] object-cover rounded-2xl mt-6' alt="Sports" />
              </div>
              <div className='bg-[#7C3AED] text-white rounded-2xl p-5 mt-4'><p className='font-black text-[15px]'>“Quality Education Is Our Tradition”</p><p className='text-[12px] text-white/80 mt-1'>Our motto is a daily reminder - to students and teachers - to work tirelessly so that everyone who passes through IPSS becomes a man or woman of valour.</p></div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* TIMELINE */}
      <section className='bg-[#FDF4FF] border-y border-purple-100'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>Our Journey</h2><p className='text-[13px] text-gray-500 mt-1'>From a small start to a regional name.</p>
            <div className='grid md:grid-cols-4 gap-4 mt-6'>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='font-black text-[#9333EA] text-xl'>1999</p><p className='font-bold text-[13px] mt-1'>Founded With 5 Students</p><p className='text-[12px] text-gray-600 mt-1'>Founded by Mpaata family, led by Hajji Asuman Mpaata. A handful of committed teachers. One mission: quality & affordable education.</p></div>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='font-black text-[#9333EA] text-xl'>1999 - Today</p><p className='font-bold text-[13px] mt-1'>Steady Growth</p><p className='text-[12px] text-gray-600 mt-1'>Library, science labs, classroom blocks and sports grounds built. Alumni now in universities, colleges and workplaces across Uganda & abroad.</p></div>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='font-black text-[#9333EA] text-xl'>2020 - 2021</p><p className='font-bold text-[13px] mt-1'>COVID-19 Resilience</p><p className='text-[12px] text-gray-600 mt-1'>Two-year lockdown disrupted the calendar and forced some students to drop out. We rebuilt, welcomed learners back and kept the tradition alive.</p></div>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='font-black text-[#9333EA] text-xl'>2024 - 2026</p><p className='font-bold text-[13px] mt-1'>25 Years + National Stage</p><p className='text-[12px] text-gray-600 mt-1'>Celebrated 25 years in 2024. Represented Iganga at USSSA National Boys Football Championship 2026 in Lira.</p></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOUNDER + VISION */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <div className='grid md:grid-cols-3 gap-6 items-center'>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" className='w-full h-[360px] object-cover rounded-3xl' alt="Founder" />
            <div className='md:col-span-2'><p className='text-[#9333EA] font-black tracking-widest text-[12px]'>OUR FOUNDER</p><h3 className='font-black text-2xl md:text-3xl mt-2'>Hajji Asuman Mpaata</h3><p className='text-gray-600 text-[14px] leading-relaxed mt-3'>Celebrated educationist and founding head teacher of Iganga Parents Secondary School. He led the Mpaata family in starting the school to give the community quality and affordable education close to home - so that children from Iganga and Busoga would not have to travel far for a good school.</p><blockquote className='bg-purple-50 border-l-4 border-[#9333EA] p-4 rounded-r-2xl mt-4 text-[14px] italic'>“Quality Education Is Our Tradition serves as a constant reminder and call to both students and teachers to ensure those who pass through Iganga Parents become men and women of valour.”<span className='block not-italic font-bold text-[12px] mt-2'>- Hajji Asuman Mpaata, Founder</span></blockquote><p className='text-[11px] text-gray-400 mt-3'>Replace this photo with a real photo of Hajji Asuman Mpaata when you have it.</p></div>
          </div>
          <div className='grid md:grid-cols-3 gap-4 mt-8'>
            <div className='bg-[#7C3AED] text-white rounded-3xl p-6 h-full'><p className='font-black text-[16px]'>Our Motto</p><p className='text-[13px] mt-2 leading-relaxed'>Quality Education Is Our Tradition. We do not chase shortcuts - we build character, discipline and results, year after year.</p></div>
            <div className='bg-yellow-50 rounded-3xl p-6 border border-yellow-100 h-full'><p className='font-black text-[16px]'>Our Mission</p><p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>To provide quality and affordable education to the community - and to teach students what counts in life, not just how to count.</p></div>
            <div className='bg-green-50 rounded-3xl p-6 border border-green-100 h-full'><p className='font-black text-[16px]'>Our Vision</p><p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>To be a centre of academic excellence and good character in Busoga and Uganda - where every child is known, guided and given a chance to shine.</p></div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-4'>
            <div className='bg-white border rounded-2xl p-4 text-center h-full'><p className='text-xl'>🙏</p><p className='font-bold text-[13px] mt-1'>Faith & Valour</p><p className='text-[11px] text-gray-500 mt-1'>God-fearing, courageous young people</p></div>
            <div className='bg-white border rounded-2xl p-4 text-center h-full'><p className='text-xl'>📚</p><p className='font-bold text-[13px] mt-1'>Hard Work</p><p className='text-[11px] text-gray-500 mt-1'>Early prep, revision, consistency</p></div>
            <div className='bg-white border rounded-2xl p-4 text-center h-full'><p className='text-xl'>🤝</p><p className='font-bold text-[13px] mt-1'>Respect</p><p className='text-[11px] text-gray-500 mt-1'>For teachers, parents & each other</p></div>
            <div className='bg-white border rounded-2xl p-4 text-center h-full'><p className='text-xl'>🏡</p><p className='font-bold text-[13px] mt-1'>Community</p><p className='text-[11px] text-gray-500 mt-1'>Parents as partners, not visitors</p></div>
          </div>
        </FadeIn>
      </section>

      {/* ACADEMICS IN DETAIL */}
      <section className='bg-gray-50 border-y'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>Academics At IPSS - S1 to S6</h2><p className='text-[13px] text-gray-500 mt-1'>O Level (UCE) & A Level (UACE) under UNEB, with practical learning at the centre.</p>
            <div className='grid md:grid-cols-2 gap-6 mt-6'>
              <div className='bg-white rounded-3xl p-6 border h-full'>
                <p className='font-black text-[16px]'>S1 - S4 • O Level (UCE)</p>
                <p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>Foundation years under the new lower secondary curriculum. Learners build strong basics in sciences, maths, English and humanities - with continuous assessment, projects and practicals.</p>
                <div className='flex flex-wrap gap-2 mt-3 text-[11px]'><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Mathematics</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>English</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Biology</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Chemistry</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Physics</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Geography</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>History</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>CRE / IRE</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Agriculture</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>Commerce</span><span className='bg-purple-50 px-2.5 py-1 rounded-full font-bold'>ICT</span></div>
              </div>
              <div className='bg-white rounded-3xl p-6 border h-full'>
                <p className='font-black text-[16px]'>S5 - S6 • A Level (UACE)</p>
                <p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>Specialisation years for university & college. Students choose Arts or Sciences combinations with focused teaching, past-paper drills and career guidance.</p>
                <div className='grid grid-cols-2 gap-2 mt-3 text-[12px]'><div className='bg-yellow-50 p-3 rounded-xl'><b>Sciences:</b><br/>PCM, PCB, BCM</div><div className='bg-green-50 p-3 rounded-xl'><b>Arts:</b><br/>HEG, HEL, HED, BCA</div></div>
                <p className='text-[11px] text-gray-400 mt-3'>Confirm your exact combination at admission - we guide you based on your UCE results & career dream.</p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='text-2xl'>🔬</p><p className='font-bold mt-2'>Science Laboratories</p><p className='text-[12px] text-gray-600 mt-1'>Practical science for Biology, Chemistry & Physics - so learners don’t just read, they do.</p></div>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='text-2xl'>📖</p><p className='font-bold mt-2'>Well-Stocked Library</p><p className='text-[12px] text-gray-600 mt-1'>Reading, research and revision space. Quiet study, textbooks, novels and past papers.</p></div>
              <div className='bg-white rounded-2xl p-5 border h-full'><p className='text-2xl'>💻</p><p className='font-bold mt-2'>Computer / ICT</p><p className='text-[12px] text-gray-600 mt-1'>ICT skills for modern life, school projects and future jobs - from basic computer to internet research.</p></div>
            </div>
            <p className='text-center mt-6'><Link href='/academics' className='inline-block bg-[#7C3AED] text-white px-7 py-3 rounded-full font-bold text-[12px]'>Explore Academics Page →</Link></p>
          </FadeIn>
        </div>
      </section>

      {/* BOARDING + DISCIPLINE + DAILY LIFE */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <h2 className='font-black text-2xl md:text-3xl text-[#7C3AED]'>Boarding Life, Discipline & A Day At IPSS</h2>
          <div className='grid md:grid-cols-3 gap-4 mt-6'>
            <div className='bg-purple-50 rounded-3xl p-6 h-full'><p className='text-2xl'>🏫</p><p className='font-black text-[15px] mt-2'>Safe Boarding Life</p><ul className='text-[13px] text-gray-600 mt-2 space-y-2'><li>• Separate dorms for boys & girls</li><li>• Caring matrons & wardens on duty</li><li>• Balanced meals & clean water</li><li>• School clinic & first aid</li><li>• Supervised evening prep</li><li>• Visitation & communication with parents</li></ul></div>
            <div className='bg-yellow-50 rounded-3xl p-6 h-full'><p className='text-2xl'>🙏</p><p className='font-black text-[15px] mt-2'>Discipline & Character</p><ul className='text-[13px] text-gray-600 mt-2 space-y-2'><li>• Early morning prep & assembly</li><li>• Smart uniform & good grooming</li><li>• Respect for teachers & fellow learners</li><li>• Devotion, guidance & counselling</li><li>• Prefects & student leadership</li><li>• Clear rules, fairly applied</li></ul></div>
            <div className='bg-green-50 rounded-3xl p-6 h-full'><p className='text-2xl'>🌅</p><p className='font-black text-[15px] mt-2'>A Typical Day</p><ul className='text-[13px] text-gray-600 mt-2 space-y-2'><li>• <b>Morning:</b> Prep, devotion, assembly, lessons</li><li>• <b>Midday:</b> Lessons, practicals, library</li><li>• <b>Afternoon:</b> Games, clubs, MDD, debate</li><li>• <b>Evening:</b> Supervised prep & revision</li><li>• <b>Weekend:</b> Cleaning, sports, church/mosque, rest</li></ul></div>
          </div>
        </FadeIn>
      </section>

      {/* SPORTS & TALENTS */}
      <section className='bg-[#111827] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center'>
          <FadeIn>
            <p className='text-[#FDE047] font-black text-[12px] tracking-widest'>SPORTS • ARTS • TALENT</p><h3 className='font-black text-2xl md:text-3xl mt-2'>More Than Books - We Build Talent Too</h3><p className='text-[13px] text-white/80 mt-3 leading-relaxed'>In sports, football, netball, athletics, music and performing arts, the school has scooped dozens of accolades over the years. We compete in USSSA competitions, including the USSSA National Boys Football Championship 2026 in Lira.</p><ul className='text-[13px] mt-4 space-y-2'><li>⚽ Football - Boys & Girls</li><li>🏐 Netball</li><li>🏃 Athletics</li><li>🎭 Music, Dance & Drama (MDD)</li><li>🗣️ Debate, Writers Club & Scouts</li></ul><p className='text-[11px] text-white/50 mt-3'>Source: Watchdog Uganda & USSSA 2026 draw / results.</p>
          </FadeIn>
          <FadeIn>
            <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop" className='w-full h-[320px] object-cover rounded-3xl' alt="Sports" />
          </FadeIn>
        </div>
      </section>

      {/* SAFEGUARDING + PARENTS */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='border rounded-3xl p-6 h-full'><p className='font-black text-[17px]'>🛡️ Safety & Child Protection</p><p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>Your child’s safety comes first. We maintain supervised dorms and classrooms, controlled visitors, clear reporting channels for any concern, and close communication with parents. If your child has a health issue, allergy or special need, tell us at admission so we can support them properly.</p><p className='text-[13px] text-gray-600 mt-2'>We welcome learners from all backgrounds and faiths.</p></div>
            <div className='border rounded-3xl p-6 h-full'><p className='font-black text-[17px]'>🤝 Parents As Partners</p><p className='text-[13px] text-gray-600 mt-2 leading-relaxed'>We were founded by parents, for parents. We keep you close through:</p><ul className='text-[13px] text-gray-600 mt-2 space-y-1'><li>• Regular reports & academic follow-up</li><li>• Visitation days & parents meetings</li><li>• Direct contact with class teachers & administration</li><li>• Guidance on fees, discipline & career choices</li></ul></div>
          </div>
        </FadeIn>
      </section>

      {/* LEADERSHIP */}
      <section className='max-w-7xl mx-auto px-6 pb-12'>
        <FadeIn>
          <h2 className='font-black text-2xl text-[#7C3AED]'>School Leadership</h2><p className='text-[13px] text-gray-500 mt-1'>Only verified name is below. Send me real names + photos for the rest - I will not invent them.</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
            <div className='border rounded-2xl p-4 text-center bg-purple-50 h-full'><div className='w-16 h-16 bg-[#9333EA] text-white rounded-full mx-auto flex items-center justify-center font-black'>HM</div><div className='font-bold text-[13px] mt-2'>Hajji Asuman Mpaata</div><div className='text-[11px] text-gray-500'>Founder & Head Teacher</div><p className='text-[10px] text-gray-400 mt-1'>Verified</p></div>
            <div className='border border-dashed rounded-2xl p-4 text-center h-full'><div className='w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center'>+</div><div className='font-bold text-[13px] mt-2'>Deputy Headteacher</div><div className='text-[11px] text-gray-500'>Send name + photo</div></div>
            <div className='border border-dashed rounded-2xl p-4 text-center h-full'><div className='w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center'>+</div><div className='font-bold text-[13px] mt-2'>Director of Studies</div><div className='text-[11px] text-gray-500'>Send name + photo</div></div>
            <div className='border border-dashed rounded-2xl p-4 text-center h-full'><div className='w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center'>+</div><div className='font-bold text-[13px] mt-2'>Board Chairperson</div><div className='text-[11px] text-gray-500'>Send name + photo</div></div>
          </div>
        </FadeIn>
      </section>

      {/* ALUMNI */}
      <section className='max-w-7xl mx-auto px-6 pb-12'>
        <FadeIn>
          <div className='bg-[#FDF4FF] rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center border border-purple-100'>
            <div><h3 className='font-black text-2xl'>Alumni Who Defend Their Performance</h3><p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>Our graduates have gone on to prestigious universities and colleges, both local and outside Uganda, and to workplaces across the country - where they continue to defend the discipline and excellence they learned at IPSS.</p><p className='text-[13px] text-gray-600 mt-2'>If you are an alumnus, we want to hear your story. Come back, mentor a student, or support the next generation.</p><Link href='/alumni' className='mt-4 inline-block bg-[#7C3AED] text-white px-6 py-3 rounded-full font-bold text-[12px]'>Share Your Alumni Story</Link></div>
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop" className='w-full h-[260px] object-cover rounded-2xl' alt="Graduates" />
          </div>
        </FadeIn>
      </section>

      {/* ADMISSIONS */}
      <section className='bg-[#7C3AED] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <FadeIn>
            <h2 className='font-black text-2xl md:text-3xl'>Admission - How To Join IPSS</h2>
            <div className='grid md:grid-cols-4 gap-4 mt-6 text-[13px]'>
              <div className='bg-white/10 rounded-2xl p-5 h-full'><p className='font-black'>1. Visit / Call</p><p className='text-white/80 mt-1'>Visit the school in Iganga Municipality or contact us via WhatsApp / phone.</p></div>
              <div className='bg-white/10 rounded-2xl p-5 h-full'><p className='font-black'>2. Interview</p><p className='text-white/80 mt-1'>Interview Monday to Saturday. Come with result slip & passport photos.</p></div>
              <div className='bg-white/10 rounded-2xl p-5 h-full'><p className='font-black'>3. Choose Day / Boarding</p><p className='text-white/80 mt-1'>Choose Day or Boarding, S1-S6, and your A Level combination if joining S5.</p></div>
              <div className='bg-white/10 rounded-2xl p-5 h-full'><p className='font-black'>4. Start Learning</p><p className='text-white/80 mt-1'>Get uniform, books list & reporting date. Welcome to the IPSS family.</p></div>
            </div>
            <div className='mt-6 flex flex-wrap gap-3'><Link href='/apply' className='bg-[#FDE047] text-black px-7 py-3 rounded-full font-black text-[12px]'>Apply Now - S1 to S6</Link><Link href='/boarding' className='bg-white/10 border border-white/20 px-7 py-3 rounded-full font-bold text-[12px]'>Boarding Info</Link></div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <FadeIn>
          <h2 className='font-black text-2xl text-[#7C3AED]'>Frequently Asked Questions</h2>
          <div className='grid md:grid-cols-2 gap-4 mt-6 text-[13px]'>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>Where is the school located?</p><p className='text-gray-600 mt-1'>About 1.5km from the centre of Iganga Municipality, Iganga District, along Jinja Road. Easy to reach by boda, taxi or private car.</p></div>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>Is it day or boarding? Boys & girls?</p><p className='text-gray-600 mt-1'>Both. We are a private, mixed, day and boarding school for boys and girls.</p></div>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>Which classes do you offer?</p><p className='text-gray-600 mt-1'>S1 to S6 - O Level (UCE) and A Level (UACE) under UNEB. Sciences & Arts combinations at A Level.</p></div>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>When was the school founded?</p><p className='text-gray-600 mt-1'>In 1999, by the Mpaata family led by Hajji Asuman Mpaata. We celebrated 25 years in 2024.</p></div>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>What do I need to join?</p><p className='text-gray-600 mt-1'>Result slip (PLE for S1, UCE for S5), passport photos, and an interview. Contact us for the full requirements list.</p></div>
            <div className='border rounded-2xl p-5 h-full'><p className='font-bold'>Do you support talents & sports?</p><p className='text-gray-600 mt-1'>Yes - football, netball, athletics, MDD, debate, writers club and scouts. We compete at district & national level.</p></div>
          </div>
        </FadeIn>
      </section>

      {/* FIND US - NO MAP, JUST LINK */}
      <section className='bg-gray-50 border-t'>
        <div className='max-w-7xl mx-auto px-6 py-12 text-center'>
          <FadeIn>
            <h2 className='font-black text-2xl text-[#7C3AED]'>Find Us In Iganga</h2>
            <p className='text-[13px] text-gray-500 mt-1'>About 1.5km from Iganga Town Centre, Iganga Municipality, Iganga District.</p>
            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Iganga+Parents+Secondary+School,+Iganga,+Uganda" target="_blank" className='bg-[#7C3AED] text-white px-8 py-3.5 rounded-full font-bold text-[13px]'>📍 Get Directions From My Location →</a>
              <Link href='/contact' className='bg-white border px-8 py-3.5 rounded-full font-bold text-[13px]'>Contact Us →</Link>
            </div>
           
          </FadeIn>
        </div>
      </section>

      <Footer/>
    </main>
  )
}