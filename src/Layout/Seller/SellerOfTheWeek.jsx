import ProductCard from "../../Components/ProductCard/ProductCard";
import ShopProduct from "../../Data/ShopProduct";
const SellerOfTheWeek = () => {
  return (
    <div className="">
      <div className="text-center mb-5 py-3">
        <h3 className="text-4xl font-pacifico text-[#f4952c] font-medium ">
          Best Seller
        </h3>
        <h2 className="text-5xl font-medium font-pacifico">
          Seller of the Week
        </h2>
      </div>
      <div className="w-95 mx-auto flex flex-wrap justify-evenly my-7 xxl:w-[1700px]">
        {ShopProduct.slice(0, 4).map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default SellerOfTheWeek;
