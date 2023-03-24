import React from "react";

const LittleComponent = ({ icon, text }) => {
  return (
    <div className="text-center">
      <div className="bg-red-500 rounded-full p-6 inline-block mx-6">
        {icon}
      </div>
      <div className="text-black uppercase text-xl mt-2">{text}</div>
    </div>
  );
};

export default LittleComponent;