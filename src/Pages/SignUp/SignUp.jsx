import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
const SignUp = () => {
  return (
    <>
      <div className="w-95 mx-auto flex justify-center items-center flex-col pt-5 pb-10 ">
        <h2 className="text-center text-3xl mb-5">Welcome to Our Shop</h2>
        <div className="w-6/12  flex justify-center flex-col items-center gap-y-4 sm:w-95">
          <div className="flex flex-col gap-y-4 sm:w-full">
            <label htmlFor="" className="text-lg">
              User Name
            </label>

            <input
              type="text"
              className="broder border-2 border-gray-300 rounded-md px-2 py-3 w-96 outline-none sm:w-full"
              placeholder="john wick"
            />
          </div>
          <div className="flex flex-col gap-y-4 sm:w-full">
            <label htmlFor="" className="text-lg">
              Email
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
          <div className="flex flex-col gap-y-4 sm:w-full">
            <label htmlFor="" className="text-lg">
              Phone Number
            </label>

            <input
              type="tel"
              className="broder border-2 border-gray-300 rounded-md px-2 py-3 w-96 outline-none sm:w-full"
              placeholder="012-345-678"
            />
          </div>
          <button className="outline-none w-96 mt-6 duration-300 hover:bg-black h-12 bg-[#f4952c] rounded-full text-white sm:w-full ">
            Submit
          </button>
          <p>
            Already have an have Account?
            <Link
              to="/LogIn"
              className="mx-1 hover:text-[#f4952c] duration-200 text-lg"
            >
              LogIn
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
