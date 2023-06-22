import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import timelineImg1 from "../../assets/Images/aboutus-timelin-img1.jpg";
import timelineImg2 from "../../assets/Images/aboutus-timelin-img2.jpg";
const About = () => {
  return (
    <>
      <div className="py-10 my-5">
        <div className="text-center">
          <h3 className="text-[#f4952c] text-3xl  font-pacifico">About us</h3>
          <h2 className="text-4xl font-semibold  font-pacifico">Our Story</h2>

          <div className=" w-95 mx-auto mt-16  relative after:contents-[''] after:absolute after:w-[3px] after:bg-orange-400 after:h-full after:left-1/2 after:top-0 lg:after:left-0">
            <div className="flex justify-between lg:flex-col lg:gap-y-5">
              <div className="w-1/2 lg:w-full lg:flex lg:justify-center ">
                <img
                  src={timelineImg1}
                  alt=""
                  className="rounded-md w-11/12 object-cover"
                />
              </div>
              <div className="w-1/2 lg:min-h-[300px]  lg:w-full relative before:absolute before:contents-[''] before:w-4 before:h-4 before:bg-[#f4952c] before:-left-2 before:rounded-full before:top-[48.5%] after:absolute after:contents-[] after:w-20 after:h-[3px] after:bg-[#f4952c] after:left-0 after:top-1/2  flex items-center  justify-around sm:after:hidden  ">
                <div className=" w-4/12 pl-4 sm:w-max ">
                  <h3 className="text-4xl font-semibold text-[#f4952c] text-right sm:text-3xl  ">
                    1978
                  </h3>
                </div>
                <div
                  className="w-8/12 lg:w-7/12 sm:w-9/12
                "
                >
                  <h2 className="text-4xl font-semibold leading-normal xl:text-3xl sm:text-2xl font-pacifico">
                    Bakers Delight.
                    <br /> Your Local Baker.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos, delectus?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between lg:flex-col-reverse">
              <div className="w-1/2 lg:min-h-[300px]  flex items-center justify-around  relative lg:w-full lg:flex-row-reverse  before:absolute before:contents-[''] before:w-4 before:h-4 before:bg-[#f4952c] before:-right-2 before:rounded-full before:top-[48.5%] after:absolute after:contents-[''] after:w-20 after:h-[3px] after:bg-[#f4952c] after:right-0 after:top-1/2 lg:after:-left-1 lg:before:-left-2 sm:after:hidden ">
                <div className="w-8/12 lg:w-7/12 sm:w-9/12  ">
                  <h2 className="text-4xl font-semibold leading-normal xl:text-3xl  sm:text-2xl font-pacifico ">
                    Pastry Is Different <br /> from Cooking.
                  </h2>
                  <p className="sm:text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos laborum consectetur fugiat autem quia ad quae
                    natus itaque aut maiores.
                  </p>
                </div>
                <div className="relative  w-4/12 sm:w-max  ">
                  <h3 className="text-4xl font-semibold text-left text-[#f4952c] sm:text-3xl">
                    1996
                  </h3>
                </div>
              </div>
              <div className="w-1/2 flex justify-end lg:w-full lg:flex lg:justify-center ">
                <img
                  src={timelineImg2}
                  alt=""
                  className="rounded-2xl w-11/12 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default About;
