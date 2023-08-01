import * as React from "react"
import { Icon } from '@iconify-icon/react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(true);

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const inputType = showPassword ? "text" : type;

    return (
    <div className="relative">
        <input
          type={inputType}
          className={
            "flex h-10 w-full rounded-xl outline-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }
          ref={ref}
          {...props}
          
        />
        {type === "password" && (
            <button className="absolute top-[55%] -translate-y-1/2 right-3 border-none bg-transparent cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? 
            <Icon icon="mdi:eye" width={"22px"}
            className="text-GRAY_600"/> 
            : 
            <Icon icon="mdi:eye-off" width={"22px"} className="text-GRAY_600"/>
            }
            </button>
        )}
    </div>
    )
  }
)
Input.displayName = "Input"

export default Input;
