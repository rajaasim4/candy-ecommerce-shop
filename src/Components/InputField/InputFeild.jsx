const InputFeild = ({ id, title, field, form }) => {
  const error = form.errors[field.name];
  const touched = form.touched[field.name];

  return (
    <div className="w-9/12 md:w-full">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        {...field}
        className={`border-2 rounded-md py-2 px-3 outline-none w-full my-3 ${
          error && touched ? "border-red-500" : "border-slate-300"
        }`}
        placeholder={`Enter ${title}`}
      />
      {error && touched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default InputFeild;
