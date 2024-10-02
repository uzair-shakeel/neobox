import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-[17.5px] w-full pt-[48px] bg-gray-50">
      <span
        className="h-[56px] w-[56px] rounded-[5.6px] border-[0.7px] border-[#FFFFFF4D] flex items-center justify-center"
        style={{
          boxShadow: `
              0px 0px 0px 0.7px #DFDFDF,
              0px 1.4px 3.5px -0.7px #292C3280,
              inset 0px -2.8px 0px 0px #DFDFDFB2
            `,
        }}
      >
        <img src="/neobox-icon.png" className="w-[40.37px] h-[40.37px]" />
      </span>
      <h1 className="text-[32px] font-[500] text-[#09090B]">Neobox</h1>
    </div>
  );
};

export default Header;
