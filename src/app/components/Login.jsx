import React from "react";

const Login = () => {
  return (
    <div className="w-3/12 shadow-[0_3px_7px_rgba(0,0,0,0.5)] p-10 flex flex-col gap-8 bg-[#161111ee] xl:bg-[#FFFFFF0D] z-50 min-w-[350px] mt-12">
      <h1 className="uppercase text-7xl text-[#FFFFFF80] font-semibold mb-2">
        Login
      </h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          className="py-2 px-3 border-[1px] bg-[#00000080] text-xl rounded-lg text-[#FFFFFF80] placeholder-[#FFFFFF80]"
        />
        <input
          type="Password"
          placeholder="Password"
          className="py-2 px-3 border-[1px] text-xl bg-[#00000080]  rounded-lg text-[#FFFFFF80] placeholder-[#FFFFFF80]"
        />
        <button className="uppercase rounded-lg py-3 px-4 bg-[#FFFFFF1A] text-white w-2/5 font-semibold text-2xl">
          Login
        </button>
      </div>

      <div className="flex items-center">
        <hr className="flex-grow border-[1px] border-[#FFFFFF80]" />
        <span className="uppercase px-2 font-semibold text-2xl text-[#FFFFFFA1]">
          or
        </span>
        <hr className="flex-grow border-[1px] border-[#FFFFFF80]" />
      </div>

      <div className="flex justify-around w-1/2 mx-auto my-4">
        <a href="#" className="">
          <img src="/image 1.png" alt="google" />
        </a>
        <a href="#" className="">
          <img src="/image 2.png" alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Login;
