const InputFeild = (props) => {
  return (
    <div className="w-9/12 md:w-full">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type="text"
        id={props.id}
        className="border-2 border-slate-300 rounded-md py-2 px-3 outline-none w-full my-3"
        placeholder={`Enter ${props.title}`}
      />
    </div>
  );
};

export default InputFeild;
