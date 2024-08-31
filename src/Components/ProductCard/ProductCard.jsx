import { AiTwotoneStar, CiShoppingBasket } from "react-icons/all";
// import cake from "../../assets/Images/Cake.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../ShoppingCart/Cart/CartSlice";
import { toast } from "sonner";
const ProductCard = (props) => {
  const dispatch = useDispatch();

  const { id, name, price, imgsrc, category, rating } = props;

  const AddToCart = () => {
    dispatch(
      addToCart(props)
      // addToCart({
      //   id,
      //   name,
      //   price,
      //   imgsrc,
      // })
    );
    toast.success("Product Added to Cart");
  };
  return (
    <div className=" w-[330px] h-[500px]  ">
      <div className="bg-[#f2f1ec] rounded-3xl overflow-hidden py-4 group relative">
        <img src={imgsrc} alt="" />
        <button
          className="bg-white h-14 w-8/12 rounded-2xl flex justify-evenly items-center text-base px-4 hover:bg-[#f4952c] hover:text-white duration-300 absolute -bottom-14 group-hover:bottom-0 left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2 sm:bottom-0 sm:-translate-y-4"
          onClick={AddToCart}
        >
          <span className="text-2xl">
            <CiShoppingBasket />
          </span>
          <span>Add to Cart</span>
        </button>
      </div>
      <div className=" mt-5 flex flex-col items-center">
        <div className="flex">
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          {/* <span className="    text-xl">
            <CiStar />
          </span> */}
        </div>
        <h4 className=" text-2xl font-medium">{name}</h4>
        <h4 className="text-[#f4952c] text-2xl font-medium">${price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
