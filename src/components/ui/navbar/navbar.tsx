import { cn } from "@/lib/utils";
import {} from "@radix-ui/react-context";
import "./styles.css";
import React, { HTMLAttributes, ReactNode } from "react";

export const Navbar = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={` h-[60px] w-full rounded-xl sticky top-0 z-10 p-2 ${className}`} {...rest}>
      <div
        className={`h-full shadow-xl rounded-xl w-full bg-[--color-2] relative flex flex-row ${className}`}
      >
        <div className="absolute w-1/4 shadow-xl rounded-r-xl h-full bg-gray-600 right-0">
        </div>
        {children}
      </div>
    </nav>
  );
};

export const UserInformation = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`absolute h-full text-white flex flex-row items-center right-0 ${className}`}
      {...rest}
    >
      <div className="h-full flex flex-row">{children}</div>
    </div>
  );
};

export const LogoPart = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`h-full px-2 flex items-center right-0 ${className}`}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};

export const UserName = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("items-center flex", className)} {...rest}>
      <div>{children}</div>
    </span>
  );
};

export const Logo = ({
  src,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} alt="logo" width={40} height={40} {...rest} />;
};

export const AvatarPlace = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn("flex justify-center items-center", className)}
    />
  );
};
