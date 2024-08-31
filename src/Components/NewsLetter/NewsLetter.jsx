import { motion } from "framer-motion";
const NewsLetter = () => {
  return (
    <>
      <div className="my-5 py-10">
        <div className="w-95 mx-auto bg-overlaybg  after:bg-[length:100%_100%]   after:bg-no-repeat min-h-[643px] rounded-3xl overflow-hidden relative after:absolute after:contents-[] after:top-0 after:left-0 after:w-full after:h-full  after:bg-newsletterbg after:bg-center  after:-z-10 flex justify-center  items-center xxl:w-[1700px] sm:after:bg-cover">
          <div className="w-8/12 flex flex-col items-center gap-y-6 text-center md:w-11/12">
            <motion.h3 className="text-white text-4xl slg:text-3xl md:text-2xl sm:text-xl xsm:text-lg">
              Get Started
            </motion.h3>
            <h1 className="text-white text-6xl xl:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl">
              Great Customers Are Using The Confectionery Shop
            </h1>
            <div className="bg-[#ebebeb] rounded-full px-4 py-2 w-9/12 flex justify-between mt-8 md:w-11/12 slg:w-10/12 sm:flex-col sm:items-center sm:bg-transparent sm:gap-y-4 sm:w-full  sm:rounded-none sm:px-0">
              <input
                type="text"
                className="w-9/12 outline-none pl-4 bg-transparent placeholder:text-black text-lg sm:bg-[#ebebeb] sm:h-14 sm:w-full sm:rounded-full xsm:text-base"
                placeholder="Enter your Email "
              />
              <button className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly  hover:bg-black hover:text-white duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
