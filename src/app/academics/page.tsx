import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Academics(){
  return (
    <main className='bg-white'>
      <Navbar/>
      <section className='bg-[#8E24AA] text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <h1 className='text-4xl md:text-5xl font-black uppercase'>Academics & Staff</h1>
          <p className='mt-2 text-white/80 text-[13px] max-w-2xl'>S1-S6 - UNEB Centre - All teachers with photos, subjects, qualifications. Pen and book is our tradition.</p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10'>
        <h2 className='font-black text-[#4A148C] text-xl'>All Teachers - By Department - With Photos</h2>
        <p className='text-[11px] text-gray-500 mt-1'>Replace pravatar images with real teacher photos in /public/teachers/</p>

        <div className='mt-6'>
          <h3 className='font-bold text-sm bg-[#F3E5F5] inline-block px-3 py-1 rounded-full'>Sciences Department</h3>
          <div className='mt-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=15' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Isabirye Robert</div><div className='text-[10px] text-[#8E24AA]'>HOD Sciences</div><div className='text-[10px] text-gray-500'>Physics / Math - BSc Makerere</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=26' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Ms. Achieng Grace</div><div className='text-[10px] text-[#8E24AA]'>Biology / Chemistry</div><div className='text-[10px] text-gray-500'>BSc, PGDE - 8 yrs</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=14' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Okello Peter</div><div className='text-[10px] text-[#8E24AA]'>Math / ICT</div><div className='text-[10px] text-gray-500'>BSc, Comp Sci</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=30' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Waiswa Moses</div><div className='text-[10px] text-[#8E24AA]'>Chemistry</div><div className='text-[10px] text-gray-500'>Lab Master</div></div>
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='font-bold text-sm bg-blue-50 inline-block px-3 py-1 rounded-full'>Arts & Humanities</h3>
          <div className='mt-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=32' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Ms. Namatovu Jane</div><div className='text-[10px] text-blue-600'>Deputy - HOD Arts</div><div className='text-[10px] text-gray-500'>English / Literature</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=16' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Kirya Samuel</div><div className='text-[10px] text-blue-600'>History / CRE</div><div className='text-[10px] text-gray-500'>BA, MA History</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=33' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mrs. Nalubega Prossy</div><div className='text-[10px] text-blue-600'>Geography</div><div className='text-[10px] text-gray-500'>Patron MDD</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=12' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Mukisa Henry</div><div className='text-[10px] text-blue-600'>Commerce / Entrepreneurship</div><div className='text-[10px] text-gray-500'>B.Com</div></div>
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='font-bold text-sm bg-green-50 inline-block px-3 py-1 rounded-full'>Boarding & Support</h3>
          <div className='mt-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=28' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Ms. Babirye Aisha</div><div className='text-[10px] text-green-600'>Matron - Girls</div><div className='text-[10px] text-gray-500'>Boarding welfare</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=19' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Mr. Tenywa Godfrey</div><div className='text-[10px] text-green-600'>Warden - Boys</div><div className='text-[10px] text-gray-500'>Discipline, games</div></div>
            <div className='border rounded-2xl p-4 text-center'><img src='https://i.pravatar.cc/100?img=24' className='w-16 h-16 rounded-full mx-auto'/><div className='font-bold text-[12px] mt-2'>Ms. Nankya Faith</div><div className='text-[10px] text-green-600'>Nurse</div><div className='text-[10px] text-gray-500'>First aid, clinic</div></div>
            <div className='border-2 border-dashed rounded-2xl p-4 text-center bg-gray-50'><div className='w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center'>+</div><div className='font-bold text-[12px] mt-2'>Add Teacher</div><div className='text-[10px] text-gray-500'>Upload photo to /public/teachers/ and add card</div></div>
          </div>
        </div>

      </section>
      <Footer/>
    </main>
  )
}
