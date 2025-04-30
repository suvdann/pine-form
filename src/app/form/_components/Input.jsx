export const Input = ({ label, placeholder, type, changeHandler, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <div className="rounded-[8px] border-[1px] border-[#CBD5E1] p-2 ">
        <input
          name={name}
          onChange={changeHandler}
          type={type}
          placeholder={placeholder}
          className="outline-none w-full h-full"
        />
      </div>
    </div>
  );
};
