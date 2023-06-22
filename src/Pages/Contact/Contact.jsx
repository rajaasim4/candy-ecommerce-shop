import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
const Contact = () => {
  return (
    <>
      <div className="py-3 my-5">
        <div className="w-95 mx-auto flex justify-center slg:flex-col-reverse slg:gap-y-7 xxl:w-[1700px]">
          <div className="w-1/2 slg:w-full slg:text-center">
            <h3 className="text-4xl md:text-2xl">Contact With Us</h3>
            <h1 className="text-5xl my-6 font-semibold leading-normal slg:leading-none md:text-4xl font-pacifico">
              Don’t Google <br /> Design Questions
            </h1>
            <p className="">
              Your email address will not be published. Required fields are
              marked*
            </p>
            {/* bg-[#35cd8c] */}
            <div className="mt-5  p-4 rounded-l-md slg:rounded-lg slg:py-10 slg:px-4">
              <form action="">
                <div className=" flex gap-x-4 sm:flex-col sm:gap-y-5">
                  <input
                    type="text"
                    className=" pl-7 bg-[#f2f1ec] outline-none h-14 rounded-full w-full placeholder:text-[#605f5f]"
                    placeholder="Your Name  *"
                  />
                  <input
                    type="text"
                    className=" pl-7 bg-[#f2f1ec] outline-none h-14 rounded-full w-full placeholder:text-[#605f5f]"
                    placeholder="Your Email  *"
                  />
                </div>
                <div className=" mt-6">
                  <textarea
                    name=""
                    className="w-full p-5 bg-[#f2f1ec] rounded-2xl outline-none resize-none placeholder:text-[#605f5f]"
                    id=""
                    placeholder="Question * "
                    rows="10"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button className="bg-[#f4952c] h-14 w-44  text-md rounded-full text-white  flex items-center justify-evenly  hover:bg-black hover:text-white duration-300 mt-3">
                    Send A Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 relative slg:w-full slg:h-[400px] ">
            {/* <div className="bg-[#35cd8c] absolute bottom-0 left-0 h-[465px] w-full rounded-r-md -z-10 slg:hidden"></div> */}
            <div
              className="
            px-4 w-full h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3852.579670620331!2d-105.0711858528993!3d39.76755902350693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1samerica%20resturants!5e0!3m2!1sen!2s!4v1685884721053!5m2!1sen!2s"
                className="w-full h-full rounded-xl shadow-2xl "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Contact;
