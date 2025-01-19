import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import { ThemeProvider } from "./components/Theme/ThemeProvider"


export default function Home() {
  return (
    <ThemeProvider>
      <div className="h-screen w-screen bg-[#f4f1f8] dark:text-gray-300 dark:bg-black">
        <div><Navbar /></div>
        <div> <Footer /> </div>
      </div>
    </ThemeProvider>
  )
}
