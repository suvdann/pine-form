export const Input = ({
  label,
  placeholder,
  type,
  changeHandler,
  name,
  value,
  classname,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <div className="">
        <input
          name={name}
          onChange={changeHandler}
          type={type}
          placeholder={placeholder}
          value={value}
          className={`{outline-none w-full h-full rounded-[8px] border-[1px] border-[#CBD5E1] p-2 ${classname}`}
        />
      </div>
    </div>
  );
};
