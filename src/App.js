import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainSection from './Components/MainSectionComponents/mainsection.js';
import Footer from './Components/FooterComponents/footer.js';
import Enquiry from './Components/EnquiryComponents/enquiry.js';

import Pricing from './Components/PricingComponents/pricing.js';
import Feature from './Components/FeaturesComponents/feature.js';
import About from './Components/AboutComponents/about.js';
import WhyYs from './Components/WhyYSComponents/whyys.js';
import BookDemo from './Components/BookDemoComponents/bookdemo.js';
import Wwo from './Components/WwoComponents/wwo.js';
import SalonAuto from './Components/SalonAutoComponents/salonauto.js';
import SalonManage from './Components/SalonManageComponents/salonmanage.js';
import SalonSuccess from './Components/SalonSuccessComponents/salonsuccess.js';
import PrivacyPolicy from './Components/PrivacyPolicyComponents/privacypolicy.js';
import Nav from './Components/NavComponents/nav.js';



function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/mainsection' element={<MainSection/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/enquiry' element={<Enquiry/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/feature' element={<Feature/>}></Route>
      <Route path='/whyys' element={<WhyYs/>}></Route>
      <Route path='/bookdemo' element={<BookDemo/>}></Route>
      <Route path='/wwo' element={<Wwo/>}></Route>
      <Route path='/salonauto' element={<SalonAuto/>}></Route>
      <Route path='/salonmanage' element={<SalonManage/>}></Route>
      <Route path='/salonsuccess' element={<SalonSuccess/>}></Route>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}></Route>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
