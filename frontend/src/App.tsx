import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/Theme/ThemeProvider"
import Layout from "./components/common/Layout"
import Signup from "./pages/Signup"


export default function Home() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
