import React from "react";
import Login from "./app/components/Login";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login />
      <div className="bg-gradient-to-b from-[#000AFF] to-[#0235B900] absolute -bottom-32 -left-48 w-[750px] h-[750px] rounded-[113px] skew-y-[14deg] skew-x-6 -z-10"></div>
      <div className="bg-gradient-to-b from-[#0235B900] to-[#FF0000] absolute -top-32 -right-48 w-[750px] h-[750px] rounded-[113px] skew-y-[14deg] skew-x-6 -z-10"></div>
      <div className="bg-[#27B902CC] absolute w-[116px] h-[121px] top-20 left-36 polygon1 -z-10"></div>
      <div className="bg-[#27B902CC] absolute w-[116px] h-[121px] bottom-20 right-36 polygon2 -z-10"></div>
    </div>
  );
};

export default App;
