import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate("");
  return (
    <>
      <div className="h-14"></div>
      <div className=" py-10 mt-6 sm:py-5 ">
        {/* //grid-flow-row auto-rows-[minmax(0,_716px)] */}
        <div
          className="w-95 mx-auto grid grid-cols-3 gap-10 xl:gap-x-4 slg:grid-cols-1
        grid-rows-[minmax(716px,_1fr)] 
         slg:grid-rows-[350px_minmax(600px,_1fr)] xxl:w-[1700px]"
        >
          <div className="bg-detailsBg1 rounded-3xl  bg-no-repeat bg-cover bg-center pt-14 ">
            <div className="w-7/12 mx-auto flex flex-col gap-y-4 sm:w-full sm:px-4 ">
              <h4 className="text-white text-3xl">Cup Cake</h4>
              <h3 className="text-white text-4xl sm:text-3xl break-words">
                Unique
                <span> Sweets </span>
                For Lovers
              </h3>
              <button
                onClick={() => navigate("/Shop")}
                className="bg-[#f4952c] h-14 w-44 sm:h-12 sm:w-40 sm:text-sm  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 mt-3"
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="bg-detailsBg2 rounded-3xl col-span-2 bg-no-repeat bg-cover bg-center pl-14 sm:pl-4 flex items-center slg:col-span-1 ">
            <div className=" flex flex-col gap-y-6 w-6/12 sm:w-10/12 ">
              <h4 className="text-white text-3xl">Cup Cake</h4>
              <h3 className="text-white text-4xl sm:text-3xl">
                Raspberry
                <span> French </span>
                Macaron Cake
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                odio.
              </p>
              <button
                onClick={() => navigate("/Shop")}
                className="bg-[#f4952c]  h-14 w-44 sm:h-12 sm:w-40 sm:text-sm  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 mt-3"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
