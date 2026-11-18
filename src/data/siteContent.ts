export const defaultContent = {
  // SETTINGS
  schoolName: "Iganga Parents Secondary School",
  shortName: "IPSS",
  phone: "0772 000 000",
  whatsapp: "256772000000",
  email: "info@ipss.ac.ug",
  address: "Iganga Municipality, Jinja Road - 1.5km from Town Centre",
  officeHours: "Mon - Sat: 8:00am - 4:00pm",
  motto: "Quality Education Is Our Tradition",
  admissionOpen: "ADMISSION 2026 • S1 - S6 OPEN",
  feesNote: "Flexible payment plans - ask us on WhatsApp",

  // HOME
  homeHeroTitle: "Quality Education Is Our Tradition",
  homeHeroSubtitle: "S1 - S6 • O & A Level • Boarding & Day • Iganga",
  homeHeroBadge: "ADMISSION 2026 • S1 - S6 OPEN",
  homeAboutText: "From 5 students in 1999 to a trusted school in Busoga - where academics, discipline and character meet.",

  // ABOUT
  aboutTitle: "About Iganga Parents SS",
  aboutStory: "Iganga Parents Secondary School is a private, mixed, day and boarding school located about 1.5km from the centre of Iganga Municipality.",
  founderName: "Hajji Asuman Mpaata",
  founderTitle: "Founder & Head Teacher",
  foundedYear: "1999",

  // ACADEMICS
  academicsTitle: "Academics At IPSS - S1 to S6",
  academicsSubtitle: "O Level (UCE) & A Level (UACE) under UNEB, with practical learning at the centre.",
  oLevelText: "Foundation years under the new lower secondary curriculum.",
  aLevelText: "Specialisation years for university & college.",
  scienceCombos: "PCM, PCB, BCM",
  artsCombos: "HEG, HEL, HED, BCA",

  // BOARDING
  boardingTitle: "Safe Boarding Life",
  boardingText: "Separate dorms for boys & girls, caring matrons, balanced meals, supervised prep.",
  boardingFeesNote: "Ask for boarding fees on WhatsApp",

  // GALLERY
  galleryTitle: "Life At IPSS",
  gallerySubtitle: "Academics, sports, talent and community.",

  // NEWS
  newsTitle: "News & Announcements",
  news1Title: "Admission 2026 Open - S1 to S6",
  news1Text: "Interviews Monday to Saturday. Come with result slip + 2 passport photos.",
  news1Date: "2026",
  news2Title: "USSSA Football - IPSS at National Championship",
  news2Text: "We represented Iganga at USSSA National Boys Football Championship 2026 in Lira.",
  news2Date: "2026",
  news3Title: "25 Years Celebration",
  news3Text: "We celebrated 25 years in 2024 - thank you to parents, alumni and community.",
  news3Date: "2024",

  // ALUMNI
  alumniTitle: "Alumni Who Defend Their Performance",
  alumniText: "Our graduates have gone on to universities and workplaces across the country.",

  // CONTACT / APPLY
  contactTitle: "Talk To Us",
  contactSubtitle: "Questions about admission, fees, boarding, visiting? Send us a message - we reply on WhatsApp.",
  applyTitle: "Apply S1 - S6 2026",
  applySubtitle: "Fill this form - it opens WhatsApp with everything pre-filled.",
}

export function getContent() {
  if (typeof window === 'undefined') return defaultContent
  try {
    const saved = localStorage.getItem('ipss-cockpit-v1')
    if (!saved) return defaultContent
    return { ...defaultContent, ...JSON.parse(saved) }
  } catch { return defaultContent }
}

export function saveContent(newContent: any) {
  localStorage.setItem('ipss-cockpit-v1', JSON.stringify(newContent))
  window.dispatchEvent(new Event('ipss-content-updated'))
}