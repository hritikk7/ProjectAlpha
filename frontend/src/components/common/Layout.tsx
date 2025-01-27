import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from '@/pages/landing'

const Layout = () => {
  return (
    <div>
      <div><Navbar /></div>
      <main>
        <div><HeroSection /></div>
      </main>
      <div><Footer /></div>
    </div>
  )
}

export default Layout