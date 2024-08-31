import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const LogIn = () => {
  return (
    <>
      <div className="w-95 mx-auto flex justify-center items-center flex-col xxl:min-h-screen ">
        <h2 className="text-center text-3xl mb-5">Welcome to Our Shop</h2>
        <div className="w-6/12  flex justify-center flex-col items-center gap-y-4 sm:w-95">
          <div className="flex flex-col gap-y-4 sm:w-full">
            <label htmlFor="" className="text-lg">
              User Name or Email
            </label>

            <input
              type="text"
              className="broder border-2 border-gray-300 rounded-md px-2 py-3 w-96 outline-none sm:w-full"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-4 sm:w-full">
            <label htmlFor="" className="text-lg">
              Password
            </label>

            <input
              type="Password"
              className="broder border-2 border-gray-300 rounded-md px-2 py-3 w-96 outline-none sm:w-full"
              placeholder="*********"
            />
          </div>
          <button className="outline-none w-96 mt-6 duration-300 hover:bg-black h-12 bg-[#f4952c] rounded-full text-white sm:w-full ">
            Submit
          </button>
          <p>
            Don&apos;t have Account yet?
            <Link
              to="/SignUp"
              className="mx-1 hover:text-[#f4952c] duration-200 text-lg"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
