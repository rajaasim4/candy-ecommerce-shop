import Footer from "../Components/Footer/Footer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Category from "../Layout/Category/Category";
import Details from "../Layout/Details/Details";
import Hero from "../Layout/Hero/Hero";
import SellerOfTheWeek from "../Layout/Seller/SellerOfTheWeek";
import Testimonial from "../Layout/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <SellerOfTheWeek />
      <Details />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
