import { Navbar } from "./Comonents/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./Comonents/Footer/Footer"
export const App = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

