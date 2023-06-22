import { useRef } from "react";
const CategorySelector = (props) => {
  // let id = props.id;
  // id = useRef();
  // const ClickSelectedInput = (id) => {
  //   id.current.click();
  // };
  return (
    <>
      <div className="flex items-center gap-x-5 my-3">
        <input
          type="checkbox"
          name=""
          id={props.id}
          value={props.id}
          className="w-5 h-5 cursor-pointer"
          // ref={id}
          onClick={() => props.FilterByCategory(props.id)}
        />
        <label
          htmlFor={props.id}
          className="text-lg font-medium cursor-pointer"
          // onClick={() => ClickSelectedInput(props.id)}
        >
          {props.title}
        </label>
      </div>
    </>
  );
};

export default CategorySelector;
