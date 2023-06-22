import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
} from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="w-95 mx-auto grid grid-cols-4 grid-rows-1 py-5 md:grid-cols-3 sm:grid-cols-1 sm:gap-y-7 xxl:w-[1700px] ">
          <div className="sm:flex sm:justify-center">
            <img src={Logo} alt="" />
          </div>
          <div className="sm:text-center">
            <h5 className="text-2xl ">Contact</h5>
            <address className="not-italic ">
              Info@yourdomain.com <br /> +1 403-253-7717
            </address>
          </div>
          <div className="sm:text-center">
            <h5 className="text-2xl ">Address</h5>
            <address className="not-italic ">
              123 Ave, Lorem City, Site Country, the World
            </address>
          </div>
          <div className="md:col-span-3  sm:col-span-1 md:mt-4">
            <h5 className="text-2xl md:text-center ">Social</h5>
            <div className="flex gap-x-3 flex-wrap md:justify-center md:mt-4 ">
              <span className="text-3xl cursor-pointer p-2 hover:bg-[#f4952c] hover:text-white duration-300 rounded-full">
                <CiFacebook />
              </span>
              <span className="text-3xl cursor-pointer p-2 hover:bg-[#f4952c] hover:text-white duration-300 rounded-full">
                <CiInstagram />
              </span>
              <span className="text-3xl cursor-pointer p-2 hover:bg-[#f4952c] hover:text-white duration-300 rounded-full">
                <CiTwitter />
              </span>
              <span className="text-3xl cursor-pointer p-2 hover:bg-[#f4952c] hover:text-white duration-300 rounded-full">
                <CiLinkedin />
              </span>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">
          Copyright &copy; {new Date().getFullYear()} Candy. All Rights are
          Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
