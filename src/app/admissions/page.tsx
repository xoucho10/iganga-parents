import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function Page(){
  return (
    <main className='bg-white min-h-screen'>
      <Navbar/>
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='bg-[#8E24AA] text-white rounded-2xl p-8'>
          <h1 className='text-3xl font-black uppercase'>admissions</h1>
          <p className='text-[13px] mt-2 opacity-90'>Iganga Parents Secondary School - admissions page - Quality Education Is Our Tradition - Cock Pen Book</p>
        </div>
        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          <div className='md:col-span-2 bg-white border rounded-2xl p-6'>
            <h2 className='font-bold text-[#4A148C]'>Welcome to admissions</h2>
            <p className='text-[13px] text-gray-600 mt-3 leading-relaxed'>This page will have full 1.5M content for admissions. We keep same header and footer on all pages so site looks professional on desktop and mobile. Content is loading - tell me which page you want detailed first and I will fill it with real IPSS information, photos, fees, UNEB results, etc.</p>
            <div className='mt-4 bg-[#FDF2FF] rounded-xl p-4 text-[11px]'>Same Navbar + Same Footer + Mobile responsive hamburger menu - works on phone and desktop.</div>
          </div>
          <div className='bg-[#F3E5F5] rounded-2xl p-5'><div className='font-bold text-sm text-[#4A148C]'>Quick Info</div><div className='text-[11px] mt-2 space-y-1 text-gray-700'><div>âœ“ S1-S6 O & A Level</div><div>âœ“ Boarding & Day</div><div>âœ“ UNEB Center</div><div>âœ“ Iganga District</div></div><a href='/admissions' className='mt-4 inline-block bg-[#8E24AA] text-white px-4 py-2 rounded-full text-[11px] font-bold'>Apply Now</a></div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
