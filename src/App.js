import './App.css'; 
import Header from "./components/header";
import BannerI from "./components/bannerI";
import BannerII from "./components/bannerII";
import MySkill from "./components/mySkill";
import MyProject from "./components/myProject";
import MyContact from "./components/contact";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";
import { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
  

  const [sidebar, setSideBar] = useState(false)

  const navHandle = () => {
    setSideBar(!sidebar)
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#031c26]">
      <Header navHandle={navHandle} sidebar={sidebar}/>
      {sidebar && <SideBar navHandle={navHandle}/>}
      <BannerI/>
      <BannerII/>
      <MySkill/>
      <MyProject/>
      <MyContact/>
      <Footer/>
    </div>
  );
}

export default App;
