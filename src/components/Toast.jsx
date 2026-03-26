import React, { useEffect, useState } from "react";
import { Check, AlertCircle, Info } from "lucide-react";

function Toast({
  message,
  type = "error",
  onClose,
  autoClose = 3000,
  children,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const baseStyles =
    "flex items-center gap-3 p-3 rounded-lg shadow-lg animate-fadeIn max-w-sm mx-auto";

  const typeStyles = {
    success: "bg-white text-black ",
    error: "bg-white text-red-800 ",
    warning: "bg-white text-black ",
    info: "bg-blue-100 text-blue-800 ",
  };

  const icons = {
    success: <Check size={20} color="white" />,
    error: <AlertCircle size={20} color="white" />,
    warning: <AlertCircle size={20} color="white" strokeWidth={1.5} />,
    info: <Info size={20} color="white" />,
  };

  return children ? (
    <div>{children}</div>
  ) : (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      <span
        className={`shrink-0 ${type === "success" ? "bg-purple-500" : type === "error" ? "bg-red-500" : type === "warning" ? "bg-red-500" : "bg-blue-500"} rounded-full`}
      >
        {icons[type]}
      </span>
      <span className="text-[12px] lg:text-[14px] font-medium">{message}</span>
    </div>
  );
}

export default Toast;
