import { useNavigate } from "react-router-dom";
import CategoryImg2_1 from "../../assets/Images/Category-img2_1.jpg";
import CategoryImg2_2 from "../../assets/Images/Category-img2_2.jpg";
import CategoryImg4 from "../../assets/Images/Category-img4.jpg";
import CategoryImg4_1 from "../../assets/Images/Category-img4_1.jpg";
const Category = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 my-5">
      <div className="text-center mb-5 py-3">
        <h3 className="text-4xl font-pacifico text-[#f4952c] font-medium md:text-3xl sm:text-2xl">
          Which One
        </h3>
        <h2 className="text-5xl font-medium font-pacifico md:text-4xl sm:text-3xl">
          Shop By Category
        </h2>
      </div>
      {/* Here i Used a Custom Class For Grid-templates-section */}
      <div className="my-3 mx-auto w-95 grid grid-columns_1fr_330px xl:grid-columns_1fr_300px gap-8 lg:grid-columns grid-flow-row auto-rows-[minmax(0,_409px)] md:grid-cols-1 xxl:w-[1700px]">
        <div className="bg-red-400 bg-categoryCardImg1 flex items-center justify-end rounded-2xl col-span-2 md:col-span-1 hover:shadow-2xl bg-cover bg-no-repeat">
          <div className="flex flex-col gap-y-3 xl:w-max xl:px-5 w-5/12 md:w-max ">
            <h4 className="font-pacifico text-3xl text-white italic">Coffee</h4>
            <h3 className=" text-3xl text-white font-medium font-nunito">
              Local Donuts
            </h3>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button
              onClick={() => navigate("/Shop")}
              className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 mt-3"
            >
              Browse Shop
            </button>
          </div>
        </div>
        <div className="bg-[#f2f1ec]   rounded-2xl grid place-items-center relative hover:shadow-2xl">
          <img
            src={CategoryImg2_2}
            alt=""
            className="absolute top-[15%] left-2/4"
          />
          <img src={CategoryImg2_1} alt="" />
        </div>
        <div className="bg-categoryCardImg3 bg-cover bg-no-repeat row-span-2 md:row-span-1 hover:shadow-2xl p-14 rounded-2xl">
          <div className="flex flex-col gap-y-3 mx-auto  ">
            <h4 className="font-nunito text-3xl text-white italic">
              Breakfast
            </h4>
            <h3 className=" text-3xl text-white font-medium font-nunito">
              Chocolate Cake
            </h3>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button
              onClick={() => navigate("/Shop")}
              className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 mt-3"
            >
              Browse Shop
            </button>
          </div>
        </div>

        <div className="bg-[#f2f1ec] rounded-2xl flex items-center justify-center  relative hover:shadow-2xl">
          <img
            src={CategoryImg4}
            alt=""
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
          <img src={CategoryImg4_1} alt="" className="z-10" />
        </div>

        <div className="bg-white bg-categoryCardImg5 bg-no-repeat bg-right flex items-center pl-9 col-span-2 md:col-span-1 md:bg-bottom md:bg-cover   md:py-4 hover:shadow-2xl rounded-2xl border-[3px] border-gray-100">
          <div className="flex flex-col gap-y-3 ">
            <h4 className="font-nunito text-3xl text-[#f4952c] italic">
              Which One
            </h4>
            <h3 className=" text-3xl text-black font-medium font-nunito">
              Chocolate Cake
            </h3>
            <p className="w-11/12 ">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button
              onClick={() => navigate("/Shop")}
              className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 mt-3"
            >
              Browse Shop
            </button>
          </div>
          <div className="">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
