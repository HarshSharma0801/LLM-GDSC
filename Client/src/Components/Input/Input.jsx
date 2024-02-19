const Input = () => {
  return (
    <>
     <div className="w-screen flex justify-center items-center">
     <div className="w-[840px] rounded-[158px] bg-[#1E1F20] md:p-1 md:pr-5 justify-start md:justify-between flex items-center ">
        <input
          type="text"
          placeholder="Ask your questions regarding gdsc here..."
          className="md:flex-1  md:text-[16px] text-white p-[10px] md:max-w-[100%] max-w-[80%] text-[20px] md:text-[1.3rem] md:p-2 outline-none rounded-[158px] bg-[#1E1F20]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
     </div>
     
    </>
  );
};

export default Input;
