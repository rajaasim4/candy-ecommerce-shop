import { useNavigate } from "react-router-dom";
import CookieImg from "../../assets/Images/Hero-cookie.png";
import HeroImg from "../../assets/Images/Hero-img.png";
import HeroImg2 from "../../assets/Images/Hero-img2.png";
import HeroMainImg from "../../assets/Images/Hero-main.png";
import HeroParallax1 from "../../assets/Images/Hero-parallax1.png";
import HeroParallax2 from "../../assets/Images/Hero-parallax2.png";
import { Parallax } from "react-scroll-parallax";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="w-95 bg-[#f2f1ec] min-h-[700px] mx-auto rounded-2xl flex justify-center items-center relative overflow-hidden bg px-4 slg:flex-col slg:gap-y-8 py-6 xxl:w-[1700px]">
        <Parallax
          speed={4}
          translateY={[10, -10]}
          className="absolute -top-[30%] -right-[13%] translate-x-11 z-10"
        >
          <img src={HeroParallax1} alt="" />
        </Parallax>
        <Parallax
          speed={2}
          rotate={[-60, 60]}
          className="absolute -bottom-[16%] right-[15%]  z-10 slg:z-40 sm:hidden"
        >
          <img
            src={HeroParallax2}
            alt=""
            // className="absolute -bottom-[16%] right-[15%]  z-10 slg:z-40 sm:hidden"
          />
        </Parallax>
        <img
          src={HeroImg}
          alt=""
          className="absolute top-0 right-1/3  z-10 slg:left-0 md:w-6/12"
        />
        <img
          src={HeroImg2}
          alt=""
          className="absolute -bottom-[16%] right-2/5  z-10  slg:left-0"
        />
        <div className="w-1/2 z-20 flex flex-col gap-y-10 slg:w-10/12 sm:w-11/12">
          <h2 className="font-pacifico   text-[#f4952c] text-5xl  slg:text-4xl slg:text-center sm:text-3xl">
            Confectionery
          </h2>
          <h1 className="text-6xl text-[#0d0d0d] font-medium font-pacifico  slg:text-5xl slg:text-center sm:text-4xl">
            Make Your Baking Better Tasting
          </h1>
          <div className="flex items-center xsm:flex-col slg:mx-auto">
            <div className="">
              <img
                src={CookieImg}
                alt=""
                className="sm:w-32 sm:h-32 sm:object-contain xsm:w-full xsm:h-full"
              />
            </div>
            <div className="xsm:text-center">
              <h3 className="text-2xl font-semibold">Chocolate Cake</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="flex gap-x-6 flex-wrap sm:items-center slg:mx-auto sm:gap-y-5 sm:justify-center">
            <button
              onClick={() => navigate("/Shop")}
              className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly relative hover:bg-black hover:text-white duration-300 sm:h-12"
            >
              Shop Now
            </button>

            <button
              onClick={() => navigate("/Shop")}
              className="bg-[#000] h-14 w-44  text-md rounded-full text-white flex items-center justify-evenly relative hover:bg-[#f4952c]  duration-300 sm:h-12"
            >
              Custom Order
            </button>
          </div>
        </div>
        <div className="2-1/2 z-20">
          <Parallax speed={3} scale={[0.7, 1.01]}>
            <img
              src={HeroMainImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;
