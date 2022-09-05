
import './App.css';
import FirstNevnew from './component/firstnev New/FirstNevnew';
//import PrimarySearchAppBar from "./component/firstNavber/Firstnev";
import SecondNav from './component/secondNavber/SecondNav';
import TopBaground from './component/Top baground/TopBaground';
//import Header from './component/Header nev/Header';
//import Topslider from './component/topslider/Topslider';
import Discountproduct from './component/discountproduct/Discountproduct';
//import BrandsSection from './component/brands/BrandsSlide';
//import BrandNewSlide from './component/brands slidenew/BrandSlideNew';
import FetureProduct from './component/feture product/FetureProduct';
import LatestProducts from './component/Latest Products/LatestProducts';
import HolydayPic from './component/Holyday shoping/HolydayPic';
import CatagoriAndSeller from './component/catagori seller/CatagoriAndseller';
import Bestsellreting from './component/bestselling topratin/BestSellreting';
//import Ramadan from './component/ramadan festiv/Ramadan';
import Bagshose from './component/Bag shose/Bagshose';
import PhoneTelecom from './component/Phone telecom/PhoneTelecom';
import JewelaryWatch from './component/JEWELRY & WATCHES/Jewelarywatch';
import WomenFashion from './component/WOMEN\'S FASHION/WomenFashion';
import MenFashion from './component/MEN\'S FASHION/MensFashion';
import TramsCondition from './component/trams & condtion/TramsCondition';
import AboutCompany from './component/About company/AboutCompany';
//import ProdutDetails from './component/product Details/ProductDetails';
import Secondbrand from './component/second brands/Secondbrand';

function App() {
  return ( 
    <div className="App">
      
      <FirstNevnew/>
      
      <SecondNav/>
      <TopBaground/>
      <Secondbrand/>
      <Discountproduct/>

     {/* <BrandsSection/>*/} 
      <FetureProduct/>
      <LatestProducts/>
      <HolydayPic/>
      <CatagoriAndSeller/>
      <Bestsellreting/>
      
      <Bagshose/>
      <PhoneTelecom/>
      <JewelaryWatch/>
      <WomenFashion/>
      <MenFashion/>
      <TramsCondition/>
      <AboutCompany/>
     
    </div>
  );
}

export default App;
