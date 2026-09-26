import './globals.css'
export const metadata = {
  title: 'Iganga Parents SS - Quality Education Is Our Tradition',
  description: 'O & A Level Boarding & Day UNEB Center Iganga',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}