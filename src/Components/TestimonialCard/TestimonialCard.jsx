import { AiTwotoneStar } from "react-icons/all";
import client from "../../assets/Images/client.png";
const TestimonialCard = (props) => {
  return (
    <div className=" min-h-[436px] group hover:bg-black border-gray-200 border shadow-md duration-300  w-80 flex flex-col items-center rounded-3xl relative sm:w-full">
      <img src={client} alt="" className="-translate-y-14" />
      <div className="flex flex-col items-center gap-y-5">
        <div className="text-center">
          <h4 className=" group-hover:text-white duration-300 text-2xl font-medium">
            {props.customerName}
          </h4>
          <span className=" group-hover:text-white duration-300 text-lg">
            {props.company}
          </span>
        </div>
        <p className="text-center w-8/12 group-hover:text-white duration-300">
          When, while lovely valley teems with vapour around meand meridian sun
          strikes
        </p>
        <div className="flex">
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          <span className="text-[#f4952c] text-xl">
            <AiTwotoneStar />
          </span>
          {/* <span className="    text-xl">
            <CiStar />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
