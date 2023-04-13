function Button({ children, classname, ...rest }) {
  return (
    <div
      className={`bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-[194px] h-[64px] text-white flex justify-center items-center rounded-md font-bold ${classname}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Button;
