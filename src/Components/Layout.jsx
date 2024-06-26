import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";

import { SpeedInsights } from "@vercel/speed-insights/react"

const Layout = () => {
  return (
   <div className="flex flex-col relative">
    <div className="sticky top-0 z-[999]">
         <Navbar/>
    </div>
   <Outlet/>
   <Footer/>

    <SpeedInsights/>
   <ScrollToTopOnRouteChange/>
   </div>
  )
}

export default Layout
