import BestSelling from "../Components/BestSelling";
import BrowseByCategory from "../Components/BrowseByCategory";
import CategoryMenu from "../Components/CategoryMenu";
import FeaturesSection from "../Components/Features";
import FlashSales from "../Components/FlashSales";
import HeroSlider from "../Components/HeroSlider";
import NewArrival from "../Components/NewArrival";
import ProductGrid from "../Components/ProductGrid";
import PromoSection from "../Components/Promo";

const Home = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row"> 
          {/* <div className="col-md-3">
            <CategoryMenu />
          </div> */}

          <div className="col-md-12">
            <HeroSlider />
          </div>
        </div>
   

      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <PromoSection />
      <ProductGrid />
      <NewArrival />
      <FeaturesSection />
         </div>
    </>
  );
};

export default Home;



