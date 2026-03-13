import React from "react";

function Toast({ children, className }) {
  return (
    <div
      className={`${className} max-w-95 text-center p-2 lg:p-3 rounded-[10px]`}
    >
      {children}
    </div>
  );
}

export default Toast;
