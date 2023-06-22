import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/all";
import {
  addToCart,
  decrementItem,
  removeToCart,
} from "../../ShoppingCart/Cart/CartSlice";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
const Cart = () => {
  const data = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-95 mx-auto flex gap-4 md:flex-col-reverse">
        <div className="w-8/12 md:w-full ">
          <div className="w-full">
            <h2 className="my-4 text-3xl">Shopping Bag</h2>
            {data.cart.length === 0 ? (
              <h2 className="my-5 px-3 text-3xl text-center">Cart is Empty</h2>
            ) : (
              <table className="w-full border-2">
                <thead className="border md:hidden">
                  <tr className="text-center h-14">
                    <th></th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                  </tr>
                </thead>
                <tbody className="mt-2">
                  {data.cart.map((item, Index) => {
                    return (
                      <tr
                        className="text-center h-36 md:h-max md:mb-5 sm:flex md:items-center md:flex-col "
                        key={Index}
                      >
                        <td className=" ">
                          <span
                            onClick={() => dispatch(removeToCart(item.id))}
                            className="pl-5"
                          >
                            <IoCloseOutline className="cursor-pointer" />
                          </span>
                        </td>
                        <td className="text-center " data-aria-label="Product">
                          {/* <div className="flex justify-center"> */}
                          <img
                            src={item.imgsrc}
                            alt=""
                            className="w-24 h-24 inline-block"
                          />
                          {/* </div> */}
                        </td>
                        <td data-aria-label="Name" className="">
                          {item.name}
                        </td>
                        <td data-aria-label="Price" className="">
                          ${item.price}
                        </td>
                        <td data-aria-label="Qunatity" className="">
                          <button
                            className="w-10 h-10 bg-[#f4952c] text-white rounded-xl text-xl"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="w-10 h-10 bg-[#f4952c] text-white rounded-xl text-xl"
                            onClick={() => dispatch(decrementItem(item.id))}
                          >
                            -
                          </button>
                        </td>
                        <td data-aria-label="SubTotal" className="">
                          ${item.subTotal}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="w-4/12 md:w-full">
          <h2 className="my-4 text-3xl">Total</h2>
          <div className=" px-4 py-10 border-2 border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg">Sub Total</h3>
              <h3 className="text-3xl">${data.totalPrice}</h3>
            </div>

            <div className="flex justify-between items-center my-5">
              <h3 className="text-lg">Total</h3>
              <h3 className="text-4xl">${data.totalPrice}</h3>
            </div>
            <Link to="/Checkout">
              <button className="w-8/12 bg-black text-white py-4 text-lg block mx-auto mt-6">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Cart;
