import React, { useState } from "react";
import {
  CgClose,
  CiMail,
  CiMenuFries,
  CiMobile2,
  CiShoppingBasket,
} from "react-icons/all";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import Cart from "../../assets/Images/empty-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../ShoppingCart/Cart/CartSlice";
const NavBar = () => {
  const [show, setShow] = useState(false);
  let NavbarShow = () => {
    setShow(!show);
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);

  let totalQunatity = data.cart
    .map((val) => {
      return val.quantity;
    })
    .reduce((prev, next) => prev + next, 0);
  return (
    <>
      <header className="">
        <div className="bg-black py-5">
          <div className="w-95 h-full mx-auto flex justify-between items-center gap-4  sm:flex-col sm:justify-center xxl:w-[1700px]">
            <div className="flex  items-center gap-x-7">
              <Link
                to="/LogIn"
                className="text-[#b9b9b9]  text-md font-quicksand hover:text-white duration-300"
              >
                Log in
              </Link>
              <Link
                to="/SignUp"
                className="text-[#b9b9b9] text-md font-quicksand hover:text-white duration-300"
              >
                SignUp
              </Link>
            </div>
            <div className="">
              <address className="flex gap-x-5 font-quicksand not-italic flex-wrap xsm:justify-center">
                <div className="text-white text-2xl flex items-center gap-x-3">
                  <span className="">
                    <CiMobile2 />
                  </span>
                  <span className="text-[#b9b9b9] text-[14px] font-medium">
                    +1 86.36.166
                  </span>
                </div>
                <div className="text-white text-2xl flex items-center gap-x-3">
                  <span className="">
                    <CiMail />
                  </span>
                  <span className="text-[#b9b9b9] text-[14px] font-medium">
                    contact@yourdomain.com
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
        <nav className="py-8 ">
          <div className=" w-95 h-2/5 flex items-center justify-between mx-auto gap-x-3 xxl:w-[1700px]">
            <div className="w-max ">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="w-10/12  flex items-center justify-between border-l-2 border-black h-10 md:justify-end">
              <div
                className={` ${
                  show ? "md:w-full" : "md:w-0"
                } w-5/12 slg:w-8/12 md:fixed md:top-0 md:right-0 md:flex  md:h-full md:glassy-text md:justify-center  md:overflow-x-hidden z-[999999]  duration-500 `}
              >
                {show && (
                  <button
                    className="absolute top-5 right-5  text-3xl hidden md:block "
                    onClick={NavbarShow}
                  >
                    <CgClose />
                  </button>
                )}
                <ul className="flex justify-evenly md:flex-col md:h-full md:w-full md:items-center ">
                  <li>
                    <NavLink
                      onClick={NavbarShow}
                      to="/"
                      className="font-sans font-medium text-base md:text-xl md:p-4"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={NavbarShow}
                      to="/About"
                      className="text-base hover:font-medium font-sans md:text-xl md:p-4"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={NavbarShow}
                      to="/Shop"
                      className="text-base hover:font-medium font-sans md:text-xl md:p-4"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={NavbarShow}
                      to="/Contact"
                      className="text-base hover:font-medium font-sans md:text-xl md:p-4"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <button
                  className="bg-[#f4952c] h-12 w-44  text-base rounded-full text-white  flex items-center justify-evenly relative group sm:w-20"
                  // onClick={window.location.href("/LogIn")}
                >
                  <span className="sm:hidden">Basket ({totalQunatity})</span>
                  <span className="font-dark text-2xl">
                    <CiShoppingBasket />
                  </span>
                  <div className="absolute top-12 right-0 rounded-lg w-96  bg-white shadow-xl   gap-y-3  hidden group-hover:flex duration-300 z-40 sm:group-hover:hidden">
                    {totalQunatity <= 0 ? (
                      <>
                        <div className="min-h-[300px] flex justify-center items-center flex-col w-full">
                          <img src={Cart} alt="" className="w-7/12" />
                          <h4 className="text-gray-500 text-2xl font-medium font-quicksand  shadow-slate-300">
                            Cart is Empty
                          </h4>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-h-[300px] text-black flex justify-between flex-col w-full rounded-lg ">
                          <div className=" h-[200px] rounded-lg py-6 px-4 flex flex-col overflow-y-auto gap-y-4 ">
                            {data.cart.map((item, Index) => {
                              return (
                                <React.Fragment key={Index}>
                                  <div className=" hover:bg-slate-100 px-3 rounded-lg flex gap-x-3 relative ">
                                    <div className="h-24 w-24 bg-[#f2f1ec] rounded-lg grid place-items-center">
                                      <img src={item.imgsrc} alt="" />
                                    </div>
                                    <div className="">
                                      <h4 className="font-medium">
                                        {item.name}
                                      </h4>
                                      <h4 className="font-medium text-[#f4952c]">
                                        {item.quantity} x ${item.price}.00
                                      </h4>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                      <span
                                        onClick={() =>
                                          dispatch(removeToCart(item.id))
                                        }
                                      >
                                        <CgClose />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="h-[2px] w-full border border-t-[1px] bg-slate-300"></div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                          <div className=" w-full py-4 bg-slate-50 rounded-lg">
                            <div className="flex justify-between px-4">
                              <h4>Sub Total</h4>
                              <h5 className="font-medium">
                                ${data.totalPrice}
                              </h5>
                            </div>
                            <Link to="/Cart">
                              <span className="bg-[#f4952c] h-12 w-11/12 rounded-full mt-5 text-white text-base hover:bg-black duration-300 flex justify-center items-center mx-auto">
                                Cart
                              </span>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
            <div className=" hidden md:block">
              <button className="text-2xl" onClick={NavbarShow}>
                <CiMenuFries />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
