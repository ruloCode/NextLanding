import React from "react";

const layout = ({ children }) => {
  return (
    <main className="h-full w-full bg-[#111827] overflow-auto ">
      <div className="">{children}</div>
    </main>
  );
};

export default layout;
