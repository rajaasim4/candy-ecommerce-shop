import { useSelector } from "react-redux";
import InputFeild from "../../Components/InputField/InputFeild";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
const Checkout = () => {
  const data = useSelector((state) => state.cart);
  return (
    <>
      <div className="w-95 mx-auto">
        <div className=""></div>
        <div className="flex md:flex-col md:gap-y-9">
          <div className="w-8/12 mt-6 md:w-full">
            <div className=""></div>
            <div className="">
              <form action="">
                <InputFeild id="name" title="Name" />
                <InputFeild id="email" title="Email" />
                <InputFeild id="number" title="Phone Number" />
                <InputFeild id="address" title="Address" />
                <label htmlFor="">Enter Mesasge</label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border-2 border-slate-300 rounded-md py-2 px-3 outline-none w-9/12 my-3 md:w-full"
                  placeholder="Enter Your Message "
                ></textarea>
                <button className="text-white rounded-full w-36 py-4 bg-[#f4952c] block duration-300 hover:bg-black ">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-4/12 md:w-full ">
            <div className="flex justify-between border py-5 px-4">
              <h3>Product</h3>
              <h3>Sub total</h3>
            </div>
            <div className="h-[200px] overflow-y-scroll border">
              {data.cart.map((item) => {
                return (
                  <div className="flex justify-between p-4 " key={item.id}>
                    <h3>{item.name}</h3>
                    <h3>${item.subTotal}</h3>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between border py-5 px-4">
              <h3>Total</h3>
              <h3 className="text-3xl">${data.totalPrice}</h3>
            </div>
            <button
              className="w-8/12 bg-black text-white py-4 text-lg duration-300 hover:bg-[#f4952c] block mx-auto mt-6 rounded-full"
              onClick={() => alert("Thanks For your Order Placing")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Checkout;
